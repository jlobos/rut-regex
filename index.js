module.exports = opts => {
  opts = Object.assign({dot: true, hyphen: true}, opts)

  const dot = opts.dot ? '\\.' : '\\.?'
  const hyphen = opts.hyphen ? '-' : '-?'
  const regex = `0*(\\d{1,3}(${dot}\\d{3})*)${hyphen}([\\dkK])`

  return opts.exact ? new RegExp(`^${regex}$`, 'i') : new RegExp(regex, 'ig')
}
