export function initialRemoveNavabarSignUp() {
  const signupNav = document.getElementById("signupAlert");
  const iconExit = document.getElementById("signUpIconExit");

  iconExit.addEventListener("click", () => {
    signupNav.classList.add("navbar-exit-animation");

    setTimeout(() => {
      signupNav.style.display = "none";
    }, 2000); 
  });
}
