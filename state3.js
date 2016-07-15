demo.state3 = function (){};
demo.state3.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#FF00FF';
        console.log('state3');
        addChangeStateEventListeners();
    },
    update: function(){}
};