const jwt = require ("jsonwebtoken");
const UserModel = require("../models/user.model");


const generatedRefreshToken = async(userId) => {
    const token = await jwt.sign({id : userId},
        process.env.SECRET_KEY_REFRESH_TOKEN,
        {expiresIn : '20d'}
    )

    const updateRefreshTokenUser = await UserModel.updateOne(
        { _id : userId},
        {
            refresh_token : token
        }
    )

    return token
}

module.exports = generatedRefreshToken;