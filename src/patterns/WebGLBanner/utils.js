// Matrix operations
export const mat4 = {
  create: () => new Float32Array(16),
  perspective: (out, fovy, aspect, near, far) => {
    const f = 1.0 / Math.tan(fovy / 2)
    out[0] = f / aspect
    out[1] = 0
    out[2] = 0
    out[3] = 0
    out[4] = 0
    out[5] = f
    out[6] = 0
    out[7] = 0
    out[8] = 0
    out[9] = 0
    out[11] = -1
    out[12] = 0
    out[13] = 0
    out[15] = 0
    if (far != null && far !== Infinity) {
      const nf = 1 / (near - far)
      out[10] = (far + near) * nf
      out[14] = 2 * far * near * nf
    } else {
      out[10] = -1
      out[14] = -2 * near
    }
    return out
  },
  translate: (out, a, v) => {
    let x = v[0],
      y = v[1],
      z = v[2]
    out[12] = a[0] * x + a[4] * y + a[8] * z + a[12]
    out[13] = a[1] * x + a[5] * y + a[9] * z + a[13]
    out[14] = a[2] * x + a[6] * y + a[10] * z + a[14]
    out[15] = a[3] * x + a[7] * y + a[11] * z + a[15]
    return out
  },
  rotateX: (out, a, rad) => {
    let s = Math.sin(rad)
    let c = Math.cos(rad)
    let a10 = a[4]
    let a11 = a[5]
    let a12 = a[6]
    let a13 = a[7]
    let a20 = a[8]
    let a21 = a[9]
    let a22 = a[10]
    let a23 = a[11]
    out[4] = a10 * c + a20 * s
    out[5] = a11 * c + a21 * s
    out[6] = a12 * c + a22 * s
    out[7] = a13 * c + a23 * s
    out[8] = a20 * c - a10 * s
    out[9] = a21 * c - a11 * s
    out[10] = a22 * c - a12 * s
    out[11] = a23 * c - a13 * s
    return out
  },
  rotateY: (out, a, rad) => {
    let s = Math.sin(rad)
    let c = Math.cos(rad)
    let a00 = a[0]
    let a01 = a[1]
    let a02 = a[2]
    let a03 = a[3]
    let a20 = a[8]
    let a21 = a[9]
    let a22 = a[10]
    let a23 = a[11]
    out[0] = a00 * c - a20 * s
    out[1] = a01 * c - a21 * s
    out[2] = a02 * c - a22 * s
    out[3] = a03 * c - a23 * s
    out[8] = a00 * s + a20 * c
    out[9] = a01 * s + a21 * c
    out[10] = a02 * s + a22 * c
    out[11] = a03 * s + a23 * c
    return out
  },
  rotateZ: (out, a, rad) => {
    let s = Math.sin(rad)
    let c = Math.cos(rad)
    let a00 = a[0]
    let a01 = a[1]
    let a02 = a[2]
    let a03 = a[3]
    let a10 = a[4]
    let a11 = a[5]
    let a12 = a[6]
    let a13 = a[7]
    out[0] = a00 * c + a10 * s
    out[1] = a01 * c + a11 * s
    out[2] = a02 * c + a12 * s
    out[3] = a03 * c + a13 * s
    out[4] = a10 * c - a00 * s
    out[5] = a11 * c - a01 * s
    out[6] = a12 * c - a02 * s
    out[7] = a13 * c - a03 * s
    return out
  },
}