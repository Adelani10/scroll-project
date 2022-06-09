// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels
const linksContainer = document.querySelector(".links-container")
const links = document.querySelector(".links")
const toggleBtn = document.querySelector(".toggle-btn")
const date = document.getElementById("date")
const navBar = document.querySelector(".nav-bar")
const topLink = document.querySelector(".top-link")
const linkScroll = document.querySelectorAll(".scroll-link")
// ********** set date ************
 date.textContent = new Date().getFullYear()
// ********** close links ************
toggleBtn.addEventListener("click", function(){
    // linksContainer.classList.toggle("show-links-container")
    let containerHeight = linksContainer.getBoundingClientRect().height
    let linksHeight = links.getBoundingClientRect().height
     
    if(containerHeight === 0){
        linksContainer.style.height = `${linksHeight}px`
    }
    else {
        linksContainer.style.height = 0
    }
})
// ********** fixed navbar ************
window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    const navBarHeight = navBar.getBoundingClientRect().height
    // console.log(navBarHeight)
    if (scrollHeight > navBarHeight){
        navBar.classList.add("fixed-nav")
    }
    else{
        navBar.classList.remove("fixed-nav")
    }

    if(scrollHeight > 1266){
        topLink.classList.add("showtop-link")
    }
    else{
        topLink.classList.remove("showtop-link")
    }
})
// ********** smooth scroll ************
// select links

// linkScroll.forEach(function(link){
//     link.addEventListener("click", function(e){
//         e.preventDefault()
//         const id = e.currentTarget.getAttribute("href").slice(1)
//         const element = document.getElementById(id)

//         const navBarHeight = navBar.getBoundingClientRect().height
//         fixedNav = navBar.classList.contains("fixed-nav")
//         let containerHeight = linksContainer.getBoundingClientRect().height

        
//         let position = element.offsetTop - navBarHeight

//          console.log(position)
        
//         if(!fixedNav){
//             position = position + 220
//         }
//         if (navBarHeight <= 88){
//             position = position - 216
//         }


        

//         scrollTo({
//             left: 0,
//             top: position
//         })

//         linksContainer.style.height = 0

//     })
// })

