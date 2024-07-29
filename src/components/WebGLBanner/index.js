import React, { useRef, useEffect } from "react"
import { mat4 } from "./utils"
import "./WebGLBanner.css"

const vertexShaderSource = `
  attribute vec4 a_position;
  attribute vec4 a_color;
  uniform mat4 u_matrix;
  varying vec4 v_color;
  void main() {
    gl_Position = u_matrix * a_position;
    v_color = a_color;
  }
`

const fragmentShaderSource = `
  precision mediump float;
  varying vec4 v_color;
  void main() {
    gl_FragColor = v_color;
  }
`

function createShader(gl, type, source) {
  const shader = gl.createShader(type)
  gl.shaderSource(shader, source)
  gl.compileShader(shader)
  return shader
}

function createProgram(gl, vertexShader, fragmentShader) {
  const program = gl.createProgram()
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)
  return program
}

const WebGLBanner = () => {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const gl = canvas.getContext("webgl")

    if (!gl) {
      console.error("WebGL not supported")
      return
    }

    // Create shader program
    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
    const fragmentShader = createShader(
      gl,
      gl.FRAGMENT_SHADER,
      fragmentShaderSource
    )
    const program = createProgram(gl, vertexShader, fragmentShader)

    // Use the program
    gl.useProgram(program)

    // Get attribute and uniform locations
    const positionAttributeLocation = gl.getAttribLocation(
      program,
      "a_position"
    )
    const colorAttributeLocation = gl.getAttribLocation(program, "a_color")
    const matrixUniformLocation = gl.getUniformLocation(program, "u_matrix")

    // Create buffers
    const positionBuffer = gl.createBuffer()
    const colorBuffer = gl.createBuffer()

    // Enable attributes
    gl.enableVertexAttribArray(positionAttributeLocation)
    gl.enableVertexAttribArray(colorAttributeLocation)
    const elements = []
    const colors = [
      [0.9, 0.2, 0.5], // fuchsia
      [0.9, 0.1, 0.1], // Red
      // [0, 1, 0], // Green
      // [0, 0, 1], // Blue
      // [1, 1, 0], // Yellow
      [1, 0, 1], // Magenta
      // [0, 1, 1], // Cyan
      // [1, 0.5, 0.5], // Orange
      [0.5, 0, 1], // Purple
      // [0, 1, 0.5], // Lime
    ]

    // Increase the number of elements
    for (let i = 0; i < 50; i++) {
      const isLine = Math.random() > 0.4
      const color = colors[Math.floor(Math.random() * colors.length)]
      let positions

      if (isLine) {
        const length = Math.random() * 1000 + 0.5 // Increased max length
        positions = [-length / 2, 0, 0, length / 2, 0, 0]
      } else {
        const width = Math.random() * 2 + 0.1 // Increased max width
        const height = Math.random() * 1000 + 0.5 // Increased max height
        const topWidth = width * (Math.random() * 0.5 + 0.5)
        positions = [
          -width / 2,
          -height / 2,
          0,
          width / 2,
          -height / 2,
          0,
          topWidth / 2,
          height / 2,
          0,
          -topWidth / 2,
          height / 2,
          0,
        ]
      }

      elements.push({
        positions,
        color,
        rotation: [
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
        ],
        translation: [
          (Math.random() - 0.5) * 40, // Increased range
          (Math.random() - 0.5) * 30, // Increased range
          (Math.random() - 0.5) * 80, // Increased range
        ],
        speed: Math.random() * 1 + 0.005,
      })
    }

    function render(time) {
      time *= 0.0001

      gl.viewport(0, 0, gl.canvas.width, gl.canvas.height)
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)

      elements.forEach((element) => {
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
        gl.bufferData(
          gl.ARRAY_BUFFER,
          new Float32Array(element.positions),
          gl.STATIC_DRAW
        )
        gl.vertexAttribPointer(
          positionAttributeLocation,
          3,
          gl.FLOAT,
          false,
          0,
          0
        )

        const colorArray = new Float32Array((element.positions.length / 3) * 4)
        for (let i = 0; i < element.positions.length / 3; i++) {
          colorArray.set([...element.color, 1], i * 4)
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer)
        gl.bufferData(gl.ARRAY_BUFFER, colorArray, gl.STATIC_DRAW)
        gl.vertexAttribPointer(colorAttributeLocation, 4, gl.FLOAT, false, 0, 0)

        const aspect = gl.canvas.clientWidth / gl.canvas.clientHeight
        const matrix = mat4.create()
        mat4.perspective(matrix, Math.PI / 2.5, aspect, 0.1, 100) // Wider field of view
        mat4.translate(matrix, matrix, [0, 0, -30]) // Moved camera back

        const mouseInfluence = 0.0002
        mat4.rotateY(
          matrix,
          matrix,
          (mouseRef.current.x - gl.canvas.width / 2) * mouseInfluence
        )
        mat4.rotateX(
          matrix,
          matrix,
          (mouseRef.current.y - gl.canvas.height / 2) * mouseInfluence
        )

        mat4.translate(matrix, matrix, element.translation)
        mat4.rotateX(matrix, matrix, time * element.speed + element.rotation[0])
        mat4.rotateY(matrix, matrix, time * element.speed + element.rotation[1])
        mat4.rotateZ(matrix, matrix, time * element.speed + element.rotation[2])

        gl.uniformMatrix4fv(matrixUniformLocation, false, matrix)

        gl.drawArrays(
          element.positions.length === 6 ? gl.LINES : gl.TRIANGLE_FAN,
          0,
          element.positions.length / 3
        )
      })

      requestAnimationFrame(render)
    }

    requestAnimationFrame(render)

    const handleMouseMove = (event) => {
      mouseRef.current = { x: event.clientX, y: event.clientY }
    }

    window.addEventListener("mousemove", handleMouseMove)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      gl.viewport(0, 0, canvas.width, canvas.height)
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      <div className="Banner-overlay"></div>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100vh" }} />
    </>
  )
}

export default WebGLBanner