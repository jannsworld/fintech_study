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

console.log(car.name);
console.log(car.ph);
car.start();