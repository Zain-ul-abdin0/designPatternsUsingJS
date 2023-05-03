function Subject(){
    this.observers = [];
}

Subject.prototype = {
    subscriber : function(fun) {
        this.observers.push(fun)
    },
    unsubscriber: function(fnRemoved) {
        this.observers.filter(fun=>{
            if(fun != fnRemoved){
                return fun
            }
        })
    },
    fire : function(){
        this.observers.forEach(fn=>{
            fn.call()
        })
    }
}

const subject = new Subject();

function Observer1(){
console.log('Observer 1');
}

function Observer2(){
    console.log('Observer 2');

}

subject.subscriber(Observer1)
subject.subscriber(Observer2)
subject.unsubscriber(Observer1)
subject.fire()






