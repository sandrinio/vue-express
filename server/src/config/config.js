/* eslint-disable */
module.exports = {
  port: process.env.PORT || 8081,
	db: {
  	 database: process.env.DB_NAME || 'vue-express',
		 user: process.env.DB_USER || 'vue-express',
		 password: process.env.DB_PASS || 'vue-express',
		 options: {
				dialect: 'sqlite',
			  host: process.env.HOST || 'localhost',
			  storage: './vue-express.sqlite',
				operatorsAliases: false
		 }
	},
	authentication: {
  	 jwtSecter: process.env.JWT_SECRET || 'secret'
	}
}
