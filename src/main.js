const path = require('path')
const { AutoLanguageClient } = require('atom-languageclient')

class HTMLLanguageClient extends AutoLanguageClient {
  getGrammarScopes () { return atom.config.get('ide-html.additionalGrammars').concat(['text.html.basic']); }
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
