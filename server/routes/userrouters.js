const router = require('express').Router();
const usercontroller = require("../controllers/usercontroller")

router.get('/all', usercontroller.getAllUsers)
// router.get('/:id', usercontroller.getOneUser)
// router.post('/add', usercontroller.addUser)
router.put('/update', usercontroller.updateUser)
router.delete('/delete', usercontroller.deleteUser)

module.exports = router;
