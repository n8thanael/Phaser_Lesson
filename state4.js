var randomX;
var randomY;

demo.state4 = function (){};
demo.state4.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#FF00FF';
        console.log('state4');
        addChangeStateEventListeners();

        warioSpriteGroup = game.add.group();

        for(var i = 0; i < 25; i++){
        	warioSpriteGroup.create(100 * (Math.random() * 10), 100 + (i * 5) + (Math.random() * 100), 'wario');
        }

        warioSpriteGroup.setAll('anchor.y', 0.5);
        warioSpriteGroup.setAll('anchor.x', 0.5);
        warioSpriteGroup.setAll('scale.x', 0.2);
        warioSpriteGroup.setAll('scale.y', 0.2);
         
        console.log(warioSpriteGroup);
        
    var wsgl = warioSpriteGroup.length;
	for(var i = 0; i < wsgl; i++) {
		game.add.tween(warioSpriteGroup.children[i]).to({y: this.randomYgen(), x: this.randomXgen()}, this.randomTimeGen(), 'Bounce', true).loop(true);
	}


    },
    update: function(){},

    randomXgen: function(){
    var r = Math.floor(Math.random() * (game.width - 200 + 1));
    return r;
    },

    randomYgen: function(){
    var r = Math.floor(Math.random() * (game.height - 50 + 1));
    return r;
    },

    randomTimeGen: function(){
    var r = Math.floor(Math.random() * (5000 - 200 + 1));
	return r;
    }

};