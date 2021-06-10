let btn = document.getElementById('btn');

btn.addEventListener("click", function() {
    let val = btn.innerHTML;
btn.innerHTML = parseInt(val) + 1;
})