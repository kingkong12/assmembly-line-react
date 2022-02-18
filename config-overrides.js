/* eslint-disable @typescript-eslint/explicit-function-return-type */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.optimization.runtimeChunk = false
  config.optimization.splitChunks = {}
  return config
}
