import { NewMessage } from './new-message';
import { Db } from './db';
export class App {
    db: Db;
    constructor() {
        this.start();
    }
    start(): void {
        this.db = new Db();
        const newMessage = new NewMessage(this.onNewMessage);
    }
    onNewMessage = (name: string, message: string): void  => {
        const template = `
        <div class="message self">
        <div class="name">${name}</div>
        <div class="content">${message}</div>
        </div>
        `;
        const chat = document.querySelector('#chat');
        chat.innerHTML += template;
        this.db.sendMessage({
            name,
            message
        })
    };
}