const extractZip = require('extract-zip');
const fs = require('fs-extra');
const { dirname } = require('path');
const glob = require('glob');
const normalizePath = require('normalize-path');

; (async () => {
    const files = glob.sync(`${normalizePath(__dirname)}/**/*.zip`);
    for (const zipName of files) {
        if (fs.pathExistsSync(zipName)) {
            try {
                await extractZip(zipName, { dir: dirname(zipName) });
            } catch (err) {
                try {
                    await extractZip(zipName, { dir: dirname(zipName) });
                } catch (err) {
                    console.log(`Failed to unzip: ${zipName}`, err);
                }
            }
        }
    };
})();
