const decompress = require('decompress');
const fs = require('fs-extra');
const { dirname } = require('path');
const glob = require('glob');
const normalizePath = require('normalize-path');

; (async () => {
    const files = glob.sync(`${normalizePath(__dirname)}/**/*.zip`);

    for (const zipName of files) {
        if (fs.pathExistsSync(zipName)) {
            try {
                await decompress(zipName, dirname(zipName));
            } catch (err) {
                console.log(`Failed to unzip: ${zipName}`, err);
                await fs.remove(dirname(zipName));
            }
        }
    };
})();
