const contactTab = (container) => {
    //contact tab main container
    let contactTabContainer = document.createElement("div");
    contactTabContainer.id = "contact-tab-container";

    //-----Map section-----
    //map container
    let mapContainer = document.createElement("div");
    mapContainer.id = "map-container";

    //map
    let map = document.createElement("iframe");
    map.id = "map";
    map.src = "https://www.google.com/maps/d/embed?mid=1yV0IOcix0R2d5_mGB87e8ANlueQCuxr0";

    //append map in the container
    mapContainer.append(map);


    //-----Text section------
    //contact text container
    let contactTextContainer = document.createElement("div");
    contactTextContainer.id = "contact-text-container";

    //---First text container---
    //first text container
    let firstTextContainer = document.createElement("div");
    firstTextContainer.className = "text-containers";
    //title
    let openTitle = document.createElement("h2");
    openTitle.className = "contact-tab-title";
    openTitle.innerHTML = "OPEN";
    
    //--SubContainers section--

    //THURSDAY subcontainer
    let thursdaySubContainer = document.createElement("div");
    thursdaySubContainer.className = "contact-tab-subcontainers";
    //thursday title
    let thursdayTitle = document.createElement("h3");
    thursdayTitle.innerHTML = "THURSDAY";
    //thursday lunch
    let thursdayLunch = document.createElement("p");
    thursdayLunch.innerHTML = "Late Lunch from 3pm";
    //thursday dinner
    let thursdayDinner = document.createElement("p");
    thursdayDinner.innerHTML = "Dinner from 6:30pm";

    //append elements to thursday subcontainer
    thursdaySubContainer.append(thursdayTitle, thursdayLunch, thursdayDinner);

    //FRIDAY subcontainer
    let fridaySubContainer = document.createElement("div");
    fridaySubContainer.className = "contact-tab-subcontainers";
    //friday title
    let fridayTitle = document.createElement("h3");
    fridayTitle.innerHTML = "FRIDAY";
    //friday lunch
    let fridayLunch = document.createElement("p");
    fridayLunch.innerHTML = "Late Lunch from 3pm";
    //friday dinner
    let fridayDinner = document.createElement("p");
    fridayDinner.innerHTML = "Dinner from 6:30pm";

    //append elements to friday subcontainer
    fridaySubContainer.append(fridayTitle, fridayLunch, fridayDinner);

    //SATURDAY subcontainer
    let saturdaySubContainer = document.createElement("div");
    saturdaySubContainer.className = "contact-tab-subcontainers";
    //saturday title
    let saturdayTitle = document.createElement("h3");
    saturdayTitle.innerHTML = "SATURDAY";
    //saturday lunch
    let saturdayLunch = document.createElement("p");
    saturdayLunch.innerHTML = "Late Lunch from 3pm";
    //saturday dinner
    let saturdayDinner = document.createElement("p");
    saturdayDinner.innerHTML = "Dinner from 6:30pm";

    //append elements to saturday subcontainer
    saturdaySubContainer.append(saturdayTitle, saturdayLunch, saturdayDinner);

    //SUNDAY subcontainer
    let sundaySubContainer = document.createElement("div");
    sundaySubContainer.className = "contact-tab-subcontainers";
    //sunday title
    let sundayTitle = document.createElement("h3");
    sundayTitle.innerHTML = "SUNDAY";
    //sunday lunch
    let sundayLunch = document.createElement("p");
    sundayLunch.innerHTML = "Late Lunch from 3pm";

    //append elements to sunday subcontainer
    sundaySubContainer.append(sundayTitle, sundayLunch);

    //CLOSED subcontainer
    let closedSubContainer = document.createElement("div");
    closedSubContainer.className = "contact-tab-subcontainers";
    //closed title
    let closedTitle = document.createElement("h3");
    closedTitle.innerHTML = "CLOSED";
    //MONDAY
    let closedMonday = document.createElement("p");
    closedMonday.innerHTML = "MONDAY";
    //TUESDAY
    let closedTuesday = document.createElement("p");
    closedTuesday.innerHTML = "TUESDAY";
    //WEDNESDAY
    let closedWednesday = document.createElement("p");
    closedWednesday.innerHTML = "WEDNESDAY";

    //append elements to closed subcontainer
    closedSubContainer.append(closedTitle, closedMonday, closedTuesday, closedWednesday);

    //-----Append title and all subcontainers to first text container----
    firstTextContainer.append(openTitle, thursdaySubContainer, fridaySubContainer, saturdaySubContainer, sundaySubContainer, closedSubContainer);


    //---Second text container---
    //second text container
    let secondTextContainer = document.createElement("div");
    secondTextContainer.className = "text-containers";
    //title
    let contactTitle = document.createElement("h2");
    contactTitle.className = "contact-tab-title";
    contactTitle.innerHTML = "CONTACT";

    //--SubContainers section--

    //Email subcontainer
    let emailSubContainer = document.createElement("div");
    emailSubContainer.className = "contact-tab-subcontainers";
    //email title
    let emailTitle = document.createElement("h3");
    emailTitle.innerHTML = "EMAIL";
    //email
    let email = document.createElement("p");
    email.innerHTML = "konoha.tokyo@gmail.com";

    //append elements to email subcontainer
    emailSubContainer.append(emailTitle, email);

    //-----Append title and subcontainer to second text container----
    secondTextContainer.append(contactTitle, emailSubContainer);

    //----Append first and second subcontainers to contact text container
    contactTextContainer.append(firstTextContainer, secondTextContainer);

    //-----Append map container and contact text container to contact tab container
    contactTabContainer.append(mapContainer, contactTextContainer);

    //-------Append to main content container
    container.append(contactTabContainer);
};

export default contactTab;