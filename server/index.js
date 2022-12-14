import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { CONNECTION_URL, PORT } from './config/database.js'
import indexRoutes from './routes/index.js'

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))

app.use(cors())

app.use('/api', indexRoutes)

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server started running on port ${PORT}`)))
    .catch((error) => console.log(`${error} - did not connect`));