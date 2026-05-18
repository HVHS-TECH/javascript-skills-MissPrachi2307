console.log("t11_data_types.js")

 //Variables 
var userName = "Pratha"
var userAge = 16;
var pocketMoney = 200;
var currentYear = 2026; 
var randomNumber = 10; 
var halfMoney = 2;

/****************************
Main 
****************************/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
const NAME_FIELD = document.getElementById("nameField");
const PRODUCT_FIELD = document.getElementById("productField");
const AGE_FIELD = document.getElementById("AgeField");
const PRODUCT_PRICE_FIELD = document.getElementById("ProductPriceField");
const POCKET_MONEY_FEILD = document.getElementById("PocketMoneyFeild");
function start(){
    console.log("Name:"+ userName);
    console.log("Age:"+ userAge);
    console.log("Pocket Money:"+ pocketMoney);
    console.log("Hi, console");
    console.log("As of " + currentYear + " I am " + userAge + " years old");
    birthYear= currentYear-16
    console.log("I was bron in " + birthYear);
    futureYear= userAge + randomNumber
    console.log("In 10 years I will be " + futureYear);
    console.log("I have " + 200 + " dollars");
    moneySpent= pocketMoney / halfMoney
    totalamount= 100 + 3 
    console.log("I have spent half of your mone, now I have "+ moneySpent ); 
    console.log("Then I got $3, now I have " + totalamount);
}
    
 
    function start(){
    OUTPUT.innerHTML += "<h2>Added by JavaSprict</h2>";
    OUTPUT.innerHTML += "<p>Hello " + userName + "</p>";
    OUTPUT.innerHTML += "<p>Second Paragraph line.</p>"; 
    OUTPUT.innerHTML += "<p> Third Paragraph line.</p>";
    
 welcome();
displayProduct("Chocolate ", 4)
displayProduct("Chips ", 3)
displayProduct("Drinks ", 2.50)
}

/****************************
Functions
****************************/
function welcome(){
//Add a line to the html page
OUTPUT .innerHTML = "<p>Welcome to the shop</p>";
OUTPUT.innerHTML = "<h2>Added by JavaSprict</h2>";
OUTPUT.innerHTML += "<p>Hello " + userName + "</p>";
OUTPUT.innerHTML += "<p>Second Paragraph line.</p>"; 
OUTPUT.innerHTML += "<p> Third Paragraph line.</p>";

}

function displayProduct (_name, _price){
    OUTPUT.innerHTML += "<p>" + _name + "costs $" + _price + "</p>"
}

function getFormInput(){
    let userName = NAME_FIELD.value;
    OUTPUT.innerHTML = "<p> Your name is " + userName + "</p>";
    let userProduct = PRODUCT_FIELD.value;
    OUTPUT.innerHTML += "<p> Your product is " + userProduct + "</p>";
    let userAge = AGE_FIELD.value;
    OUTPUT.innerHTML += "<p> Your age is " + userAge + "</p>";
    let userProductPrice = PRODUCT_PRICE_FIELD.value;
    OUTPUT.innerHTML += "<p> Your product price is $" + userProductPrice + "</p>";
    let pocketMoney = POCKET_MONEY_FEILD.value; 
    OUTPUT.innerHTML += "<p>Your pocket money is $ " + pocketMoney + "</p>";
}
