import { Sender } from './interfaces.js';
import { UserValidator } from './user-validator.js';
import { Logger } from './logger.js';

export class NotificationService {
  constructor(sender, validator, logger) {
    this.sender = sender;
    this.validator = validator;
    this.logger = logger;
  }

  notify(userId, message) {
    if (!this.validator.isValid(userId)) {
      this.logger.log('Invalid user ID');
      return;
    }

    this.sender.send(message);
    this.logger.log(`Notification sent to user ${userId}`);
  }
}
