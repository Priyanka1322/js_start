const user = {
    username: "pinka",
    price:999,

    wlcomeMessage: function () {
     console.log(`${this.username}, welcome to website`);    
    // console.log(this);
    }

}
// curent context ko refre krta hai `this`
// context means uske anddr ke values or variables

// user.wlcomeMessage()
// user.username="isha"
// user.wlcomeMessage()
// console.log(this);


// function chai (){
//     console.log(this);
// }

// chai()


// const chai = function () {
//  let username="p"
//  console.log(this.chai);    
// }
// chai()



// const addTwo = (num1,num2)=>{
//     return num1+ num2
// } basic arrow 

// const addTwo =(num1 ,num2) => (num1+ num2) if we use {} the  we must have to write return keyword 