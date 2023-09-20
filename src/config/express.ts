import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'

const app = express()

app
.use(cors({ origin: '*' }))
.use(bodyParser.urlencoded({ extended: true }))
.use(express.json({limit: '20mb'}))
.get('/', (rew, res) => {
  res.send('Server running...')
})

export default app