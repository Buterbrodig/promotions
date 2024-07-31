
import { data } from "./data/data.js";

const digitalClock = () => {
   let date = new Date();
   let hours = date.getHours();
   let minutes = date.getMinutes();
   let seconds = date.getSeconds();
   if (hours < 10) hours = "0" + hours;
   if (minutes < 10) minutes = "0" + minutes;
   if (seconds < 10) seconds = "0" + seconds;
   document.getElementById("id_clock").innerHTML = hours + ":" + minutes + ":" + seconds;
   setTimeout(()=>digitalClock(), 1000);
}

digitalClock()


const setItems = () => {
   const items = [...data]
   const main = document.querySelector('.main__wrapper')
   const itemConstructor = (item) =>{
      let div = document.createElement('div')
      div.className = item ? 'item' : 'text-block'
      div.innerHTML = item ? `<div class="item__cnt">
      <img alt="${item.name}" src="/image/items/${item.image}"/>
      <p class="item__price">${item.price}</p>
      </div>`
      :
      `
      <ul>
         <li>
            💎1000 <span>ГЕМОВ</span> 40₽
         </li>
         <li>
            💎5000 <span>ГЕМОВ</span> 190₽
         </li>
         <li>
            💎10<span>К ГЕМОВ</span> 380₽
         </li>
         <li>
            💎100<span>К ГЕМОВ</span> 3000₽
         </li>
      </ul>
      `
      main.appendChild(div)
   }
   
   items.forEach(item => itemConstructor(item))
   itemConstructor()

   
}

setItems()


