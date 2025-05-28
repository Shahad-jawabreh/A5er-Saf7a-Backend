import express from 'express';
import connection from './DB/connection.js';
import authRouter from './src/modules/auth/auth.router.js'
import cors from 'cors'

import 'dotenv/config'
const app = express();

    app.use(cors());
    app.use(express.json());
    connection();
    app.get('/', (req, res)=>{return res.json({massege : "Welcome!"});});
    app.use('/auth',authRouter);

const PORT= process.env.PORT || 4000;
app.listen(PORT ,()=>{
    console.log(`listening on port ${PORT}`);
}) 