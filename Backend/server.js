const express = require("express"); // import express
const dotenv = require("dotenv").config(); // import dotenv
const { errorHandler } = require("./middlewares/errorMiddleware"); // custom error handler
const port = process.env.PORT || 6000; // set our port
const app = express();
const connectDB = require("./config/db"); // import db connection
const cors = require("cors");
const { default: mongoose } = require("mongoose");
mongoose.set('strictQuery',false);
 app.use(express.static('uploads'));
connectDB(); // connect to db
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/auth", require("./banck/Auth/routes/authRoute"));
app.use("/admin", require("./banck/Admin/Routes/adminRouter"));
app.use("/client",require("./banck/Clients/Routes/clientRoute"))
app.use(errorHandler)
app.listen(port, () => console.log(`Server started on port ${port}`));

