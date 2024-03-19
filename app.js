const express = require("express");

const app = express();
const users_routes = require("./routes/usersRoutes");
const product_routes = require("./routes/productRoutes");
const company_routes = require("./routes/companyRoutes");
const outlate_routes = require("./routes/outlateRoutes");
const port = process.env.PORT || 4000;
const { connectDatabase } = require("./db/connectdb").connectDatabase();
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//session and cookie
const session = require("express-session");
const cookieparser = require("cookie-parser");
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: process.env.EXPRESS_SESSION_SECRET,
  })
);
app.use(cookieparser());

app.use("/api", users_routes);
app.use("/api", product_routes);
app.use("/api", company_routes);
app.use("/api", outlate_routes);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
