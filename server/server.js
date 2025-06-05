const { createServer } = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
const httpServer = createServer(app);

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  })
);

app.get("/", (req, res) => {
  res.send("Backend is working.");
});

const port = process.env.PORT || 3000;
httpServer.listen(port, () => {
  console.log(`Listening on PORT : ${port}`);
});
