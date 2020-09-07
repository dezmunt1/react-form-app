const http = require("http")
const url = require("url")
const db = require('./db')

http.createServer(async (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*")
  response.setHeader("Access-Control-Allow-Headers", "X-Requested-With")

  const urlString = url.parse(request.url, true)
  const params = urlString.query

  if (urlString.pathname === '/api/login' && params.login && params.password ) {

    try {
      const res = await db.query('SELECT * FROM login')
      const {login, password} = res.rows[0]

      if (login === params.login && password === params.password) {
        return response.end(JSON.stringify( {success: true} ));
      }
      return response.end(JSON.stringify( {success: false} ))
    } catch (e) {
      console.log(e)
    }
  }
  response.end()
}).listen(3003);
console.log('server running on port 3003...');