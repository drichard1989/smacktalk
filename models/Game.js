'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// player ids, friends (id, name, picture, flipped status for both players), whose turn it is
var GameSchema = new Schema({
	player_ids: [{
		player_id: {
			type: String,
			require: true
		}
	}],
	friends: [
		{
			friend_id: {
				type: String,
				require: true
			},
			friend_name: {
				type: String,
				require: true
			},
			friend_picture: {
				type: String,
				require: true
			},
			flipped_status: [
				{
					player_id: {
						type: String,
						require: true
					},
					status: {
						type: Boolean,
						require: true
					}
				}
			]
		}

	],
	in_progress: {
		type: Boolean,
		default: true
	},
	winner_id: {
		type: String
	},
	loser_id: {
		type: String
	}
});

var Game = mongoose.model("Game", GameSchema);

module.exports = Game;