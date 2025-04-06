import { Sender } from './interfaces.js';

export class EmailSender extends Sender {
  send(message) {
    console.log(`📧 Email: ${message}`);
  }
}

export class SmsSender extends Sender {
  send(message) {
    console.log(`📱 SMS: ${message}`);
  }
}

export class PushSender extends Sender {
  send(message) {
    console.log(`🔔 Push: ${message}`);
  }
}
