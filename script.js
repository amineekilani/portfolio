function Time()
{
    var s=new Date().getSeconds();
    var m=new Date().getMinutes();
    var h=new Date().getHours();
    var suffixe=(h>=12)?"PM":"AM";
    h=(h>=12)?h-12:h;
    h=(h<10)?"0"+h:h;
    m=(m<10)?"0"+m:m;
    s=(s<10)?"0"+s:s;
    h=(h==0)?12:h;
    document.getElementById("time").innerHTML="<b>"+h+":"+m+":"+s+" "+suffixe+"</b>";
}
setInterval(Time,1000)
document.getElementById("year").innerHTML=new Date().getFullYear();