module.exports = function () {
    return {
      files: [
        'src/**/*.js',
      ],
      tests: [
        '/**/*.test.js'
      ],
      env: {
        type: 'node',
        params: {
          runner: `-r ${require.resolve('esm')}`
        }
      }
    }
  };