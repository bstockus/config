var path = require('path'), config;

config = {
	production: {
		url: process.env.BLOG_URL,
		mail: {
			transport: 'SMTP',
			options: {
				service: 'Gmail',
				auth: {
					user: process.env.MAIL_USERNAME,
					pass: process.env.MAIL_PASSWORD
				}
			}
		}, database: {
			client: 'pg',
			connection: {
				host: process.env.POSTGRESQL_PORT_5432_TCP_ADDR,
				user: process.env.DB_USER,
				password: process.env.DB_PASSWORD,
				database: process.env.DB_DATABASE,
				charset: process.env.DB_CHARSET
			}
		}, server: {
			host: '0.0.0.0',
			port: '2368'
		}
	}
}

// Export config
module.exports = config;