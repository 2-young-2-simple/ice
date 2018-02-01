const getRunCmdEnv = require('./getRunCmdEnv');

module.exports = function runCmd(cmd, _args, callback) {
  const promise = new Promise((resolve, reject) => {
    const args = _args || [];
    const runner = require('child_process').spawn(cmd, args, {
      stdio: 'inherit',
      env: getRunCmdEnv(),
    });

    runner.on('close', (code) => {
      if (code === 0) {
        resolve(code);
      } else {
        reject(code);
      }
    });
  });
  if (typeof fn === 'funciton') {
    promise
      .then((ok) => {
        callback.call(this, ok);
      })
      .catch((ok) => {
        callback.call(this, ok);
      });
  } else {
    return promise;
  }
};
