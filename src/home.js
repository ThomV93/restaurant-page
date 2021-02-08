//homepage tab generator
const homepage = (container) => {
    //create div container
    let imgContainer = document.createElement("div");
    imgContainer.className = "img-container";

    //create img
    let plateImg = document.createElement("img");
    plateImg.src="plate-1.png";
    plateImg.className = "home-bg";

    imgContainer.append(plateImg);

    container.append(imgContainer);
};

export default homepage;