let emails = +prompt("How much accounts you want to make ");
let userEmails = [];
let userPasswords = [];
alert(
  "Kindly enter your email address  make sure it's in the correct format like yourname@example.com with the '@' symbol in it."
);
for (i = 1; i <= emails; i++) {
  let emails = prompt(`Enter the Email ${i} `);
  let password = prompt(`Enter the Password ${i}`);
  userEmails.push(emails);
  userPasswords.push(password);
  alert(`Account ${i} successfully added 🎊 `);
  console.log(userEmails);
  console.log(userPasswords);
}
document.write(
  " <h1> Here is your Emails : </h1> <br /> <h2> " + userEmails + " </h2> <br/>"
);
document.write(
  "<h1> Here is your Emails Password : </h1> <br /> <h2> " +
    userPasswords +
    " </h2> <br />"
);
// alert("Now which account do you want to login !")
let userEmail = prompt(
  "Enter the Email and Log in to any one of the accounts you have created"
);
let userpass = prompt("Enter the password");
let isCorrect = false;
for (let i = 0; i <= userEmails.length; i++) {
  if (userEmails[i] === userEmail && userPasswords[i] === userpass) {
    isCorrect = true;
    alert("Login Successfully! 😍");
    document.write(" <h1> Login Successfully! 😍 wellcome to Website </h1>");
    document.write("<h2> You are currently logged in with this account : </h2> " + " <br> " + "<h3>" + "( " + userEmails[i] + " )" + " </h3>")
  }
}
if (isCorrect === false) {
  alert("Email and Password doesn't match 😐");
}

// alert(" All of your Emails and passwords are shown in the console");
// alert("Thank you🥰")
