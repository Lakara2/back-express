const mongoose = require('mongoose');

const maintenanceSchema = new mongoose.Schema({
    id_equipement: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Equipement',
        required: true
    },
    date_maintenance: {
        type: Date,
        default: Date.now,
        required: true
    },
    description_maintenance: {
        type: String,
        required: true
    },
    cout_maintenance: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Maintenance', maintenanceSchema);
