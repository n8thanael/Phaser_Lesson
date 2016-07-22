var arrow;
var startPointX;
var startPointY;
var endPointX;
var endPointY;
var swipedDirection;
var leeway = 20;
var originalArrowOrientation = -90;

demo.state7 = function (){};
demo.state7.prototype = {
    preload: function(){
    	game.load.image('arrow', 'assets/sprites/arrow.png');
    },
    create: function(){
        game.stage.backgroundColor = '#FF00FF';
        console.log('state7');
        addChangeStateEventListeners();

        arrow = game.add.sprite(centerX, centerY, 'arrow');
        arrow.anchor.setTo(0.5);

        game.input.onDown.add(this.startSwipe);
        game.input.onUp.add(this.getSwipeDirection);
    },
    update: function(){
    },
 
  	startSwipe: function(){
    		console.log(game.input.x + " " + game.input.y);
    		startPointX = game.input.x;
    		startPointY = game.input.y;
    },
 
   	getSwipeDirection: function(){
    		console.log(game.input.x + ' ' + game.input.y);
    		endPointX = game.input.x;
    		endPointY = game.input.y;

    		if(Math.abs(endPointY - startPointY) < leeway && Math.abs(endPointX - startPointX) < leeway){
    			return false;
    		}

    		if(Math.abs(endPointY - startPointY) < Math.abs(endPointX-startPointX)){
    			console.log('horizontal');
    			if (endPointX > startPointX){
    				swipeDirection = 90 + originalArrowOrientation;
    			} else {
    				swipeDirection = 270 + originalArrowOrientation;
    			}
    		} else {
    			console.log('vertical');
    			if (endPointY > startPointY){
    				swipeDirection = 180 + originalArrowOrientation;
    			} else {
    				swipeDirection = 0 + originalArrowOrientation;
    			}
    		}

    		arrow.angle = swipeDirection;
   	}
 
};