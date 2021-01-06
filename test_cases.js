var chai = require('chai')
var expect = require('chai').expect

var logic = require('default_test')


describe('CASE',function(){
    it('Case should run' , function(){
        expect(logic()).to.eql('hello there');
    })
})
