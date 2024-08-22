var tabs = document.querySelectorAll(".lboard_tabs ul li");
var Previous = document.querySelector(".Previous");
var Current = document.querySelector(".Current");
var UpComing = document.querySelector(".UpComing");
var items = document.querySelectorAll(".lboard_item");

tabs.forEach(function(tab){
    tab.addEventListener("click",function(){
        var currentdatali = tab.getAttribute("data-li");
        
        tabs.forEach(function(tab){
            tab.classList.remove("active");
        })

        tab.classList.add("active");

        items.forEach(function(item){
            item.style.display="none";
        })

        if(currentdatali == "Previous"){
            Previous.style.display = "block";
        }
        else if(currentdatali == "Current"){
            Current.style.display = "block";
        }
        else{
            UpComing.style.display = "block";
        }
    })
})
