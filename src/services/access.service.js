'use strict'

const shopModel = require("../models/shop.model")
const bcrypt = require('bcryptjs')

const RoleShop = {
    SHOP: 'SHOP',
    WRITER: 'WRITER',
    EDITOR: 'EDITOR',
    ADMIN: 'ADMIN',
}

class AccessService {
    static signUp = async ({ name, email, password }) => {
        try {
            //check email
            
            const holderShop = await shopModel.findOne({ email }).lean()
            if (holderShop) {
                return {
                    code: xxx,
                    message: 'Email already exists'
                }
            }

            const passwordHash = await bcrypt.hash(password, 10)

            const newShop = await shopModel.create({
                name, email, password, roles: [RoleShop.SHOP]
            })

            if(newShop){
                //created priveteKey, publicKey
                const {privateKey, publicKey} = crypto.generateKeyPairSync('rsa', {
                    modulusLength: 4096,
                    // publicKeyEncoding: {
                    //     type: 'spki',
                    //     format: 'pem'
                    // },
                    // privateKeyEncoding: {
                    //     type: 'pkcs8',
                    //     format: 'pem'
                    // }
                })
                console.log(privateKey, publicKey)
            }
        } catch (error) {
            next (error)
        }
    }
}