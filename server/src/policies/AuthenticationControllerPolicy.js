/* eslint-disable */
const Joi = require('joi')

module.exports = {
	 register(req, res, next) {
	 	 const schema = {
	 	 	 email: Joi.string().email(),
			 password: Joi.string().regex(
			 		new RegExp('^[a-zA-Z0-9]{8,32}$')
			 )
		 }
		 const {error, value} = Joi.validate(req.body, schema)
			if(error){
	 	 	 switch (error.details[0].context.key) {
					case 'email':
						res.status(400).send({
							 error: 'please provide a valid email'
						})
						 break
					case 'password':
						 res.status(400).send({
								error: 'please provide a valid password'
						 })
						 break
					default:
						 res.status(400).send({
								error: 'Invalid Registration Info'
						 })
			 }
			}else{
				 console.log(req.body)
				next()
			}
	 },
	 login(req, res, next){
	 	 res.status(200).send({msg: `well done :) ${req.body.email}`})
	 }
}