var fireball;

demo.state6 = function (){};
demo.state6.prototype = {
    preload: function(){
    	game.load.image('bowserTop', 'assets/sprites/bowsertop.png');
    	game.load.image('bowserBottom', 'assets/sprites/bowserbottom.png');
    	game.load.spritesheet('fireball', 'assets/sprites/fireball.png', 64, 64);
    },
    create: function(){
        game.stage.backgroundColor = '#FF00FF';
        console.log('state6');
        addChangeStateEventListeners();
        var bowserBottom = game.add.sprite(120, 450, 'bowserBottom');

        fireball = game.add.sprite(200,200, 'fireball');
        fireball.animations.add('fireball', [0, 1, 2 ,3]);


        var emitter = game.add.emitter(350,700,3000);
        emitter.makeParticles('fireball', 0, 3000, false, true);
        emitter.maxParticleSpeed.set(800,70);
        emitter.minParticleSpeed.set(300,-70);
        emitter.gravity = -50;
        emitter.bounce.setTo(0.5, 0.5);
        emitter.maxRotation = 1080;
        emitter.minRotation = 360;


        game.time.events.add(2000, function(){
        	emitter.start(false, 2000, 10);
        	game.time.events.loop(2000, function () {
        		if(emitter.on){
        			emitter.on = false;
        		} else {
        			emitter.on = true;
        		}
        	});
        });

        var bowserTop = game.add.sprite(120, 450, 'bowserTop');


    },
    update: function(){
		fireball.animations.play('fireball', 10, true);
    }
};