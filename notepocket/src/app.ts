import { Note } from './note';

export class App {
    notes: Note[] = [];
    constructor() {
        this.start();
    }
    start(): void {
        document.querySelector('#addNewNote')
            .addEventListener('click', () => {
                this.addNewNote();
            });
        this.loadNotes();
    }
    loadNotes(): void {
        const noteList = localStorage.getItem('noteList');

        if (noteList === null) {
            return;
        }
        const notes: Note[] = JSON.parse(noteList);
        this.notes = notes;

        this.renderNotes();
    }
    renderNotes(): void {
        document.querySelector('#notes').innerHTML = '';
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.notes.length; i++) {
            this.createHtmlNote(this.notes[i].title, this.notes[i].content, this.notes[i].isPinned, i);
        }

        // for (const note of this.notes) {
        //     this.createHtmlNote(note.title, note.content, note.isPinned);
        // }
    }
    addNewNote(): void {
        const newNoteTitle: string = document.querySelector<HTMLInputElement>('#title').value;
        const newNoteContent: string = document.querySelector<HTMLTextAreaElement>('#content').value;
        const newNoteIsPinned: boolean = document.querySelector<HTMLInputElement>('#isPinned').checked;

        const note = new Note(newNoteTitle, newNoteContent, newNoteIsPinned);
        if (newNoteIsPinned) {
            this.notes.unshift(note);
        } else {
            this.notes.push(note);
        }
        this.updateLocalStorage();
        this.renderNotes();
    }
    updateLocalStorage(): void {
        const notes = JSON.stringify(this.notes);
        localStorage.setItem('noteList', notes);
    }
    deleteNote(index: number): void {
        // usun notatke
        this.notes.splice(index, 1);
        // przerysuj tablice
        this.renderNotes();
    }
    createHtmlNote(title: string, content: string, isPinned: boolean, index: number): void {
        const notes = document.querySelector('#notes');
        const note = document.createElement('div');
        const noteDeleteBtn = document.createElement('div');
        const noteTitleElement = document.createElement('h2');
        const noteContentElement = document.createElement('div');

        noteDeleteBtn.innerHTML = 'usuń';
        noteDeleteBtn.classList.add('deleteBtn');
        noteDeleteBtn.addEventListener('click', () => { this.deleteNote(index) });

        noteTitleElement.innerHTML = title;
        noteContentElement.innerHTML = content;

        note.classList.add('note');
        if (isPinned) {
            note.classList.add('isPinned');
        }
        note.appendChild(noteTitleElement);
        note.appendChild(noteContentElement);
        note.appendChild(noteDeleteBtn);

        notes.appendChild(note);
    }
}
