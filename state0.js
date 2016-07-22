var demo = {};
var maxX = 1500;
var maxY = 1000;
var centerX = maxX / 2;
var centerY = maxY / 2;
var wario;  // wario sprite object
var speed = 10;
var background_1_overlay;
var background_1;
var background_1_collision;
var background_1_collision_part;
var collisiongroup;

demo.state0 = function (){};
demo.state0.prototype = {
    preload: function(){
    	game.load.spritesheet('wario','assets/sprites/wario.png', 250, 500);
    	game.load.image('background_1','assets/backgrounds/background_1.png');
        game.load.image('background_1_collision','assets/backgrounds/background_1_collision.png');
        game.load.image('background_1_collision_part','assets/backgrounds/background_1_collision_part.png');
        game.load.image('background_1_overlay','assets/backgrounds/background_1_overlay.png');
    },
    create: function(){
    	game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#DDDDDD';
        // this function is added to every state
        // listens for a keypress and interperates it as a state change
        addChangeStateEventListeners();

        // background sprite is set to start at top left corner: 0,0 and ends at right corner: 4267,1000
        game.world.setBounds(0,0,4267,1000);

        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;


        background_1 = game.add.sprite(0,0, 'background_1');

        collisiongroup = game.add.group();
        collisiongroup.enableBody = true;
        background_1_collision_part = collisiongroup.create(0,0, 'background_1_collision_part');
        background_1_collision_part.body.immovable = true;

        wario = game.add.sprite(550, 380, 'wario');
        game.physics.arcade.enable(wario);
        wario.anchor.setTo(0.5, 0.5);
        wario.scale.setTo(0.5, 0.5);
        wario.animations.add('walk', [1, 2 ,3]);



        wario.body.collideWorldBounds = true;

        background_1_overlay = game.add.sprite(0,0, 'background_1_overlay')
        game.camera.follow(wario);
        game.camera.deadzone = new Phaser.Rectangle(centerX - 300, 0, 600, 1000);


    },

    update: function(){

        game.physics.arcade.collide(wario, collisiongroup);

        if (wario.y < 550) {
            game.world.bringToTop(background_1_overlay);
        } else {
            game.world.bringToTop(wario);
        }
    	var walk = false;
    	if(game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)){
        	wario.scale.setTo(0.5, 0.5);
    		wario.x += speed;
    		walk = true;
    	} else if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)){
        	wario.scale.setTo(-0.5, 0.5);
    		wario.x -= speed;
    		walk = true;
    	} if (game.input.keyboard.isDown(Phaser.Keyboard.UP)  && wario.y > 390){
     		wario.y -= speed;
    		walk = true;
    	} else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN) && wario.y < 700){
    		wario.y += speed;
    		walk = true;    			
     	} if (!walk) {
    		wario.animations.stop('walk');
    		wario.frame = 0 ;	
     	} else {
			wario.animations.play('walk', 12, true);
     	}
    }
    
};


// all keypresses are mapped within here to pass and argument to the call back function: addKeyCallback
// this in turn calls the changeState function and executes the actual state change.
function addChangeStateEventListeners(){
	addKeyCallback(Phaser.Keyboard.ZERO, changeState, 0);
	addKeyCallback(Phaser.Keyboard.ONE, changeState, 1);
	addKeyCallback(Phaser.Keyboard.TWO, changeState, 2);
	addKeyCallback(Phaser.Keyboard.THREE, changeState, 3);
	addKeyCallback(Phaser.Keyboard.FOUR, changeState, 4);
	addKeyCallback(Phaser.Keyboard.FIVE, changeState, 5);
	addKeyCallback(Phaser.Keyboard.SIX, changeState, 6);
	addKeyCallback(Phaser.Keyboard.SEVEN, changeState, 7);
	addKeyCallback(Phaser.Keyboard.EIGHT, changeState, 8);
	addKeyCallback(Phaser.Keyboard.NINE, changeState, 9);

}

function addKeyCallback(key, fn, args){
	 game.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

// Is called by addChageStateEventListeners and recieves the state number to change.
function changeState(i, stateNum) {
	console.log('state' + stateNum);
	game.state.start('state' + stateNum);
}