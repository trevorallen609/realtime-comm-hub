const mongoose = require('mongoose');

const chatRoomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'user' }],
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Message' }],
});

module.exports = mongoose.model('ChatRoom', chatRoomSchema);

<!-- Updated: 2024-06-14T18:56:00.312077 -->
