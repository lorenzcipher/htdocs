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

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
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

$(document).ready(function () {
  $("#EauM").click(function () {
    document.getElementById("contentifri").style.display = "block";
    $("#Guedila").append(
      '<img src="/image ikhtiyari/eau minéral/Guedila.jpg" style="width:50%">'
    );
    $("#Ifri").append(
      '<img src="/image ikhtiyari/eau minéral/Ifri.jpg" style="width:50%" height:50%>'
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
  });

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

  $("#Farine").click(function () {
    $("#belle").append(
      '<img src="/image ikhtiyari/La farine/La Belle.jpg" style="width:50%">'
    );
    $("#MamaF").append(
      '<img src="/image ikhtiyari/La farine/Mama.jpg" style="width:50%">'
    );
    $("#Moula").append(
      '<img src="/image ikhtiyari/La farine/Moula.jpg" style="width:50%">'
    );
    $("#SafainaF").append(
      '<img src="/image ikhtiyari/La farine/Safaina.jpg" style="width:50%">'
    );
    $("#SimF").append(
      '<img src="/image ikhtiyari/La farine/Sim.jpg" style="width:50%">'
    );
  });

  $("#PainB").click(function () {
    $("#Ammar").append(
      '<img src="/image ikhtiyari/pain burger/Ammar.jpg" style="width:50%">'
    );
    $("#Dulcesol").append(
      '<img src="/image ikhtiyari/pain burger/Dulcesol.jpg" style="width:50%">'
    );
    $("#Rayane").append(
      '<img src="/image ikhtiyari/pain burger/Rayane.jpg" style="width:50%">'
    );
  });

  $("#EauJ").click(function () {
    $("#Aigle").append(
      '<img src="/image ikhtiyari/eau de javel/Aigle.png" style="width:50%">'
    );
    $("#Amir").append(
      '<img src="/image ikhtiyari/eau de javel/Amir.jpg" style="width:50%">'
    );
    $("#Bref").append(
      '<img src="/image ikhtiyari/eau de javel/Bref.png" style="width:50%">'
    );

    $("#Javeloz").append(
      '<img src="/image ikhtiyari/eau de javel/Javel d\'oz.jpg" style="width:50%">'
    );

    $("#Life").append(
      '<img src="/image ikhtiyari/eau de javel/Life.jpg" style="width:50%">'
    );

    $("#Test").append(
      '<img src="/image ikhtiyari/eau de javel/Test.jpg" style="width:50%">'
    );
  });

  $("#GelJ").click(function () {
    $("#Gel javel amir").append(
      '<img src="/image ikhtiyari/gel javel/Gel javel amir.jpg" style="width:50%">'
    );
    $("#Gel javel Doz").append(
      '<img src="/image ikhtiyari/gel javel/Gel javel D\'oz.jpg" style="width:50%">'
    );
  });

  $("#YaourtB").click(function () {
    $("#Hodna  bifidus").append(
      '<img src="/image ikhtiyari/yaourt au Bifidus/Hodna  bifidus.jpg" style="width:50%">'
    );
    $("#Danone avtivia").append(
      '<img src="/image ikhtiyari/yaourt au Bifidus/Danone avtivia.png" style="width:50%">'
    );
    $("#Soummam acti+").append(
      '<img src="/image ikhtiyari/yaourt au Bifidus/Soummam acti+.png" style="width:50%">'
    );
  });

  $("#Fromage").click(function () {
    $("#Cheezy").append(
      '<img src="/image ikhtiyari/préparation fromagére portion/Cheezy.png" style="width:50%">'
    );
    $("#La Vache qui rit+").append(
      '<img src="/image ikhtiyari/préparation fromagére portion/La Vache qui rit.png" style="width:50%">'
    );
    $("#le  Bérbére").append(
      '<img src="/image ikhtiyari/préparation fromagére portion/le  Bérbére.jpg" style="width:50%">'
    );
    $("#Tiptop").append(
      '<img src="/image ikhtiyari/préparation fromagére portion/Tiptop.jpg" style="width:50%">'
    );
    $("#Top souma").append(
      '<img src="/image ikhtiyari/préparation fromagére portion/Top souma.jpg" style="width:50%">'
    );
  });

  $("#margarine").click(function () {
    $("#Dima").append(
      '<img src="/image ikhtiyari/margarine de table en barquette/Dima.jpg" style="width:50%">'
    );
    $("#Fleurial").append(
      '<img src="/image ikhtiyari/margarine de table en barquette/Fleurial.png" style="width:50%">'
    );
    $("#La Belle").append(
      '<img src="/image ikhtiyari/margarine de table en barquette/La Belle.png" style="width:50%">'
    );
    $("#Many").append(
      '<img src="/image ikhtiyari/margarine de table en barquette/Many.jpg" style="width:50%">'
    );
    $("#Sol").append(
      '<img src="/image ikhtiyari/margarine de table en barquette/Sol.png" style="width:50%">'
    );
  });

  $("#caféT").click(function () {
    $("#Aroma").append(
      '<img src="/image ikhtiyari/café torrefacto/Aroma.jpg" style="width:50%">'
    );
    $("#Bonal").append(
      '<img src="/image ikhtiyari/café torrefacto/Bonal.jpg" style="width:50%">'
    );
    $("#Boukhari").append(
      '<img src="/image ikhtiyari/café torrefacto/Boukhari.jpg" style="width:50%">'
    );
    $("#Dozia").append(
      '<img src="/image ikhtiyari/café torrefacto/Dozia.jpg" style="width:50%">'
    );
    $("#Facto").append(
      '<img src="/image ikhtiyari/café torrefacto/Facto.jpg" style="width:50%">'
    );
    $("#Many granada").append(
      '<img src="/image ikhtiyari/café torrefacto/Many granada.jpg" style="width:50%">'
    );
    $("#Mille un 1001").append(
      '<img src="/image ikhtiyari/café torrefacto/Mille un 1001.jpg" style="width:50%">'
    );
    $("#Niziere").append(
      '<img src="/image ikhtiyari/café torrefacto/Niziere.jpg" style="width:50%">'
    );
  });
  $("#BoissonL").click(function () {
    $("#Ifruit").append(
      '<img src="/image ikhtiyari/boisson fruitée au lait/Ifruit.png" style="width:50%">'
    );
    $("#Ramy milky").append(
      '<img src="/image ikhtiyari/boisson fruitée au lait/Ramy milky.jpg" style="width:50%">'
    );
    $("#Star").append(
      '<img src="/image ikhtiyari/boisson fruitée au lait/Star.jpg" style="width:50%">'
    );
  });

  $("#BoissonJ").click(function () {
    $("#Ifruitj").append(
      '<img src="/image ikhtiyari/boisson de jus de fruits en bouteille/Ifruit.jpg" style="width:50%">'
    );
    $("#Ramy").append(
      '<img src="/image ikhtiyari/boisson de jus de fruits en bouteille/Ramy.jpg" style="width:50%">'
    );
    $("#Tazej").append(
      '<img src="/image ikhtiyari/boisson de jus de fruits en bouteille/Tazej.jpg" style="width:50%">'
    );
    $("#Tchina").append(
      '<img src="/image ikhtiyari/boisson de jus de fruits en bouteille/Tchina.jpg" style="width:50%">'
    );
  });

  $("#BoissonG").click(function () {
    $("#Chrea").append(
      '<img src="/image ikhtiyari/boisso, gazeuse a base de jus de fruit/Chrea.jpg" style="width:50%">'
    );
    $("#Lim on").append(
      '<img src="/image ikhtiyari/boisso, gazeuse a base de jus de fruit/Lim on.png" style="width:50%">'
    );
    $("#N gaous").append(
      '<img src="/image ikhtiyari/boisso, gazeuse a base de jus de fruit/N gaous.png" style="width:50%">'
    );
    $("#Orangina").append(
      '<img src="/image ikhtiyari/boisso, gazeuse a base de jus de fruit/Orangina.jpg" style="width:50%">'
    );
  });

  $("#EauG").click(function () {
    $("#Aqua fine").append(
      '<img src="/image ikhtiyari/eau gazeuse aromatisé/Aqua fine.jpg" style="width:50%">'
    );
    $("#Mouzaia").append(
      '<img src="/image ikhtiyari/eau gazeuse aromatisé/Mouzaia.jpg" style="width:50%">'
    );
    $("#Nestlé").append(
      '<img src="/image ikhtiyari/eau gazeuse aromatisé/Nestlé.jpg" style="width:50%">'
    );
    $("#Water fruits").append(
      '<img src="/image ikhtiyari/eau gazeuse aromatisé/Water fruits.jpg" style="width:50%">'
    );
  });

  $("#BoissonM").click(function () {
    $("#Barbican").append(
      '<img src="/image ikhtiyari/boisson malt gazéifier/Barbican.png" style="width:50%">'
    );
    $("#Luxembourg").append(
      '<img src="/image ikhtiyari/boisson malt gazéifier/Luxembourg.png" style="width:50%">'
    );
    $("#RamyM").append(
      '<img src="/image ikhtiyari/boisson malt gazéifier/Ramy.png" style="width:50%">'
    );
    $("#StarM").append(
      '<img src="/image ikhtiyari/boisson malt gazéifier/Star.jpg" style="width:50%">'
    );
  });

  $("#BoissonGS").click(function () {
    $("#Arwa").append(
      '<img src="/image ikhtiyari/boisson gazeuse aux saveur de fruits/Arwa.png" style="width:50%">'
    );
    $("#Fanta").append(
      '<img src="/image ikhtiyari/boisson gazeuse aux saveur de fruits/Fanta.png" style="width:50%">'
    );
    $("#Farha").append(
      '<img src="/image ikhtiyari/boisson gazeuse aux saveur de fruits/Farha.jpg" style="width:50%">'
    );
    $("#Mirinda").append(
      '<img src="/image ikhtiyari/boisson gazeuse aux saveur de fruits/Mirinda.jpg" style="width:50%">'
    );
    $("#Selecto").append(
      '<img src="/image ikhtiyari/boisson gazeuse aux saveur de fruits/Selecto.jpg" style="width:50%">'
    );
    $("#Sprit").append(
      '<img src="/image ikhtiyari/boisson gazeuse aux saveur de fruits/Sprit.png" style="width:50%">'
    );
  });

  $("#CoucheB").click(function () {
    $("#Bimbies").append(
      '<img src="/image ikhtiyari/couche bébé/Bimbies.jpg" style="width:50%">'
    );
    $("#Canbebe").append(
      '<img src="/image ikhtiyari/couche bébé/Canbebe.png" style="width:50%">'
    );
    $("#Mio bébé").append(
      '<img src="/image ikhtiyari/couche bébé/Mio bébé.jpg" style="width:50%">'
    );
    $("#Molfix").append(
      '<img src="/image ikhtiyari/couche bébé/Molfix.png" style="width:50%">'
    );
  });

  $("#EssuieT").click(function () {
    $("#Cotex").append(
      '<img src="/image ikhtiyari/essuit tout/Cotex.jpg" style="width:50%">'
    );
    $("#King").append(
      '<img src="/image ikhtiyari/essuit tout/King.jpg" style="width:50%">'
    );
    $("#Sofia").append(
      '<img src="/image ikhtiyari/essuit tout/Sofia.jpg" style="width:50%">'
    );
    $("#Wafa").append(
      '<img src="/image ikhtiyari/essuit tout/Wafa.jpg" style="width:50%">'
    );
  });

  $("#ServietteH").click(function () {
    $("#awane").append(
      '<img src="/image ikhtiyari/seviette hygiénique/awane.png" style="width:50%">'
    );
    $("#Ayam").append(
      '<img src="/image ikhtiyari/seviette hygiénique/Ayam.jpg" style="width:50%">'
    );
    $("#Elle et Elle").append(
      '<img src="/image ikhtiyari/seviette hygiénique/Elle et Elle.png" style="width:50%">'
    );
    $("#Molped").append(
      '<img src="/image ikhtiyari/seviette hygiénique/Molped.jpg" style="width:50%">'
    );
  });

  $("#Tele").click(function () {
    $("#Brandt").append(
      '<img src="/image ikhtiyari/télévision/Brandt.png" style="width:50%">'
    );
    $("#Condor").append(
      '<img src="/image ikhtiyari/télévision/Condor.png" style="width:50%">'
    );
    $("#Iris").append(
      '<img src="/image ikhtiyari/télévision/Iris.jpg" style="width:50%">'
    );
    $("#Stream system").append(
      '<img src="/image ikhtiyari/télévision/Stream system.jpg" style="width:50%">'
    );
  });
});
