const {mongoose} = require('../config/dataBase')

const students = mongoose.model('Students',{ name: String })

module.exports = {students}