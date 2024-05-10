const db = require('../models/index');
const User = db.user;

const addUser = async (req, res) => {



    const data = await User.create(req.body);

    res.status(200).json({ data: data });

}

const getUsers = async (req, res) => {
    const data = await User.findAll({})
    res.status(200).json({ data: data });
}

const getUser = async (req, res) => {
    const data = await User.findOne({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ data: data });

}




const deleteUser = async (req, res) => {
    const data = await User.destroy({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ data: data });
}


const updateUser = async (req, res) => {
    const data = await User.update(req.body, {
        where: {
            id: req.params.id
        }
    });
    res.status(200).json({ data: data });
}

module.exports = {
    addUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
}
