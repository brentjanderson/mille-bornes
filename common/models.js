/*
{
	created_on,
	extension: boolean
}
*/
Games = new Meteor.Collection("games");

/*
{
	name: "Card Name", 
	image:"Path to image", 
	type:(hazard|remedy|safety|distance),
	code: string, // Describes the specific card (10 for distance 10, accident for hazard, etc.)
	player: player_id, // If null, then it's in the deck
	played: boolean, // True (On the board/used then discarded), false (In the hand),
	bonus: boolean, // "Coup-fourré" - played in direct response to hazard, worth more
	game: game_id
}
*/
Cards = new Meteor.Collection("cards");

/**
{
	name: "String",
	game_id: identifier,
	points: integer
}
**/
Players = new Meteor.Collection("players");

Meteor.methods({
	'cards.removeAll': function() {
		Cards.remove({});
	}
});