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
            name: user.name,
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

const UpdatePassword = async (request, respond) => {
   try {
      const { oldPassword, newPassword } = request.body
      const user = await User.findByPk(request.params.user_id)
      if (
         user &&
         (await middleware.comparePassword(
            user.password_digest, request.body.oldPassword))) {

         let password_digest = await middleware.hashPassword(newPassword)
         await User.update({ password_digest: password_digest, updatedAt: new Date() }, { where: { id: request.params.user_id } })
         return respond.send({ status: 'Ok' })

      }
   } catch (error) {
      throw error
   }
}

const CheckSession = async (req, res) => {
   const { payload } = res.locals
   res.send(payload)
}

module.exports = {
   Login,
   Register,
   UpdatePassword,
   CheckSession
}
