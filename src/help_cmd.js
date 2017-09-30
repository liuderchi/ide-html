const path = require('path')
const { shell } = require('electron')

const generateHelpMsg = () => {
  const { version, packageCommands } = require(path.join(
    __dirname,
    '../package.json'
  ))
  return `## ide-html \n\n${version}\n${
    Object.keys(packageCommands)
      .map(cmd => `  - \`${cmd}\` ${packageCommands[cmd]}`)
      .join('\n')
  }`
}

const buttons = [
  {
    text: ' FAQ',
    onDidClick: () => { shell.openExternal('https://github.com/liuderchi/ide-html#faq') },
    className: 'btn btn-info btn-lg icon-link selected',
  },
  {
    text: ' Send Issue',
    onDidClick: () => { shell.openExternal('https://github.com/liuderchi/ide-html/issues/new') },
    className: 'btn btn-info btn-lg icon-link',
  },
]

const registerHelpCommands = () => {
  atom.commands.add('atom-workspace', 'ide-html:help', () => {
    atom.notifications.addInfo(
      generateHelpMsg(),
      {
        buttons,
        dismissable: true,
        icon: 'mortar-board',
      }
    )
  })
}


module.exports = {
  registerHelpCommands,
}
