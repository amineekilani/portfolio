function Time()
{
    today=new Date();
    var y=new Date().getFullYear();
    var mo=new Date().getMonth()+1;
    var d=today.getDate();
    var h=new Date().getHours();
    var mi=new Date().getMinutes();
    var s=new Date().getSeconds();
    var suffixe=(h>=12)?"PM":"AM";
    mo=(mo<10)?"0"+mo:mo;
    d=(d<10)?"0"+d:d;
    h=(h>=12)?h-12:h;
    h=(h<10)?"0"+h:h;
    mi=(mi<10)?"0"+mi:mi;
    s=(s<10)?"0"+s:s;
    h=(h==0)?12:h;
    document.getElementById("date_and_time").innerHTML="<b>"+d+"/"+mo+"/"+y+"<br>"+h+":"+mi+":"+s+" "+suffixe+"</b>";
}
setInterval(Time,1000)
document.getElementById("year").innerHTML=new Date().getFullYear();
skills=["Angular","Bootstrap","C","CSS","Git","GitHub","HTML","Java","JavaScript","Linux","Maple","PHP","Python","SQL","UML"];
skills_section=document.getElementById("skills_list");
for (var i=0; i<skills.length; i++)
{
    skills_section.innerHTML+=
    `
        <div class="col-md-4 mb-4">
            <div class="card h-100 d-flex justify-content-center align-items-center">
                <img src="Skills/${skills[i]}.png" alt="${skills[i]}" id="logo_skill">
                <span><strong>${skills[i]}</strong></span>
            </div>
        </div>
    `;
}