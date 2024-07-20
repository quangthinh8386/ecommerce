'use strict'

const keyTokenModel = require("../models/keytoken.model")

class KeyTokenService {
    static createKeyToken = async ({ user, publicKey }) => {
        try {
            const publicKeyString = await publicKey.toSring()
            const tokens = await keyTokenModel.create({ 
                user: userId,
                publicKey: publicKeyString 
            })
        } catch (error) {
            next(error)
        }
    }
}