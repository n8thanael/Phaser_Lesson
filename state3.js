var b1;
var b2;
var b3;
var wario;  // wario sprite object



demo.state3 = function (){};
demo.state3.prototype = {
    preload: function(){
    	game.load.spritesheet('wario','assets/sprites/wario.png', 250, 500);
		game.load.spritesheet('button1', 'assets/sprites/Button_1.png', 300, 300, 4 );
		game.load.spritesheet('button2', 'assets/sprites/Button_2.png', 300, 300, 4 );
		game.load.spritesheet('button3', 'assets/sprites/Button_3.png', 300, 300, 4 );
    },
    create: function(){
        game.stage.backgroundColor = '#FF00FF';
        console.log('state3');
        addChangeStateEventListeners();

        b1 = game.add.button(100,100, 'button1', function(){
    		changeState(this, 0);
        }, this, 1, 0, 3);

        b2 = game.add.button(400,100, 'button2', function(){
    		changeState(this, 1);
        }, this, 1, 0, 3);

        b3 = game.add.button(800,100, 'button3', function(){
    		changeState(this, 2);
        }, this, 1, 0, 3);



    }
};