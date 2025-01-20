const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  content: { type: String, required: true },
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  chatRoom: { type: mongoose.Schema.Types.ObjectId, ref: 'ChatRoom' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Message', messageSchema);

<!-- Updated: 2024-04-15T18:03:00.312077 -->

<!-- Updated: 2024-10-10T10:16:00.312077 -->
