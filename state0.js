var demo = {};

demo.state0 = function (){};
demo.state0.prototype = {
    preload: function(){},
    create: function(){
        game.stage.backgroundColor = '#DDDDDD';
        console.log('state0');
        // this function is added to every state
        // listens for a keypress and interperates it as a state change
        addChangeStateEventListeners();

        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    },

    update: function(){}
    
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
	//console.log(i);
	game.state.start('state' + stateNum);
}