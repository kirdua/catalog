var AppConst = require('../constants/constants');
var AppDispatcher = require('../dispatchers/dispatcher');
var EventEmitter = require('events').EventEmitter;
var _ = require('underscore');

var CHANGE_EVENT = "change";

var _catalog = [
    {id:1, title:'Master ReactsJS', cost: 89},
    {id:2, title:'Master AngularJS', cost: 69},
    {id:3, title:'Master BackboneJS', cost: 89},
    {id:4, title:'April', cost: 199},
    {id:5, title:'Olivia', cost: 199}
];

var _cartItems = [];

function _removeItem(index){
  _cartItems[index].inCart = false;
  _cartItems.splice(index, 1);
}

function _addItem(item){
  if(!item.inCart){
    item['qty'] = 1;
    item['inCart'] = true;
    _cartItems.push(item);
  }
}

var ProductStore = _.extend({}, EventEmitter.prototype, {

  emitChange:function(){
    this.emit(CHANGE_EVENT)
  },

  addChangeListener:function(callback){
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener:function(callback){
    this.removeListener(CHANGE_EVENT, callback)
  },

  getCart:function(){
    return _cartItems
  },

  getCatalog:function(){
    return _catalog
  },
  dispatcher:AppDispatcher.register(function(payload){

     var action =payload.action;
      switch(action.actionType){
            case AppConst.ADD_ITEM:
             _addItem(payload.action.item);
                break;
            case AppConst.REMOVE_ITEM:
            _removeItem(payload.action.index);
            break;
          }

          ProductStore.emitChange();
          return true;

  })

});

module.exports = ProductStore;
