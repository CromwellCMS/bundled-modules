const fs = require('fs-extra');
const { dirname } = require('path');
const normalizePath = require('normalize-path');
const glob = require('glob');


const list = () => {
    const files = glob.sync(`${normalizePath(__dirname)}/**/*.zip`);
    const packages = files.map(file =>
        normalizePath(dirname(file)).replace(normalizePath(__dirname) + '/', ''));

    fs.outputJSONSync('list.json', {
        packages
    }, { spaces: 2 });
}

list();