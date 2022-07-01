let car = {
    name : "genesis",
    ph :220,
    star : function(){
        console.log("engine start");
    },
    stop : function() {
        console.log("engine stop");
    },
};

let carname = car.name;
let carph = car.ph;

const {name, ph} = car;

console.log(name, ph);
