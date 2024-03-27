const mongoose = require('mongoose');
const historiqueUtilisationSchema = require('./historiqueUtilisationSchema');

// Create model from schema
const HistoriqueUtilisation = mongoose.model('HistoriqueUtilisation', historiqueUtilisationSchema);

// Export model
module.exports = HistoriqueUtilisation;
