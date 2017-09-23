function come()
{
    document.getElementById("foto").style.display = "block";
    document.getElementById("texto").style.display = "block";
    document.getElementById("texto2").style.display = "none";
    document.getElementById("texto3").style.display = "none";
    
    
    document.getElementById('1').className = 'link first selected';
    document.getElementById('2').className = 'link';
    document.getElementById('3').className = 'link last';
}
function univer()
{
    document.getElementById("foto").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto3").style.display = "none";
    document.getElementById("texto2").style.display = "block";

    document.getElementById('1').className = 'link first';
    document.getElementById('2').className = 'link selected';
    document.getElementById('3').className = 'link last';
}
function esta()
{
    document.getElementById("foto").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").style.display = "none";
    document.getElementById("texto3").style.display = "block";

    document.getElementById('1').className = 'link first';
    document.getElementById('2').className = 'link';
    document.getElementById('3').className = 'link last selected';
}

