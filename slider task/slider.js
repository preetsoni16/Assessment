const slides = document.querySelector(".img-show");
var slideIndex = 0;
const sliderImg = document.querySelector('.active-img')
const Source = {
    src : [
    "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg",
    "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_640.jpg",
    "https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_640.jpg",
    "https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_640.jpg",
    "https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072_640.jpg",
    "https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_640.jpg",
    "https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769_640.jpg",
    "https://cdn.pixabay.com/photo/2015/01/28/23/35/hills-615429_640.jpg",
    "https://cdn.pixabay.com/photo/2016/11/06/05/36/lake-1802337_640.jpg",
    "https://cdn.pixabay.com/photo/2015/01/28/23/34/mountains-615428_640.jpg",
    "https://cdn.pixabay.com/photo/2018/08/21/23/29/forest-3622519_640.jpg"
    ]
}

Source.src.map(src=>{

    // Creating Img tag using create elemnent
    let ImgTag = document.createElement("img");
    ImgTag.src = src;
    console.log(ImgTag)
    slides.appendChild(ImgTag)
})
let Images = document.querySelectorAll('.img-show img')
console.log(Images)

function blur(){
    Images.forEach(img=>{
        img.style.opacity = 0.3
    })
}
blur()

let nextButton = document.querySelector('.next');
let prevButton = document.querySelector('.prev');

// By default showing image
Images[slideIndex].style.opacity = 1;
sliderImg.style.backgroundImage = `url(${Images[slideIndex].src})`

// Next button
nextButton.addEventListener('click', ()=>{
    slideIndex++
    if (slideIndex > Images.length - 1) {
        slideIndex = 0
    }


    blur()
    Images[slideIndex].style.opacity = 1;
    sliderImg.style.backgroundImage = `url(${Images[slideIndex].src})`
})

// Prev button
prevButton.addEventListener('click', ()=>{
    slideIndex --
    if (slideIndex < 0) {
        slideIndex = Images.length - 1 
    }
    blur()
    Images[slideIndex].style.opacity = 1;
    sliderImg.style.backgroundImage = `url(${Images[slideIndex].src})`

})

Images.forEach(img=>{
    img.addEventListener('click',()=>{
        blur()
        img.style.opacity = 1;
        sliderImg.style.backgroundImage = `url(${img.src})`
    })
})