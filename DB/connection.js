import mongoose from 'mongoose'
const connection=()=>{
    
mongoose.connect(`mongodb+srv://${process.env.DBUserName}:${process.env.DBPassword}@cluster0.rehgmb9.mongodb.net/A5er-Saf7a`)
.then(()=>{
    console.log('connct to DB',mongoose.connection.name);
}).catch((error)=>{
    console.log(error);
})

}
export default connection