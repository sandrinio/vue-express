/* eslint-disable */
const {User} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

function jwtSignUser(user) {
	 const ONE_WEEK = 60 * 60 * 24 * 7
	 return jwt.sign(user, config.authentication.jwtSecter, {
	 	 expiresIn: ONE_WEEK
	 })
}

module.exports = {
 async register (req, res) {
 	 console.log(req.body)
 	 try{
   	const user = await User.create(req.body)
			res.send(user.toJSON())
			console.log(user)
	 }catch (err){
 	 	 res.status(400).send({
				error: 'Email already in use'
		 })
	 }
 },

  async login (req, res) {
 	 const {email, password} = req.body
		 try{
				const user = await User.findOne({
					 where: {
					 	 email: email
					 }
				})
				if(!user) {
					return res.status(403).send({
							error: 'login information is incorrect'
					 })
				}

				const isPasswordValid = await user.comparePassword(password)
				if(!isPasswordValid){
					return res.status(403).send({
							error: 'login information is incorrect'
					 })
				}
				return res.send({
					 user: user.toJSON(),
					 token: jwtSignUser(user.toJSON())
				})
		 }catch (err){
				res.status(500).send({
					 error: 'invalid login information'
				})
		 }
 }
}

