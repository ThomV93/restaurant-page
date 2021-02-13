//import necessary modules
import navbar from "./navbar";
import homepage from "./home";
import aboutTab from "./about";
import menuTab from "./menu";

const restaurantPage = (() => {
    //cache the content element
    const contentContainer_div = document.getElementById("content");
    const navTabs_li = document.getElementsByClassName("tab");

    //initializer function
    const pageLoad = () => {
        //navbar function
        navbar(contentContainer_div);
        //nav buttons functionality
        navButtons();
        //homepage function
        homepage(contentContainer_div);
        //About section
        aboutTab(contentContainer_div);
    };

    const clearContent = () => {
        contentContainer_div.innerHTML = "";
    };

    //tab browser
    const navButtons = () => {
        let navTabsArray = Array.from(navTabs_li);

        navTabsArray.map(tab => tab.addEventListener("click", e => {
            switch(e.target.id) {
                case "home":
                case "about":
                    clearContent();
                    navbar(contentContainer_div);
                    navButtons();
                    homepage(contentContainer_div);
                    aboutTab(contentContainer_div);
                    break;
                case "menu":
                    clearContent();
                    navbar(contentContainer_div);
                    navButtons();
                    menuTab(contentContainer_div);
                    break;
                case "contact":
                    console.log(e.target.id);
            };
        }));
    };

    pageLoad();
})();