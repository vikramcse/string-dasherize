var stringDasherize = require('./index.js');
var expect = require('chai').expect;

describe('tests for string dasherize', function() {
  it('should return dasherize text provided camalized one', function() {
    expect(stringDasherize('frontEnd')).to.be.eql('front-end');
  });

  it('should return dasherize text provided only first letter capitalized', function() {
    expect(stringDasherize('FrontEnd')).to.be.eql('-front-end');
  });

  it('should return dasherize text provided underscored one', function() {
    expect(stringDasherize('-front_end')).to.be.eql('-front-end');
  });

  it('should return dasherize text provided underscored one', function() {
    expect(stringDasherize('_front_end')).to.be.eql('-front-end');
  });
});
