const packageJSON = require('../package.json')

const registerConfigOnChangeHandlers = () => {
  atom.config.onDidChange('ide-html.additionalGrammars', () =>
    promptUserReloadAtom('Reload `ide-html` to apply additional grammars')
  )
  atom.config.onDidChange('ide-html.jspSupport', () => promptUserReloadAtom() )
  atom.config.onDidChange('ide-html.mustacheSupport', () => promptUserReloadAtom() )
}

const registerOpenSettingsCommand = () => {
  atom.commands.add('atom-workspace', `${packageJSON.name}:open-settings`, () => {
    atom.workspace.open(`atom://config/packages/${packageJSON.name}`)
  })
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
  registerOpenSettingsCommand,
  promptUserReloadAtom,
}
