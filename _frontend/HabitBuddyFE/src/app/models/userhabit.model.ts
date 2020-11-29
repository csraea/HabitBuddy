import { User } from './user.model';
import { Habit } from './habit.model';
import {Map} from './map.model'



export class Userhabit {


    userid: number;
    habit: Habit;
    currentMap: Map;
    currentMilestone: number;


    deserialize(input: any) {
        Object.assign(this, input);
        this.currentMap=new Map().deserialize(input.currentMap)
        this.habit=new Habit().deserialize(input.habit)
        return this;
      }
}
