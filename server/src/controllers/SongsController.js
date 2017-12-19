/* eslint-disable */
const {Song} = require('../models')

module.exports = {

	 async getAllSongs (req, res) {
			try {
				 const songs = await Song.findAll ({
						limit: 10
				 })
				 res.send(songs)
			} catch(err) {
				 res.status(500).send({
						error: 'an error occurred'
				 })
			}
	 },
 async post (req, res) {
 	 try {
			const song = await Song.create(req.body)
	 } catch(err) {
			res.status(500).send({
				 error: 'an error occurred'
			})
	 }
 }
}

