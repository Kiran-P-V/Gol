require("dotenv").config();
require("./configs/db");
const express = require("express");
const cors = require("cors");
const app = express();
// const userRoutes = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");

app.use(cors());
app.use(express.json());

app.use("/admin", adminRoute);

app.listen(4001, () => console.log("Server Connected to port 4001"));
