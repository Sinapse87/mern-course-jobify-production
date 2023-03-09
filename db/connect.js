import mongoose  from "mongoose"

const connectionString = 'mongodb+srv://jobify:DNGxrinTLHnPSKFO@jobify.2y15jo7.mongodb.net/?retryWrites=true&w=majority'

const connectDB = url => {
    return mongoose.connect(url)
}

export default connectDB