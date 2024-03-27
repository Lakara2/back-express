const mongoose = require('mongoose');

// Schema definition
const historiqueUtilisationSchema = new mongoose.Schema({
  id_equipement: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Equipement',
    required: true
  },
  id_user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  date_utilisation: {
    type: Date,
    default: Date.now,
    required: true
  },
  description_utilisation: {
    type: String,
    required: true
  }
});

// Export schema
module.exports = historiqueUtilisationSchema;
