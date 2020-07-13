// 此文件作为generator的核心入口
// 导出一个继承于yeoman-generator的class
const GeneratorClass = require('yeoman-generator')
module.exports = class SampleGenerator extends GeneratorClass {
  // writing() {
  //   // Yeoman会自动在文件生成阶段调用此方法
  //   // this.fs是强于node fs的文件处理工具
  //   this.fs.write(
  //     this.destinationPath('./tmp.txt'),
  //     Math.random().toString()
  //   )
  // }
  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'title',
      message: 'Your project name'
    }, {
      type: 'confirm',
      name: 'success',
      message: 'are you happy'
    }]).then(answers => {
      // answers => { name: 'user input value', success: user input boolean }
      this.answers = answers; // 赋值方便我们在writing的时候去使用
    })
  }
  // 通过模板方式写入文件到目标目录
  writing() {
    // 模板文件目录
    const tmpl = this.templatePath('test.txt')
    // 输出目标目录
    const output = this.destinationPath('test.txt')
    // 模拟数据上下文
    // const context = { success: true, title: "Hello zsf" }
    const context = this.answers
    
    this.fs.copyTpl(tmpl, output, context)
  }
}