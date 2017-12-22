/* eslint-disable */
const {Song} = require('../models')

module.exports = {

	 async getAllSongs (req, res) {
			try {
				 let songs = null;
				 const search = req.query.search

				 if (search){
						songs = await Song.findAll ({
							 where: {
							 	 $or: [
							 	 		'title', 'artist', 'genre', 'album'
								 ].map(key => ({
										[key]: {
											 $like: `%${search}%`
										}
								 }))
							 }
						})
				 }else{
						songs = await Song.findAll ({
							 limit: 10
						})
				 }
				 res.send(songs)
			} catch(err) {
				 console.log(err)
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
		},

		async showSong (req, res) {
				try {
				 const song = await Song.findById(req.params.songId)
					 res.send(song)
				}catch(err){
					 res.status(500).send({
							error: 'Song not found'
					 })
				}
		},

	 async editSong (req, res) {
	 	 try {
	 	 	 const song = await Song.update(req.body, {
	 	 	 	 where: {
	 	 	 	 	 id: req.params.songId
				 }
			 })
				res.send(req.body)
		 }catch(err){
	 	 	 res.status(500).send({
					error: 'something went wrong with update...'
			 })
		 }
	 }

}

