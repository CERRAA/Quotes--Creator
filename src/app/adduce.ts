

export class Adduce {
    showDescription: boolean;
 constructor(public author:string, public name:string, public adduce:string,public completeDate:Date, public like: number, public dislike: number){
     this.showDescription=false;
 }   
}
