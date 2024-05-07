import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import nodemailer from "nodemailer";







const app = express();
dotenv.config();


//Database connection (MONGO DB)
const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("Connected to mongoDB.");
    } catch (error) {
      throw error;
    }
  };

  mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });


//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json());


//routes
app.use("/api/auth", authRoute);
app.use("/api/users",userRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);


// error handling middleware

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });

  app.get('/',(req,res)=>{
    res.json({status:'api is running'})
  })

  app.post("/send-email", async (req, res) => {
    const { userEmail } = req.body;
    const transporter = nodemailer.createTransport({
      service: "gmail",
  
      auth: {
        user: "adeelsaleemppp@gmail.com",
        pass: "ndis klji lxhg lcqh",
      },
    });
    try {
      const info = await transporter.sendMail({
        from: "sikandarbooking@gmail.com",
        to: userEmail,
        subject: "Reservation Confirmation",
        text: `Thank you for your reservation! using our website`,
      });
  
      console.log("Email sent: ", info.response);
      res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email: ", error);
      res.status(500).json({ error: "Failed to send email." });
    }
  });
// main app run  
app.listen(8800, () => {
    connect();
    console.log("Connected to backend.");
    console.log("Backend Running on 8800");

  });