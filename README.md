# my-utils-components
Rollup构建自己方法库-组件库

现状：公司基于vben-admin弄了一个开发的基础模块，包含组件、公共方法、角色、权限等基础功能，放在master分支上，每次做一个新项目，就基于这个master分支再拉一个分支，然后在新分支上做业务开发。

问题一：基础模块有改动的时候，只是在当前分支上做改动。如果需要修复公共组件或公共方法的bug，需要去每一个项目里进行修改。

问题二：有一些utils方法需要在非Vue项目上使用的时候，例如JQuery项目，自己手动把需要的方法复制到业务代码里，久而久之，重复的代码越来越多，也有可能同样的功能，反复造轮子。

为了能够更好地管理公共模块，我们计划把项目中的公共组件、公共方法抽离出来，使用npm包的方式去引用，这样可以解决问题一。

至于问题二，我们可以在给utils方法打包的时候，输出一个全量js。

技术方案选择：rollup

rollup简介

my-rollup-demos：我的第一个rollup项目

rollup-starter-lib：rollup官方的项目

my-rollup-vue3-components：使用rollup新建vue3组件库

my-rollup-vue2-components：使用rollup新建vue2组件库