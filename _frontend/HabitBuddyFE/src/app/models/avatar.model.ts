export class Avatar {

    id:number;
    name:string;
    price:number;
    image:string;

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
