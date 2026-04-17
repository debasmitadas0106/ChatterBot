const {
  createUserService,
  findUserService,
} = require("../Service/userService");

const createUserBusiness = async (payload) => {
  try {
    const { firstName, lastName, email, phone, interests } = payload;
    const findUserDetails = await findUserService({ email: email });
    if (findUserDetails) {
      return "user already exists";
    }
    const userDetails = await createUserService(payload);
    return userDetails;
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  createUserBusiness,
};
