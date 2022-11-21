let tabClim = new Array();
let image;
let mybutton = document.getElementById('bouton');
mybutton = addEventListener("click", creerClim);
console.log();
console.log(tabClim.length);


//créer l'objet climatisation et le lien avec la page html




function creerClim() {

    let t = parseFloat(document.getElementById("temperature").value);
    let p = parseInt(document.getElementById("pression").value);
    let h = parseInt(document.getElementById("humidite").value);
    let s = (document.getElementById("salle").value);
    let d = (document.getElementById("date").value);

    let clim1 = new climatisation(t, p, h, s, d);
    tabClim.push(clim1);
    //le code s'execute

    //tableau vide relié à la page html
    document.getElementById("tabClim").innerHTML="";

    //boucler sur le tableau for of
    for (let valeur of tabClim){
        let tr = document.createElement("td");

        let tdtemperature = document.createElement("td");
        tdtemperature.innerHTML=valeur.temperature;
        tr.appendChild(tdtemperature);

        let tdpression = document.createElement("td");
        tdpression.innerHTML=valeur.pression;
        tr.appendChild(tdpression);

        let tdhumidite = document.createElement("td");
        tdhumidite.innerHTML=valeur.humidite;
        tr.appendChild(tdhumidite);

        let tdsalle = document.createElement("td");
        tdsalle.innerHTML=valeur.salle;
        tr.appendChild(tdsalle);

        let tddate = document.createElement("td");
        tddate.innerHTML=valeur.date;
        tr.appendChild(tddate);

        document.getElementById("tabClim").appendChild(tr);
    }
    
    
}

function changeImg (){
    image.src ="./image/mont.jpeg";
}

function passerImg() {
    image.src = "./image/riv.webp";

}

function onmousedown() {
    document.getElementById("button").title;

}

document.getElementById("image").src = image.src;
//document.getElementById("img").src = image1.src;
//faire un constructeur 

function climatisation(temperature, pression, humidite, salle, date){

    this.temperature = temperature;
    this.pression = pression;
    this.humidite = humidite;
    this.salle = salle;
    this.date = date;
    this.toString=function() {return
        this.temperature + "" + 
        this.pression +"" 
        this.humidite+"" + 
        this.salle +"" + 
        this.date +"";}
    
        this.convertirTempFareinheit=function () {
            return ((40 + this.temperature)* 1.8) - 40;
        }

    }
