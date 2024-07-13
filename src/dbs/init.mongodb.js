'use strict';

const e = require('express');
const mongoose = require('mongoose');
const {countConnect} = require('../helpers/check.connect');

const connectString = 'mongodb://localhost:27017/shopDEV';


class Database {
    constructor() {
        this.connect();
    }

    connect(type = 'mongodb') {
        if (1 === 1) {
            mongoose.set('debug', true)
            mongoose.set('debug', { color: true })
        }

        mongoose.connect(connectString).then(_ => console.log('Connected MongoDB Success Pro', countConnect))
        .catch(err => console.error('Error connect MongoDB: '));
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new Database();
        }
        return this.instance;
    }
}

const instanceMongodb = Database.getInstance();
module.exports = instanceMongodb;