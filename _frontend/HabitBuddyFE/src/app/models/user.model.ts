import { Habit } from './habit.model';
import { Avatar } from './avatar.model';
import {Map} from './map.model'



export class User {

    username: string;
    email:string;
    userid:number;
    
    score:number;
    maps: Map [];
    avatars: Avatar [];
    currentAvatar: Avatar;

    //trackedHabits: Habit [];

    deserialize(input: any) {
        Object.assign(this, input);
        this.maps= input.maps.map(ms => new Map().deserialize(ms))
        //this.trackedHabits= input.trackedHabits.map(ms => new Habit().deserialize(ms); ms.currentMap=new Map().deserialize(ms))

        this.avatars= input.avatars.map(ms => new Avatar().deserialize(ms))
        this.currentAvatar=new Avatar().deserialize(input.currentAvatar)
        return this;
      }
    
}
