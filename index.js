let images = [{
    url: "https://i.travelapi.com/hotels/25000000/24120000/24110600/24110552/503cd7de_z.jpg",
    title: "Rostov-on-Don, Admiral"
  }, {
    url: "https://static.tildacdn.com/tild3663-6462-4665-a362-653737376339/5.jpg",
    title: "Sochi Thieves"
  }, {
    url: "https://cf.bstatic.com/images/hotel/max1024x768/277/277877414.jpg",
    title: "Rostov-on-Don Patriotic"
  }]; 

function initSlider() {
   if (!images || !images.length) return;



   let sliderImages = document.querySelector(".slider__images");
   let sliderArrows = document.querySelector(".slider__arrows");
   let sliderDots = document.querySelector(".slider__dots");
   let navSlider = document.querySelector(".nav_slider");

   initImages();
   initArrows();
   initDots();
   initLink();

   function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0? "active" : ""}" style="background-image:url(${images[index].url});" data-index="${index}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }

  function initArrows() {
      sliderArrows.querySelectorAll(".slider__arrow").forEach(arrow => {
        arrow.addEventListener("click", function() {
          let curNamber = +sliderImages.querySelector(".active").dataset.index;
          let nextNumber;
          if (arrow.classList.contains("left")) {
            nextNumber = curNamber === 0? images.length - 1 : curNamber - 1;
          } else {
            nextNumber = curNamber === images.length - 1? 0 : curNamber + 1;
          }
          moveSlider(nextNumber);
        });
      });
  }

  function initDots() {
     images.forEach((image, index) => {
       let dot = `<div class="slider__dots-item n${index} ${index === 0? "active" : ""}" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
     });
     sliderDots.querySelectorAll(".slider__dots-item").forEach(dot => {
      dot.addEventListener("click", function() {
        moveSlider(this.dataset.index);
        sliderDots.querySelector(".active").classList.remove("active");
        this.classList.add("active");
      })
    })
  }

  function initLink() {
		images.forEach((image, index) => {
			let link = `<div class="nav_slider-item  n${index} ${index === 0? "active" : ""}" data-index="${index}">${images[index].title}</div>`;
			navSlider.innerHTML += link;
		  });
		  navSlider.querySelectorAll(".nav_slider-item").forEach(link => {
			link.addEventListener("click", function() {
        moveSlider(this.dataset.index);
        navSlider.querySelector(".active").classList.remove("active");
        this.classList.add("active");
			})
		 })
	}

  function moveSlider(num) {
    sliderImages.querySelector(".active").classList.remove("active");
    sliderImages.querySelector(".n" + num).classList.add("active");

    sliderDots.querySelector(".active").classList.remove("active");
    sliderDots.querySelector(".n" + num).classList.add("active");

    navSlider.querySelector(".active").classList.remove("active");
    navSlider.querySelector(".n" + num).classList.add("active");
   }
}


document.addEventListener("DOMContentLoaded", initSlider);
