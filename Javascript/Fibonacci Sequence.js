function checking() {
    if(document.getElementById("num-input").value<=0)
    {
	    document.getElementById("mydiv").textContent= "the number smaller than zero";
	    
    }
    else
    {
        var num =[0,1];
    var first =0;
    var last =1;
    var i=0;
    while (i<document.getElementById("num-input").value-2)
    {
        last +=first;
        num.push(last);
        first = (first-last) * -1;
        i+=1;
        console.log(num)
    }
    var mydiv = document.getElementById("mydiv").textContent=num;
    }
    
}
