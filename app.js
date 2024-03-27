const express = require('express');
const app = express();
const port = 8080;

app.use(express.json());

// Routes
app.use('/user', require('./routes/userRoutes'));
app.use('/equipements', require('./routes/equipementsRoutes'));
app.use('/stocks', require('./routes/stocksRoutes'));
app.use('/commandes', require('./routes/commandesRoutes'));
app.use('/lignes-commande', require('./routes/lignesCommandeRoutes'));
app.use('/historique-utilisation', require('./routes/historiqueUtilisationRoutes'));
app.use('/maintenance', require('./routes/maintenanceRoutes'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});