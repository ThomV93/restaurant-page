//navbar generator
const navbar = (container) => {
    //navbar container
    let navContainer = document.createElement("div");
    navContainer.id = "navbar";

    //-----nav title----
    let navTitle = document.createElement("h1");
    navTitle.innerHTML = "KONOHA";
    //title ideogram
    let ideogramSpan = document.createElement("span");
    ideogramSpan.id = "ideogram";
    ideogramSpan.innerHTML = "自然";
    //append ideogram before the title
    navTitle.prepend(ideogramSpan);


    //-----tab list section------
    let navTabList = document.createElement("ul");
    navTabList.id = "tab-list";

    //----nav tabs---
    //home tab
    let homeTab = document.createElement("li");
    homeTab.id = "home";
    homeTab.className = "tab";
    homeTab.innerHTML = "Home";
    //menu tab
    let menuTab = document.createElement("li");
    menuTab.id = "menu";
    menuTab.className = "tab";
    menuTab.innerHTML = "Menu & Reservations";
    //contact tab
    let contactTab = document.createElement("li");
    contactTab.id = "contact";
    contactTab.className = "tab";
    contactTab.innerHTML = "Contact";

    //append all list elements
    navTabList.append(homeTab, menuTab, contactTab);

    //----append all to container------
    navContainer.append(navTitle, navTabList);

    //----append navbar to main container---
    container.append(navContainer);
};

export default navbar;