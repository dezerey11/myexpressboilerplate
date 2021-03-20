// grab environment variables
require("dotenv").config();
// IMPORT mongoose
const mongoose = require("mongoose");
// Import merced logger for colorful logs
const { log } = require("mercedlogger");
/// grab database string
const MONGODB_URL =
  process.env.MONGODB_URL || "mongodb://localhost:27017/database";

////// Mongoose Config Object //////
const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

////// Making the Database Connection //////
mongoose.connect(MONGODB_URL, config);

////// Handling Connection Events //////
mongoose.connection
  // event for when connection open
  .on("open", () => log.green("STATUS", "Connected to Mongo"))
  // event for when connection closes
  .on("close", () => log.red("STATUS", "Disconnected from Mongo"))
  // event for errors
  .on("error", (error) => log.red("Error", error));

////// Export the Connection //////
module.exports = mongoose;
