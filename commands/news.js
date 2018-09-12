exports.run = (client, message, args) => {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    client.channels.get("451467154944950282").send(sayMessage);
    client.channels.get('483831639575887873').send('**' + member.user.username + '**' + " posted in <#451467154944950282> using my `!oak news` command.");
}
