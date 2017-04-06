'use strict';

var User = require('../models/User.js');
var Game = require('../models/Game.js');

/*
	name: {
		type: String,
		required: true
	},
	picture: {
		type: String,
		required: true
	},
	wins: {
		type: Integer,
		default: 0
	},
	losses: {
		type: Number,
		default: 0
	},
	currentStreak: {
		type: Number,
		default: 0
	},
	longestStreak: {
		type: Number,
		default: 0
	},
	currentGames: [
		{
			type: Schema.Types.ObjectId,
			ref: "Game"
		}
	]
*/

module.exports = function (app) {
	app.post('/adduser', function (req, res) {
		console.log(req.body);

		var newUser = new User({
			name: req.body.name,
			picture: req.body.picture
		});

		newUser.save(function (err, doc) {
			if (err) throw err;

		});

		res.json({});
	});

	app.put('/addwin', function (req, res) {
		// console.log(req.body);

		// User.update({_id: req.body.id}, {$set: {}})
		User.find({ _id: req.body.id }, function (err, doc) {
			if (err) throw err;

			// User.update()
			// console.log(doc);
			var newWins = doc[0].wins + 1;
			var updatedStreak = doc[0].currentStreak + 1;
			if (updatedStreak > doc[0].longestStreak) {
				var newLongestStreak = updatedStreak;
				console.log("\nLongest streak updated\n");
			}

			User.update({ _id: req.body.id }, { $set: { wins: newWins, currentStreak: updatedStreak, longestStreak: newLongestStreak } }, function (err, doc) {
				if (err) throw err;
				
				console.log(doc);
				res.json({});
			});
		});

		Game.update({_id: req.body.game_id}, function(err, doc) {
			
		});
	});

	app.put('/addloss', function (req, res) {
		console.log(req.body);

		User.find({_id: req.body.id}, function(err, doc) {
			if (err) throw err;

			var newLosses = doc[0].losses + 1;

			User.update({_id: req.body.id}, {$set: {losses: newLosses, currentStreak: 0}}, function(err, doc) {
				if (err) throw err;

				console.log(doc);

				res.json({});
			});
		});
	});

	// app.put('/')
};