const download = require('download')
const fs = require('fs-extra')
const _ = require('lodash')

const distDir = `npm-scripts/placehold/dist`

const saveMv = async () => {
  const ids = _.times(200, (n) => {
    return n + 1
  })
  for (let id of ids) {
    const fileName = `mv-${id}`
    fs.writeFileSync(
      `${distDir}/${fileName}.jpg`,
      await download(`https://picsum.photos/id/${id}/1600/900`),
    )
    console.log({ save: fileName })
  }
}

const main = () => {
  fs.mkdirsSync(distDir)
  saveMv()
}

main()
