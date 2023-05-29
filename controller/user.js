const User = require("../models/user");

let registerUser = async (req, res) => {
    try {
        let newUser = new User(req.body);
        newUser = await newUser.save();

        res.status(201).json({ data: newUser });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: error.message });
    }
};


let userList = async (req, res) => {
    try {
        // const { search } = req.query;
        // console.log(search);
        let newUser = await User.find();
        res.status(200).json({ data: newUser });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: error.message });
    }
};



let updateUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ status: 404, success: false });
        }

        let newUser = await User.findOneAndUpdate({ _id: id }, { ...req.body, email: user.email }, { new: false, runValidators: true });
        return res.status(200).json({ data: newUser });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: error.message });
    }
};




let deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ status: 404, success: false , message : "User is Already Deleted"});
        }

        let newUser = await User.findOneAndDelete({ _id: id });
        return res.status(200).json({ data: newUser ,message : " User is deleted Successfully"});
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: error.message });
    }
};



let getUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ status: 404, success: false , message : "User is not Exist "});
        }

        return res.status(200).json({ data: user});
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ msg: error.message });
    }
};

module.exports = { registerUser, userList, updateUser ,deleteUser , getUser};