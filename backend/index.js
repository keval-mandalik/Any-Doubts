
const connectToMongo = require('./connection');
const express = require('express')
const cors = require('cors')
connectToMongo();

const app = express()
const PORT = process.env.PORT || 5000
app.use(cors())
app.use(express.json())
// app.use('/api/auth',require('./routes/auth'))
// app.use('/api/notes',require('./routes/notes'))

app.listen(PORT, () => {
  console.log(`Any doubt listening at http://localhost:${PORT}`)
})