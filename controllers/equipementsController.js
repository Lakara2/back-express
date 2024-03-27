let equipements = [];

const getAllEquipements = (req, res) => {
    res.status(200).json(equipements);
};

const createEquipement = (req, res) => {
    const equipement = req.body;
    equipements.push(equipement);
    res.status(201).json(equipement);
};

const getEquipementById = (req, res) => {
    const id = req.params.id;
    const equipement = equipements.find(equipement => equipement.id === parseInt(id));
    if (equipement) {
        res.status(200).json(equipement);
    } else {
        res.status(404).json({ message: 'Equipement not found' });
    }
};

const updateEquipement = (req, res) => {
    const id = req.params.id;
    const equipementIndex = equipements.findIndex(equipement => equipement.id === parseInt(id));
    if (equipementIndex !== -1) {
        equipements[equipementIndex] = req.body;
        res.status(200).json(equipements[equipementIndex]);
    } else {
        res.status(404).json({ message: 'Equipement not found' });
    }
};

const deleteEquipement = (req, res) => {
    const id = req.params.id;
    equipements = equipements.filter(equipement => equipement.id !== parseInt(id));
    res.status(204).end();
};

module.exports = { getAllEquipements, createEquipement, getEquipementById, updateEquipement, deleteEquipement };
