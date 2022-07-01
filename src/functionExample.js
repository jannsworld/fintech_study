function plus(p1, p2){
    console.log(this);
    return p1+p2;
}

const minus = (p1, p2) => {
    console.log(this);
    return p1 - p2;
};

// div, multi

const div = () => {
    return p1/ p2;
}

const multi = () => {
    return p1 * p2;
}

console.log(minus(2, 4));
console.log(plus(2,4));
console.log(div(2,4));
console.log(multi(2,4));

