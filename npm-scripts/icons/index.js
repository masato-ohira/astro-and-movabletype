const fs = require('fs-extra')
const _ = require('lodash')
const svgToJson = require('./svgToJson')

const srcDir = `src/components/icons/svg`
const distDir = `src/components/icons`

const svgList = () => {
  const dirInfo = fs.readdirSync(srcDir)
  const svgList = _.filter(dirInfo, (i) => _.endsWith(i, '.svg'))
  return svgList
}

const main = async () => {
  const allSvg = {}
  for (let svgName of svgList()) {
    const svgTag = fs.readFileSync(`${srcDir}/${svgName}`, 'utf-8')
    const json = svgToJson(svgTag)
    const svgId = svgName.split('.svg')[0]
    allSvg[svgId] = json
  }

  fs.writeJSONSync(`${distDir}/svg-list.json`, allSvg)
  console.log({ save: 'svg-list.json' })
}

main()
