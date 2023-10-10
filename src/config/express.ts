import bodyParser from 'body-parser'
import express from 'express'
import cors from 'cors'
import path from 'path'
import { userRouter } from '../modules/user/adapters/user.controller'

const app = express()
.use(cors({ origin: '*' }))
.use(bodyParser.urlencoded({ extended: true }))
.use(express.json({limit: '20mb'}))
.use(express.static(path.join(__dirname,'../public')))

// Routes
.use('/api/user', userRouter)

export default app