'use strict';

var assert = require('assert');
var exec = require('child_process').exec;
var path = require('path');

describe('burrp', function () {
    var cmd = 'node ' + path.join(__dirname, '../bin/burrp') + ' ';
    console.log(cmd);

    it('--help should run without errors', function (done) {
        exec(cmd + '--help', function (error, stdout, stderr) {
            assert(!error);
            done();
        });
    });

    it('--version should run without errors', function (done) {
        exec(cmd + '--version', function (error, stdout, stderr) {
            assert(!error);
            done();
        });
    });

    it('should return error on unknown command', function (done) {
        this.timeout(4000);

        exec(cmd + 'junkcmd', function (error, stdout, stderr) {
            assert(error);
            assert.equal(error.code, 1);
            done();
        });
    });

    it('should return `Zero? Are you kidding me?` when provided number is zero', function (done) {
        this.timeout(4000);

        exec(cmd + '-n 0', function (error, stdout, stderr) {
            assert.equal(stdout.indexOf('Zero? Are you kidding me?'), 0);
            done();
        });
    });

    it('should return 10 food names when provided number is 10', function (done) {
        this.timeout(4000);

        exec(cmd + '-n 10', function (error, stdout, stderr) {
            var count = stdout.split('\n').length - 1;
            assert.strictEqual(count, 10);
            done();
        });
    });

    it('should return unique food names at least up to 10,000 count', function (done) {
        this.timeout(30000);

        exec(cmd + '-n 10000', function (error, stdout, stderr) {
            var unique = isUnique(stdout.split('\n'));
            assert.strictEqual(unique, true);
            done();
        });

        function isUnique(arr) {
            var __unique = true;

            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr.length; j++) {
                    if (i != j) {
                        if (arr[i] == arr[j]) {
                            __unique = false;
                        }
                    }
                }
            }
            return __unique;
        }
    });

});
