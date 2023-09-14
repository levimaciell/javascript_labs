document.getElementById("button").onclick = () => {

    const check = document.getElementById("check");
    const visa = document.getElementById("visa");
    const master = document.getElementById("mastercard");
    const paypal = document.getElementById("paypal");


    if(check.checked){
        console.log("You are subscribed!");
    }
    else{
        console.log("you are not subscribed");
    }


    if(visa.checked){
        console.log("You are paying with visa");
    }
    else if(master.checked){
        console.log("You are paying with mastercard")
    } 
    else if(paypal.checked){
        console.log("You are paying with paypal")
    } 
    else{
        console.log("You did not select anythig! Please select something")
    }
}