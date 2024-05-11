function show(){
var codes = document.getElementById("code").value;
var code_content = document.getElementById("code-content");
var result = document.getElementById("result-content");
var run_btn = document.getElementById("run-btn");
var back_btn = document.getElementById("back-btn");
var header = document.getElementById("text");
result.innerHTML=codes;
result.style.display="block";
back_btn.style.display="block";
code_content.style.display="none";
run_btn.style.display="none";
header.innerHTML="Output";
result.setAttribute("class","animate__animated animate__flipInX");


}
if(codes.match
(
"<h1>hello</h1>"
)

){
alert("test pass");
}
function back()
{
	var codes = document.getElementById("code").value;
	var code_content = document.getElementById("code-content");
	var result = document.getElementById("result-content");
	var run_btn = document.getElementById("run-btn");
	var back_btn = document.getElementById("back-btn");
	var header = document.getElementById("text");
	code_content.style.display="block";
	run_btn.style.display="block";
	result.style.display="none";
	back_btn.style.display="none";
	header.innerHTML="Code Editor";
	code_content.setAttribute("class","animate__animated animate__flipInY");
}
