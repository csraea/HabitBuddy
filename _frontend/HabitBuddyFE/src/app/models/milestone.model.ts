export class Milestone {

    milestoneid: number;
    order: number;
    name:string;

    habitid:number;
      

    deserialize(input: any): this {
        Object.assign(this, input);
        return this;
    }
}
