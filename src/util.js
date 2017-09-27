const registerConfigOnChangeHandlers = () => {
  atom.config.onDidChange('ide-html.additionalGrammars', () =>
    promptUserReloadAtom('Reload `ide-html` to apply additional grammars')
  )
  atom.config.onDidChange('ide-html.jspSupport', () => promptUserReloadAtom() )
  atom.config.onDidChange('ide-html.mustacheSupport', () => promptUserReloadAtom() )
}

const promptUserReloadAtom = (msg = 'Reload `ide-html` to apply changes') => {
  const buttons = [{
    text: 'Reload',
    onDidClick: () => atom.reload(),
  }]
  atom.notifications.addInfo(
    msg,
    {
      buttons,
      dismissable: true,
    }
  )
}

module.exports = {
  registerConfigOnChangeHandlers,
  promptUserReloadAtom,
}
