interface ChannelSound {
    id: string;
    time: number;
}
export class App {
    channel1: ChannelSound[] = [];
    recStartTime: number;
    isRecording = false;
    constructor() {
        this.start();
    }
    start() {
        document.addEventListener('keydown', (e) => { this.onKeyDown(e) } )
        document.querySelector('#playBtn').addEventListener('click', () => { this.playChannel1() } );
        document.querySelector('#recBtn').addEventListener('click', (e: MouseEvent) => { this.recChannel1(e) } );
    }
    recChannel1(e: MouseEvent): void {
        this.recStartTime = e.timeStamp;
        this.isRecording = true;
    }
    playChannel1(): void {
        this.isRecording = false;
        const sound = this.channel1[0];
        this.channel1.forEach( sound => {
            setTimeout(() => {
            this.playAudio(sound.id);
            },
            sound.time
            )
        })
    }
    onKeyDown(e: KeyboardEvent) {
        const key = e.key;
        const time = e.timeStamp - this.recStartTime;
        let audioId: string;
        switch(key) {
            case 'q':
                audioId = 'boomAudio';
                break;
            case 'w':
                audioId = 'clapAudio';
                break;
            case 'e':
               audioId = 'hihatAudio';
                break;
            case 'r':
                audioId = 'kickAudio';
                break;
            case 't':
                audioId = 'openhatAudio';
                break;
            case 'y':
               audioId = 'rideAudio';
                break;
            case 'u':
                audioId = 'snareAudio';
                break;
            case 'i':
                audioId = 'tinkAudio';
                break;
            case 'o':
                audioId = 'tomAudio';
                break;
        }
        this.playAudio(audioId);
        this.recordSound(audioId, time);
    }
    playAudio(id: string) {
        const clap: HTMLAudioElement = document.querySelector('#' + id);
        clap.currentTime = 0;
        clap.play();
    }
    recordSound(id: string, time: number) {
        if (this.isRecording){
        const sound: ChannelSound = {
            id,
            time
        }
        this.channel1.push(sound);
        }
    }
}