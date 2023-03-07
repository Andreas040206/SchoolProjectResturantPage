import pageLoader from "../pageLoader";

function createHeader(theCurrentPage) {
  const header = document.createElement("div");
  header.classList.add("header");

  const headerText = document.createElement("div");
  headerText.textContent = "Piccolina";
  headerText.classList.add("headerText");

  header.appendChild(headerText);

  const headerBtnCon = document.createElement("div");
  headerBtnCon.classList.add("headerBtnCon");

  const HomeBtn = document.createElement("button");
  HomeBtn.textContent = "Home";
  HomeBtn.classList.add("HeaderBtn");
  HomeBtn.addEventListener("click", function () {
    pageLoader("homePage");
  });

  const BookingBtn = document.createElement("button");
  BookingBtn.textContent = "Infomation";
  BookingBtn.classList.add("HeaderBtn");
  BookingBtn.addEventListener("click", function () {
    pageLoader("bookingPage");
  });

  const MenuBtn = document.createElement("button");
  MenuBtn.textContent = "Menu";
  MenuBtn.classList.add("HeaderBtn");
  MenuBtn.addEventListener("click", function () {
    pageLoader("menuPage");
  });

  headerBtnCon.appendChild(HomeBtn);
  headerBtnCon.appendChild(MenuBtn);
  headerBtnCon.appendChild(BookingBtn);

  const currentPageUnderline = document.createElement("div");
  currentPageUnderline.classList.add("currentUnderline");

  if (theCurrentPage === "homePage") {
    currentPageUnderline.style.right = "calc(425px + 7%)";
  } else if (theCurrentPage === "bookingPage") {
    currentPageUnderline.style.right = "calc(0px + 7%)";
    currentPageUnderline.style.width = "120px";
    currentPageUnderline.style.rotate = "1deg";
  } else if (theCurrentPage === "menuPage") {
    currentPageUnderline.style.right = "calc(245px + 7%)";
    currentPageUnderline.style.rotate = "-2deg";
  }

  header.appendChild(currentPageUnderline);
  header.appendChild(headerBtnCon);

  return header;
}

export default createHeader;
