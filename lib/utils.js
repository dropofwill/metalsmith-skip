var utils = module.exports;
var _ = require('lodash');

utils.contains_truthy = function (obj, keys_to_check) {
  var pairs = utils.relevant_pairs(
        utils.truthy_pairs(obj), keys_to_check
      );
  return isnt_empty(pairs);
};

utils.relevant_pairs = function (obj, keys_to_check) {
  return _.pick(obj, keys_to_check);
};

utils.truthy_pairs = function (obj) {
  return _.pick(obj, is_true);
};

function is_true(input) {
  return input === true;
}

function isnt_empty(input) {
  return ! _.isEmpty(input);
}
