require('dotenv').config()
module.exports = {
  development: {
    database: "tajj_database",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    database: "tajj_database",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    use_env_variable: "DATABASE_URL",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
