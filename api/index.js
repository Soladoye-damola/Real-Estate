import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes/user.routes.js';
import authRouter from './routes/auth.route.js';


dotenv.config();
const app = express();
app.use(express.json());

// Routes
app.use('/api/user', router);
app.use('/api/auth', authRouter);



mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Connected to Mongodb")
}).catch((err)=>{
    console.log(err)
});

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
})


