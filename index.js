const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const userRoute = require("./routes/users.routes")
const postRoutes = require('./routes/product.routes')
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });
  app.use(express.json())
  app.use("/api/users", userRoute);
  app.use('/product', postRoutes)



app.listen(process.env.PORT || 3000, () => {
    console.log("Backend server is running!");
  });
   