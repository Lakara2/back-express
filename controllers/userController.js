let users = [];

const getAllUsers = (req, res) => {
    res.status(200).json(users);
};

const createUser = (req, res) => {
    const user = req.body;
    users.push(user);
    res.status(201).json(user);
};

const getUserById = (req, res) => {
    const id = req.params.id;
    const user = users.find(user => user.id === parseInt(id));
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

const updateUser = (req, res) => {
    const id = req.params.id;
    const userIndex = users.findIndex(user => user.id === parseInt(id));
    if (userIndex !== -1) {
        users[userIndex] = req.body;
        res.status(200).json(users[userIndex]);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

const deleteUser = (req, res) => {
    const id = req.params.id;
    users = users.filter(user => user.id !== parseInt(id));
    res.status(204).end();
};

module.exports = { getAllUsers, createUser, getUserById, updateUser, deleteUser };
