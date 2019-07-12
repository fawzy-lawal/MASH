function mash() {
   return("You will live in an " + getHome() + ", and you will have " + getChildrenCount() + " kids, aaaandd you will drive a " + getCar() + "! And finally you will die at " + myLife() +":D" );
}
kid = mash()
console.log(kid);

function getHome() {
    let userInput= process.argv[2]
    let randomHouse=["Mansion","Apartment", "Shack", "House","Shithole", userInput];
    if(!userInput) {
        randomHouse.pop()
    }
    let pi = [Math.floor(Math.random() * randomHouse.length)];
    let hi = randomHouse[pi];
    return hi 
}

function getChildrenCount() {
    let userInput2= process.argv[3]
    let num100 = (Math.floor(Math.random() * 100));
    let random =[num100,userInput2];
    if(!userInput2) {
        random.pop()
     }
    
    return num100
}

function getCar() {
    userInput3 = process.argv[4]
    let cars=["lambo", "convertible","box with wheels","Nissan","Audi", userInput3];
    if(!userInput3) {
        cars.pop() }
    return cars[Math.floor(Math.random() * cars.length)];
}
function myLife() {
    let yourAge = process.argv[5] 
    let ages = [ 20, 21, 18, 27, 36, 101, yourAge];
    return ages[Math.floor(Math.random() * ages.length)];
    
}
