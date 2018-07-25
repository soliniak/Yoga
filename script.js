'use strict';


// ---------------------------------------- TOP BAR FIXED START -------------------------------------------------- //

const menu = document.querySelector(".top_bar");

window.addEventListener("scroll", ()=>{
	if(window.scrollY > 50){
		menu.classList.add("top_bar-fixed");
	} else {
		menu.classList.remove("top_bar-fixed");
	}
});

// ------- TOP BAR FIXED END -------- //

// ---------------------------------------- SMOOTH SCROLL START -------------------------------------------------- //

// const links = document.querySelectorAll("a");

// links.forEach((link, index)=>{
	


// 	console.log(link.href);
// });



// ----- SMOOTH SCROLL END --------- //

// const orderBtns = document.querySelectorAll(".order-now");
// const tables = document.querySelectorAll(".table");

// orderBtns.forEach((el, i)=>{
// 	el.addEventListener("focus", ()=>{
// 		tables[i].style.transform = "scale(2)";
// 		})
// })

// ---------------------------------------- MODAL START -------------------------------------------------- //

const modal = document.querySelector(".modal");
const regBtns = document.querySelectorAll(".free_reg_button"),
	closeModal = document.querySelector(".close_modal"),
	modalContainer = document.querySelector(".modal-container"),
	body = document.querySelector("body");

closeModal.addEventListener("click", ()=>{
	modal.classList.toggle("show");
	modal.classList.remove("hide-modal");
	body.classList.toggle("ovhide");
})

modal.addEventListener("click", (e)=>{
if (!modalContainer.contains(e.target)) {
	modal.classList.toggle("show");
	modal.classList.remove("hide-modal");
	body.classList.toggle("ovhide");
  }
})

regBtns.forEach((el, index)=>{
	el.addEventListener("click", ()=>{
		modal.classList.toggle("show");
		modal.classList.remove("hide-modal");
		body.classList.toggle("ovhide");
		modal.querySelector("input[name=login]").focus();
	})
});


// -------- MODAL END ---------- //

// ---------------------------------------- SECTION 04 - CAROUSEL START -------------------------------------------------- //

const 	btnL 	= document.querySelector(".carousel_navigation-left"),
		btnR 	= document.querySelector(".carousel_navigation-right"),
		allEls 	= document.querySelectorAll(".carousel_element"),
		qCont	= document.querySelectorAll(".q-container");

let index = 0;

btnR.addEventListener("click", ()=>{
	index--;
	index = (index < 0 ? (allEls.length-1) : index);
	spin(index);
});

btnL.addEventListener("click", ()=>{
	index++;
	index = (index > (allEls.length-1) ? 0 : index);
	spin(index);
});

function spin(to){

		qCont.forEach((q)=>{
			q.classList.remove("visible");
			q.classList.add("hidden");
		});

		qCont[to].classList.add("visible");
		qCont[to].classList.remove("hidden");

		allEls.forEach((a)=>{
			a.classList.remove("active", "el_left", "el_right", "el_center");
			a.classList.add("not-active");
		});

		let left = (to <= 0 ? 2 : (to-1));
		let right = (to >= 2 ? 0 : (to+1));

		allEls[left].classList.add("el_left");
		allEls[right].classList.add("el_right");

		allEls[to].classList.remove("not-active");
		allEls[to].classList.add("active", "el_center");
};

// ------ SECTION 04 - CAROUSEL END ---------- //