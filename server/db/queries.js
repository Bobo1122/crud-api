const knex = require('./knex');

module.exports = {
    getAll() {
        return knex('sticker');
    },
    getOne(userInput) {
        return knex('sticker').where('id', parseInt(userInput));
    },
    getTitle(title) {
    
        return knex('sticker').where('title', title);
    },

}