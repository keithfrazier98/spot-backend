const knex = require('../db/connection')
function get(){
    return knex('samples').select("*")
}
module.exports = {
    get
}