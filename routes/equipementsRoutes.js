const express = require('express');
const router = express.Router();
const EquipementController = require('../controllers/equipementController');

router.get('/', EquipementController.getAllEquipements);
router.post('/', EquipementController.createEquipement);
router.get('/:id', EquipementController.getEquipementById);
router.put('/:id', EquipementController.updateEquipement);
router.delete('/:id', EquipementController.deleteEquipement);

module.exports = router;
