let list = document.querySelector(".list");
let rolls = document.querySelector("#rolls_info");
let bmw = document.querySelector("#bmw_info");
let range = document.querySelector("#range_info");
let audi = document.querySelector("#audi_info");
let porsche = document.querySelector("#porsche_info");

list.addEventListener("click", (e) => {
  if (e.target.id === "rolls") {
    rolls.classList.add("show");
    bmw.classList.remove("show");
    range.classList.remove("show");
    audi.classList.remove("show");
    porsche.classList.remove("show");
  } else if (e.target.id === "bmw") {
    bmw.classList.add("show");
    rolls.classList.remove("show");
    range.classList.remove("show");
    audi.classList.remove("show");
    porsche.classList.remove("show");
  } else if (e.target.id === "range") {
    range.classList.add("show");
    rolls.classList.remove("show");
    bmw.classList.remove("show");
    audi.classList.remove("show");
    porsche.classList.remove("show");
  } else if (e.target.id === "audi") {
    audi.classList.add("show");
    rolls.classList.remove("show");
    range.classList.remove("show");
    bmw.classList.remove("show");
    porsche.classList.remove("show");
  } else if (e.target.id === "porsche") {
    porsche.classList.add("show");
    rolls.classList.remove("show");
    range.classList.remove("show");
    audi.classList.remove("show");
    bmw.classList.remove("show");
  }
});
