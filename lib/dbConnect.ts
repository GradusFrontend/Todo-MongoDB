import mongoose, { ConnectOptions } from "mongoose";

const connection:any = {}
const DB_URI = process.env.MONGODB_URI as string


async function dbConnect() {
    if(connection.isConnected) {
        return
    }

    const db = await mongoose.connect(DB_URI)


    connection.isConnected =  db.connections[0].readyState
}

export default dbConnect