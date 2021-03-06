# All the (Linotype) Matrices v0.2

[link to the site itself](https://ericlscace.github.io/allthemats-ember/)
<br>
![](https://user-images.githubusercontent.com/6785602/28450815-b6063b7c-6db7-11e7-9331-f8052c6bf9b6.png)

## Wiki index
(alphabetical order: links take you to the Wiki)
> Checklists:
> * [Ember CLI installation](https://github.com/EricLScace/allthemats-ember/wiki/cklist-ember-cli-install.md)
> * [Ember template installation](https://github.com/EricLScace/allthemats-ember/wiki/cklist-ember-install)
> * [Repository management](https://github.com/EricLScace/allthemats-ember/wiki/cklist-repo-management)

> [Development plan](https://github.com/EricLScace/allthemats-ember/wiki/schedule.md)

> Licenses:
> * [Creative Commons](https://github.com/EricLScace/allthemats-ember/wiki/license-creative-commons)
> * [General Assembly](https://github.com/EricLScace/allthemats-ember/wiki/license-ga)
> * [GNU](https://github.com/EricLScace/allthemats-ember/wiki/license-gnu)
> * [MIT](https://github.com/EricLScace/allthemats-ember/wiki/license-mit)

> References:
> * [GA capstone project requirements](https://github.com/ga-wdi-boston/capstone-project) applies to v0.2
> * [GA full stack project requirements](https://git.generalassemb.ly/ga-wdi-boston/full-stack-project) applies to v0.1
> * [GA full stack project presentation requirements](https://github.com/ga-wdi-boston/full-stack-project-practice) applies to v0.1
> * [Linotype: The Film — trailer](https://www.youtube.com/watch?v=avDuKuBNuCk)
> * [Linotype matrix identification publications](http://www.circuitousroot.com/artifice/letters/press/compline/typography/matrix/mergenthaler/)

> [Schedule](https://github.com/EricLScace/allthemats-ember/wiki/schedule)

> Wireframes:
> * [UX flow states](https://github.com/EricLScace/allthemats-ember/wiki/ux-flow-v0-2.png)
> * [Wireframe: matrix code search](https://github.com/EricLScace/allthemats-ember/wiki/wireframe-v0-2-1.png)
> * [Wireframe: attribute-based search](https://github.com/EricLScace/allthemats-ember/wiki/wireframe-v0-2-4.png)

> [User stories](https://github.com/EricLScace/allthemats-ember/wiki/user-stories)

## Changes from v0.1
(checked if completed on 2017 Jul 21)
- [x] Ember client
- [ ] Database of matrices expanded from the v0.1 test set of 40 matrices to the full 2,907 matrix listing previously compiled by Linotype staff.
- [ ] User stories expanded: user can search not only for a specific Linotype matrix code, but also for all matrices that meet search criteria; e.g., Helvetica bold in 8 pt to 10 pt sizes.
- [ ] ERD changed to optimize size of database, and to accommodate more edge cases in the description and use of Linotype matrices.git

## Technologies used on client; dependencies
* Bootstrap
* Ember
* ember-cli-flash — `ember install ember-cli-flash`
* ember-local-storage — `ember install ember-local-storage`

For assurance, run `npm install` afterward.

## Architecture
```
|--application
|    |--row-header
|    |    |--search-selector
|    |    |    |--radio-code
|    |    |    '--radio-attributes
|    |    |--user-info
|    |    |    |--name
|    |    |    '--organization
|    |    |--register-settings
|    |    '--sign-in-out
|    |--search-attributes
|    |    |--main-position
|    |    |    |--size
|    |    |    |--font
|    |    |    |--face
|    |    |    |--weight
|    |    |    |--width
|    |    |    |--figures
|    |    |    |--ck-outline
|    |    |    |--ck-relief
|    |    |    |--ck-strikethrough
|    |    |    '--ck-underline
|    |    |--aux-position
|    |    |    |--size
|    |    |    |--font
|    |    |    |--face
|    |    |    |--weight
|    |    |    |--width
|    |    |    |--figures
|    |    |    |--ck-outline
|    |    |    |--ck-relief
|    |    |    |--ck-strikethrough
|    |    |    '--ck-underline
|    |    |--miscellaneous
|    |    |    |--ck-emboss
|    |    |    |--ck-ttysetting
|    |    |    |--ck-vertical
|    |    |    '--ck-self-spacing
|    '--table-matrices (Bootstrap table)
|--sign-in
|    '--sign-in-form
|         |--email-input
|         '--password-input
|--register
|    '--sign-up-form
|         |--email-input
|         |--password-input (twice)
|         |--name-input
|         '--organization-input
'--settings
     '--password-change-form
          |--old-password-input
          |--new-password-input (twice)
          |--name-input
          '--organization-input
```

## Contributors
Eric Scace wrote all the documentation and code.

## Licenses:
1. All content is licensed under a [CC­BY­NC­SA 4.0 license](creative-commons).
1. All software code is licensed under [GNU GPLv3](gnu).
2. See also [General Assembly](GA) and [MIT](MIT) license terms.
2. For commercial use or alternative licensing, please contact legal@ga.co.
