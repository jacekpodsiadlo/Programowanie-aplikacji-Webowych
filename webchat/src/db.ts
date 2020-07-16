import { firebaseConfig } from './firebase-config';
import * as firebase from 'firebase';
import { Message } from './message.model';

export class Db {
    private db: firebase.firestore.Firestore;
    constructor() {
        this.initializeDb();
    }
    private initializeDb(): void {
        firebase.initializeApp(firebaseConfig);
        this.db = firebase.firestore();
    }
    sendMessage(msg: Message): void {
        this.db.collection('messages').add(msg);
    }
    removeMessage(id: string): void {
        this.db.collection('messages').doc(id).delete();
    }
    watchMessages(handler: (messages: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>) => void): any {
        this.db.collection('messages').onSnapshot(
            messages => {
                handler(messages);
            }
        );
    }
}
