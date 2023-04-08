(function(){
    const buttons = document.querySelectorAll(".btn")
    const storeImage = document.querySelectorAll(".store-items")
    const modalClose = document.querySelector(".modal-close")
    
    buttons.forEach((button) => {
        button.addEventListener('click',(e) => {
            e.preventDefault()
            document.querySelector('.active').classList.remove('active')
            e.target.classList.add('active')
            const filter = e.target.dataset.filter
            
            storeImage.forEach((item) => {
                if(filter === 'all'){
                    item.style.display = 'block'
                }
                else{
                    if(item.classList.contains(filter)){
                        item.style.display = 'block'
                        // console.log(item.style);
                    }else{
                        item.style.display = 'none'
                    }
                }
            })
        })
    })
    storeImage.forEach((img) => {
        img.addEventListener('click',(e) => {
            e.preventDefault()
            const imageUrl = e.originalTarget.src;
            console.log(imageUrl);
            document.getElementById("modalImage").src = imageUrl; 
            document.getElementById("modal").classList.add('show') ; 
        })
    })
    modalClose.addEventListener('click',() => {
        document.getElementById("modalImage").src = "imageUrl"; 
        document.getElementById("modal").classList.remove('show') 
    })
})();