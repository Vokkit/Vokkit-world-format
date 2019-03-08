const fs = require('fs')

const blockData = JSON.parse(fs.readFileSync('./data.json').toString())
const buffer = Buffer.alloc(blockData.length * 16)
blockData.forEach((block, i) => {
  buffer.writeInt32LE(block.x, i * 16)
  buffer.writeInt32LE(block.y, i * 16 + 4)
  buffer.writeInt32LE(block.z, i * 16 + 8)
  buffer.writeUInt32LE(block.id, i * 16 + 12)
})

fs.writeFileSync('./data.spw', buffer)
