let apple = {
    color: 'red',
    size: 10,
    weight: 100
};

let mandarin = {
    color: 'orange',
    size: 6,
    weight: 200
};

let grape = {
    color: 'purple',
    size: 8,
    weight: 300
};

let banana = {
    color: 'purple',
    size: 8,
    weight: 300
};

let fruits = [apple,mandarin,grape,];
console.log(fruits);


let total_weight = 0;
for (let i = 0 ; i < fruits.length; i++) {
    // console.log(fruits[i].weight);
    total_weight = total_weight + fruits[i].weight;
    // total_weight += fruits[i].weight;
    
}
console.log(total_weight);

