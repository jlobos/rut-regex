module.exports = options => {
  options = Object.assign({dot: true, hyphen: true}, options)

  const dot = options.dot ? '\\.' : '\\.?'
  const hyphen = options.hyphen ? '-' : '-?'
  const regex = `0*(\\d{1,3}(${dot}\\d{3})*)${hyphen}([\\dkK])`

  return options.exact ? new RegExp(`^${regex}$`, 'i') : new RegExp(regex, 'ig')
}
