import { NewMessage } from "./new-message";
import { Db } from "./db";
import { Message } from "./message.model";
export class App {
  db: Db;
  constructor() {
    this.start();
  }
  start(): void {
    this.db = new Db();
    const newMessage = new NewMessage(this.onNewMessage);
    this.db.watchMessages(this.renderMessages);
  }
  onNewMessage = (name: string, message: string): void => {
    this.db.sendMessage({
      name,
      message,
      date: Date.now(),
    });
  };
  renderMessages = (
    messages: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
  ) => {
    const chat = document.querySelector("#chat");
    chat.innerHTML = "";
    const chatList: Message[] = [];
    messages.forEach((msg) => {
      const id = msg.id;
      const data = msg.data();
      const chat: Message = {
        name: data.name,
        message: data.message,
        date: data.date,
        id,
      };
      chatList.push(chat);
    });
    chatList.sort((a, b) => a.date - b.date);
    for (const msg of chatList) {
      this.renderSingleMessage(msg);
    }
    this.handleDeleteBtns();
  };
  renderSingleMessage(msg: Message): void {
    const name = msg.name;
    const message = msg.message;
    const date = new Date(msg.date);
    const id = msg.id;
    const template = `
        <div class="message">
        <div class="remove remove-btn" data-id=${id}>X</div>
        <div class="name">${name}</div>
        <div class="content">${message}</div>
        <div class="time">${date.toLocaleString()}</div>
        </div>
        `;
    const chat = document.querySelector("#chat");
    chat.innerHTML += template;
  }
  handleDeleteBtns(): void {
    const btns = document.querySelectorAll(".remove-btn");
    for (const btn of btns) {
      btn.addEventListener("click", (e) => {
        const id = (e.target as HTMLElement).dataset.id;
        this.onRemoveClick(id);
      });
    }
  }
  onRemoveClick = (id: string) => {
    this.db.removeMessage(id);
  };
}
