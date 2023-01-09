import { AuthAccountFacebook } from '../app/facebookrg.js';

export const Login = () => {
    const LoginDiv = document.createElement('div');
    const template = `
        <section class="email-facebook-page" id="emailFacebookPage">
            <div class="email-facebook-div" id="emailFacebookDiv">
                <button class="email-btn" id="emailBtn">CORREO</button>
                <button class="facebook-btn" id="facebookBtn">FACEBOOK</button>
            </div>
        </section>
    `
    LoginDiv.innerHTML = template 
    LoginDiv.querySelector('#facebookBtn').addEventListener('click', AuthAccountFacebook)
    return LoginDiv;
}