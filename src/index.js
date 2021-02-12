//import necessary modules
import navbar from "./navbar";
import homepage from "./home";
import aboutTab from "./about";
import menuTab from "./menu";

const restaurantPage = (() => {
    //cache the content element
    const contentContainer_div = document.getElementById("content");

    //initializer function
    const pageLoad = () => {
        //navbar function
        navbar(contentContainer_div);
        //homepage function
        homepage(contentContainer_div);
        //About section
        aboutTab(contentContainer_div);
        //menu section
        menuTab(contentContainer_div);
    }

    pageLoad();
})();