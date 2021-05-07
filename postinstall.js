const exec = require('child_process').exec;
exec('yarn build').on('exit', () => exec('echo <---'));
