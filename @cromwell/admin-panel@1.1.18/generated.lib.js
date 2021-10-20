

            import * as defaultImport from 'C:/projects/Cromwell/system/admin-panel/startup.js'
            const moduleName = '@cromwell/admin-panel';
            
            
const interopDefault = (lib, importName) => {
    if (lib && typeof lib === 'object' && 'default' in lib) {

        if (importName !== 'default') {
            return lib.default;
        }

        if (typeof lib.default === 'object' || typeof lib.default === 'function') {
            if (Object.keys(lib).length === 1) {
                return lib.default;
            } else if ('default' in lib.default && Object.keys(lib).length === Object.keys(lib.default).length) {
                return lib.default;
            } else if (Object.keys(lib).length === Object.keys(lib.default).length + 1) {
                return lib.default;
            }
        } 
    }
    return lib;
}


            const isServer = () => (typeof window === 'undefined');
            const getStore = () => {
                if (isServer()) {
                    if (!global.CromwellStore) global.CromwellStore = {};
                    return global.CromwellStore;
                }
                else {
                    if (!window.CromwellStore) window.CromwellStore = {};
                    return window.CromwellStore;
                }
            }
            const CromwellStore = getStore();

            if (!CromwellStore.nodeModules.imports) CromwellStore.nodeModules.imports = {};
            if (!CromwellStore.nodeModules.modules) CromwellStore.nodeModules.modules = {};
            if (!CromwellStore.nodeModules.modules['@cromwell/admin-panel']) {
                CromwellStore.nodeModules.modules['@cromwell/admin-panel'] = interopDefault(defaultImport, 'default');
            }
            