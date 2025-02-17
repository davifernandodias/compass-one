export const regexEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email.trim());
};

export const setupEmailValidation = () => {
  const inputEmail = document.querySelector(".input-news");
  const buttonNews = document.querySelector(".button-news");
  const validationWrapper = document.querySelector(".email-validation");
  const correctMessage = document.querySelector(".input-email-correct");
  const incorrectMessage = document.querySelector(".input-email-incorrect");


  buttonNews.addEventListener("click", (event) => {
    event.preventDefault();

    validationWrapper.classList.add("show");

    if (regexEmail(inputEmail.value)) {
      incorrectMessage.classList.remove("show");
      correctMessage.classList.add("show");
    } else {
      correctMessage.classList.remove("show");
      incorrectMessage.classList.add("show");
    }
  });
};
