const toggleBtn = document.getElementById("themeToggle");

window.onload = function() {
    const savedtheme = localStorage.getItem("theme");
    if(savedtheme === "dark"){
        this.document.body.classList.add("dark");
        if(toggleBtn) toggleBtn.innerHTML = "☀️";
    }
};

//toggle theme
if(toggleBtn){
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark");

        if(document.body.classList.contains("dark")){
            localStorage.setItem("theme", "dark");
            toggleBtn.innerHTML = "☀️";
        }else{
            localStorage.setItem("theme", "light");
            toggleBtn.innerHTML = "🌙";
        }
    });
}