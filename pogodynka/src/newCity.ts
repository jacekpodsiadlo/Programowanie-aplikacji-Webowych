export class NewCity {
    city: string;
    newCityAdded: boolean;
    constructor(handler: (city: string)) {
        // this.handleAddCity();
    }
    handleAddCity(): void {
        document.querySelector('#cityAddBtn').addEventListener('click', () =>{
            // this.city = (document.querySelector('#cityname') as HTMLInputElement).value;
            this.city = (document.querySelector<HTMLInputElement>('#cityname')).value;
            this.newCityAdded = true;
         })
    }
}