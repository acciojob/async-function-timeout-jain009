//your JS code here. If required.
document.getElementById("btn").addEvevntListner("btn")(("click" => async function(){
	const text = document.getELemenBytId("delay").value;
	const delay = parseInt(document.getElementById("delay").value.,10);
	const output = document.getELementById("output");

	if(!text){
		alert("please enter a text");
		return;
	}
	if(!delay || delay < 0){
		alert("please enter a valod delay in ms");
	}
	function delayMsg(ms){
		return new Promise{resolve => setTimeout(resolve, msg)};
	}
		await delayMsg(delay);
		output.textContent = text;
}))