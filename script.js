document.getElementById("clearOutput").onclick = function () {
    let outputBoxHtml = document.getElementById("output").innerHTML;

    if (!outputBoxHtml.length) {
        showNotification("It's already empty. " , "error")
        // toastifySuccess("It's already empty")
    }
    else{
        clearOutput();
        showNotification("Output / Result box has been cleared.", "success")
        // toastifySuccess("Output / Result box has been cleared.")
    }
}

function showNotification(msg,type){
    let bgColor;
    let textColor;

    switch (type) {
        case "success":
            bgColor = "linear-gradient(to right, #1D976C, #93F99)"
            textColor = "red"
            break;
        case "error":
            bgColor = "linear-gradient(to right, #93291e, #ed213a)"
            break;    
        default:
            bgColor = "#000"
            break;
}
    
Toastify({
    text: msg,
    duration: 3000,
    close: true,
    gravity: "bottom", // `top` or `bottom`
    position: "left", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
      background: bgColor,
      color : textColor
    },
  }).showToast();
}

function clearOutput() {
    document.getElementById('output').innerHTML = " ";
}
