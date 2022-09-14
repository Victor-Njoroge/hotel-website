
function currentDate(){
     interval = setInterval(currentDate,1000)
    document.getElementById("date").innerHTML=new Date();
    console.log("currentDate()")
}
currentDate();

