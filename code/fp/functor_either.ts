import { parse } from "querystring";

class Right {
  private _value: any
  constructor(value: any) {
    this._value = value;
  }
  static of(value: any) {
    return new Right(value)
  }
  map(fn: Function) {
    return Right.of(fn(this._value))
  }
}

class Left {
  private _value: any
  constructor(value: any) {
    this._value = value;
  }
  static of(value: any) {
    return new Left(value)
  }
  map(fn: Function) {
    return Left.of(this._value)
  }
}

function parseJSON(val: string) {
  try {
    return Right.of(JSON.parse(val))
  } catch (e) {
    return Left.of({ err: e.message })
  }
}

const r = parseJSON("{ name: 1 }")

console.log(r)

const r2 = parseJSON('{ "name": "zsf" }')
            .map((item: any) => item.name.toUpperCase())

console.log(r2)

