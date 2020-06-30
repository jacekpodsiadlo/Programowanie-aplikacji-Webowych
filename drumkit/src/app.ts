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
        document.addEventListener('keydown', (e) => { this.onKeyDown(e) } );
        document.querySelector('#playBtn').addEventListener('click', () => { this.playChannel1() } );
        document.querySelector('#recBtn').addEventListener('click', (e: MouseEvent) => { this.recChannel1(e) } );
        document.addEventListener('keyup', (e) => { this.onKeyUp(e) } );
       }
    onKeyUp(e: KeyboardEvent){
        const key = e.key;
        for(let i = 0; i<key.length; i++){
            let first = document.getElementById('one');
            let second = document.getElementById('two');
            let third = document.getElementById('three');
            let fourth = document.getElementById('four');
            let fifth = document.getElementById('five');
            let sixth = document.getElementById('six');
            let seventh = document.getElementById('seven');
            let eighth = document.getElementById('eight');
            let ninth = document.getElementById('nine');
            if(key==='q'){
                first.style.backgroundColor = 'black';
                first.style.height = '50px';
                first.style.width = '100px';
            }
            if(key==='w'){
                second.style.backgroundColor = 'black'
                second.style.height = '50px';
                second.style.width = '100px';
            }
            if(key==='e'){
                third.style.backgroundColor = 'black';
                third.style.height = '50px';
                third.style.width = '100px';
            }
            if(key==='r'){
                fourth.style.backgroundColor = 'black';
                fourth.style.height = '50px';
                fourth.style.width = '100px';
            }
            if(key==='t'){
                fifth.style.backgroundColor = 'black';
                fifth.style.height = '50px';
                fifth.style.width = '100px';
            }
            if(key==='y'){
                sixth.style.backgroundColor = 'black';
                sixth.style.height = '50px';
                sixth.style.width = '100px';
            }
            if(key==='u'){
                seventh.style.backgroundColor = 'black';
                seventh.style.height = '50px';
                seventh.style.width = '100px';
            }
            if(key==='i'){
                eighth.style.backgroundColor = 'black';
                eighth.style.height = '50px';
                eighth.style.width = '100px';
            }
            if(key==='o'){
                ninth.style.backgroundColor = 'black';
                ninth.style.height = '50px';
                ninth.style.width = '100px';
            }
        }
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
        for(let i = 0; i<key.length; i++){
            let first = document.getElementById('one');
            let second = document.getElementById('two');
            let third = document.getElementById('three');
            let fourth = document.getElementById('four');
            let fifth = document.getElementById('five');
            let sixth = document.getElementById('six');
            let seventh = document.getElementById('seven');
            let eighth = document.getElementById('eight');
            let ninth = document.getElementById('nine');
            if(key==='q'){
                first.style.backgroundColor = 'pink';
                first.style.height = '60px';
                first.style.width = '120px';
            }
            if(key==='w'){
                second.style.backgroundColor = 'pink'
                second.style.height = '60px';
                second.style.width = '120px';
            }
            if(key==='e'){
                third.style.backgroundColor = 'pink';
                third.style.height = '60px';
                third.style.width = '120px';
            }
            if(key==='r'){
                fourth.style.backgroundColor = 'pink';
                fourth.style.height = '60px';
                fourth.style.width = '120px';
            }
            if(key==='t'){
                fifth.style.backgroundColor = 'pink';
                fifth.style.height = '60px';
                fifth.style.width = '120px';
            }
            if(key==='y'){
                sixth.style.backgroundColor = 'pink';
                sixth.style.height = '60px';
                sixth.style.width = '120px';
            }
            if(key==='u'){
                seventh.style.backgroundColor = 'pink';
                seventh.style.height = '60px';
                seventh.style.width = '120px';
            }
            if(key==='i'){
                eighth.style.backgroundColor = 'pink';
                eighth.style.height = '60px';
                eighth.style.width = '120px';
            }
            if(key==='o'){
                ninth.style.backgroundColor = 'pink';
                ninth.style.height = '60px';
                ninth.style.width = '120px';
            }
        }
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