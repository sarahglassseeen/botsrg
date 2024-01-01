const { readdirSync } = require('fs');
const path = require('path');

module.exports = (client) => {

  const eventPath = path.join(__dirname, '..', 'modules', 'events'); // Sửa đường dẫn
  const eventFiles = readdirSync(eventPath).filter(file => file.endsWith('.js'));

  var eventCount = 0;
  var noprefixCount = 0;

  for (const file of eventFiles) { // Sửa tên biến
    const event = require(path.join(eventPath, file));

    if (!event.config || !event.config.name) {
      console.error(`Sự kiện ${file} không có cấu hình hợp lệ. Bỏ qua.`);
      continue;
    }

    if (event.run) {
      eventCount++; // Sửa tên biến
      client.events.set(event.config.name, event);
    }

    if (event.noprefix) {
      noprefixCount++;
      client.noprefix.set(event.config.name, event);
    }

    if (event.onLoad) {
      client.onload.push(event);
    }
  }

  console.log(`Đã tải thành công ${eventCount} event`);
  
}
