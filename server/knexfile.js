// Update with your config settings.
require('dotenv').config();
module.exports = {

  development: {
    client: 'pg',
    connection: {
        user : `${process.env.USER_NAME}`,
        password : `${process.env.PASSWORD}`,
        database : `${process.env.DATABASE}`
      }
  },

  
};
