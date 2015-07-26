var utils = require('./utils');

/**
 * Expose `plugin`.
 */

module.exports = plugin;

/**
 * Metalsmith plugin to hide drafts from the output.
 *
 * @return {Function}
 */

function plugin(opts){
  var keys_to_check = opts.keys;

  return function(files, metalsmith, done){
    // if (_.isEmpty(keys_to_check.length)) return
    setImmediate(done);
    Object.keys(files).forEach(function(file){
      var data = files[file];

      if (utils.contains_truthy(data, keys_to_check)) delete files[file];
    });
  };
}
