module.exports = (app, upload) => {
  const router = require('express').Router()
  // const authJwt = require('../middlewares/auth-jwt.js')
  const controller = require('../controllers/admin/image-controller.js')

  const uploadFields = upload.fields([
    { name: 'file', maxCount: 1 }
  ])

  router.post('/', uploadFields, controller.create)
  router.get('/',  controller.findAll)
  router.get('/:filename', controller.findOne)
  router.delete('/:filename', controller.delete)

  app.use('/api/admin/image', router)
}