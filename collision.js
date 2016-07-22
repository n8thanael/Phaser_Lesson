var demo = {};
var maxX = 1500;
var maxY = 1000;
var centerX = maxX / 2;
var centerY = maxY / 2;
var player;  // wario sprite object
var speed = 10;

    var player;
    var cube;
    var bar;
    var platforms;
    var cursors;

demo.collision = function (){};
demo.collision.prototype = {
    preload: function(){
        console.log('collision test');
        game.load.image('cube','assets/backgrounds/cube.png', 500,500);
        game.load.image('bar','assets/backgrounds/bar.png', 500, 500);
        game.load.image('firstaid','assets/Sprites/firstaid.png', 100, 100);

    },
    create: function(){
    game.physics.startSystem(Phaser.Physics.ARCADE);
    
    platforms = game.add.group(); //////////------------------------------------------
    platforms.enableBody = true;  //////////------------------------------------------
    
    cube = platforms.create(500, 0, 'cube');  //////////------------------------
    cube.body.immovable = true;  //////////-------------------------------------------
    
    
    bar = platforms.create(1300,0, 'bar');
    bar.body.immovable = true;  //////////-------------------------------------------
    
    player = game.add.sprite(100, game.world.height - 500, 'firstaid');
    
    game.physics.arcade.enable(player);    //////////-------------------------------------------
    player.body.collideWorldBounds = true;
    
    cursors = game.input.keyboard.createCursorKeys();   


    },
    update: function(){

   
    game.physics.arcade.collide(player, platforms);
    player.body.velocity.x = 0;

    
    
    if (cursors.up.isDown ){
        player.body.velocity.y = -150;
    }
    
    if(cursors.left.isDown)
    {
        player.body.velocity.x = -150;
    }
    
    else if(cursors.right.isDown)
    {
        player.body.velocity.x = 150;
    }

    else if(cursors.down.isDown)
    {
        player.body.velocity.y = 150;
    }
    




    }
    
};


