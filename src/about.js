//about section generator
const aboutTab = (container) => {
    //container for all the content
    let aboutContainer = document.createElement("div");
    aboutContainer.className = "about-section";

    //----text section------
    //container for the text sextion
    let aboutTextContainer = document.createElement("div");
    aboutTextContainer.className = "about-text-container";

    //text section contents

    //title
    let aboutTitle = document.createElement("h2");
    aboutTitle.innerHTML = "ABOUT US";
    aboutTitle.id = "about-reference";

    //first paragraph
    let aboutPara1 = document.createElement("p");
    aboutPara1.innerHTML = "KONOHA’s commitment to hospitality begins long before you sit down at our table. The keen attention to detail, warmth and hospitality, has the goal of making happy memories for our guests.";

    //second paragraph
    let aboutPara2 = document.createElement("p");
    aboutPara2.innerHTML = "We believe food can be used as a means to share a story and reconnect guests with nature. Inspiration for the creations are often very personal and rooted in a sense of constant evolution."

    //append text content on text container
    aboutTextContainer.append(aboutTitle, aboutPara1, aboutPara2);


    //-----image section-----
    //image container
    let aboutImgContainer = document.createElement("div");
    aboutImgContainer.className = "about-img-container";

    //server image
    let aboutImg = document.createElement("img");
    aboutImg.src = "serving.png";
    aboutImg.className = "about-img";

    //append img to the container
    aboutImgContainer.append(aboutImg);


    //-----Append all------
    aboutContainer.append(aboutTextContainer, aboutImgContainer);

    //append the about section to the main site container
    container.append(aboutContainer);
};

export default aboutTab;