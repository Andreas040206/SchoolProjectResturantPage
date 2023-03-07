function createFooter() {
  const footerElement = document.createElement("div");
  footerElement.classList.add("footerElement");

  const SoMeFooterPart = document.createElement("div");
  SoMeFooterPart.classList.add("SoMeFooterPart");

  const SoMeFooterPartLeft = document.createElement("div");
  SoMeFooterPartLeft.classList.add("SoMeFooterPartText");
  SoMeFooterPartLeft.textContent = "Follow us on our social media:";

  const SoMeFooterPartRight = document.createElement("div");
  SoMeFooterPartRight.classList.add("SoMeFooterPartText");
  SoMeFooterPartRight.textContent = "Instagram Discord";

  SoMeFooterPart.appendChild(SoMeFooterPartLeft);
  SoMeFooterPart.appendChild(SoMeFooterPartRight);

  const lowerFooter = document.createElement("div");
  lowerFooter.classList.add("lowerFooter");

  function appendAllLowerFooterElements(sectionHeader, sectionContent) {
    const e = document.createElement("div");
    e.classList.add("lowerFooterSection");

    const sectionHeaderText = document.createElement("div");
    sectionHeaderText.classList.add("lowerFooterSectionHeader");
    sectionHeaderText.textContent = sectionHeader;

    e.appendChild(sectionHeaderText);

    const sectionUnderline = document.createElement("div");
    sectionUnderline.classList.add("lowerFooterSectionHeaderUnderline");

    e.appendChild(sectionUnderline);

    const sectionContentText = document.createElement("div");
    sectionContentText.textContent = sectionContent;
    sectionContentText.classList.add("lowerFooterSectionText");

    e.appendChild(sectionContentText);

    lowerFooter.appendChild(e);
  }

  appendAllLowerFooterElements(
    "Our mission",
    "We want to bring pizza and happy times to the you. Our mission is to spread the italian speical... The Pizza"
  );
  appendAllLowerFooterElements(
    "Contacts",
    "Mail: RealMail@Sure.not Tlf: 55 66 99 42 00 Lokation: PizzaLand, 6666 tomatotown"
  );
  appendAllLowerFooterElements(
    "Larger Events",
    "If you are seeking larger events, than our booking page can require, please contact the us, for more information"
  );
  appendAllLowerFooterElements(
    "Quistions?",
    "please contact us by mail or give us a call in our opening ours, we will be happy to answer"
  );

  footerElement.appendChild(SoMeFooterPart);
  footerElement.appendChild(lowerFooter);

  return footerElement;
}

export default createFooter();
