const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder().setName('walkup').setDescription('Sends a DM prompting the user to configure their walk-up song.'),
    async execute(interaction) {
        await interaction.user.send('To set your WalkUp song, please reply with the URL for the YouTube video that you wish to use.');
        await interaction.user.send("You can send the entire song if you want, we'll clip it in the next step!");
        await interaction.user.send("If you want to remove your WalkUp, just say, 'remove'.");
        await interaction.reply({ content: 'Configuration started. Check your DMs!', ephemeral: true });
    },
};
