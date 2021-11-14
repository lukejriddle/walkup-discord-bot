const fs = require('fs');
const path = require('path');

const getCommands = () => {
  const commands = [];
  const commandFiles = fs.readdirSync(path.join(__dirname, '../commands')).filter(file => file.endsWith('.js'));

  for (const file of commandFiles) {
    const command = require(path.join(__dirname, `../commands/${file}`));
    commands.push(command);
  }
  return commands;
};

const getEvents = () => {
  const eventFiles = fs.readdirSync(path.join(__dirname, '../events')).filter(file => file.endsWith('.js'));
  return eventFiles;
};

module.exports = {
  getCommands,
  getEvents
};
