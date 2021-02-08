//import necessary modules
import navbar from "./navbar";
import homepage from "./home";
import aboutTab from "./about";

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
    }

    pageLoad();
})();