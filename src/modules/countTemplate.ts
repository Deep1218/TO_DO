export class Counts {
    constructor(
        public key: string
    ){}

    private setCount(): void{
        if(localStorage.length == 0){
            localStorage.setItem(this.key, '0');
        }
    }
    updateCount(): void{
        let count: number = Number(localStorage.getItem('count')!) + 1;
        localStorage.setItem(this.key, String(count));
    }
}