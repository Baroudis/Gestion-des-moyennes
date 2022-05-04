var montableau = []
var nom = "";
var notes = "";




// document.addEventListener("click", function () {

//     nom = document.getElementById("nomA").value

//     notes = document.getElementById("notesA").value



//     console.log(notes)

//     // nombre = notes.length
//     // console.log(nombre)



//     //console.log(montableau)


// });


function ajouterVal() {
    // laffik = documetn.getElementById("nomA").innerHTML = 
    nom = document.getElementById("nomA").value
    notes = document.getElementById("notesA").value


    //console.log(nom, notes)

    montableau.push(nom, notes)

    


    console.log(montableau)
    //montableau.forEach(element => console.log("<p>voici :",element));

    // montableau.forEach(function(item, index, array) {
    //     console.log(item, index);
    //   });

    for (var i = 0; i < montableau.length; i++) {
        document.getElementById("loop").innerHTML = montableau.join(" ")
        //showArray();
        // I'm only getting "David" as output!!
      }



}



