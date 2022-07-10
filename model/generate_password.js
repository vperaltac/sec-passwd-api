
// shuffle a string using the Fisher-Yates algorithm
function shuffle(string){
  let arr = [...string];

  for (let i=string.length-1; i>0; i--){
    let j = Math.floor(Math.random()*i);
    [arr[j], arr[i]] = [arr[i], arr[j]];
  }

  return arr.join('')
}

//As input parameters in the request the user has to provide:
// * minimum length 
// * number of special characters in the password
// * number of numbers in the password
// * number of passwords that must be created. 
function generate_password(length, special_chars, numbers, amount){
  // if inputs are not correct, use default values
  if(length < 8 || length > 128 || (special_chars+numbers > length-2)){
    console.log("some parameters are not correct. Using default values.")
    length        = 12
    special_chars = 2
    numbers       = 2
  }

  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const special = "!@#$%^"

  let passwords = []
  for(let i=0; i<amount; i++){
    // start with blank password
    let password = ""

    // generate the special characters requested
    for (let i=0; i<special_chars; i++){
      let rand = Math.floor(Math.random()*special.length);
      password += special[rand];
    }

    // generate the numbers requested
    for (let i=0; i<numbers; i++){
      password += Math.floor(Math.random()*10);
    }

    // fill the rest of the password with letters
    let chars_left = length - password.length
    let password_letters = ""
    for (let i=0; i<chars_left; i++){
      let rand = Math.floor(Math.random()*letters.length);
      password_letters += letters[rand]
    }

    // make sure that there is at least 1 upper case and 1 lower case letter
    const re_upper = /[A-Z]/g
    const re_lower = /[a-z]/g

    // if there is no upper case, modify the first letter to uppercase
    // if there is no lower case, modify the first letter to lowercase
    if(password_letters.match(re_upper) == null){
      password_letters = password_letters.charAt(0).toUpperCase() + password_letters.slice(1);
    }
    else if (password_letters.match(re_lower) == null) {
      password_letters = password_letters.charAt(0).toLowerCase() + password_letters.slice(1);
    }

    password += password_letters
    passwords.push(shuffle(password));
  }

  return passwords
}

module.exports = generate_password