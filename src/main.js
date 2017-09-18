// const path = require('path')
const { AutoLanguageClient } = require('atom-languageclient')
// const { filter } = require('fuzzaldrin-plus')
// const cp = require('child_process')

/**
 * HTML LanguageClient for IDE-Atom
 *
 * @method getGrammarScopes
 * @extends AutoLanguageClient
 * @return {class}
 */
class HTMLLanguageClient extends AutoLanguageClient {
  getGrammarScopes () { return ['text.html.basic'] }
  getLanguageName () { return 'HTML' }
  getServerName () { return 'VSCODE-HTML-LANG-SERVER' }
  getConnectionType() { return 'stdio' } // ipc, socket, stdio

  startServerProcess () {
    // return cp.spawn('node', [require.resolve('vscode-html-languageserver-bin/htmlServerMain')])
    return super.spawnChildNode([ require.resolve('node_modules/vscode-html-languageserver-bin/htmlServerMain'), '--stdio' ]) // --node-ipc, stdio, socket={number}
  }

  preInitialization (connection) {
    connection.onCustom('$/partialResult', () => {}) // Suppress partialResult until the language server honours 'streaming' detection
  }
}

module.exports = new HTMLLanguageClient()
