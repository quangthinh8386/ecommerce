'use strict';

const mongoose = require('mongoose');
const { set } = require('../app');
const os = require('os');
const process = require('process');
const _SECOND = 5000;

// count Connect
const countConnect = () => {
    const numConnect = mongoose.connection.length;
    console.log('Number of connections: ', numConnect);
};

// check over load
const checkOverLoad = () => {
    setInterval(() => {
        const numConnect = mongoose.connection.length;
        const numCore = os.cpus().length;
        const memoryUsage = process.memoryUsage().rss;
        const maxConnect = numCore * 5;

        // console.log(`Active connections: ${numConnect}`)
        // console.log(`Memory Usage: ${memoryUsage / 1024 /1024} MB`);
        
        if (numConnect > maxConnect) {
            console.log('Overload connection');
        }
    }, _SECOND);
}

module.exports = {countConnect, checkOverLoad};