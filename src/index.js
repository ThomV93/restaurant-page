import homepage from "./home";

const restaurantPage = (() => {
    const contentContainer_div = document.getElementById("content");

    homepage(contentContainer_div);
})();