import express from 'express';
import cors from 'cors'
import 'dotenv/config'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

//Test para probar que si funciona el server
app.use('/status', (req, res) => {
  return res.json({ 
    server: 'active',
    ready: true,
    country: 'CO',
    date: new Date()
  })
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
