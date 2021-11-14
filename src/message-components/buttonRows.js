const { MessageActionRow, MessageButton } = require('discord.js');

const url = 'https://example.com';

const initialRow = new MessageActionRow()
  .addComponents(
    new MessageButton()
      .setLabel('Configure your WalkUp song')
      .setStyle('LINK')
      .setURL(url),
    new MessageButton()
      .setCustomId('remove')
      .setLabel('Remove your WalkUp')
      .setStyle('PRIMARY')
  );

const removeRow = new MessageActionRow()
  .addComponents(
    new MessageButton()
      .setCustomId('no-remove')
      .setLabel('Cancel')
      .setStyle('SECONDARY'),
    new MessageButton()
      .setCustomId('yes-remove')
      .setLabel('Remove')
      .setStyle('DANGER')
  );

module.exports = {
  initialRow,
  removeRow
};
