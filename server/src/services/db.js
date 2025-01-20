const mongoose = require('mongoose')

mongoose
    .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        serverSelectionTimeoutMS: 30000,
    })
    .then(() => {
        console.log('MongoDB connected')
    })
    .catch((err) => {
        console.log('MongoDB connection error: ', err)
    })

<!-- Updated: 2024-07-03T14:28:00.312077 -->

<!-- Updated: 2024-07-17T13:39:00.312077 -->

<!-- Updated: 2024-08-22T12:12:00.312077 -->

<!-- Updated: 2024-10-16T17:13:00.312077 -->
