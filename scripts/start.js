/**
 * Copyright (c) 2024-present, Deepcodr.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

process.on('unhandledRejection', err => {
    throw err;
});

const fs = require('fs');
const chalk = require('../util/chalk');
const checkRequiredFiles = require('../util/checkFiles');

const isInteractive = process.stdout.isTTY;


const spawn = require('../util/crossSpawn');
const path = require('path');
const paths = require('../config/paths');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

if (!checkRequiredFiles([paths.startScriptPath, paths.bannerTextPath])) {
    process.exit(1);
}

var banner;

try {
    banner = fs.readFileSync(paths.bannerTextPath);
} catch (err) {
    throw new Error(err + "\n\nReactBannerArt.txt not found !\n");
}

const child = spawn('node', [paths.startScriptPath]);


child.stdout.on('data', (data) => {
    if (isInteractive) {
        process.stdout.write(
            process.platform === 'win32' ? '\x1B[2J\x1B[0f' : '\x1B[2J\x1B[3J\x1B[H' + '\n'
        );
        process.stdout.write(
            '\n' + banner + '\n'
        )
    }

    const firstWord = data.toString().trim().split(/\s+/)[0];
    if (firstWord === "WARNING") {
        console.log(`${chalk.yellow(data)}`);
    } else if (firstWord === "ERROR") {
        console.log(`${chalk.red(data)}`);
    } else {
        console.log(`${chalk.green(data)}`);
    }
});

child.stderr.on('data', (data) => {
    console.log(`${chalk.cyan(data)}`);
});