const fs = require('fs-extra');
const { dirname } = require('path');
const normalizePath = require('normalize-path');
const glob = require('glob');
const compareVersions = require('compare-versions');


const list = () => {
    const files = glob.sync(`${normalizePath(__dirname)}/**/*.zip`);
    const packages = files.map(file =>
        normalizePath(dirname(file)).replace(normalizePath(__dirname) + '/', ''));

    const versions = {}
    packages.forEach(pckg => {
        const chunks = pckg.split('@');
        const version = chunks.pop();
        const name = chunks.join('@');

        if (!versions[name]) versions[name] = [];
        versions[name].push(version);
    });

    const latestVersions = {};

    Object.keys(versions).forEach(name => {
        latestVersions[name] = versions[name].reduce(
            (prev, curr) =>
                !prev ? curr : compareVersions(prev, curr) !== -1 ? prev : curr
        );
    })


    fs.outputJSONSync('./versions/latest.json', {
        packages,
        latestVersions,
    }, { spaces: 2 });
}

list();