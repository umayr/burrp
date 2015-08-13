Burrp
=============

### Description

A CLI app to generate food names.

### Usage

To install burrp from npm, run:

```
$ npm install -g burrp
```

Once its installed try:
```
$ burp -V
0.1.0

$ burp -h

  Usage: burrp [options]

  Options:

    -h, --help        output usage information
    -V, --version     output the version number
    -n, --number <n>  Number of food names

$ burp
White Wine and Walnut Tart

$ burp
Strawberry and Coconut Pie
Dark Chocolate and Ginger Mooncake
Strawberry and Kiwi Cake
Coffee and Caramel Pastry
Pressure-Cooked White Wine Kebabs
Pressure-Fried Fennel & Lemon Pie
Infused White Wine Potatoes
Cinnamon and Grape Genoise
Passion Fruit Toast
Tea-Smoked Mint Roll

```

Note: This package registers two commands, `burrp` & `burp`. You can use either of those for cli.

### Tests

If you have [mocha](https://github.com/mochajs/mocha) installed already,
```
$ npm test
```

### Motivation

I used to name my releases after dishes names, like every single lazy ass developer; I wanted a utility that'd reduce my efforts. So, here it is. :3

### License

Copyright (c) 2015 Umayr Shahid

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
