export class App {
    constructor() {
        this.start();
    }
    start() {
        document.addEventListener('keydown', (e) => { this.onKeyDown(e) } )
    }
    onKeyDown(e: KeyboardEvent) {
        const key = e.key;
      
        switch(key) {
            case 'q':
                this.playAudio('boomAudio');
                break;
            case 'w':
                this.playAudio('clapAudio');
                break;
            case 'e':
                this.playAudio('hihatAudio');
                break;
            case 'r':
                this.playAudio('kickAudio');
                break;
            case 't':
                this.playAudio('openhatAudio');
                break;
            case 'y':
                this.playAudio('rideAudio');
                break;
            case 'u':
                this.playAudio('snareAudio');
                break;
            case 'i':
                this.playAudio('tinkAudio');
                break;
            case 'o':
                this.playAudio('tomAudio');
                break;
        }
    }
    playAudio(id: string) {
        const clap: HTMLAudioElement = document.querySelector('#' + id);
        clap.currentTime = 0;
        clap.play();
    }
}