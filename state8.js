demo.state8 = function (){};
demo.state8.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#FF00FF';
        console.log('state8');
        addChangeStateEventListeners();
    },
    update: function(){}
};