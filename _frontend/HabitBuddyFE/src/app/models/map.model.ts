export class Map {

    id:number;
    name:string;
    price:number;
    days:number;
    image:string;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
