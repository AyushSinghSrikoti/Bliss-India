const password=document.getElementById("input-password"),confirmPassword=document.getElementById("confirm-password"),eyeButton=document.querySelectorAll(".password>i");eyeButton[0].onclick=()=>{"password"===password.type?password.type="text":password.type="password"},eyeButton.length>1&&(eyeButton[1].onclick=()=>{"password"===confirmPassword.type?confirmPassword.type="text":confirmPassword.type="password"});