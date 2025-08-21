import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connecté ✅'))
.catch((err) => console.log('Erreur MongoDB :', err));

// Route test
app.get('/', (req, res) => {
  res.send('API fonctionne ! 🚀');
});

app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));
