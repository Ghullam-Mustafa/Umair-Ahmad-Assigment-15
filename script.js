var popupwindow;
// ========================
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

// ====================   output   ==================================
function showOutput(element) {
    document.getElementById('output').innerHTML = element
}

// ================================   button1    ===================================================

button1.onclick = function () {
   var results =  XPathResult.innerHTML = window.location.href;
console.log(results);
showOutput(results)
}

// ===============================    button2 ========================================================


button2.onclick = function () {
    window.location.href = "https://www.google.com/ "
}


// ============================     button3    ======================================================

button3.onclick = function () {
    window.location.replace("https://www.google.com/")
}

// ==============================     button4    ============================================

button4.onclick = function () {
    popupwindow = window.open("",'mywindow','width=500,height = 400,left = 300 , top = 200');
    // popupwindow.location.assign("https://www.techloset.com/")
}

// =================================    button5  ================================

button5.onclick = function () {
    popupwindow.document.write("<h1 >Hellow World</h1>")
}

// ===============================   button6   =========================================

button6.onclick = function () {
    popupwindow.location.assign("https://www.techloset.com/")
}

// ================================   button7   =================================

button7.onclick = function () {
    
    setTimeout(() => {
        popupwindow.close()
    },1000)
}

// =================================  button8  ======================================

button8.onclick = function () {
    popupwindow.close()
}