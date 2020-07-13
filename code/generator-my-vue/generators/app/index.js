const GeneratorClass = require('yeoman-generator');
const fs = require('fs')
const path = require('path')

const templates = [];

// 遍历模板文件，得到每一个文件的相对路径
function readFiles(target) {
  var files = fs.readdirSync(path.resolve(__dirname, target));
  if(files) {
    files.forEach(fileName => {
      var stat = fs.statSync(path.resolve(__dirname, `${target}/${fileName}`));
      if(stat.isDirectory()) {
        readFiles(path.resolve(__dirname, `${target}/${fileName}`))
      } else {
        templates.push(path.resolve(__dirname, `${target}/${fileName}`).split('generators/app/templates/')[1]); 
      }
    })
  }
}

readFiles('./templates')

console.log(templates)
module.exports = class extends GeneratorClass {
  writing() {
    templates.forEach(filePath => {
      this.fs.copyTpl(
        this.templatePath(filePath),
        this.destinationPath(filePath)
      )

      this.fs.writing
    })
  }
}
