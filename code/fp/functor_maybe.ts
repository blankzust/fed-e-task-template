// maybe函子
class Maybe {
  _value?: string
  constructor(value?: string) {
    this._value = value
  }

  static of(value: any) {
    return new Maybe(value)
  }

  map(fn: Function) {
    return this.isNothing()?Maybe.of(this._value):Maybe.of(fn(this._value))
  }

  isNothing() {
    return this._value === undefined || this._value === null
  }
}

const x = new Maybe("hello world");
x.map((item: string) => item.toUpperCase())

console.log(x);

const y = new Maybe(undefined);
y.map((item: string) => item.toUpperCase())

console.log(y)