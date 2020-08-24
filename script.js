var users = [];

users[0] = {
    name: "Den",
    age: 20,
    gender: "male",
}
users[1] = {
    name: "Olga",
    age: 27,
    gender: "female",
}
users[2] = {
    name: "Den",
    age: 20,
    gender: "male",
}

users[3] = {
    name: "John",
    age: 34,
    gender: "male",
}
users[4] = {
    name: "Elena",
    age: 73,
    gender: "female",
};
console.log(users);



let genderCount = 0;
 
users.forEach(function(u) {
 
  if (genderCount == 0) {
    gender = u.gender;
    genderCount++;
  } else {
    genderCount += (gender == u.gender ? 1 : -1);
  }
});
 console.log('Major gender', genderCount ? gender : 'both');

//-------------------------------------------------------------------

 const arr = ['ololo', 'anna', 'red', 'ololo', 'qwe', 'anna', 'ololo']; 
 let newArray = arr.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) +1;
    return accumulator;

 }, {})
 console.log(newArray);

//--------------------------------------------------------------------

let user = {
  name: "John",
  age: 30,
};



let arrKeys = [];               
for (key in user) {
  arrKeys.push(key);
}

let arrValues = [];             
for (key in user) {
  arrValues.push(user[key]);
}


  
function exchange(anyObject) {
  let newUser = {};             
  for (let i = 0; i < arrKeys.length; i++) {
    newUser[arrValues[i]] = arrKeys[i];
  }
  return newUser;
}

console.log(exchange(user));







