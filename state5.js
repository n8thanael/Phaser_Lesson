var accel = 600;
var platform;
var platformGroup;

demo.state5 = function (){};
demo.state5.prototype = {
    preload: function(){
    	game.load.image('platform', 'assets/sprites/platform.png');
	},
    create: function(){
        game.stage.backgroundColor = '#FF00FF';
        console.log('state5');
        addChangeStateEventListeners();

        wario = game.add.sprite(centerX, 500, 'wario');
        wario.scale.setTo(0.5,0.5);
        platform = game.add.sprite(0, 800, 'platform');
        platformGroup = game.add.group();
        platformGroup.create(650, 400, 'platform');
        platformGroup.create(1300, 400, 'platform');
        game.physics.enable([wario, platform, platformGroup]);


        wario.body.gravity.y = 500;
        wario.body.bounce.y = 0.3;
        wario.body.collideWorldBounds = true;
        wario.body.drag.x = 400;

        platform.body.immovable = true;
        platformGroup.setAll('body.immovable', true);	


    },
    update: function(){
    		game.physics.arcade.collide(wario, [platform, platformGroup]);
    		if(game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
    			wario.body.acceleration.x = -accel;
    		} else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
    			wario.body.acceleration.x =  accel;
    		} else {
    			wario.body.acceleration.x = 0
    		}

    		if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
    			wario.body.velocity.y = -300;
    		}


    }
};