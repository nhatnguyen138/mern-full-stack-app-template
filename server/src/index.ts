const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const PORT = 8080 || process.env.PORT

const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_PROJECT}.mr2af.mongodb.net/${process.env.MONGO_PROJECT}?retryWrites=true&w=majority`,
            {
                useCreateIndex: true,
                useNewUrlParser:  true,
                useUnifiedTopology: true,
                useFindAndModify: false
            }
        )
        console.log('MongoDB connected')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}
//connectDB()

const app = express()
app.use(express.json())
app.use(cors())

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))