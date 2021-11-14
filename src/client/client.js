const { Client, Collection, Intents } = require('discord.js');
const { getCommands, getEvents } = require('../utils/utils');
const path = require('path');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES] });

// get commands
client.commands = new Collection();
const commands = getCommands();
for (const command of commands) {
  client.commands.set(command.data.name, command);
}

// event handling
const eventFiles = getEvents();
for (const file of eventFiles) {
  const event = require(path.join(__dirname, `../events/${file}`));
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

module.exports = client;
