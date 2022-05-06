
var montableau = []
var nom = "";
//var notes = "";




function ajouterVal() {

  notes = document.getElementById("notesA").value
  montableau.push(notes)
  // console.log(montableau)

  montableau.forEach(function (item, index, array) {

        tousaffi = ""
    
        if (index + 1 == 1) {
          tousaffi += document.getElementById("demo").innerHTML = `<p>Vous avez ajouté le ${index + 1}er chiffre  qui est ${item}     </p>`
    
          console.log(tousaffi)
        } else {
          document.getElementById("demo").innerHTML = `<p>Vous avez ajouté le ${index + 1}em chiffre qui est ${item}     </p>`
        }
        console.log(item, index + 1);
        console.log(montableau)
      })
      tousaffi += tousaffi

  return montableau

}





function afficherval() {

  document.getElementById('ap').classList.add("d-none");

  chaine = 0;

  for (i = 0; i < montableau.length; i++) {
    chaine += ` + ${montableau[i]}`;
  }
  console.log(chaine)



  function sumStr(chaine) {
    let strArr = chaine.split("+");
    let sum = strArr.reduce(function (total, num) {
    return parseFloat(total) + parseFloat(num);
    });

    return sum;

  }

  prix = sumStr(chaine)
  largeur = montableau.length
  total = prix / montableau.length
  console.log(largeur)
  console.log(prix)
  console.log(total)
  
  lignes = ""

  para = "" 
  finall= ""
  montableau.forEach(afficherT)
  document.getElementById("loop").innerHTML = para

  function afficherT(item, index){

    if(item < total){
      para += "<tr class='red'><th>Moyenne numero : " + index+1 + "</th><td>" + item + "</td></tr>";
      // console.log(item, total);
      // console.log(para);
    }else if(item == total){
      para += `<tr class="orange"><th>Moyenne numero : ${index+1}</th><td>${item}</td></tr>`;
      //console.log(item, total)
    }else {
      para += `<tr class="green"><th>Moyenne numero : ${index+1}</th><td>${item}</td></tr>`;
    }

  }


}





