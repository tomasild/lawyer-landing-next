"use client"; 

import { useEffect, useRef } from "react";

const NeuralNoiseCanvas = () => {
  const canvasRef = useRef(null);
  const pointer = useRef({ x: 0, y: 0, tX: 0, tY: 0 });
  const glRef = useRef(null);
  const uniformsRef = useRef(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    const gl = initShader(canvasEl);

    glRef.current = gl;
    setupEvents(canvasEl, gl);

    resizeCanvas(canvasEl);
    window.addEventListener("resize", () => resizeCanvas(canvasEl));

    render(gl);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", () => resizeCanvas(canvasEl));
    };
  }, []);

  function initShader(canvasEl) {
    const vsSource = document.getElementById("vertShader").innerHTML;
    const fsSource = document.getElementById("fragShader").innerHTML;

    const gl =
      canvasEl.getContext("webgl") || canvasEl.getContext("experimental-webgl");

    if (!gl) {
      alert("WebGL is not supported by your browser.");
    }

    function createShader(gl, sourceCode, type) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, sourceCode);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(
          "An error occurred compiling the shaders: " +
            gl.getShaderInfoLog(shader)
        );
        gl.deleteShader(shader);
        return null;
      }

      return shader;
    }

    const vertexShader = createShader(gl, vsSource, gl.VERTEX_SHADER);
    const fragmentShader = createShader(gl, fsSource, gl.FRAGMENT_SHADER);

    function createShaderProgram(gl, vertexShader, fragmentShader) {
      const program = gl.createProgram();
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);

      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error(
          "Unable to initialize the shader program: " +
            gl.getProgramInfoLog(program)
        );
        return null;
      }

      return program;
    }

    const shaderProgram = createShaderProgram(gl, vertexShader, fragmentShader);
    uniformsRef.current = getUniforms(shaderProgram);

    function getUniforms(program) {
      let uniforms = [];
      let uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
      for (let i = 0; i < uniformCount; i++) {
        let uniformName = gl.getActiveUniform(program, i).name;
        uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
      }
      return uniforms;
    }

    const vertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);

    const vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    gl.useProgram(shaderProgram);

    const positionLocation = gl.getAttribLocation(shaderProgram, "a_position");
    gl.enableVertexAttribArray(positionLocation);

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    return gl;
  }

  function render(gl) {
    const currentTime = performance.now();

    pointer.current.x += (pointer.current.tX - pointer.current.x) * 0.5;
    pointer.current.y += (pointer.current.tY - pointer.current.y) * 0.5;

    gl.uniform1f(uniformsRef.current.u_time, currentTime);
    gl.uniform2f(
      uniformsRef.current.u_pointer_position,
      pointer.current.x / window.innerWidth,
      1 - pointer.current.y / window.innerHeight
    );
    gl.uniform1f(
      uniformsRef.current.u_scroll_progress,
      window["pageYOffset"] / (2 * window.innerHeight)
    );

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(() => render(gl));
  }

  function resizeCanvas(canvasEl) {
    const devicePixelRatio = Math.min(window.devicePixelRatio, 2);
    canvasEl.width = window.innerWidth * devicePixelRatio;
    canvasEl.height = window.innerHeight * devicePixelRatio;
    glRef.current.uniform1f(
      uniformsRef.current.u_ratio,
      canvasEl.width / canvasEl.height
    );
    glRef.current.viewport(0, 0, canvasEl.width, canvasEl.height);
  }

  function setupEvents(canvasEl, gl) {
    window.addEventListener("pointermove", (e) => {
      updateMousePosition(e.clientX, e.clientY);
    });

    window.addEventListener("touchmove", (e) => {
      updateMousePosition(
        e.targetTouches[0].clientX,
        e.targetTouches[0].clientY
      );
    });

    window.addEventListener("click", (e) => {
      updateMousePosition(e.clientX, e.clientY);
    });

    function updateMousePosition(eX, eY) {
      pointer.current.tX = eX;
      pointer.current.tY = eY;
    }
  }

  return (
    <>
      <canvas id="neuro" ref={canvasRef}></canvas>

      {/* Shaders */}
      <script type="x-shader/x-fragment" id="vertShader">
        {`
          precision mediump float;

          varying vec2 vUv;
          attribute vec2 a_position;

          void main() {
            vUv = .5 * (a_position + 1.);
            gl_Position = vec4(a_position, 0.0, 1.0);
          }
        `}
      </script>

      <script type="x-shader/x-fragment" id="fragShader">
        {`
          precision mediump float;

          varying vec2 vUv;
          uniform float u_time;
          uniform float u_ratio;
          uniform vec2 u_pointer_position;
          uniform float u_scroll_progress;

          vec2 rotate(vec2 uv, float th) {
            return mat2(cos(th), sin(th), -sin(th), cos(th)) * uv;
          }

          float neuro_shape(vec2 uv, float t, float p) {
            vec2 sine_acc = vec2(0.);
            vec2 res = vec2(0.);
            float scale = 8.;

            for (int j = 0; j < 15; j++) {
              uv = rotate(uv, sin(t + float(j)) * 0.1); 
              sine_acc = rotate(sine_acc, sin(t + float(j))); 
              vec2 layer = uv * scale + float(j) + sine_acc - t;
              sine_acc += sin(layer);
              res += (.5 + .5 * cos(layer)) / scale;
              scale *= (1.2 - .07 * p);
            }
            return res.x + res.y;
          }

          vec3 getNeonPinkColor(float noise) {
            // Usando tonos rosados neón claros
            return mix(
              vec3(1.0, 0.8, 1.0),  // Rosado neón suave
              vec3(1.0, 0.5, 0.7),  // Rosado neón intermedio
              noise
            );
          }

          void main() {
            vec2 uv = .5 * vUv;
            uv.x *= u_ratio;

            vec2 pointer = vUv - u_pointer_position;
            pointer.x *= u_ratio;
            float p = clamp(length(pointer), 0., 1.);
            p = .5 * pow(1. - p, 2.);

            float t = .001 * u_time;
            vec3 color = vec3(0.);

            float noise = neuro_shape(uv, t, p);
            noise = 1.2 * pow(noise, 3.);
            noise += pow(noise, 10.);
            noise = max(.0, noise - .5);
            noise *= (1. - length(vUv - .5));

            color = getNeonPinkColor(noise);

            color = color * noise;

            gl_FragColor = vec4(color, 1.);
          }
        `}
      </script>
    </>
  );
};

export default NeuralNoiseCanvas;
