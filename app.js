let emails = +prompt("How much accounts you want to make ");
let userEmails = [];
let userPasswords = [];
for (i = 1; i <= emails; i++ ){
    let emails = prompt(`Enter the Email ${i}`);
    let password= prompt(`Enter the Password ${i}`);
    userEmails.push(emails);
    userPasswords.push(password);
    console.log(userEmails );
    console.log(userPasswords);
    
}
alert("Now which account do you want to login !")
let userEmail = prompt("enter the email you want to login ");
let userpass = prompt("enter your password");
let isCorrect = false;
for (let i = 0; i <= userEmails.length; i++){
    if(userEmails[i] === userEmail && userPasswords[i] === userpass){
        isCorrect = true;
        alert("Login Successfully! 😍");
        document.write("Login Successfully! 😍 wellcome to Website ")  
    }
}
if (isCorrect === false){
    alert("please enter valid Email and passwaord! 😐");
}

alert(" All of your Emails and passwords are shown in the console");
alert("Thank you🥰")