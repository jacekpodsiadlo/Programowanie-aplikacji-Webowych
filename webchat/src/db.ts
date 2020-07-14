import { firebaseConfig } from './firebase-config';
import * as firebase from '../node_modules/firebase/index';

export class Db {
    private db: firebase.firestore.Firestore;
    constructor() {
        this.initializeDb();
    }
    private initializeDb(): void {
        firebase.initializeApp(firebaseConfig);
        this.db = firebase.firestore();
    }
    sendMessage(msg: Message){
        this.db.collection('messages').add(msg);

    }
}