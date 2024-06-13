#!/usr/bin/env node
'use strict';

// const fs = require('fs/promises');
const { writeFile , readFile } = require('fs/promises');

const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const path = require('path');
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const appPath = resolveApp('.');
const appSrc = resolveApp('src');

async function updateDevUtilsFile(){
    try{
        const data= await readFile('./node_modules/react-dev-utils/WebpackDevServerUtils.js');
        updateFile(data);
    }catch(e)
    {
        console.log(e);
    }
}

if(appSrc==undefined)
{
    console.log("Invalid Project! Open Valid React Project")
}
else
{
    console.log("Updating react project");
    updateDevUtilsFile();
}

async function updateFile(data)
{
        // console.log(data.toString('utf8'))
        var bannerArt = await readFile(appSrc+'/ReactBannerArt.txt');

        // console.log(bannerArt.toString('utf8'));
        var newStringData="";
        console.log(bannerArt.toJSON().data[0]);

        bannerArt.toString('ascii').split('\n').forEach(word=>{
            word = word.replace('\\','\\\\');
            newStringData=newStringData + word + "\\n";
        });
        console.log(newStringData);
        var FileData= data.toString('utf8');
        var updatedFiledata = FileData.replace("console.log(chalk.green('Compiled successfully!'));",`console.log(\"${newStringData}\")`+"\n\t\t\tconsole.log(chalk.green('Compiled successfully!'));");
        // console.log(updatedFiledata);
        try{
            await writeFile('./node_modules/react-dev-utils/WebpackDevServerUtils.js',updatedFiledata);
        }catch(e)
        {
            console.log(e);
        }
}