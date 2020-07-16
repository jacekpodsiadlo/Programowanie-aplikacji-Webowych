type MessageHandleFn = (name: string, message: string) => void;

export class NewMessage {
    messageHandle: MessageHandleFn;
    constructor(handle: MessageHandleFn ) {
        this.messageHandle = handle;
        this.handleNewMessageInput();
    }
    handleNewMessageInput(): void {
        document.querySelector<HTMLInputElement>('#message')
            .addEventListener('keypress', (e: KeyboardEvent) => {
                if (e.keyCode !== 13) {
                    return;
                }
                const name = document.querySelector<HTMLInputElement>('#name').value;
                const message = (e.target as HTMLInputElement).value;
                this.messageHandle(name, message);
            });
    }
}
