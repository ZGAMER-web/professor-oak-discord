client.on('message', message => {
    if (message.content.includes('changeNick')) {
        if (!message.guild.me.hasPermission('MANAGE_NICKNAMES')) return message.channel.send('I don\'t have permission to change your nickname!');
        message.member.setNickname(message.content.replace('changeNick ', ''));
    }
});