/**
 * Copyright (c) 2024-present, Deepcodr.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

var fs = require('fs');
var path = require('path');
const chalk = require('../util/chalk');

function checkFiles(files) {
  var currentFilePath;
  try {
    files.forEach(filePath => {
      currentFilePath = filePath;
      fs.accessSync(filePath, fs.F_OK);
    });
    return true;
  } catch (err) {
    var dirName = path.dirname(currentFilePath);
    var fileName = path.basename(currentFilePath);
    console.log(chalk.red('Could not find a required file.'));
    console.log(chalk.red('  Name: ') + chalk.cyan(fileName));
    console.log(chalk.red('  Searched in: ') + chalk.cyan(dirName));
    return false;
  }
}

module.exports = checkFiles;
