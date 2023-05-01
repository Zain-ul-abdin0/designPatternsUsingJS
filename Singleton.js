class Singleton {
    static myinstance = null;
    constructor(name,age){
        this.name=name;
        this.age=age
    }
    static getinstance(){
        if(Singleton.myinstance == null){
            Singleton.myinstance = new Singleton()
        }
        return this.myinstance
    }
    set(name,age) {
        this.name=name;
        this.age=age
    }
    get(){
        console.log(this.name,this.age);
    }
}

let single =  Singleton.getinstance();
let mingle = Singleton.getinstance();
single.set('zain',123);
single.set('ahmad',32)
single.get()
mingle.get();