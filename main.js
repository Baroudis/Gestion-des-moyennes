var lenom = "";
var leprenom = "";
var lage = "";
var notes = "";
var objtable = {};


var nom = "";
const montableau = [];

function ajouterVal() {

  notes = document.getElementById("notesA").value
  leprenom = document.getElementById("prenomA").value

  objtable = {
    Nom: lenom,
    Prénom: leprenom,
    age: lage,
    notes: notes
  };
  //objtable = notes
  //montableau.push(objtable);
  //montableau.push(notes)
  montableau.push(objtable)

  console.log(montableau)

  //objtable.push(notes)
  
  //noti = objtable.notes
//console.log(noti)


  montableau.forEach(function (item, index, array) {

    tousaffi = ""

    if (index + 1 == 1) {
      tousaffi += document.getElementById("demo").innerHTML = `<p>Vous avez ajouté le ${index + 1}er chiffre  qui est ${objtable.notes}</p>`
      document.getElementById("notesA").value = "";
      document.getElementById("prenomA").value = "";


     // console.log(tousaffi)
    } else {
      document.getElementById("demo").innerHTML = `<p>Vous avez ajouté le ${index + 1}em chiffre qui est ${objtable.notes}</p>`

    }
    //console.log(item, index + 1);
    //console.log(montableau)
    //console.log(objtable.notes)


    // var sum = "";
    // sum += objtable.notes
    //console.log(objtable)
    //console.log(sum)
  });
  tousaffi += tousaffi


//console.log(sum)

  //console.log(objtable.notes)
  

  //return montableau

}


console.log(montableau)
//console.log(montableau[0].notes)
//console.log(objtable.notes)



function afficherval() {

  document.getElementById('ap').classList.add("d-none");
  document.getElementById('retourAffi').classList.remove("d-none");
  document.getElementById('loop').classList.remove('d-none');

  //console.log(montableau)

  chaine = 0;

  for (i = 0; i < montableau.length; i++) {
    //arf = objtable.notes
    chaine += ` + ${montableau[i].notes}`;  // ${montableau[i]}

    console.log(chaine)
    console.log(objtable.notes)

    console.log(Math.max(objtable.notes))  // note la plus haute

  }
  // o = Math.max(objtable.notes);
  // document.getElementById('pluo').innerHTML = "voici" + o

  
  //console.log(chaine)
  //console.log(montableau.length)
  //console.log(objtable.prenom)



  function sumStr(chaine) {
    let strArr = chaine.split("+");
    let sum = strArr.reduce(function (total, num) {
      return parseFloat(total) + parseFloat(num);
    });

    return sum;

  }

  prix = sumStr(chaine)
  //prix = objtable.note[i] + 
  largeur = montableau.length
  total = prix / montableau.length
  console.log(largeur)
  console.log(prix)
  console.log(total)

  lignes = ""
  para = "<th>#</th><th>Moyenne : " + total + "</th><th>Remarque</th>"
  finall = ""

  montableau.forEach(afficherT)
  document.getElementById("loop").innerHTML = para


  function afficherT(item, index) {


    if (item.notes < total) {
      para += `<tr class="red"><th>Moyenne numero : ${index + 1}</th><td> ${item.notes}</td><td>Au boulot !!</td></tr>`;

    } else if (item.notes == total) {
      para += `<tr class="orange"><th>Moyenne numero : ${index + 1} </th><td>${item.notes}</td><td>Pile poile la moyenne</td></tr>`;

    } else {
      para += `<tr class="green"><th>Moyenne numero : ${index + 1}</th><td>${item.notes}</td><td>Bravo vous avez plus que la moyenne</td></tr>`;
      console.log(item)
    }

  }


}

function retourN() {
  document.getElementById('ap').classList.remove("d-none");
  document.getElementById('retourAffi').classList.add("d-none");
  document.getElementById('loop').classList.add('d-none');
}

function retourDebut() {
  location.reload();
}

function theme() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


