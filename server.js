const express = require("express");	
const logger = require("morgan");	
const mongoose = require("mongoose");	
const PORT = process.env.PORT || 3000;	

const app = express();	

app.use(logger("dev"));	
app.use(express.urlencoded({ extended: true }));	
app.use(express.json());	
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://user1:password1@ds145677.mlab.com:45677/heroku_kgnjb26j", { useNewUrlParser: true });

app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });

module.exports = app;