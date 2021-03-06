// const upperCamelCase = require('uppercamelcase')

const parseName = (name, defaultStyle) => {
  const cleanedName = name.replace(/\//g, '-')
  const nameSlices = cleanedName.split('-')
  const style = nameSlices[nameSlices.length - 1]
  return {
    name,
    componentName: cleanedName.replace(/[-|.]/g,''),
    style: style==='fill' || style==='stroke' ? style : defaultStyle
  }
}

module.exports = {
  parseName
};
