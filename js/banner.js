const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function banner(){
	idx++;

	if(idx > img.length - 1){
		idx = 2;
	}

	imgs.style.transform = `translateX(${-idx * 500}px)`;
}

setInterval(banner, 4000);

function div1(){
	idx++;

	if(idx > img.length - 4){
		idx = 0;
	}
	imgs.style.transform = `translateX(${-idx *500}px)`;
}

