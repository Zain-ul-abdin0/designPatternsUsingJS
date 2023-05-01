function Developer (name){
    this.name = name;
    this.type = "Developer";
}

function Tester (name){
    this.name=name;
    this.type="Tester";
}

function EmployeeFactory (name,type){
    this.create = (name,type)=>{
        switch(type){
            case 1:
                return new Developer(name)
                break;
            case 2:
                return new Tester(name);
                break;
            }
    }
}

function say(){
    console.log("Hi, I am " + this.name + "and I am " + this.type) ;
}

let employee = new EmployeeFactory()
employeeArray=[]
employeeArray.push(employee.create('Zain ul Abdin' , 1));
employeeArray.push(employee.create('Ahmad Muaz' , 2));

employeeArray.forEach(emp =>{
    say.call(emp)
})