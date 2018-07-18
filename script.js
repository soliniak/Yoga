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