#!/usr/bin/env node

// Node CLI 应用入口文件必须要有这样的文件头
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const ejs = require('ejs');

inquirer.prompt([
  {
    type: 'input',
    name: 'name',
    message: '项目名称：',
    default: 'my-project'
  },
  {
    type: 'input',
    name: 'desc',
    message: '项目描述：',
  },
])
.then(answers => {
  const templateDir = path.join(__dirname, './template');
  
  const destDir = process.cwd();

  fs.readdir(templateDir, (err, files) => {
    if(err) throw err;
    files.forEach(file => {
      ejs.renderFile(path.join(templateDir, file), answers, (err, result) => {
        if (err) throw err;

        fs.writeFileSync(path.join(destDir, file), result)
      })
    })
  })
})