function explain_callback(name, age, task){
    console.log('Hello ', name)
    console.log('Your age ', age)
    task()
}
function washHand(){
    console.log("wash hand with soap.")
}
function takeShower(){
    console.log("Take Shower")
}
explain_callback("Shonjoy", 19, washHand);
explain_callback("Shonjoy", 18, takeShower);