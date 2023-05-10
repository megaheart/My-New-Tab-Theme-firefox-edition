// let boxHeight = (window.innerHeight - 214) + 'px';
// document.querySelectorAll("#main>.category-box>.category-main>.thread-box>.thread-main").forEach(function(element){
//     element.style.height = boxHeight;
// });
function faviconURL(u) {
    const url = new URL(browser.runtime.getURL("/icons/website-icon.png"));
    // url.searchParams.set("pageUrl", u);
    // url.searchParams.set("size", "32");
    return url.toString();
}


function BookmarkContainerTemplateAsString(url, urlTitle) {
    return '<li><a href="' + url + '"><img src="' + faviconURL(url) + '"/><span>' + urlTitle + '</span></a></li>';
}
function ToDoIntializing(element) {
    let lastCheckingDate = localStorage.getItem(element.id);
    let d = new Date;
    let today = new Date((d.getMonth() + 1) + "/" + d.getDate() + "/" + d.getFullYear());
    if (lastCheckingDate === null || new Date(lastCheckingDate) < today) {
        var clickFn = function () {
            localStorage.setItem(element.id, (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear());
            element.removeEventListener("click", clickFn);
            console.log("done to do ID: " + element.id);
        };
        element.addEventListener("click", clickFn);
        return;
    }
    element.click();
}
// var squatsBoxToDos = document.querySelectorAll("#squats-box>.thread-main>ul>li>input");
// var pushupsBoxToDos = document.querySelectorAll("#pushups-box>.thread-main>ul>li>input");
var englishBoxItemsContainer = document.querySelector("#english-box>.thread-main>ul");
var drawingBoxItemsContainer = document.querySelector("#drawing-box>.thread-main>ul");
var designBoxItemsContainer = document.querySelector("#design-box>.thread-main>ul");
var toLearnBoxItemsContainer = document.querySelector("#to-learn-box>.thread-main>ul");
// squatsBoxToDos.forEach(ToDoIntializing);
// pushupsBoxToDos.forEach(ToDoIntializing);
browser.bookmarks.search({ title: "English" }).then(function (results) {
    browser.bookmarks.getChildren(results[0].id).then(function (results1) {
        results1.forEach(function (element) {
            englishBoxItemsContainer.insertAdjacentHTML("beforeend", BookmarkContainerTemplateAsString(element.url, element.title));
        });
    }, (e)=>{console.log(e);});
}, (e)=>{console.log(e);});

browser.bookmarks.search({ title: "Drawing" }).then(function (results) {
    browser.bookmarks.getChildren(results[0].id).then(function (results1) {
        results1.forEach(function (element) {
            drawingBoxItemsContainer.insertAdjacentHTML("beforeend", BookmarkContainerTemplateAsString(element.url, element.title));
        });
    }, (e)=>{console.log(e);});
}, (e)=>{console.log(e);});

browser.bookmarks.search({ title: "Design" }).then(function (results) {
    browser.bookmarks.getChildren(results[0].id).then(function (results1) {
        results1.forEach(function (element) {
            designBoxItemsContainer.insertAdjacentHTML("beforeend", BookmarkContainerTemplateAsString(element.url, element.title));
        });
    }, (e)=>{console.log(e);});
}, (e)=>{console.log(e);});

browser.bookmarks.search({ title: "To Learn" }).then(function (results) {
    browser.bookmarks.getChildren(results[0].id).then(function (results1) {
        results1.forEach(function (element) {
            toLearnBoxItemsContainer.insertAdjacentHTML("beforeend", BookmarkContainerTemplateAsString(element.url, element.title));
        });
    }, (e)=>{console.log(e);});
}, (e)=>{console.log(e);});