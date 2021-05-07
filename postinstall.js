const exec = require('child_process').exec;
exec('npm i -D && yarn build').on('exit', () => exec('echo <---'));
