function loader() {
  var tl = gsap.timeline();
  tl.to("#yellow", {
    top: "-100%",
    delay: 0.5,
    duration: 0.5,
    ease: "expo.out",
  });
  tl.to(
    "#loader video",
    {
      top: "-100%",
      delay: 0.5,
      duration: 0.5,
      ease: "expo.out",
    },
    "a"
  );
  tl.to(
    "#loader h1",
    {
      delay: 0.4,
      color: "#000",
    },
    "a"
  );
  tl.to("#loader", {
    delay: -0.25,
    opacity: 0,
    display: "none",
  });
}

loader();

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});


var elem = document.querySelectorAll(".elem");
var page2 = document.querySelector("#page2");
elem.forEach(function(ele){
    ele.addEventListener("mouseenter",function(){
        var bgImg = ele.getAttribute("data-img");
        page2.style.backgroundImage =`url(${bgImg})`
    })
})