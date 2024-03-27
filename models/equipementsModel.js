let equipements = [];

const getAllEquipements = () => {
    return equipements;
};

const addEquipement = (equipement) => {
    equipements.push(equipement);
};

const getEquipementById = (id) => {
    return equipements.find(equipement => equipement.id === id);
};

const updateEquipement = (id, updatedEquipement) => {
    const index = equipements.findIndex(equipement => equipement.id === id);
    if (index !== -1) {
        equipements[index] = updatedEquipement;
        return true;
    }
    return false;
};

const deleteEquipement = (id) => {
    equipements = equipements.filter(equipement => equipement.id !== id);
};

module.exports = { getAllEquipements, addEquipement, getEquipementById, updateEquipement, deleteEquipement };
