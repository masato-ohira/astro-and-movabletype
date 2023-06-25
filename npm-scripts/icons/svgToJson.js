const cheerio = require('cheerio')

// SVGをJSONに変換する関数
const convertSvgToJson = (svg) => {
  const $ = cheerio.load(svg, { xmlMode: true })

  const convertElementToJson = function (element) {
    const obj = {
      tag: element.name,
      attr: {},
      child: [],
    }

    // 属性を取得
    for (const [name, value] of Object.entries(element.attribs)) {
      obj.attr[name] = value
    }

    // 子要素を処理
    element.children.forEach((childNode) => {
      if (childNode.type === 'tag') {
        const childElement = childNode
        const childJson = convertElementToJson(childElement)
        obj.child.push(childJson)
      }
    })

    return obj
  }

  return convertElementToJson($('svg')[0])
}

module.exports = convertSvgToJson
