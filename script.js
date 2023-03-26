var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function () {
  var wilaya = document.getElementById("wilaya").value;
  var age = document.getElementById("age").value;
  var gender = document.querySelector('input[name="gender"]:checked');

  if (wilaya == "" || age == "" || gender == null) {
    var alertMsg = document.getElementById("alertMsg");
    alertMsg.innerHTML = "Veuillez remplire ce champs obligatoire";
    alertMsg.style.display = "block";
    return false;
  } else {
    var alertMsg = document.getElementById("alertMsg");
    alertMsg.style.display = "none";
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now, mx) {
          //as the opacity of current_fs reduces to 0 - stored in "now"
          //1. scale current_fs down to 80%
          scale = 1 - (1 - now) * 0.2;
          //2. bring next_fs from the right(50%)
          left = now * 50 + "%";
          //3. increase opacity of next_fs to 1 as it moves in
          opacity = 1 - now;
          current_fs.css({
            transform: "scale(" + scale + ")",
            position: "absolute",
          });
          next_fs.css({ left: left, opacity: opacity });
        },
        duration: 800,
        complete: function () {
          current_fs.hide();
          animating = false;
        },
        //this comes from the custom easing plugin
        easing: "easeInOutBack",
      }
    );
  }
});

$(".next2").click(function () {
  if (
    document.getElementById("EauS").checked === false &&
    document.getElementById("EauM").checked === false &&
    document.getElementById("EauJ").checked === false &&
    document.getElementById("PainB").checked === false &&
    document.getElementById("GelJ").checked === false &&
    document.getElementById("YaourtB").checked === false &&
    document.getElementById("Fromage").checked === false &&
    document.getElementById("margarine").checked === false &&
    document.getElementById("caféT").checked === false &&
    document.getElementById("BoissonL").checked === false &&
    document.getElementById("BoissonJ").checked === false &&
    document.getElementById("BoissonG").checked === false &&
    document.getElementById("EauG").checked === false &&
    document.getElementById("BoissonM").checked === false &&
    document.getElementById("BoissonGS").checked === false &&
    document.getElementById("CoucheB").checked === false &&
    document.getElementById("EssuieT").checked === false &&
    document.getElementById("ServietteH").checked === false &&
    document.getElementById("Tele").checked === false &&
    document.getElementById("Tomate").checked === false &&
    document.getElementById("Climatiseur").checked === false &&
    document.getElementById("Lingette").checked === false &&
    document.getElementById("Cachir").checked === false &&
    document.getElementById("PouletF").checked === false &&
    document.getElementById("Desodo").checked === false &&
    document.getElementById("Sodacola").checked === false &&
    document.getElementById("SucreG").checked === false &&
    document.getElementById("PoudreM").checked === false &&
    document.getElementById("ThonC").checked === false &&
    document.getElementById("Dentifrice").checked === false &&
    document.getElementById("Shampoing").checked === false &&
    document.getElementById("EauMi").checked === false &&
    document.getElementById("SavonL").checked === false &&
    document.getElementById("GelD").checked === false &&
    document.getElementById("BarreC").checked === false &&
    document.getElementById("Gaufrettee").checked === false &&
    document.getElementById("BoissonJF").checked === false &&
    document.getElementById("MargarineP").checked === false &&
    document.getElementById("Smen").checked === false &&
    document.getElementById("Assila").checked === false &&
    document.getElementById("Liquider").checked === false &&
    document.getElementById("CoucheA").checked === false &&
    document.getElementById("Rize").checked === false &&
    document.getElementById("YaourtA").checked === false &&
    document.getElementById("PateT").checked === false &&
    document.getElementById("Farine").checked === false &&
    document.getElementById("Cafear").checked === false &&
    document.getElementById("PateG").checked === false &&
    document.getElementById("multiprise").checked === false &&
    document.getElementById("couscous").checked === false
  ) {
    var alertMsg2 = document.getElementById("alertMsg2");
    alertMsg2.innerHTML = "Veuillez choisir au moins une catégorie";
    alertMsg2.style.display = "block";
    return false;
  } else {
    var alertMsg2 = document.getElementById("alertMsg2");
    alertMsg2.style.display = "none";
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now, mx) {
          //as the opacity of current_fs reduces to 0 - stored in "now"
          //1. scale current_fs down to 80%
          scale = 1 - (1 - now) * 0.2;
          //2. bring next_fs from the right(50%)
          left = now * 50 + "%";
          //3. increase opacity of next_fs to 1 as it moves in
          opacity = 1 - now;
          current_fs.css({
            transform: "scale(" + scale + ")",
            position: "absolute",
          });
          next_fs.css({ left: left, opacity: opacity });
        },
        duration: 800,
        complete: function () {
          current_fs.hide();
          animating = false;
        },
        //this comes from the custom easing plugin
        easing: "easeInOutBack",
      }
    );
  }
});

$(".next3").click(function () {
  if (document.querySelector('input[name="respond"]:checked') == null) {
    var alertMsg3 = document.getElementById("alertMsg3");
    alertMsg2.innerHTML = "Veuillez choisir oui ou non";
    alertMsg2.style.display = "block";
    return false;
  } else {
    var alertMsg3 = document.getElementById("alertMsg3");
    alertMsg3.style.display = "none";
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: function (now, mx) {
          //as the opacity of current_fs reduces to 0 - stored in "now"
          //1. scale current_fs down to 80%
          scale = 1 - (1 - now) * 0.2;
          //2. bring next_fs from the right(50%)
          left = now * 50 + "%";
          //3. increase opacity of next_fs to 1 as it moves in
          opacity = 1 - now;
          current_fs.css({
            transform: "scale(" + scale + ")",
            position: "absolute",
          });
          next_fs.css({ left: left, opacity: opacity });
        },
        duration: 800,
        complete: function () {
          current_fs.hide();
          animating = false;
        },
        //this comes from the custom easing plugin
        easing: "easeInOutBack",
      }
    );
  }
});

