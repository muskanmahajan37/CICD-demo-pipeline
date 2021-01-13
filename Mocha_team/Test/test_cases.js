var chai = require('chai')
var expect = require('chai').expect

var logic = require('../default_test')


describe('CASE',function(){
    it('Case should run' , function(){
        expect(logic()).to.eql('hello there');
    })
     it('2nd Case is running' , function(){
        expect(logic()).to.eql('hello there');
    })
     it('3rd Case is running' , function(){
        expect(logic()).to.eql('hello');
    })
})
