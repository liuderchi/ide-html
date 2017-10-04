// show welcome message on first installation
const path = require('path')
const fs = require('fs')

const WELCOME_SHOWN = path.join(__dirname, '..', 'WELCOME_SHOWN')

const generateWelcomeMsg = () => {
  return `## Welcome to ide-html\n\nQuick start for ide-html:\n${[
    'Open a HTML file from the Project',
    'Dispatch command `Outline View: Toggle`',
  ].map((str, i) => `${i}. ${str}\n`).join('')
  }\nHappy Using Atom IDE : )`
}

const generateWarnMsg = () => {
  return `## Welcome to ide-html\n\nPlease install following requirements:\n${[
    '[`atom-ide-ui`](https://atom.io/packages/atom-ide-ui)',
  ].map((str, i) => `${i}. ${str}\n`).join('')
  }\nso that ide-html can work properly`
}

const helpButton = [
  {
    text: ' Help',
    onDidClick: () => { atom.commands.dispatch(
      atom.views.getView(atom.workspace.getActivePane()),
      'ide-html:help'
    )},
    className: 'btn btn-success btn-lg icon-light-bulb',
  },
]

const settingsButton = [
  {
    text: ' Open Settings Page',
    onDidClick: () => {
      atom.commands.dispatch(
        atom.views.getView(atom.workspace.getActivePane()),
        'settings-view:install-packages-and-themes'
      )
    },
    className: 'btn btn-success btn-lg icon-tools',
  },
]

const showWelcomeNotification = () => {
  try {
    fs.accessSync(WELCOME_SHOWN)
  } catch (err) {
    if (atom.packages.isPackageLoaded('atom-ide-ui')) {
      atom.notifications.addSuccess(
        generateWelcomeMsg(),
        {
          buttons: helpButton,
          dismissable: true,
          icon: 'thumbsup',
        }
      )
      fs.closeSync(fs.openSync(WELCOME_SHOWN, 'w'))
    } else {
      atom.notifications.addWarning(
        generateWarnMsg(),
        {
          buttons: settingsButton,
          dismissable: true,
          icon: 'info',
        }
      )
    }
  }
}


module.exports = {
  showWelcomeNotification,
}
