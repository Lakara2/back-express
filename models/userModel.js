let users = [];

const getAllUsers = () => {
    return users;
};

const addUser = (user) => {
    users.push(user);
};

const getUserById = (id) => {
    return users.find(user => user.id === id);
};

const updateUser = (id, updatedUser) => {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users[index] = updatedUser;
        return true;
    }
    return false;
};

const deleteUser = (id) => {
    users = users.filter(user => user.id !== id);
};

module.exports = { getAllUsers, addUser, getUserById, updateUser, deleteUser };
