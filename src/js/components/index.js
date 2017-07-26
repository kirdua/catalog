var React = require('react');
var Catalog = require('./app-catalog');
var Cart = require('./app-cart');
var Index =
  React.createClass({
    render:function(){
      return <div> Shop with React & Flux!
                <Catalog />
				<br/>
				<h1>Your cart</h1>
				<Cart />
             </div>
    }
  });
module.exports = Index;
