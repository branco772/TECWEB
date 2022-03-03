function temperatura(num){
    var tem=parseFloat(document.getElementById('num').value) ;
    if(tem>=-10&&tem<=15){
        alert("FRIO");
    }
    else{
        if(tem>=16&&tem<=25){
            alert("TEMPLADO");
        }
        else{
            if(tem>=26&&tem<=40){
                alert("CALOR");
            }
        }
    }
}
function factorial(n) {
    var fac=parseFloat(document.getElementById('fac').value) ;
    let s = 1;
    while (fac > 1) {
        s *= fac;
        fac--;
    }
    alert(s);
}
function FIZZBUZZ(fb)
{ 
    var fb=parseFloat(document.getElementById('fb').value) ;
    for(var i=1; i<=fb; i++)
    {
        if(i%15==0)
        {
            document.write(i + 'FIZZ-BUZZ' + '<br>');
        }
        else{
            if(i%3==0)
            {
                document.write(i + 'FIZZ' + '<br>');
            }
            else{
                if(i%5==0)
                {
                    document.write(i + 'BUZZ' + '<br>');
                }
                else{
                    document.write(i+'<br>')
                }
            }
        }
    }
}
(function fecha()
{
    var fecha=new Date(),
        diaSemana=fecha.getDay(),
        dia=fecha.getDate(),
        mes=fecha.getMonth(),
        year=fecha.getFullYear();
    var pdiaSemana= document.getElementById('diasemana'),
        pDia=document.getElementById('dia'),
        pMes=document.getElementById('mes'),
        pYear=document.getElementById('year');
    var semana=['DOMINGO','LUNES','MARTES','MIERCOLES','JUEVES','VIERNES','SABADO'];
    pdiaSemana.textContent=semana[diaSemana];
    pDia.textContent=dia;
    var meses=['ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SEPTIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE'];
    pMes.textContent=meses[mes];
    pYear.textContent=year;
}())