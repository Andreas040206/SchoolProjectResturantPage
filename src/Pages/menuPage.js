import salamiImage from "../images/menuPizzas/salami.png";
import ananasImage from "../images/menuPizzas/ananas.png";
import margheritaImage from "../images/menuPizzas/margherita.png";
import bologneseImage from "../images/menuPizzas/bolognese.png";

function loadMenuPage() {
  const menuPage = document.createElement("div");
  menuPage.classList.add("menuPageCon");

  const menuHeader = document.createElement("div");
  menuHeader.classList.add("menuHeader");
  menuHeader.textContent = "Menu";

  const menuOptionsCon = document.createElement("div");
  menuOptionsCon.classList.add("menuOptionsCon");

  class PizzaOption {
    constructor(PizzaName, price, imageSrc, imageType) {
      this.PizzaName = PizzaName;
      this.price = price;
      this.imageSrc = imageSrc;
      this.imageType = imageType;
    }
    get pizzaElement() {
      const pizzaElement = document.createElement("div");
      pizzaElement.classList.add("menuOption");

      const pizzaElementText = document.createElement("div");
      pizzaElementText.classList.add("menuOptionText");

      const pizzaElementTextName = document.createElement("div");
      pizzaElementTextName.textContent = `${this.PizzaName}`;

      const pizzaElementTextPrice = document.createElement("div");
      pizzaElementTextPrice.textContent = `${this.price}`;

      pizzaElementText.appendChild(pizzaElementTextName);
      pizzaElementText.appendChild(pizzaElementTextPrice);

      const pizzaImageCon = document.createElement("div");
      pizzaImageCon.classList.add("menuOptionImageCon");

      const pizzaImage = document.createElement("img");
      pizzaImage.setAttribute("src", `${this.imageSrc}`);
      if (this.imageType === "long") {
        pizzaImage.classList.add("menuOptionImage1");
      } else if (this.imageType === "heigh") {
        pizzaImage.classList.add("menuOptionImage2");
      }

      pizzaImageCon.appendChild(pizzaImage);

      pizzaElement.appendChild(pizzaImageCon);
      pizzaElement.appendChild(pizzaElementText);

      return pizzaElement;
    }
  }

  const menuOptionMargherita = new PizzaOption(
    "1: margherita",
    "120kr",
    margheritaImage,
    "long"
  );

  const menuOptionSalami = new PizzaOption(
    "2: Salami",
    "120kr",
    salamiImage,
    "long"
  );

  const menuOptionAnanas = new PizzaOption(
    "3: Ananas",
    "105kr",
    ananasImage,
    "heigh"
  );

  const menuOptionBolognese = new PizzaOption(
    "4: Bolognese",
    "130kr",
    bologneseImage,
    "long"
  );

  menuOptionsCon.appendChild(menuOptionMargherita.pizzaElement);
  menuOptionsCon.appendChild(menuOptionSalami.pizzaElement);
  menuOptionsCon.appendChild(menuOptionAnanas.pizzaElement);
  menuOptionsCon.appendChild(menuOptionBolognese.pizzaElement);

  menuPage.appendChild(menuHeader);
  menuPage.appendChild(menuOptionsCon);

  return menuPage;
}

export default loadMenuPage;
