const express = require("express");
// const itemRoutes = require('./routes/item.routes')
const cors = require("cors");

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
const db = require('./database-mysql');
const doctorRouter = require('./routes/doctor.router');
const AppointmentRouter = require('./routes/Appointment.router');
const RatingCommentsRouter = require('./routes/ratingComments.router');
const messagesRouter = require('./routes/messages.router')

const userRouter = require('./routes/userrouters');
const Authentication = require('./routes/loginrouters');
const nodeMailer = require('../server/controllers/nodeMailer');
const cloudinary = require('cloudinary');
const fileUpload = require('express-fileupload');
const http = require('http');
const { Server } = require('socket.io');
const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*", 
    methods: ["GET", "POST"]
  }
});
const PORT = 3000
cloudinary.v2.config({
  cloud_name: 'duekcetwe',
  api_key: '313496654712626',
  api_secret: 'LTs6VHjFAjSIorhnPJ-w8iqwffo',
  secure: true,
});
app.use(cors())
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use(cors())
app.use('/api/messages', messagesRouter);

app.use("/api/auth", Authentication);
app.use('/api/doctors', doctorRouter);
app.use("/api/Appointment", AppointmentRouter);
app.use("/api/ratingComments", RatingCommentsRouter);
app.use("/api/users", userRouter);
app.post('/api/upload', async (req, res) => {
  try {
    const fileStr = req.files.file.data.toString('base64'); 
    const uploadResponse = await cloudinary.uploader.upload("data:image/jpeg;base64," + fileStr, { 
      upload_preset: 'enojnrjf',
    });
    res.json({ imageUrl: uploadResponse.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});
app.post('/api/sendmail', nodeMailer.sendMail);
io.on("connection", (socket) => {
  console.log("A user connected with id:", socket.id);

  
  socket.on("send_message", (data) => {
      
      console.log(data);
      
      io.emit("new_message", data); 
  });

  socket.on("disconnect", () => {
      console.log("User disconnected", socket.id);
  });
});
app.listen(PORT, function () {
  console.log("Server is running on port", PORT);
});