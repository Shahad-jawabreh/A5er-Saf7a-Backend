import express from 'express';
const app = express();
import * as authRouter from './modules/auth/auth.router.js'
const port = 3000;

app.get('/auth',authRouter.login);


const PORT= process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT} `);
});
