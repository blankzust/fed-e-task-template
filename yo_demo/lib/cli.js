#!/usr/bin/env node
'use strict';
const meow = require('meow');
const yoDemo = require('./');

const cli = meow(`
Usage
  $ yo_demo [input]

Options
  --foo  Lorem ipsum. [Default: false]

Examples
  $ yo_demo
  unicorns
  $ yo_demo rainbows
  unicorns & rainbows
`);
