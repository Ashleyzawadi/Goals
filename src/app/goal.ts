export class Goal {
    public showDescription: boolean;
    constructor(public id: number, public name:string, public description: string, public completeDate:Date){
        this.showDescription = false
    }   //constructor function defines the properties of each instance of a class.thaat is it will have an id and name
    
}
