var dirEqual = require('assert-dir-equal'),
    assert = require('assert'),
    Metalsmith = require('metalsmith'),
    _ = require('lodash'),

    skip = require('../lib/index'),
    utils = require('../lib/utils');

describe('metalsmith-skip', function() {
  it('should remove files marked for skip from output', function(done) {
    Metalsmith('spec/fixture')
      .use(skip({keys: ["skip", "draft"]}))
      .build(function(err) {
        if (err) return done(err);
        dirEqual('spec/fixture/expected', 'spec/fixture/build');
        done();
      });
  });
});

describe('utils', function() {
  describe('#truthy_pairs', function() {
    it('should only return the part of the object with truthy values', function() {
      var length_2 = { another: true, skip: true, draft: false, blah: "green" };
      var result = utils.truthy_pairs(length_2);

      assert.equal(_.keys(result).length, 2);
    });
  });

  describe('#relevant_pairs', function() {
    it('should only return the part of the object that match the keys given', function() {
      var keys_to_check = ["skip", "draft"];
      var length_2 = { another: true, skip: true, draft: false, blah: "green" };
      var result = utils.truthy_pairs(length_2);

      assert.equal(_.keys(result).length, 2);
    });
  });

  describe('#contains_truthy', function() {
    var check_array = ["skip", "draft"];
    var opts_true = { skip: true, draft: false, blah: "green" };
    var opts_false = { skip: false, draft: false, blah: "green" };
    var opts_empty = { blah: "green" };

    it('should reduce true keys to true', function() {
      assert.equal(utils.contains_truthy(opts_true, check_array), true);
    });

    it('should reduce false keys to false', function() {
      assert.equal(utils.contains_truthy(opts_false, check_array), false);
    });

    it('should reduce empty options to false', function() {
      assert.equal(utils.contains_truthy(opts_empty, check_array), false);
    });
  });
});
