function Deck() {
	
	suits = ["spades", "diamonds", "hearts", "clubs"];
	names = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"];

	this.card = [];
	this.card_left = 0;
	this.deck = function() {
		for (var suit in suits) {
	        for (var name in names) {
	        	var card = {
	        		suit: suits[suit], 
	        		name: names[name]
	        	}
	            this.card.push(card);
	        }
	    }
	    console.log(this.card);
    }

    this.shuffle = function() {
    	for(var i = this.card.length - 1; i > 0; i--) {
    		var j = Math.floor(Math.random()*(i+1));
    		var temp = this.card[i];
    		this.card[i] = this.card[j];
    		this.card[j] = temp;

    	}
    	console.log(this.card);
    }

    Deck.prototype.deal = function() {
    	if(this.card_left == this.card.length){
    		return null;
    	}



    	var random = Math.floor(Math.random()*(this.card.length - this.card_left));
    	var temp = this.card[random];
    	this.card[random] = this.card[this.card.length - this.card_left - 1];
	    this.card[this.card.length - this.card_left - 1] = temp;
	    this.card_left++;

	    console.log(temp);
	    return temp;

    }

    this.restart = function() {
    	this.deck();
    	console.log(this.card);
    }   
}


function Player(name){
	this.name = name;
	this.hand = [];

	Player.prototype.takeCard = function(Deck) {
		this.hand.push(Deck.deal());
		console.log(this.hand)
	}

	Player.prototype.discard = function() {
		this.hand.pop(this.hand);
	}






}









deck1 = new Deck();
player1 = new Player("Danny");

deck1.deck();
deck1.shuffle();
// deck1.deal();
// deck1.deal();
deck1.deal();
player1.takeCard(deck1);
player1.takeCard(deck1);
