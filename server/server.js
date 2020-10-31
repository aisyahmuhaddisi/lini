import express from 'express'
import config from './config'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import userRoutes from './routes/userRoutes'
import speakersRoutes from './routes/speakersRoutes'

dotenv.config();

const mongodbUrl = config.MONGODB_URL;

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log("error", error.reason))

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.options('*', cors())

app.use("/api/users", userRoutes);
app.use("/api/speakers", speakersRoutes);


app.listen(5000, () => { console.log("server start at http://localhost:5000") })