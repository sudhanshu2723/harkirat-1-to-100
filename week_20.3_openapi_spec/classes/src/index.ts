
interface AnimalType {
    name:string,
    age:Number,
    speaks:()=>void
}


class Animal implements AnimalType{
    name:string;
    age:Number
    constructor(name:string,age:Number){
          this.name=name;
          this.age=age;
    }
    speaks(){
        console.log("the dog speaks")
    }
}

const dog=new Animal("akhilesh",34);
dog.speaks()