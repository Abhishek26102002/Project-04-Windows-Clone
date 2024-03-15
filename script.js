let windowbut = document.getElementById("windowbut");
let startmenu = document.getElementsByClassName("startmenu")[0];

windowbut.addEventListener("click", () => {
  console.log("window clicked");

  if (startmenu.style.bottom === "8%") {
    startmenu.style.bottom = "-650px";
  } else {
    startmenu.style.bottom = "8%";
  }
});

let searchbut = document.getElementById("searchbut");
let search = document.getElementsByClassName("search")[0];
searchbut.addEventListener("click", () => {
  console.log("searched clicked");
  if (search.style.bottom === "3%") {
    search.style.bottom = "-650px";
  } else {
    search.style.bottom = "3%";
  }
});

let vscodebut = document.getElementById("vscodebut");
let code = document.getElementsByClassName("code")[0];
vscodebut.addEventListener("click", () => {
  console.log("searched clicked");
  if (code.style.bottom === "4%") {
    code.style.bottom = "-650px";
  } else {
    code.style.bottom = "4%";
  }
});

let filebut = document.getElementById("filebut");
let file = document.getElementsByClassName("file")[0];
filebut.addEventListener("click", () => {
  console.log("searched clicked");
  if (file.style.bottom === "14%") {
    file.style.bottom = "-650px";
  } else {
    file.style.bottom = "14%";
  }
});
