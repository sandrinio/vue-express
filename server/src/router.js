/* eslint-disable */
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')


module.exports = (app) => {
	 app.post('/register',
			 AuthenticationControllerPolicy.register,
			 AuthenticationController.register)

	 app.post('/login',
			 AuthenticationController.login)

	 app.get('/songs',
			 SongsController.getAllSongs)

	 app.post('/songs',
			 SongsController.post)

	 app.get('/song/:songId',
			 SongsController.showSong)

	 app.put('/song/:songId',
			 SongsController.editSong)
}
