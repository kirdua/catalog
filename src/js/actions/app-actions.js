var AppConst = require('../constants/constants');
var AppDispatcher = require('../dispatchers/dispatcher');

var AppActions = {
  addItem:function(item){
    AppDispatcher.handleViewAction({
      actionType:AppConst.ADD_ITEM,
      item:item
    })
  },
  removeItem:function(index){
      AppDispatcher.handleViewAction({
        actionType:AppConst.REMOVE_ITEM,
        index:index
      })
  }
}

module.exports = AppActions;
