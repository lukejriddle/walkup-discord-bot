const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '/../.env') });
const client = require('./client/client');

const TOKEN = process.env.TOKEN;

client.login(TOKEN);
