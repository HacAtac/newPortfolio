import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
  try {
    //use unifiedtopology to avoid deprecation warning
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //   useCreateIndex: true,
      //   useFindAndModify: false,
    });
    console.log(colors.green("MongoDB connected..."));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDB;
