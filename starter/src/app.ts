export class App {
  hole: any;
  

  constructor() {
    this.start();
  }
  start(): void {
    this.drawBall();
    this.drawHoles();
    this.handleOrientationChange();
  }
  drawBall(): void {
    const ball = document.createElement("div");
    ball.className = "ball";
    ball.id = "ball";
    const canva = document.querySelector("main");
    canva.appendChild(ball);
  }
  drawHoles(): void {
    const canva = document.querySelector("main");
    const canvaWidth = canva.offsetWidth;
    const canvaHeight = canva.offsetHeight;
    const xPos = Math.random() * canvaWidth;
    const yPos = Math.random() * canvaHeight;
    this.hole.x = xPos;
    this.hole.y = yPos;
    const hole = document.createElement("div");
    hole.className = "ball hole";
    hole.style.left = xPos + "px";
    hole.style.top = yPos + "px";
    canva.appendChild(hole);
  }
  handleOrientationChange(): void {
    window.addEventListener(
      "deviceorientation",
      (e: DeviceOrientationEvent) => {
        this.onOrientationChange(e);
      }
    );
  }
  onOrientationChange = (e: DeviceOrientationEvent) => {
    this.getFirstTilt(e);
    const xTilt = e.gamma;
    const yTilt = e.beta;
    const ball = document.querySelector<HTMLElement>("#playerBall");
    const x = ball.offsetLeft;
    const y = ball.offsetTop;
    ball.style.left = y + xTilt + "px";
    ball.style.top = x + yTilt + "px";
  };
    getFirstTilt(e: DeviceOrientationEvent) {
    if (this.startXTilt === undefined) }
    this.startXTilt = e.gamma;
    this.startYTilt = e.beta;
    }    
  }
};
