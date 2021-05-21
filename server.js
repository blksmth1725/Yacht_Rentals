const express = require("express");
const connectDB = require("./config/db");
const connect = require("./config/db");

const app = express();

//Connect Database
connectDB();

app.get("/", (req, res) => res.send("API Running"));

//Define our routes
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/user", require("./routes/api/user"));
app.use("/api/boats", require("./routes/api/boats"));
app.use("/api/contactForm", require("./routes/api/contactForm"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