$(".previous").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();

  //de-activate current step on progressbar
  $("#progressbar li")
    .eq($("fieldset").index(current_fs))
    .removeClass("active");

  //show the previous fieldset
  previous_fs.show();
  //hide the current fieldset with style
  current_fs.animate(
    { opacity: 0 },
    {
      step: function (now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale previous_fs from 80% to 100%
        scale = 0.8 + (1 - now) * 0.2;
        //2. take current_fs to the right(50%) - from 0%
        left = (1 - now) * 50 + "%";
        //3. increase opacity of previous_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({ left: left });
        previous_fs.css({
          transform: "scale(" + scale + ")",
          opacity: opacity,
        });
      },
      duration: 800,
      complete: function () {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: "easeInOutBack",
    }
  );
});

function disableFemaleCheckbox() {
  document.getElementById("female_checkbox").disabled = true;
}

function disableMaleCheckbox() {
  document.getElementById("female_checkbox").disabled = false;
}

const villes = document.getElementById("produit");

function showYesForm() {
  document.getElementById("signalitique").style.display = "block";
}

function showNoForm() {
  document.getElementById("signalitique").style.display = "none";
}

function check(elem) {
  if (elem.selectedIndex == 11) {
    document.getElementById("other-div").style.display = "block";
  } else {
    document.getElementById("other-div").style.display = "none";
  }
}

// Next/previous controls

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = slides.length;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

//$(document).ready(function () {
//$("#EauM").click(function () {
/*
    $("#Guedila").append(
      '<img src="/image ikhtiyari/eau minéral/Guedila.jpg" style="width:50%">'
    );
    $("#Ifri").append(
      '<img src="/image ikhtiyari/eau minéral/Ifri.jpg" style="width:50%">'
    );
    $("#Lala khedidja").append(
      '<img src="/image ikhtiyari/eau minéral/Lala khedidja.jpg" style="width:50%">'
    );
    $("#Messerghine").append(
      '<img src="/image ikhtiyari/eau minéral/Messerghine.jpg" style="width:50%">'
    );
    $("#Saida").append(
      '<img src="/image ikhtiyari/eau minéral/Saida.png" style="width:50%">'
    );
    $("#Youkous").append(
      '<img src="/image ikhtiyari/eau minéral/Youkous.jpg" style="width:50%">'
    );
    */
//});
/*
$("#EauS").click(function () {
  $("#besbassa").append(
    '<img src="/image ikhtiyari/eau de source/Besbassa.png" style="width:50%">'
  );
  $("#bouglez").append(
    '<img src="/image ikhtiyari/eau de source/Bouglez.jpg" style="width:50%">'
  );
  $("#Ovital").append(
    '<img src="/image ikhtiyari/eau de source/Ovital.jpg" style="width:50%">'
  );
  $("#Sidi rached").append(
    '<img src="/image ikhtiyari/eau de source/Sidi rached.jpg" style="width:50%">'
  );
});

$("#couscous").click(function () {
  $("#Amor ben amor").append(
    '<img src="/image ikhtiyari/Couscous au blé/Amor ben amor.png" style="width:50%">'
  );
  $("#El hara").append(
    '<img src="/image ikhtiyari/Couscous au blé/El hara.jpg" style="width:50%">'
  );
  $("#Extra").append(
    '<img src="/image ikhtiyari/Couscous au blé/Extra.png" style="width:50%">'
  );
  $("#Mama").append(
    '<img src="/image ikhtiyari/Couscous au blé/Mama.png" style="width:50%">'
  );
  $("#Safina").append(
    '<img src="/image ikhtiyari/Couscous au blé/Safina.png" style="width:50%">'
  );
  $("#Sim").append(
    '<img src="/image ikhtiyari/Couscous au blé/Sim.png" style="width:50%">'
  );
});

$("#Assila").click(function () {
  $("#Assila").append(
    '<img src="/image ikhtiyari/Assila/Assila.jpg" style="width:50%">'
  );
  $("#El morjene").append(
    '<img src="/image ikhtiyari/Assila/El morjene.jpg" style="width:50%">'
  );
  $("#Nounours").append(
    '<img src="/image ikhtiyari/Assila/Nounours.jpg" style="width:50%">'
  );
});

$("#Farine").click(function () {
  $("#belle").append(
    '<img src="/image ikhtiyari/La farine/La Belle.jpg" style="width:50%">'
  );
});
//});
*/
function validateForm() {
  var niveau = document.getElementById("niveau").value;
  var travail = document.getElementById("travail").value;
  var salaire = document.getElementById("salaire").value;

  if (niveau == "" || travail == "" || salaire == "") {
    var alertMsg4 = document.getElementById("alertMsg4");
    alertMsg4.innerHTML = "Veuillez remplire ce champs obligatoire";
    alertMsg4.style.display = "block";
    return false;
  } else {
    alertMsg4.style.display = "none";
    return true;
  }
}
