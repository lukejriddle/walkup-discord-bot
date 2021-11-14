const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '/../../.env') });

const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { getCommands } = require('../utils/utils');
const clientId = process.env.CLIENT_ID;
const token = process.env.TOKEN;

console.log('token: ' + token);

const commands = getCommands().map(command => command.data.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationCommands(clientId), { body: commands })
  .then(() => console.log('Successfully registered application commands.'))
  .catch(console.error);
