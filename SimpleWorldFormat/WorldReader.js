const fs = require('fs')

const blockData = []
const buffer = fs.readFileSync('./data.spw')
for (let i = 0; i < buffer.length; i += 16) {
  blockData.push({
    x: buffer.readInt32LE(i),
    y: buffer.readInt32LE(i + 4),
    z: buffer.readInt32LE(i + 8),
    id: buffer.readUInt32LE(i + 12)
  })
}

fs.writeFileSync('./data.json', JSON.stringify(blockData))
