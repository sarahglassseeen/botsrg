const { readdirSync } = require('fs');
const path = require('path');

module.exports = (client) => {

  const commandPath = path.join(__dirname, '..', 'modules', 'commands');
  const commandFiles = readdirSync(commandPath).filter(file => file.endsWith('.js'));

  var commandCount = 0;
  var noprefixCount = 0;

  for (const file of commandFiles) {
    const command = require(path.join(commandPath, file));

    if (!command.config.name) return;
    if (command.run) {
      commandCount++;
      client.commands.set(command.config.name, command);
    }
    if (command.noprefix) {
      noprefixCount++;
      client.noprefix.set(command.config.name, command);
    }
    if (command.config.onLoad) {
      client.onload.push(command);
    }
  }

  console.log(`Đã tải thành công ${commandCount} lệnh và ${noprefixCount} lệnh noprefix!`);
  
}