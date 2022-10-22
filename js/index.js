let elements = document.querySelectorAll(".navbar_element");
elements.forEach(element => {
    element.addEventListener("click", function(e) {
        let a = e.target;
        a.classList.add("active");
        console.log(e.target)
        console.log("dando click");
    })
});