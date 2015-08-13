/**
 * Created by Umayr Shahid on 8/13/2015.
 */

'use strict';
var sauce = require('./sauce');

/**
 * @module lib/index
 * @type {burp: burp}
 */
module.exports = {
    burp: burp
};

/**
 * Method that does all the hard work. Iterate through the dictionary and generates the food names.
 *
 * @private
 * @param n - Number of names needs to be generated
 * @returns {Array}
 */
function generate(n) {
    var __random = [];
    var __names = [];
    var __name = '';
    for (var i = 0; i < n; i++) {
        if (Math.floor(Math.random() * 10) % 2 === 0) {
            __random[0] = Math.floor(Math.random() * sauce[0].length);
            __random[1] = Math.floor(Math.random() * sauce[1].length);
            if (i < 2) {
                __random[2] = Math.floor(Math.random() * sauce[2].length);
                __name = sauce[0][__random[0]] + ' ' + sauce[1][__random[1]] + ' ' + sauce[2][__random[2]];
            } else if (i < 4) {
                __random[2] = Math.floor(Math.random() * sauce[3].length);
                __name = sauce[0][__random[0]] + ' ' + sauce[1][__random[1]] + ' ' + sauce[3][__random[2]];
            } else {
                __random[2] = Math.floor(Math.random() * sauce[4].length);
                __name = sauce[0][__random[0]] + ' ' + sauce[1][__random[1]] + ' ' + sauce[4][__random[2]];
            }
        } else {
            __random[0] = Math.floor(Math.random() * sauce[5].length);
            __random[1] = Math.floor(Math.random() * sauce[6].length);
            if (i < 8) {
                __random[2] = Math.floor(Math.random() * sauce[5].length);
                while (__random[2] === __random[0]) {
                    __random[2] = Math.floor(Math.random() * sauce[5].length);
                }
                __name = sauce[5][__random[0]] + ' and ' + sauce[5][__random[2]] + ' ' + sauce[6][__random[1]];
            } else {
                __name = sauce[5][__random[0]] + ' ' + sauce[6][__random[1]];
            }
        }
        __names.push(__name);
    }
    return __names;
}

/**
 * Iterates through the provided array and remove duplicate entries.
 *
 * @private
 * @param arr - Source array.
 * @returns {*}
 */
function clean(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (i != j) {
                if (arr[i] == arr[j]) {
                    delete arr[i];
                }
            }
        }
    }
    return arr;
}

/**
 * Recursively call itself and generate food names until the array has no duplicate values.
 *
 * @private
 * @param arr - Source Array
 * @returns {*}
 */
function verify(arr) {
    var __clean = clean(arr);

    if (arr.length !== __clean.length) {
        __clean.concat(generate(arr.length - __clean.length));
        return verify(__clean);
    }
    else {
        return __clean;
    }
}

/**
 * Wrapper method that generates a raw array of food names then verifies if it contains any duplicate values.
 *
 * @param n
 * @returns {*}
 */
function burp(n) {
    n = n || 1;
    var __raw = generate(n);
    return verify(__raw);
}
