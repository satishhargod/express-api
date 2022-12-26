const { User } = require('../models');
const createUser = async (req, res) => {
   
    const result = await User.create(req.body)
  
    return res.status(200).send({
        data: result,
        status: 200,
        success: true,
        message: "Data created",
    });
  
  };

module.exports = {
  createUser,
};
