import homePage from "./Pages/homePage";
import bookingPage from "./Pages/bookingPage";
import menuPage from "./Pages/menuPage";
import removeChildNodes from "./Tools/RemoveAllChildren";
import header from "./Pages/header";
import footer from "./Pages/footer";

function loadPage(currentPage) {
  removeChildNodes(document.body);
  const content = document.createElement("div");
  content.appendChild(header(currentPage));
  content.setAttribute("id", "content");
  content.appendChild(currentPageChecker(currentPage));
  content.appendChild(footer);

  function currentPageChecker(theCurrentPage) {
    if (theCurrentPage === "homePage") {
      return homePage();
    } else if (theCurrentPage === "bookingPage") {
      return bookingPage();
    } else if (theCurrentPage === "menuPage") {
      return menuPage();
    }
  }

  document.body.appendChild(content);
}

export default loadPage;
