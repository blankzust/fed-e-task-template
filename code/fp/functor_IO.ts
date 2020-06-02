import fp = require("lodash/fp")
class IO {
  private _value: (...args: Array<any>) => any
  constructor(fn: (...args: Array<any>) => any) {
    this._value = fn;
  }
  static of(value: any) {
    return new IO(() => value)
  }
  run() {
    return this._value();
  }
  map(fn: (...args: Array<any>) => any) {
    return new IO(fp.flowRight(fn, this._value))
  }
}

const io = IO.of(process).map((p: NodeJS.Process) => p.execPath)
console.log(io.run());