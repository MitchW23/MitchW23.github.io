//alert("Hello, world!");

//const btn = document.querySelector("Bigger!");

/*btn.addEventListener("click", () => {
      alert("Hello, World!");
  })
*/

function biggerAlert(){
    alert("Hello, World!");
    document.getElementById("mainText").style.fontSize="24pt";
}

function fancySelected(){
    alert("Fancy is Selected");
    document.getElementById("mainText").style.fontWeight="bold";
    document.getElementById("mainText").style.color="blue";
    document.getElementById("mainText").style.textDecorationLine="underline";
}

function boringSelected(){
    alert("Boring is Selected");
    document.getElementById("mainText").style.fontWeight="normal";
    document.getElementById("mainText").style.color="black";
    document.getElementById("mainText").style.textDecoration="none";
}

function moo(){
    let text = document.getElementById("mainText");
    text.value = text.value.toUpperCase();
    let parts = text.value.split(".");
    text.value = parts.join("-MOO.");
}