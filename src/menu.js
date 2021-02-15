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
    menuContentContainer.className = "menu-text-containers";
    //menu title
    let menuTitle = document.createElement("h2");
    menuTitle.innerHTML = "MENU";
    menuTitle.className = "text-section-titles";

    //--menu subcontainer--
    let menuSubContainer = document.createElement("div");
    menuSubContainer.className = "menu-tab-subcontainer"
    //menu paragraph 1
    let menuPara1 = document.createElement("p");
    menuPara1.innerHTML = "We offer only a tasting menu that changes everyday.";
    //menu paragraph 2
    let menuPara2 = document.createElement("p");
    menuPara2.innerHTML = "In it, you will find a wide variety of products from our gardens, the sea and the land.";

    //append para 1 and 2 to subcontainer
    menuSubContainer.append(menuPara1, menuPara2);

    //append items to menu container
    menuContentContainer.append(menuTitle, menuSubContainer);

    //---reservation container
    let reservationContainer = document.createElement("div");
    reservationContainer.id = "reservation-container";
    reservationContainer.className = "menu-text-containers";
    //reservation title
    let reservationTitle = document.createElement("h2");
    reservationTitle.innerHTML = "BOOKING";
    reservationTitle.className = "text-section-titles";

    //--reservation subcontainer--
    let reservationSubContainer = document.createElement("div");
    reservationSubContainer.className = "menu-tab-subcontainer";
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

    //append para 1, 2 and button to subcontainer
    reservationSubContainer.append(reservationPara1, reservationPara2, reservationBtn);

    //append items to reservation container
    reservationContainer.append(reservationTitle, reservationSubContainer);

    //append text containers to main text container
    menuTextContainer.append(menuContentContainer, reservationContainer);


    //-----append all-----
    menuContainer.append(imageContainer, menuTextContainer);


    //append itself to main content container
    container.append(menuContainer);
};

export default menuTab;