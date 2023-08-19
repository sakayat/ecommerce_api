require("dotenv").config();
const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const port = process.env.PORT || 30000;

const productRoute = require("./routes/route")

// connectDB

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(port, () => console.log(`mongodb connected successfully`));
  })
  .catch((error) => console.log(error));


// middleware
app.use(express.json())

//   route
app.use("/api", productRoute)