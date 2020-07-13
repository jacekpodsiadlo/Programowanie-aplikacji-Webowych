export class locStorage {
  key = "data";

  getData(): any {
    const rawData = localStorage.getItem(this.key);
    return JSON.parse(rawData); //zmieniamy na obiekt
  }
  setData(data: any): void {
    const processedData = JSON.stringify(data); //zmieniamy data na text
    localStorage.setItem(this.key, processedData);
  }
}
