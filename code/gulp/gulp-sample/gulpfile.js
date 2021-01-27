
module.exports.foo = (done) => {
  console.log("gulp foo task working~");
  done()
}

module.exports.default = done => {
  console.log("default gulp task working")
  done()
}

const gulp = require('gulp');
gulp.task('bar', done => {
  console.log("gulp bar task working");
  done();
})

// 组合任务

// 组合任务api实现并行任务和串行任务
const { series, parallel, task } = require('gulp');

function task1(done) {
  setTimeout(() => {
    console.log('task1 working')
    done()
  }, 1000)
  
  
}

function task2(done) {
  setTimeout(() => {
    console.log('task2 working')
    done()
  }, 1000)
  
}

function task3(done) {
  setTimeout(() => {
    console.log('task3 working')
    done()
  }, 1000)
  
}

module.exports.seriesTask = series(task1, task2, task3)
module.exports.parallelTask = parallel(task1, task2, task3)

// gulp中的异步操作
const fs = require('fs');

// 返回一个流，gulp会自动监听流结束的时候，允许done
// 故以下代码不会报错
module.exports.stream = () => {
  const readStrem = fs.createReadStream('package.json');
  const writeStream = fs.createWriteStream('target.txt');
  readStrem.pipe(writeStream);
  return readStrem;
}

// stream等同于stream2的写法
module.exports.stream2 = (done) => {
  const readStrem = fs.createReadStream('package.json');
  const writeStream = fs.createWriteStream('target.txt');
  readStrem.pipe(writeStream);
  readStrem.on('end', () => {
    done()
  })
}

const { Transform } = require('stream')
// 通过文件流的方式写压缩文件的任务
// 压缩：去掉注释，去掉换行
module.exports.compress = (done) => {
  const read = fs.createReadStream('public/normalize.css');
  const transform = new Transform({
    transform: (chunk, encoding, callback) => {
      const input = chunk.toString();
      const output = input.replace(/\s/g, '').replace(/\/\*.+?\*\//g, '');
      callback(null, output);
    }
  })
  const write = fs.createWriteStream('dist/normalize.min.css');
  read.pipe(transform).pipe(write);
  return read;
}

// gulp文件api

