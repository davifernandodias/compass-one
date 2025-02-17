import { Button } from "./ui/button.js"
import { Input } from "./ui/input.js"
export function Newsletter () {
  return `
        <section class="newslatter">
            <div class="newlatter-content">
                <h4>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h4>
                <form action="" class="form-newslatter">
                    ${Input("Enter your email address", "input-news")}
                    ${Button("Subscribe to Newsletter", "button-news")}
                </form>
            </div>
        </section>
  `
}