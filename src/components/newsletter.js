import { Button } from "./ui/button.js"
import { Input } from "./ui/input.js"
export function Newsletter () {
  return `
        <section class="newslatter">
            <div class="newlatter-content">
                <h4>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h4>
                <form action="" class="form-newslatter">
                    ${Input("email","Enter your email address", "input-news")}
                    <div class="email-validation">
                        <p class="input-email-incorrect">email inválido</p>
                        <p class="input-email-correct">email verificado</p>
                    </div>
                    ${Button("Subscribe to Newsletter", "button-news")}
                </form>
            </div>
        </section>
  `
}