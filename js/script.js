window.onload = function(){
//variables
var formHandle =  document.forms.form_recipe;
formHandle.onsubmit = recipeForm;

var generateButton = document.getElementById("goBtn")
generateButton.onclick=recipeForm;




function recipeForm(){
    
    //uservariables
    var userMeat = formHandle.type_meat.value;
    var userStarch = formHandle.type_starch.value;
    var userVege = formHandle.type_veg.value;

    //consoleLog the values
    console.log(userMeat);
    console.log(userStarch);
    console.log(userVege);

    //variables for error message
    meatErrorMessage = document.getElementById("emptySelectionMeat");
    starchErrorMessage = document.getElementById("emptySelectionStarch");
    vegErrorMessage = document.getElementById("emptySelectionVeg");

    //LOGIC
    document.getElementById("allRecipes").style.display = "block";

    

    //if user did not check any meat
    if(userMeat===""){
        meatErrorMessage.innerHTML = "Please select your option";
        meatErrorMessage.style.border = "2px solid #f35268";
        console.log("user hasn't selected any meat")
        return false;
    } else {
        meatErrorMessage.style.color = "#white";
    }
    //if user did not select any starch
        if(userStarch===""){
            starchErrorMessage.innerHTML = "Please select your option"
            starchErrorMessage.style.border = "2px solid #f35268";
            console.log("user hasn't selected any starch")
            return false;
        } else {
            starchErrorMessage.style.color = "#white";
        }
    // if user did not check any vegetable
        if(userVege===""){
            vegErrorMessage.innerHTML = "Please select your option"
            vegErrorMessage.style.border = "2px solid #f35268";
            console.log("user hasn't selected any vegetable")
            return false;
        } else {
            vegErrorMessage.style.color = "#white";
        }
    
    // 

    //if statement: USER SELECTED ALL VALUES
        if(userMeat=="chicken" && userStarch=="pasta" && userVege=="mushroom"){
            document.getElementById("chickenAlfredo").style.display = "block";
            document.getElementById("charlieChan").style.display = "block";
            // 
        } else if(userMeat=="beef" && userStarch=="pasta" && userVege=="mushroom"){
            document.getElementById("beefSpaghetti").style.display = "block";
            document.getElementById("beefStroganoff").style.display = "block";
        } else if(userMeat=="chicken" && userStarch=="pasta" && userVege=="broccoli"){
            document.getElementById("chickenBroc").style.display = "block";
            document.getElementById("macCheese").style.display = "block";
        } else if(userMeat=="beef" && userStarch=="pasta" && userVege=="broccoli"){
            document.getElementById("beefLomien").style.display = "block";
            document.getElementById("beefSoup").style.display = "block";
        } else if(userMeat=="chicken" && userStarch=="potato" && userVege=="mushroom"){
            document.getElementById("chickPiccata").style.display = "block";
            document.getElementById("garlicChick").style.display = "block";
        } else if(userMeat=="beef" && userStarch=="potato" && userVege=="mushroom"){
            document.getElementById("salisbury").style.display = "block";
            document.getElementById("caldereta").style.display = "block";
        } 
        else if(userMeat=="chicken" && userStarch=="potato" && userVege=="broccoli"){
            document.getElementById("chickStirFry").style.display = "block";
            document.getElementById("chickRoasted").style.display = "block";
        } else if(userMeat=="beef" && userStarch=="potato" && userVege=="broccoli"){
            document.getElementById("steakBites").style.display = "block";
            document.getElementById("beefTenderloin").style.display = "block";
        } 



    // function show full recipe

        // CHICKEN PASTA MUSHROOM 
        //chicken alfredo show full recipe
        var alfredoBtn = document.getElementById("chickenAlfredo").addEventListener("click", 
        function() {
            alredoFR.style.display = "block";
        })
        var alredoFR = document.getElementById("alfredoRecipe")

        //charlie chan show full recipe
        var chanBtn = document.getElementById("charlieChan").addEventListener("click", 
        function() {
            chanFR.style.display = "block";
        }) 
        var chanFR = document.getElementById("chanRecipe")

        // BEEF PASTA MUSHROOM 
         //spaghetti show full recipe
        var spaghettiBtn = document.getElementById("beefSpaghetti").addEventListener("click", 
        function() {
            spaghettiFR.style.display = "block";
        })
        var spaghettiFR = document.getElementById("spaghettiRecipe")

         //stroganoff show full recipe
        var stroganoffBtn = document.getElementById("beefStroganoff").addEventListener("click", 
        function() {
            strogFR.style.display = "block";
        }) 
        var strogFR = document.getElementById("stroganoffRecipe")

        // CHICKEN PASTA BROCCOLI
         //chicken brocoli show full recipe
        var chicbrocBtn = document.getElementById("chickenBroc").addEventListener("click", 
        function() {
            chicbrocFR.style.display = "block";
        })
        var chicbrocFR = document.getElementById("chicbrocRecipe")

        //mac and cheese show full recipe
        var maccheeseBtn = document.getElementById("maccheeseRecipe").addEventListener("click", 
        function() {
            maccheeseFR.style.display = "block";
        }) 
        var maccheeseFR = document.getElementById("maccheeseRecipe")

        // BEEF PASTA BROCCOLI 
         //beef lomien show full recipe
        var beefLomienBtn = document.getElementById("beefLomien").addEventListener("click", 
        function() {
            beefLomienFR.style.display = "block";
        })
        var beefLomienFR = document.getElementById("beefLomienRecipe")
       
        //beef soup show full recipe
        var beefSoupBtn = document.getElementById("beefSoup").addEventListener("click", 
        function() {
            beefSoupFR.style.display = "block";
        }) 
        var beefSoupFR = document.getElementById("beefsoupRecipe")


        // CHICKEN POTATO MUSHROOM
         //chicken piccata show full recipe
        var chickPiccataBtn = document.getElementById("chickPiccata").addEventListener("click", 
        function() {
            chickPiccataFR.style.display = "block";
        })
        var chickPiccataFR = document.getElementById("chickpiccataRecipe")

         // garlic chicken  show full recipe
        var garlicChickBtn = document.getElementById("garlicChick").addEventListener("click", 
        function() {
            garlicChickFR.style.display = "block";
        }) 
        var garlicChickFR = document.getElementById("garlicChickRecipe")

        // BEEF POTATO MUSHROOM
         //salisbury show full recipe
        var salisburyBtn = document.getElementById("salisbury").addEventListener("click", 
        function() {
            salisburyFR.style.display = "block";
        })
        var salisburyFR = document.getElementById("salisburyRecipe")

        //caldereta show full recipe
        var calderetaBtn = document.getElementById("caldereta").addEventListener("click", 
        function() {
            calderetaFR.style.display = "block";
        }) 
        var calderetaFR = document.getElementById("calderetaRecipe")


        //CHICKEN POTATO BROCCOLI 
         //chicken stirfry  show full recipe
        var chickStirFryBtn = document.getElementById("chickStirFry").addEventListener("click", 
        function() {
            chickStirFryFR.style.display = "block";
        })
        var chickStirFryFR = document.getElementById("chickstirfryRecipe")

         //roasted chicken show full recipe
        var chickRoastedBtn = document.getElementById("chickRoasted").addEventListener("click", 
        function() {
            chickRoastedFR.style.display = "block";
        }) 
        var chickRoastedFR = document.getElementById("chickroastedRecipe")



        //BEEF POTATO BROCCOLI 
         //steak bites show full recipe
        var steakBitesBtn = document.getElementById("steakBites").addEventListener("click", 
        function() {
            steakBitesFR.style.display = "block";
        })
        var steakBitesFR = document.getElementById("steakbitesRecipe")

         //beef tenderloin show full recipe
        var beefTenderloinBtn = document.getElementById("beefTenderloin").addEventListener("click", 
        function() {
            beefTenderloinFR.style.display = "block";
        }) 
        var beefTenderloinFR = document.getElementById("beeftenderloinRecipe")







    //recipe output otherpage;

    return false;
        

    }//end recipeForm function
    

}//end onload