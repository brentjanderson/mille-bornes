Template.board.helpers({
	safety: function() {
		return Cards.find({type: 'safety'});
	},
	distance: function() {

	},
	battle: function() {
		return Cards.find({type: 'hazard'},{limit: 1});
	},
	speed: function() {
		return Cards.find({type: 'hazard', code: 'limit'},{limit: 1});
	},
	
})