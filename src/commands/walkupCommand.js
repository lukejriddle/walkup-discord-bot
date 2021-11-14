const { SlashCommandBuilder } = require('@discordjs/builders');
const { initialRow, removeRow } = require('../message-components/buttonRows');

module.exports = {
  data: new SlashCommandBuilder().setName('walkup').setDescription('Sends a DM prompting the user to configure their walk-up song.'),
  async execute (interaction) {
    const filter = i => i.user.id === interaction.user.id;

    await interaction.reply({ content: 'Welcome to WalkUp.', components: [initialRow], ephemeral: true });
    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

    collector.on('collect', async i => {
      switch (i.customId) {
        case 'remove':
          await interaction.editReply({ content: 'Are you sure you want to remove your WalkUp song?', components: [removeRow] });
          await i.deferUpdate();
          break;
        case 'yes-remove':
          console.log('yes');
          break;
        case 'no-remove':
          collector.stop();
          break;
      }
    });

    collector.on('end', async collected => {
      await interaction.editReply({ content: 'Thanks for choosing WalkUp! ⚾', components: [] });
    });
  }
};
