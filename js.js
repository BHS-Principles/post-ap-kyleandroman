alert("????");

var TEMP = document.getElementById("temp");
var CARD = TEMP.querySelector(".card");
var TARGET = document.getElementById("target");

class Game{
    constructor( players, deck){
       this.turnCount        =3;
       this.turn             =0;
       this.activeplayer     =players[0];
    

        this.play();

    };
    notOver = function(){
        return this.turn++ == 2;

    }
    play = function(){
        //step 1: shuffle deck..........
        this.deck.shuffle();
    for(var i = 0; i < this.players.length; i++)
        this.deck.deal(this.players[0]);

    while( this.notOver() ){
        alert(" time to do things");
    }


        alert("WEEeEee ts so fun");
    };
}




class Player{
    constructor(name){
        
    }


}



class Deck{
    constructor(num){
        this.cardCount = num;
        this.cards = [];
        makeDeck();
    }
    make(){
        for(var i = 0; i < this.cardCount; i++){
            var card = new Card(i);
            this.cards.push( card );
        }

        return this.cards;
    }
shuffle(){
    alert("I shuffled or sm!");
}
}



class Card{
    constructor(num){
        this.id = num;
        this.suit = num;
        this.val = num;
        this.background = "mine.svg";
        this.suits = ["H", "S", "C", "D"];


    }


}


for(var i=0; i < 5; i++){
    var copyCard = CARD.cloneNode(true);
    cardcopy.innerHTML = "silver:" + i;
    cardCopy.style.backgroundPositionX = (i) + "00%";
    cardCopy.style.backgroundPositionY = Math.floor(i/13) + "00%";
    TARGET.append(copyCard);

}

    class Card{
        constructor(num){
            this.id =    num;
            this.suit =  num;
            this.val =   num;
            this.background = "mine.svg";

        }

        getSuit(){
            return suit;
        }

        getDom(){
             var copyCard = CARD.cloneNode(true);
    cardcopy.innerHTML = "silver:" + this.id;
    cardCopy.style.backgroundPositionX = (this.id) + "00%";
    cardCopy.style.backgroundPositionY = Math.floor(this.id/13) + "00%";
    
    return cardCopy;
}
    }

    var makeDeck = function(howMany){
    var deck = [];

    for(var i = 0; i < howMany; i++){
        var card = new Card(i);
        deck.push( card );
    }

    return deck;
}

var shuffledDeck = function(deck){
  
  for(Var i = 0; i < deck.length; i++){
    var rnd = Math.floor(Math.random() * deck.length);
    var card1 = deck[i];
    var card2 = deck[rnd];
    deck[i] = card2;
    deck[rnd] = card1;


  }
  
  
  
  
    var cards = [];
  for(var i = 0; i < x; i++){
    cards.push(i);
}
for(var i = 0; i < x; i++){
    var rnd = Math.floor(Math.random()*x);
    var tmp = cards[rnd];
    cards[rnd] = cards[i];
    cards[i] = tmp;    
}


}


var DECK = new Deck(52);
DECK.shuffle();
Deck.deal();