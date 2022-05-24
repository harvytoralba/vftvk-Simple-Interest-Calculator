function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal > 0){
        var rate = document.getElementById("rate").value;
        var years = document.getElementById("years").value;
        var interest = principal * years * rate / 100;
        var year = new Date().getFullYear()+parseInt(years);
        var display = "If you deposit <span class='highlight'>"+principal+"</span>,<br>";
        display += "at an interest rate of  <span class='highlight'>"+rate+"</span>.<br>";
        display += "You will receive an amount of  <span class='highlight'>"+interest+"</span>,<br>";
        display += "in the year  <span class='highlight'>"+year+"</span>";
        document.getElementById("result").innerHTML = display;
    }else{
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    
}
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval+"%";
}
        
