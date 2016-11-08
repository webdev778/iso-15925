/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module iso-15924
 * @fileoverview Test suite for `iso-15924`.
 */

'use strict';

/* eslint-env node */

/*
 * Module dependencies.
 */

var test = require('tape');
var iso15924 = require('./');

/*
 * Tests.
 */

test('iso15924', function (t) {
    t.plan(6);

    t.ok(Array.isArray(iso15924), 'should be an `array`');

    iso15924.forEach(function (script) {
        if (script.code !== 'Latn') {
            return;
        }

        t.equal(
            script.code,
            'Latn',
            'should have a four-character code'
        );

        t.equal(
            script.numeric,
            '215',
            'should have a three-character code'
        );

        t.equal(
            script.name,
            'Latin',
            'should have a name'
        );

        t.equal(
            script.pva,
            'Latin',
            'should have a pva'
        );

        t.equal(
            script.date,
            '2004-05-01',
            'should have a date'
        );
    });
});
