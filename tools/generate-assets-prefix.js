const { getCodeSandboxHost } = require('@codesandbox/utils');

console.log(`https://${getCodeSandboxHost(3000)}/public/`);
