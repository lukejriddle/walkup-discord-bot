require('dotenv').config({ path: __dirname + '/../.env' });
client = require('./client/client');

const TOKEN = process.env.TOKEN;

client.login(TOKEN);
