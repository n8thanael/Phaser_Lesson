var barrel;
var bullets;
var nextFire = 0;
var fireRate = 300;
var velocity = 1000;
var enemy;
var bullet;

demo.state2 = function (){};
demo.state2.prototype = {
    preload: function(){
        game.load.image('base', 'assets/sprites/base.png');
        game.load.image('cannon', 'assets/sprites/cannon.png');
        game.load.image('bullet', 'assets/sprites/bullet.png');
    },
    create: function(){
        game.stage.backgroundColor = '#FF00FF';
        addChangeStateEventListeners();

        var base = game.add.sprite(centerX,centerY, 'base');
        base.anchor.setTo(0.5,0.5);
        base.scale.setTo(0.4)

        bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple('50','bullet');
        bullets.setAll('checkWorldBounds', true);
        bullets.setAll('outOfBoundsKill', true);
        bullets.setAll('scale.x', 2);
        bullets.setAll('scale.y', 2);
        bullets.setAll('anchor.y' , 2.5);
        bullets.setAll('anchor.x' , 0.5);

        barrel = game.add.sprite(centerX, centerY, 'cannon');
        barrel.scale.setTo(2.5);
        barrel.anchor.setTo(0.5,.75);
        // barrel.rotation = 1.5708;
        // barrel.alpha = 0.3;

        enemy = game.add.sprite(100,200, 'wario');
        game.physics.enable(enemy);

        enemyGroup = game.add.group();
        enemyGroup.enableBody = true;
        enemyGroup.physicsBodyType = Phaser.Physics.ARCADE;

        for(var i = 0; i < 3; i++){
        	enemyGroup.create(1300, 100 + (i * 100), 'wario');
        }

        enemyGroup.setAll('anchor.y', 0.5);
        enemyGroup.setAll('anchor.x', 0.5);
        enemyGroup.setAll('scale.x', 0.4);
        enemyGroup.setAll('scale.y', 0.4);
        

    },
    update: function(){
    	barrel.rotation = game.physics.arcade.angleToPointer(barrel) + 1.5708;
    	if(game.input.activePointer.isDown) {
    		this.fire();
    	}

    	game.physics.arcade.overlap(bullets, enemy, this.hitEnemy);
    	game.physics.arcade.overlap(enemyGroup, bullets, this.hitGroup);
    },

    fire: function(){
    	if(game.time.now > nextFire){
    		nextFire = game.time.now + fireRate;
	    	console.log('firing');
	    	bullet = bullets.getFirstDead();
	    	bullet.reset(barrel.x, barrel.y);
	    	game.physics.arcade.moveToPointer(bullet,velocity);
	    	bullet.rotation = game.physics.arcade.angleToPointer(barrel)  + 1.5708;
	    	this.barrelBlast();
    	}

    },

    barrelBlast: function(){
    	game.add.tween(barrel).from( {y: (centerY - 5), x: (centerX - 5)}, 300, Phaser.Easing.Circular.InOut, true);
    },

    hitEnemy: function(){
    	console.log('dead');
    	enemy.kill();
    	bullet.kill();
    },

    hitGroup: function(e){
    	bullet.kill();
    	e.kill();
    }

};