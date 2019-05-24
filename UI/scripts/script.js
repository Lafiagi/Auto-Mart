document.querySelector("#btn").addEventListener("click", function(event) {
	//alert(1)
         event.preventDefault();
}, false);

function handleClick(value) {
   
   if (value) {
   	document.querySelector(".updatesold").style.visibility = "visible"
   }
   else document.querySelector(".updatesold").style.visibility = "hidden"
}