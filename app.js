require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

const apiRoutes = require("./routes/index");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api/v1", apiRoutes);

const PORT = process.env.PORT || process.env.LOCAL_PORT;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
