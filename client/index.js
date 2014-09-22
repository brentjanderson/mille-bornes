var _tempDeck = [];

Template.index.cards = function() {
	return Cards.find();
};

function addCard(card, count) {
	_tempDeck.push(card);
	count--;
	if (count > 0) {
		addCard(card, count);
	}
}

function shuffle(array) {
    var tmp, current, top = array.length;

    if(top) while(--top) {
    	current = Math.floor(Math.random() * (top + 1));
    	tmp = array[current];
    	array[current] = array[top];
    	array[top] = tmp;
    }

    return array;
}

Template.index.events({
	'click button': function(e, t) {
		Meteor.call("cards.removeAll");

		// Generate a deck
		_tempDeck = [];

		// Hazards: Accident (3) Gas (3) Tire (3) Stop (5) SpeedLimit (4)
		addCard({name: "Accident", type: "hazard", code: "accident"}, 3);
		addCard({name: "Out of Gas", type: "hazard", code: "gas"}, 3);
		addCard({name: "Flat Tire", type: "hazard", code: "tire"}, 3);
		addCard({name: "Stop", type: "hazard", code: "stop"}, 5);
		addCard({name: "Speed Limit", type: "hazard", code: "limit"}, 4);
		
		// Remedies: Repair (6) Gas (6) Tire (6) Go (14) SpeedLimit (6)
		addCard({name: "Repairs", type: "remedy", code: "repair"}, 6);
		addCard({name: "Gasoline", type: "remedy", code: "gas"}, 6);
		addCard({name: "Spare Tire", type: "remedy", code: "tire"}, 6);
		addCard({name: "Go", type: "remedy", code: "go"}, 14);
		addCard({name: "End of Limit", type: "remedy", code: "limit"}, 6);

		// Safeties: Ace (1) Tank (1) Puncture (1) Right of way (1)
		addCard({name :"Driving Ace", type: "safety", code: "ace"}, 1);
		addCard({name :"Extra Tank", type: "safety", code: "gas"}, 1);
		addCard({name :"Puncture Proof", type: "safety", code: "tire"}, 1);
		addCard({name :"Right of Way", type: "safety", code: "limit"}, 1);

		// Distance: 25/50/75 (10 each), 100 (12), 200 (4)
		addCard({name :"25 Km", type: "distance", code: "25"}, 10);
		addCard({name :"50 Km", type: "distance", code: "50"}, 10);
		addCard({name :"75 Km", type: "distance", code: "75"}, 10);
		addCard({name :"100 Km", type: "distance", code: "100"}, 12);
		addCard({name :"200 Km", type: "distance", code: "200"}, 4);

		// Shuffle the deck
		_tempDeck = shuffle(_tempDeck);

		for (var i = _tempDeck.length - 1; i >= 0; i--) {
			Cards.insert(_tempDeck[i]);
		};
	}
});