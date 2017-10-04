const path = require('path')
const { AutoLanguageClient } = require('atom-languageclient')
const { registerConfigOnChangeHandlers } = require('./util')
const { registerHelpCommands } = require('./help_cmd')
const { showWelcomeNotification } = require('./welcome_notification')

class HTMLLanguageClient extends AutoLanguageClient {
  constructor() {
    super()
    registerConfigOnChangeHandlers()
    registerHelpCommands()
    showWelcomeNotification()
  }
  getGrammarScopes () {
    const {
      additionalGrammars,
      gohtmlSupport,
      mustacheSupport,
    } = atom.config.get('ide-html')
    return ['text.html.basic']
      .concat(gohtmlSupport ? 'text.html.gohtml' : [])
      .concat(mustacheSupport ? 'text.html.mustache' : [])
      .concat(additionalGrammars || [])
  }
  getLanguageName () { return 'HTML' }
  getServerName () { return 'VSCODE-HTML-LANG-SERVER' }
  getConnectionType() { return 'stdio' } // ipc, socket, stdio

  startServerProcess () {
    return super.spawnChildNode([
      path.resolve(path.join(
        __dirname,
        '../node_modules/vscode-html-languageserver-bin/htmlServerMain'
      )),
      '--stdio',
    ]) // --node-ipc, stdio, socket={number}
  }

  preInitialization (connection) {
    connection.onCustom('$/partialResult', () => {}) // Suppress partialResult until the language server honours 'streaming' detection
  }
}

module.exports = new HTMLLanguageClient()
