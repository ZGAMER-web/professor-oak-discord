message.guild.channels.get('<CHANNEL ID>').createInvite().then(invite =>
    message.channel.send(invite.url)
);
