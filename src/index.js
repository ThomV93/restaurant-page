//import necessary modules
import homepage from "./home";
import aboutTab from "./about";

const restaurantPage = (() => {
    //cache the content element
    const contentContainer_div = document.getElementById("content");

    //initializer function
    const pageLoad = () => {
        //homepage function
        homepage(contentContainer_div);
        //About section
        aboutTab(contentContainer_div);
    }

    pageLoad();
})();