const  express = require('express')
const app = express()
const port = 3000
const routes=require('./routes.js')
const cors=require('cors')
const ConnectDB=require('./db.js')



ConnectDB()


app.use(express.json())
app.use(cors())


app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api',routes)
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
