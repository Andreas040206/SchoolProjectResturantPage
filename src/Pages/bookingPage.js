function loadBookingPage() {
  const BookingPage = document.createElement("div");
  BookingPage.classList.add("bookingPage");

  const sorryElement = document.createElement("div");
  sorryElement.classList.add("sorryElement");
  sorryElement.textContent = "Where to find us";

  const embedMap = document.createElement("iframe");
  embedMap.setAttribute(
    "src",
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2221.99736973666!2d10.209944463697564!3d56.15715009145949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c3f90cd6114bf%3A0xe71700375a9b680!2sPiccolina!5e0!3m2!1sen!2sdk!4v1678177639577!5m2!1sen!2sdk"
  );
  embedMap.setAttribute("allowfullscreen", "");
  embedMap.setAttribute("loading", "lazy");
  embedMap.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
  embedMap.classList.add("embedMap");

  const moreInfoCon = document.createElement("div");
  moreInfoCon.classList.add("moreInfoCon");

  const moreInfoText = document.createElement("div");
  moreInfoText.classList.add("moreInfoText");
  moreInfoText.textContent =
    "If your looking for more infomation check their own webside";

  const moreInfoLink = document.createElement("a");
  moreInfoLink.classList.add("moreInfoLink");
  moreInfoLink.setAttribute("href", "https://piccolina.dk/");
  moreInfoLink.textContent = " here";

  moreInfoCon.appendChild(moreInfoText);
  moreInfoCon.appendChild(moreInfoLink);

  BookingPage.appendChild(sorryElement);
  BookingPage.appendChild(embedMap);
  BookingPage.appendChild(moreInfoCon);

  return BookingPage;
}

export default loadBookingPage;
