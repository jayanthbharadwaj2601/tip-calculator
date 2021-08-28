x=0
y=0
z=0
console.log(x,y,z)
function amount()
{   if((document.getElementById("amountinput").value)!='')
    x=parseFloat(document.getElementById("amountinput").value)
    else
    x=0
    computation()
    
}
function perbutton(a)
{   
    y=parseFloat(a)
    computation()
}
function people()
{
    r=document.getElementById("peopleinput").value
    if (r!='')
    z=parseFloat(r)
    else
    z=0
    computation()
}
function perinput()
{
    h=document.getElementById("custominput").value
    if(h!='')
    y=parseFloat(h)
    else
    y=0
    computation()
}
function computation()
{
    if(z==0)
    {
        document.getElementById("tot").innerHTML="$0.00"
        document.getElementById("tp").innerHTML="$0.00"
    }
    else
    {
        p=(x/z);
        q=(p*(y/100))
        p+=q
        document.getElementById("tot").innerHTML="$"+String(Math.round(p*100)/100)
        document.getElementById("tp").innerHTML="$"+String(Math.round(q*100)/100)
    }
}
