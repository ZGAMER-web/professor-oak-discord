exports.run = (client, message, args) => {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    client.channels.get("451467154944950282").send(sayMessage);
}
