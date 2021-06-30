//======= Dependencies
const jwt = require('jsonwebtoken')
const { User } = require('../database/nosql/models/index')

//TODO: Set up async auth middleware function 

//======== Auth Middleware 
const AuthMiddleware = async (req, res, next) => {

};

module.exports = AuthMiddleware;  