const { Pool } = require('pg')
const fs = require('fs')
const path = require('path')
const config = JSON.parse( fs.readFileSync( path.join(__dirname, '../config.json') ) )
const pool = new Pool({
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
})

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
}