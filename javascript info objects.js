// first exercise 
let userName = {};
userName.name = "sakura";
userName.surname = "elisondo";
userName.name1 = "yuki";
delete userName.name;
console.log(userName)


// second exercise 

let schedule = {};
alert( isEmpty(schedule) ); // true
schedule["8:30"] = "get up";
alert( isEmpty(schedule) ); // false

function isEmpty(obj) {
  for (let cats in obj) {
    return false;
  }
  return true;
}
isEmpty(2)




// third exercise
let salaries = {
  John: 200,
  Ann: 350,
  Pete: 1130
}

let sum = 0;
for (let yuki in salaries) { //should be using "key"
  sum = sum + salaries[yuki];
}

alert(sum);



// fourth exercise
// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let gatos in obj) {
    if (typeof obj[gatos] == 'number') {
      obj[gatos] *= 2;
    }
  }
}