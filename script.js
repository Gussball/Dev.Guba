function updatemenu() {
  if (document.getElementById("responsive-menu").checked == true) {
    document.getElementById("menu").style.borderBottomRightRadius = "0";
    document.getElementById("menu").style.borderBottomLeftRadius = "0";
  } else {
    document.getElementById("menu").style.borderRadius = "0px";
  }
}

function countNumbers() {
  const numbers = document.querySelectorAll(".number");
  const speed = 280; // Velocidade de contagem (em milissegundos)

  numbers.forEach((number) => {
    const target = +number.innerText.replace("+", "");
    let count = 0;
    const increment = Math.ceil(target / speed);

    const interval = setInterval(() => {
      count += increment;
      if (count >= target) {
        clearInterval(interval);
        count = target;
      }
      number.innerText = count + "+";
    }, 1);
  });
}

function handleScroll() {
  const numbersElement = document.querySelector(".container-numbers");
  const rect = numbersElement.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top <= windowHeight && rect.bottom >= 0) {
    countNumbers();
    window.removeEventListener("scroll", handleScroll);
  }
}

window.addEventListener("scroll", handleScroll);
