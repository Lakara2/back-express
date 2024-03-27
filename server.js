const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // Remplacez localhost et le port par vos propres paramètres
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB', err);
    }
}

connectToDatabase();

// Écouter le signal SIGINT et fermer la connexion à MongoDB
process.on('SIGINT', async () => {
    try {
        await client.close();
        console.log('Disconnected from MongoDB');
        process.exit(0);
    } catch (err) {
        console.error('Error closing MongoDB connection', err);
        process.exit(1);
    }
});

// Gestion des erreurs non capturées
process.on('uncaughtException', (err) => {
    console.error('Uncaught exception:', err);
    process.exit(1);
});

// Gestion des rejets de promesse non capturés
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});
