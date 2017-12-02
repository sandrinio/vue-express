/* eslint-disable */
const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')


module.exports = (app) => {
	 app.post('/register',
			 AuthenticationControllerPolicy.register,
			 AuthenticationController.register)

	 app.post('/login',
			 AuthenticationController.login)

	 app.get('/songs', (req, res) => {
	 	 songs = [
	 	 		{
					title: 'Test 1',
					artist: 'Test 1',
					album: 'Test 1'
		 		},
				{
					title: 'Test 2',
				  artist: 'Test 2',
					album: 'Test 2'
				}
		 ]

	 	 res.send(songs)
	 })
}
