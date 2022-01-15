const { User } = require('../models')
const middleware = require('../middleware')

const Login = async (request, respond) => {
   try {
      const user = await User.findOne({
         where: { email: request.body.email },
         raw: true
      })
      if (user && (await middleware.comparePassword(user.password_digest, request.body.password))) {
         let payload = {
            id: user.id,
            email: user.email
         }
         let token = middleware.createToken(payload)
         return respond.send({ user: payload, token })
      }
      respond.status(401).send({ status: 'Error', msg: 'Unauthorized' })

   } catch (error) {
      throw error
   }
}


const Register = async (request, respond) => {
   try {
      const { name, email, password } = request.body
      let password_digest = await middleware.hashPassword(password)
      const user = await User.create({
         name,
         email,
         password_digest,
         createdAt: new Date(),
         updatedAt: new Date()
      })
      respond.send(user)
   } catch (error) {
      throw error
   }
}

module.exports = {
   Login,
   Register
}
