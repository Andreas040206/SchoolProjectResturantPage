import piccolinaTextImageSrc from "../images/piccolinaText.png";
import hoursTable from "../images/hours.png";

function loadHomePage() {
  const homePage = document.createElement("div");
  homePage.classList.add("homePage");

  const homeImageSection = document.createElement("div");
  homeImageSection.classList.add("homeImageSection");

  const piccolinaText = document.createElement("div");
  piccolinaText.classList.add("piccolinaText");

  const piccolinaTextImage = document.createElement("img");
  piccolinaTextImage.setAttribute("src", piccolinaTextImageSrc);

  piccolinaText.appendChild(piccolinaTextImage);

  const bigPizzaImageSection = document.createElement("div");
  bigPizzaImageSection.classList.add("bigPizzaImageSection");

  const hoursSection = document.createElement("div");
  hoursSection.classList.add("hoursSection");

  const hoursTableImage = document.createElement("img");
  hoursTableImage.setAttribute("src", hoursTable);
  hoursTableImage.classList.add("hoursTableImage");

  hoursSection.appendChild(hoursTableImage);

  homePage.appendChild(homeImageSection);
  homePage.appendChild(piccolinaText);
  homePage.appendChild(bigPizzaImageSection);
  homePage.appendChild(hoursSection);

  return homePage;
}

export default loadHomePage;
