import React, { useRef, useEffect, useState } from "react"
import { useColorMode, LIGHT_MODE } from "react-darkmode-hook"
import "./WebGLBanner.css"
import { getRandomNumberBetween } from "../../utils"

const WebGLBanner = () => {
  const canvasRef = useRef(null)
  const { colorMode } = useColorMode()
  const [currentMode, setMode] = useState(colorMode)

  useEffect(() => {
    // Define the callback function to handle attribute changes
    const handleAttributeChange = (mutationsList) => {
      for (let mutation of mutationsList) {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "color-mode"
        ) {
          setMode(document.documentElement.getAttribute("color-mode"))
        }
      }
    }

    // Create a MutationObserver instance and pass the callback function
    const observer = new MutationObserver(handleAttributeChange)

    // Set up the observer to watch for attribute changes on documentElement
    observer.observe(document.documentElement, {
      attributes: true, // Listen for attribute changes
    })

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");

    if (!gl) {
      console.error("Unable to initialize WebGL. Your browser may not support it.");
      return;
    }

    const vsSource = `
      attribute vec2 aPosition;
      uniform vec2 uStart;
      uniform vec2 uEnd;
      uniform float uProgress;
      
      void main() {
          vec2 position = mix(uStart, uEnd, aPosition.x * uProgress);
          gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision mediump float;
      uniform vec3 uColor;
      
      void main() {
          gl_FragColor = vec4(uColor, 1.0);
      }
    `;

    function createShader(gl, type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    }

    const program = gl.createProgram();
    gl.attachShader(program, createShader(gl, gl.VERTEX_SHADER, vsSource));
    gl.attachShader(program, createShader(gl, gl.FRAGMENT_SHADER, fsSource));
    gl.linkProgram(program);

    const numLines = getRandomNumberBetween(18,32); // 10 to 15 lines
    const colorPalette = currentMode === LIGHT_MODE
      ? [[1, 0.3, 0.2], [1, 0.5, 0.8], [0.1, 0.6, 0.9]]
      : [[0, 0.7, 0.8], [0, 0.5, 0.2], [0.6, 0.8, 0.8]];

    function getRandomEdgePoint() {
      const edge = Math.floor(Math.random() * 4);
      switch (edge) {
        case 0: return [-1, Math.random() * 2 - 1]; // Left edge
        case 1: return [1, Math.random() * 2 - 1];  // Right edge
        case 2: return [Math.random() * 2 - 1, -1]; // Bottom edge
        case 3: return [Math.random() * 2 - 1, 1];  // Top edge
        default: return [0, 0];
      }
    }

    function getRandomEdgePointExcluding(edge) {
      let newEdge;
      do {
        newEdge = Math.floor(Math.random() * 4);
      } while (newEdge === edge);

      return getRandomEdgePoint();
    }

    function createLine() {
      const start = getRandomEdgePoint();
      return {
        start,
        end: getRandomEdgePointExcluding(
          start[0] === -1 ? 0 : start[0] === 1 ? 1 : start[1] === -1 ? 2 : 3
        ),
        color: colorPalette[Math.floor(Math.random() * colorPalette.length)],
        weight: Math.random() * 9 + 1,
        speed: Math.random() * 0.01 + 0.005,
        progress: 0,
        state: 'drawing',
        delay: 0,
      };
    }

    let lines = Array(numLines).fill().map(createLine);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0]), gl.STATIC_DRAW);

    const aPosition = gl.getAttribLocation(program, "aPosition");
    const uStart = gl.getUniformLocation(program, "uStart");
    const uEnd = gl.getUniformLocation(program, "uEnd");
    const uProgress = gl.getUniformLocation(program, "uProgress");
    const uColor = gl.getUniformLocation(program, "uColor");

    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    function render() {
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0.0, 0.0, 0.0, 0.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(program);

      lines.forEach((line, index) => {
        gl.uniform2fv(uStart, line.start);
        gl.uniform2fv(uEnd, line.end);
        gl.uniform1f(uProgress, line.progress);
        gl.uniform3fv(uColor, line.color);

        gl.lineWidth(Math.min(line.weight, gl.getParameter(gl.ALIASED_LINE_WIDTH_RANGE)[1]));
        gl.drawArrays(gl.LINES, 0, 2);

        switch (line.state) {
          case 'drawing':
            line.progress = Math.min(line.progress + line.speed, 1);
            if (line.progress === 1) {
              line.state = 'waiting';
              line.delay = getRandomNumberBetween(1000, 5000); // Wait 1-3 seconds
            }
            break;

          case 'waiting':
            line.delay -= 16; // Assume 60fps, so each frame is about 16ms
            if (line.delay <= 0) {
              line.state = 'unDrawing';
            }
            break;

          case 'unDrawing':
            line.progress = Math.max(line.progress - line.speed, 0);
            if (line.progress === 0) {
              lines[index] = createLine(); // Replace with a new line
            }
            break;
        }
      });

      requestAnimationFrame(render);
    }

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    }

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    render();

    // Cleanup function
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [currentMode]);


  return (
    <>
      <div className="Banner-overlay"></div>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100vh" }} />
    </>
  )
}

export default WebGLBanner
