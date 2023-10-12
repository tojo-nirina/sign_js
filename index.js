const main = document.createElement("main");
document.body.appendChild(main)
//*******blocLeft****** */
const blocLeft = document.createElement("div");
blocLeft.classList.add("bloc-left");
main.appendChild(blocLeft);

const logoText = document.createElement("div");
logoText.classList.add("logo-container");

const logo = document.createElement("img");
logo.classList.add("logo");
logo.src = "assets/pictures/logo.png";
logoText.appendChild(logo);

const text = document.createElement("h2");
text.textContent = "PNFT Market";
logoText.appendChild(text);

blocLeft.appendChild(logoText);

//******* */

const titleText = document.createElement("div");
titleText.classList.add("title-container");

const title = document.createElement("h1");
title.textContent = "NFT Access";
titleText.appendChild(title);

const textP = document.createElement("p");
textP.classList.add("para1");
textP.textContent = "Please fill your detail to access your account";
titleText.appendChild(textP);

blocLeft.appendChild(titleText);

//*****formulaire**** */

const form = document.createElement("form");

//***email */
const containerEmail = document.createElement("div");
containerEmail.classList.add("container-email");
form.appendChild(containerEmail);

const labelEmail = document.createElement("label");
labelEmail.textContent = "Email:"
containerEmail.appendChild(labelEmail);

const emailInput = document.createElement("input");
emailInput.type = "text";
containerEmail.appendChild(emailInput);

//***mot de passe***/
const containerPassword = document.createElement("div");
containerPassword.classList.add("container-password");
form.appendChild(containerPassword);

const labelPassword = document.createElement("label");
labelPassword.textContent = "Mot de passe:"
containerPassword.appendChild(labelPassword);
//**** */
const divContainerPassword = document.createElement("div");
divContainerPassword.classList.add("pass-container");

const inputPassword = document.createElement("input");
inputPassword.type = "password"
divContainerPassword.appendChild(inputPassword);

const iconPassword = document.createElement("img");
iconPassword.classList.add("eye");
iconPassword.src = "assets/pictures/masquer.png";
divContainerPassword.appendChild(iconPassword);

containerPassword.appendChild(divContainerPassword);

//*****checkbox*** */

const containerCheckbox = document.createElement("div");
containerCheckbox.classList.add("container-checkbox");
form.appendChild(containerCheckbox);

const labelCheckbox = document.createElement("label");
labelCheckbox.textContent = "";
containerCheckbox.appendChild(labelCheckbox);

const inputCheck = document.createElement("input");
inputCheck.type = "checkbox";
labelCheckbox.appendChild(inputCheck);

const textCheckbox = document.createElement("p");
textCheckbox.textContent = "Se souvenir de moi"
labelCheckbox.appendChild(textCheckbox);

const linkCheck = document.createElement("a");
linkCheck.href = "#";
linkCheck.textContent = "Forget Password";
containerCheckbox.appendChild(linkCheck);

blocLeft.appendChild(form);

//*****button Sign in****/

const containerSign = document.createElement("div");
containerSign.classList.add("container-sign");

const buttonSign = document.createElement("a");
buttonSign.href = "#";
buttonSign.textContent = "Sign in";
buttonSign.classList.add("Sign-in");
containerSign.appendChild(buttonSign); 

const signGoogle = document.createElement("div");
signGoogle.href = "#";
signGoogle.classList.add("sign-google");
containerSign.appendChild(signGoogle);

const linkSignGoggle = document.createElement("a");
linkSignGoggle.href = "#";
linkSignGoggle.classList.add("link-signGoogle");
signGoogle.appendChild(linkSignGoggle);

const logoGoogle = document.createElement("img");
logoGoogle.src = "assets/pictures/Google.png";
linkSignGoggle.appendChild(logoGoogle);

const textGoogle = document.createElement("p");
textGoogle.textContent = "Sign in with Google";
linkSignGoggle.appendChild(textGoogle);

const signUp = document.createElement("div");
signUp.classList.add("sign-up");
signGoogle.appendChild(signUp);

const textSignUp = document.createElement("p");
textSignUp.textContent = "Don’t have an account?";
textSignUp.classList.add("text-signUp");
signUp.appendChild(textSignUp);


const linkSignUp = document.createElement("a");
linkSignUp.href = "#"
linkSignUp.classList.add("link-signUp");
linkSignUp.textContent = " Sign up";
signUp.appendChild(linkSignUp);

const ligne = document.createElement("div");
ligne.classList.add("ligne");
signGoogle.appendChild(ligne);


//********** */
const created = document.createElement("div");
created.classList.add("created");
created.textContent = "@CreatedbyNAMDesign";
blocLeft.appendChild(created);

blocLeft.appendChild(containerSign);

//******blocright***** */

const blocright = document.createElement("div");
blocright.classList.add("bloc-right");

const images = document.createElement("img");
images.src = "assets/pictures/DRIP_20.png";
images.alt = "image"
blocright.appendChild(images);


main.appendChild(blocright);