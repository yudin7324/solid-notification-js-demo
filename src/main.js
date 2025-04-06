import { EmailSender, SmsSender } from './senders.js';
import { UserValidator } from './user-validator.js';
import { Logger } from './logger.js';
import { NotificationService } from './notification-service.js';

const emailSender = new EmailSender();
const smsSender = new SmsSender();

const validator = new UserValidator();
const logger = new Logger();

const emailNotification = new NotificationService(emailSender, validator, logger);
emailNotification.notify(1, 'Welcome to our platform!');

const smsNotification = new NotificationService(smsSender, validator, logger);
smsNotification.notify(2, 'Your code is 1234');
