const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const SALT_ROUNDS = parseInt(process.env.SALT_ROUNDS)
const APP_SECRET = String(process.env.APP_SECRET)

const hashPassword = async (password_digest) => {
   let hashedPassword = await bcrypt.hash(password_digest, SALT_ROUNDS)
   return hashedPassword
}

const comparePassword = async (storedPassword, password_digest) => {
   let passwordMatch = await bcrypt.compare(password_digest, storedPassword)
   return passwordMatch
}
const createToken = (payload) => {
   let token = jwt.sign(payload, APP_SECRET)
   return token
}

const verifyToken = (request, respond, next) => {
   const { token } = respond.locals
   try {
      let payload = jwt.verify(token, APP_SECRET)
      if (payload) {
         respond.locals.payload = payload
         return next()
      }
      respond.status(401).send({ status: 'Error', msg: 'Unauthorized' })
   } catch (error) {
      respond.status(401).send({ status: 'Error', msg: 'Unauthorized' })
   }
}

const stripToken = (request, respond, next) => {
   try {
      const token = request.headers['authorization'].split(' ')[1]
      if (token) {
         respond.locals.token = token
         return next()
      }
   } catch (error) {
      respond.status(401).send({ status: 'Error', msg: 'Unauthorized' })
   }
}

module.exports = {
   stripToken,
   verifyToken,
   createToken,
   comparePassword,
   hashPassword
}