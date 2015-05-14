var test = require('tape');
var helper = require('./helper');
var d3Extended = helper.getD3Extended();

test('add p node after div', function(t){

  t.plan(1);

  var testDiv = helper.createDOMwithTestNode();

  testDiv.after('p');

  var addedNode = d3Extended.select('p').node();

  t.ok(addedNode === document.body.lastChild);
});