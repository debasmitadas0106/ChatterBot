const { createUserBusiness } = require("../Business/userBusiness");

const createUserController = async (req, res) => {
  try {
    const createUser = await createUserBusiness(req.body);
    return res.status(201).json({
      success: true,
      data: createUser,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

module.exports = {
  createUserController,
};
