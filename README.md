# 💬 Chat-Box

A sleek Angular-based chat interface that mimics core chat functionalities similar to WhatsApp. It uses [Mocky API](https://mocky.io) to simulate backend responses, providing a seamless front-end experience for testing and prototyping.

## 🚀 Features

- 🗂️ **Chat Group Management**
  - Create new chat groups using a prompt-based user input.
  - Display created date and time for each group.
  - Delete chat groups with confirmation dialogs.
  - Chat groups reorder to the top on new message activity (like WhatsApp).

- 💬 **Chat Functionality**
  - Display chats with alignment based on sender:
    - **Self** messages appear on the right.
    - **Others** appear on the left.
  - View chats for the selected group on the right panel.

- 🧭 **Layout**
  - **Left Panel**: Lists all chat groups.
  - **Right Panel**: Displays messages of the selected chat group.

- 🧹 **Fallback Screens**
  - `chat-not-found`: When a chat group is empty or doesn't exist.
  - `page-not-found`: Handles incorrect or broken routes.

## 🛠️ Tech Stack

- **Frontend**: Angular
- **Backend (Mock Data)**: [Mock API](https://mockapi.io/)

## 🗑️ Deletion Confirmation

When attempting to delete a chat group, the app prompts for user confirmation to prevent accidental deletion.

## 📝 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/chat-box.git
cd chat-box
```
## 2. Install Dependencies

```bash
npm install
```

## 3. Run the App

```bash
ng serve
```
