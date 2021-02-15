//homepage tab generator
const homepage = (container) => {
    //create div container
    let imgContainer = document.createElement("div");
    imgContainer.className = "img-container";

    //create img
    let plateImg = document.createElement("img");
    plateImg.src="plate-1.png";
    plateImg.className = "home-bg";

    //append plate image to container
    imgContainer.append(plateImg);

    //create arrow container
    let arrowContainer = document.createElement("div");
    arrowContainer.id = "arrow-container";
    //create arrow link
    let arrowLink = document.createElement("a");
    arrowLink.href = "#about-reference";
    //create arrow image
    let arrow = document.createElement("img");
    arrow.src = "arrow.png";
    arrow.id = "arrow";
    //append image to anchor
    arrowLink.append(arrow);
    //append arrow to container
    arrowContainer.append(arrowLink);

    container.append(imgContainer, arrowContainer);
};

export default homepage;