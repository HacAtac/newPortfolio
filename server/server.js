import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import path from "path";
// import cors from "cors";

// Routes
// import userRoutes from "./routes/userRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import authRoutes from "./routes/authRoutes.js";

//import middlewares
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import hpp from "hpp";

dotenv.config();

connectDB();

const app = express();

const PORT = process.env.PORT || 5000;
// cronJobs();
// Connect DB
// MongoDB
// connectDB();
// Azure SQL database
// connectSQL();

// using this allows us to accept body data
app.use(express.json({ extended: false }));
// This is to help with CORS issues, we dont want to allow anyone but a select group to access routes
// app.use(cors());

//init middlewares
//sanitize data
app.use(mongoSanitize({}));
//prevent XSS attacks
app.use(xss());
//prevent http paramter pollution
app.use(hpp());

// Define Routes
// app.use("/api/user", userRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/auth", authRoutes);

// Set static folder
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client/build")));
  app.get("/*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

//use the connectDB function to connect to the database and node server

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`.yellow);
});
