function eurovalto()
{
    let arfolyam = 377.95;
    let valuta = document.getElementById("euro").value;
    console.log(valuta)
    let Ft = valuta * arfolyam;
    document.getElementById("atvaltott").innerHTML = Ft+ "Ft";
}