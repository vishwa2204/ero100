// <!-- popup  -->


    // Form Popup 

    let popupBtn = document.querySelector('.add-lead');
    let closeBtn = document.querySelector('#f-close');
    let popup = document.querySelector('.model-section')
    let deniedbtn = document.querySelector('.denied');
    let closeDenied = document.querySelector('#denied-close');
    let denied = document.querySelector('.denied-popu');
    popupBtn.addEventListener("click", function () {
        // event.preventDefault();
        popup.style.scale = "1";
    });
    closeBtn.addEventListener("click", function (event) {
       
        denied.style.scale = "0";
        popup.style.scale = "0";
    });


    // Denied form 

  

    deniedbtn.addEventListener("click", function(){
        // event.preventDefault();
        denied.style.scale = "1";
    });

    closeDenied.addEventListener("click", function (event) {
        event.preventDefault();
        denied.style.scale = "0";
        
       
    });