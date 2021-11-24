// 800px = 32 blocks
// 600px = 24 blocks

export const fieldsData = [
  // room - s1
  { type: 'wall', x: [48, 56], y: 48 }, // bottom
  { type: 'wall', x: 48, y: [35, 48] }, // left
  { type: 'wall', x: 55, y: [40, 48] }, // right

  // room - s2
  { type: 'wall', x: [30, 48], y: 42 }, // bottom
  { type: 'wall', x: [30, 46], y: 35 }, // top
  { type: 'wall', x: 47, y: 35 }, // top2

  // room - s3
  { type: 'wall', x: 47, y: 32 }, // bottom
  { type: 'wall', x: [37, 46], y: 32 }, // bottom2
  { type: 'wall', x: 47, y: [25, 32] }, // right
  { type: 'wall', x: 41, y: [25, 32] }, // left

  // room - s4
  { type: 'wall', x: [55, 65], y: 37 }, // top
  { type: 'wall', x: [55, 65], y: 40 }, // bottom

  // room - s5
  { type: 'wall', x: [48, 50], y: 31 }, // bottom
  { type: 'wall', x: [51, 55], y: 31 }, // bottom2
  { type: 'wall', x: 55, y: [25, 38] }, // right

  // room - s6
  { type: 'wall', x: [30, 36], y: 32 }, // top
]