"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var query_string_1 = __importDefault(require("query-string"));
// 不可以declare同名
// declare function camelCase(input:string): string
lodash_1.camelCase("ssadsa");
query_string_1.default.stringify({ ssdasd: "sds" });
