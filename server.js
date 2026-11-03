import dns from "node:dns";
import config from "./server/config/config.js";
import app from "./server/express.js";
import mongoose from "mongoose";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

mongoose.Promise = global.Promise;
mongoose
  .connect(config.mongoUri)
  .then(() => {
    console.log("Connected to the database!");
  });

mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection failed:", error.message);
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Portfolio application." });
});

app.listen(config.port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info("Server started on port %s.", config.port);
});
