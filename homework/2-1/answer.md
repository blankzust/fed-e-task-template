# 简答题
## 1、谈谈你对工程化的初步认识，结合你之前遇到过的问题说出三个以上工程化能够解决问题或者带来的价值。
工程化是一个可以提升开发体验、提高开发效率和质量的规划或者工作流架构，一切以提高效率、降低成本、质量保证为目的的手段都属于工程化。

工程化带来的价值：

开发时可以使用 ES6+ 新特性，通过工程化的手段将新语法转换成兼容性好的语法，然后发布
可以使用热更新提升开发体验和效率，可以将代码压缩等这样重复机械的工作交给计算机完成
团队协作开发时，可以使用一些编码规范检查的工具，使得项目代码风格统一，质量得到保证
可以使用 Mock.js 这样的插件完成假数据的编写，开发阶段时，让前端可以不依赖后端接口去完成相应工作

## 2、你认为脚手架除了为我们创建项目结构，还有什么更深的意义？
更深的意义在于，脚手架也为我们提供了项目规范和公共约定。包括相同的组织结构、相同的开发范式、相同的模块依赖、相同的工具配置、相同的基础代码等等，对于公司里的大多数产品，前端都可以使用同一套脚手架，不仅可以统一各个项目，当项目成员切换团队时，也可以直接上手，提高效率，相关模块依赖更新或者配置需要改动时，可以一步到位更新所有产品，更利于维护。

# 编程题
## 1、概述脚手架实现的过程，并使用 NodeJS 完成一个自定义的小型脚手架工具
脚手架的实现流程：

1、通过命令行交互询问用户问题；
2、根据用户回答的结果，再结合一些模板文件，最后生成项目结构。


小型脚手架：https://github.com/blankzust/fed-e-task-template/homework/2-1/basic-web-cli
