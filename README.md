# SOLID Notification Service (JavaScript Demo)

A simple demonstration of the SOLID principles in object-oriented JavaScript.  
This project shows how to structure and extend logic cleanly using strategies and dependency injection.

## 📦 Tech Stack

- JavaScript (ES Modules)
- Node.js (v14+)

## 📁 Project Structure

Each principle of SOLID is reflected in this design:
- **Single Responsibility**: Separate classes for validation, sending, and logging
- **Open/Closed**: Add new senders without changing existing code
- **Liskov Substitution**: All senders follow a shared interface
- **Interface Segregation**: Simple, minimal interfaces
- **Dependency Inversion**: High-level modules depend on abstractions

## 🚀 Getting Started

```bash
git clone https://github.com/yudin7324/solid-notification-js-demo.git
cd solid-notification-js-demo
npm install
npm start
```

## 🧪 Example Output

```
📧 Email: Welcome to our platform!
[Log] Notification sent to user 1
📱 SMS: Your code is 1234
[Log] Notification sent to user 2
```

---

## 👨‍💻 Author

Created by Ilya Yudin
