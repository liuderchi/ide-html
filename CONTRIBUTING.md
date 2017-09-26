# CONTRIBUTING

:tada::tada: First of all, THANK YOU for taking time to contribute this package! :tada::tada:

## Steps to Contribute

  1. please checkout [Issues Page](//github.com/liuderchi/ide-html/issues) and [Pull Request Page](//github.com/liuderchi/ide-html/pulls) first in case there is already someone being assigned or working on it.
  2. fork this repo
  3. clone the repo you just forked to your disk

      ```shell
      git clone https://github.com/my-account/ide-html.git
      ```

  4. install npm dependencies then *create a branch* named as the *feature you want to contribute*. For example:

      ```shell
      cd ide-html && yarn && git checkout -b refine-doc
      ```

  5. make changes to the code

  6. you may preview your changes by [enabling DEV mode](#how-to-preview-your-changes-in-development)

  7. you may test your changes. For example:

      ```shell
      npm run test
      ```

  8. commit the changes and push the branch you created to your remote

      ```
      git add ./
      git commit -m "some changes"
      git push -u origin MY_BRANCH
      ```

  9. [create a pull request](//help.github.com/articles/creating-a-pull-request/)


## How to Preview Your Changes in Development?

  1. uninstall `ide-html` if you have installed
  2. change into the package directory you have forked and cloned
  3. use `apm` command to link the package to atom user directory

  ```shell
  apm link
  ```

  Now your package directory has been linked to `~/.atom/packages/ide-html`

  4. you can preview changes by launching (or reloading) Atom

      - after your development, remove package link

      ```shell
      cd path/to/fork/repo && apm unlink
      ```
