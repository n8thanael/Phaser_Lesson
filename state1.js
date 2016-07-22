

demo.state1 = function (){};

var cursors;
var vel = 500;
var rocks;
var forest;
var grass;
var map;

demo.state1.prototype = {
    preload: function(){
        game.load.tilemap('fieldmap', 'assets/tilemaps/fieldmap.json', null, Phaser.Tilemap.TILED_JSON);
        game.load.image('grass', 'assets/tilemaps/grass.png');
        game.load.image('forest', 'assets/tilemaps/forest.png');
        game.load.image('rocks','assets/tilemaps/rocks.png');
        game.load.spritesheet('wario', 'assets/sprites/wario.png', 250,500);		
    },
    create: function(){
    	game.physics.startSystem(Phaser.Physics.ARCADE)
        game.stage.backgroundColor = '#FF00FF';
        addChangeStateEventListeners();

        map = game.add.tilemap('fieldmap');
        map.addTilesetImage('grass');
        map.addTilesetImage('forest');
        map.addTilesetImage('rocks');

        grass = map.createLayer('grass');
        forest = map.createLayer('forest');
        rocks = map.createLayer('rocks');

        map.setCollision(11, true, 'rocks');
        map.setCollisionBetween(1,9, true, 'forest');

        wario = game.add.sprite(200,200, 'wario');
        wario.scale.setTo(0.1,0.1);
        wario.animations.add('walk', [1, 2 ,3]);
        game.physics.enable(wario);

        cursors = game.input.keyboard.createCursorKeys();

    },
    update: function(){
    	var walk = false;
		game.physics.arcade.collide(wario,forest, function(){console.log('forest'); })
		game.physics.arcade.collide(wario,rocks, function(){console.log('rocks'); })

        // console.log(map.getTile(wario.x,wario.y));



		if(cursors.up.isDown){
			wario.body.velocity.y = -vel;
    		walk = true;
		}
		else if(cursors.down.isDown){
			wario.body.velocity.y = vel;
    		walk = true;
		} else {
			wario.body.velocity.y = 0;
    		walk = false;
		}
		if(cursors.left.isDown){
			wario.body.velocity.x = -vel;
    		walk = true;
		}
		else if(cursors.right.isDown){
			wario.body.velocity.x = vel;
    		walk = true;
		} else {
			wario.body.velocity.x = 0;
    		walk = false;
		}

		if (!walk) {
    		wario.animations.stop('walk');
    		wario.frame = 0 ;	
     	} else {
			wario.animations.play('walk', 12, true);
     	}	

    }
};