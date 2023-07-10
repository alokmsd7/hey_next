// import mongoose from "mongoose";
// const connectMongoDB = () => {
//     try {
//         mongoose.connect(process.env.MONGODB_URI);
//         console.log("Connected to MongoDB.");

//     }
//     catch (error){
//         console.log(error);
//     }
// };

// export default connectMongoDB;
import mongoose from "mongoose";
const connectMongoDB = () => {
    try {
      console.log("MONGODB_URI:", process.env.MONGODB_URI);
  
      if (process.env.MONGODB_URI) {
        mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB.");
      } else {
        console.log("MONGODB_URI is undefined.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  export default connectMongoDB;