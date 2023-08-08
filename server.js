import colors from "colors";
import dontenv from "dotenv";
import express  from "express";
import connectDB from "./config/db.js";
import morgan from "morgan";
import authRoutes from "./routes/authRoute.js";
import categoryRoute from "./routes/categoryRoute.js";
import productRoute from "./routes/productRoute.js";
import cors from "cors";



// Configure env
dontenv.config();

// database connection
connectDB();

// rest object
const app = express();

// middeleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/category', categoryRoute );
app.use('/api/v1/product', productRoute );

// rest api
app.get('/',(req, res)=> {
    res.send('<h1>Welcome to Home Page..</h1>')
});




// PORT
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, () => {
    console.log(`Server ${process.env.DEV_MODE} Running on ${PORT}`.bgWhite.blue.bold);
})