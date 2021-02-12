//menu section generator
const menuTab = (container) => {
    //main container
    let menuContainer = document.createElement("div");
    menuContainer.id = "menu-container";

    //-----img section----
    //image container
    let imageContainer = document.createElement("div");
    imageContainer.id = "menu-img-container";

    //image
    let plateImg = document.createElement("img");
    plateImg.id = "menu-img";
    plateImg.src = "lasai-plate2.png";

    //append image to container
    imageContainer.append(plateImg);


    //-----text section-----
    //main section container
    let menuTextContainer = document.createElement("div");
    menuTextContainer.id = "menu-text-container";

    //----menu container
    let menuContentContainer = document.createElement("div");
    menuContentContainer.id = "menu-content-container";
    //menu title
    let menuTitle = document.createElement("h2");
    menuTitle.innerHTML = "Menu";
    //menu paragraph 1
    let menuPara1 = document.createElement("p");
    menuPara1.innerHTML = "We offer only a tasting menu.";
    //menu paragraph 2
    let menuPara2 = document.createElement("p");
    menuPara2.innerHTML = "where you will find a wide variety of products from our gardens, the sea and the land.";

    //append items to menu container
    menuContentContainer.append(menuTitle, menuPara1, menuPara2);

    //---reservation container
    let reservationContainer = document.createElement("div");
    reservationContainer.id = "reservation-container";
    //reservation title
    let reservationTitle = document.createElement("h2");
    reservationTitle.innerHTML = "Reservations";
    //reservation paragraph 1
    let reservationPara1 = document.createElement("p");
    reservationPara1.innerHTML = "We only serve by reservation.";
    //reservation paragraph 2
    let reservationPara2 = document.createElement("p");
    reservationPara2.innerHTML = "Booking is simple, fast and online.";
    //reservation button
    let reservationBtn = document.createElement("button");
    reservationBtn.id = "reservation-btn";
    reservationBtn.type = "button";
    reservationBtn.innerHTML = "Make your reservation";

    //append items to reservation container
    reservationContainer.append(reservationTitle, reservationPara1, reservationPara2, reservationBtn);

    //append text containers to main text container
    menuTextContainer.append(menuContentContainer, reservationContainer);


    //-----append all-----
    menuContainer.append(imageContainer, menuTextContainer);


    //append itself to main content container
    container.append(menuContainer);
};

export default menuTab;