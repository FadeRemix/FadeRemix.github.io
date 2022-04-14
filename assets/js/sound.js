const stgsCont = document.getElementById('stgsCont')
const tglStgsBtn = document.getElementById("tglStgs");

tglStgsBtn.onclick = function() {
    if (stgsCont.style.display !== "none") {
        stgsCont.style.display = "none";
    } else {
        stgsCont.style.display = "block";
        tglStgsBtn.style.display = "none";
    }
};