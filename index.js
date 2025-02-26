
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


const menuRoutes = require('./routes/menu');
app.use('/menu', menuRoutes);


app.get("/",(req,res)=>{
  res.status(200).json({message:"sucessfully connected"})
})
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`
));
