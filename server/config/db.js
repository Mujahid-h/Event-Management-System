import mongoose from "mongoose";

const connnectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("Databse connected successfully!:", connection.connection.host);
  } catch (error) {
    console.log("Error in databse connection: ", error);
  }
};
export default connnectDB;
