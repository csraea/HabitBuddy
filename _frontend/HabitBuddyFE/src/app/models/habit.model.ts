import { Milestone } from './milestone.model';

import {Deserializable} from "./deserializable.model";



export class Habit {
    habitid:number;
    name:string;
    milestones: Milestone [];

    deserialize(input: any) {
        Object.assign(this, input);
        this.milestones= input.milestones.map(ms => new Milestone().deserialize(ms))
        return this;
      }
}
