var text;
var text2;
var fontSize = 30;
var textMargins = 300;

WebFontConfig = {
	google: { families: ['Oswald', 'Yellowtail'] }
};

demo.state8 = function (){};
demo.state8.prototype = {
    preload: function(){
    	game.load.script('//ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont');

    },
    create: function(){
        game.stage.backgroundColor = '#FF00FF';
        console.log('state8');
        addChangeStateEventListeners();

  //      text = 'Howdie Earthball!';
      text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
      text2 = '17 Therefore, if anyone is in Christ, he is a new creation. [1] The old has passed away; behold, the new has come.  46 For if you love those who love you, what reward do you have? Do not even the tax collectors do the same? 47 And if you greet only your brothers, [1] what more are you doing than others? Do not even the Gentiles do the same? 48 You therefore must be perfect, as your heavenly Father is perfect.';

        this.spellOutText(textMargins, 200, 1000, text, fontSize, 20, '#fff', 'Oswald');
        this.spellOutText(textMargins, 600, 1000, text2, '20', 20, '#fff', 'Yellowtail');


    },

    update: function(){},

    spellOutText: function(x, y, width, text, fontSize, speed, fill, font){

    	// determine how many 'W characters will fit in this game.scale.screen
    	var FontWidthLetters = 'abcdefghijklmnopqrstuvwxyz';
        var maxTextWidth = game.stage.width - (textMargins * 2);
        var style = {font: fontSize + "px " + font};
        var CheckFontWidthTextByLetter = (game.add.text(0,100, FontWidthLetters, style));
        CheckFontWidthTextByLetter.alpha = 0;
        var SingleLetterWidth = parseInt((CheckFontWidthTextByLetter.width) / 26);
        var maxCharactersPerLine = parseInt(Math.abs(maxTextWidth / SingleLetterWidth));

    	var sentence = game.add.text(x, y, '', {fontSize: fontSize + 'px', fill: fill, font: font})

    	var index = 0 ;
    	var lineCount = 0;
    	function addChar(){
    		sentence.text += text[index];
    		lineCount++;

    		if(text[index] == ' ' && lineCount >= maxCharactersPerLine){
    			sentence.text += '\n';
    			lineCount = 0;
    		}

    		if(index >= text.length -1) {
    			game.time.events.remove(textLoop);
    			console.log('stop');
    		}

    		index++;
    	}

    	var textLoop = game.time.events.loop(speed, addChar);

    }
};