const anoAtual = new Date().getFullYear();
const mesAtual = new Date().getMonth();
const form = document.getElementById("form");
const username = document.getElementById("username");
const number = document.getElementById("number");
const cvv = document.getElementById("cvv");
const data = document.getElementById("data");
const metodo1 = document.querySelector('input[name="metodopag"][value="Débito"]');
const metodo2 = document.querySelector('input[name="metodopag"][value="Crédito"]');

if(mesAtual <= 9) {
  data.setAttribute("min", `${anoAtual}-0${mesAtual + 1}`);
  data.setAttribute("max", "2050-12");
  data.setAttribute("value", `${anoAtual}-0${mesAtual + 1}`);
} else {
  data.setAttribute("min", `${anoAtual}-${mesAtual + 1}`);
  data.setAttribute("max", "2050-12");
  data.setAttribute("value", `${anoAtual}-${mesAtual + 1}`);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const numberValue = number.value;
  const cvvValue = cvv.value;
  const dataValue = data.value;
  const metodo1Checked = metodo1.checked;
  const metodo2Checked = metodo2.checked;

  if (!metodo1Checked  && !metodo2Checked) {
    setErrorFor(metodo1 && metodo2, "É necessário escolher um método de pagamento.");
  } else {
    setSuccessFor(metodo1 && metodo2);
  }

  if (usernameValue === "") {
    setErrorFor(username, "O nome é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (numberValue === "") {
    setErrorFor(number, "O número do cartão é obrigatório.");
  } else {
    setSuccessFor(number);
  }
  if (numberValue.length < 16) {
    setErrorFor(number, "O número do cartão precisa possuir 16 números.");
  } else {
    setSuccessFor(number);
  }

  if (numberValue.length > 16) {
    setErrorFor(number, "O número do cartão precisa possuir 16 números.");
  } else {
    setSuccessFor(number);
  }

  if (cvvValue === "") {
    setErrorFor(cvv, "O código de validação é obrigatório.");
  } else {
    setSuccessFor(cvv);
  }
  
  if (cvvValue.length < 3) {
      setErrorFor(password, "O código de validação precisa possuir 3 números.");
  } else {
    setSuccessFor(cvv);
  }
  
  if (cvvValue.length > 3) {
      setErrorFor(password, "O código de validação precisa possuir 3 números.");
  } else {
    setSuccessFor(cvv);
  }

  if (dataValue === "") {
    setErrorFor(data, "A data de vencimento é obrigatória.");
  } else {
    setSuccessFor(data);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
    alert("Pagamento realizado com sucesso!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}
