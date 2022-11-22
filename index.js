const thumbnails = document.querySelectorAll(".thumbnail")
const thumbnails2 = document.querySelectorAll(".thumbnail2")

const body = document.getElementById("body")
const thumbnail1 = document.getElementById("thumbnail1")
const thumbnail2 = document.getElementById("thumbnail2")
const thumbnail3 = document.getElementById("thumbnail3")
const thumbnail4 = document.getElementById("thumbnail4")
const bigpic1 = document.getElementById("bigpic1")
const bigpic2 = document.getElementById("bigpic2")
const bigpic3 = document.getElementById("bigpic3")
const bigpic4 = document.getElementById("bigpic4")

const thumbnail12 = document.getElementById("thumbnail12")
const thumbnail22 = document.getElementById("thumbnail22")
const thumbnail32 = document.getElementById("thumbnail32")
const thumbnail42 = document.getElementById("thumbnail42")
const bigpic12 = document.getElementById("bigpic12")
const bigpic22 = document.getElementById("bigpic22")
const bigpic32 = document.getElementById("bigpic32")
const bigpic42 = document.getElementById("bigpic42")

const lightbox = document.getElementById("openedimage")
const nextButton = document.getElementById("next")
const previousButton = document.getElementById("previous")

const increaseQuantity = document.getElementById("plus")
const decreaseQuantity = document.getElementById("minus")
const quantity = document.getElementById("quantity")
var itemquantity = 0

const addtocart = document.querySelector(".addtocart")
const added = document.getElementById("added")

const checkoutquantity = document.getElementById("checkoutquantity")
const checkoutbill = document.getElementById("checkoutbill")
const deletecheckout = document.querySelector(".delete")
const itembought = document.getElementById("itembought")
const basket = document.getElementById("basket")
const checkoutcart = document.getElementById("checkoutcart")
const cartcheckbox = document.getElementById("cartcheckbox")
const empty = document.querySelector(".empty")
const menucheckbox = document.getElementById("menucheckbox")
const closemenu = document.querySelector(".closemenu")
const mobilemenu = document.querySelector(".mobilemenu")
const logo = document.querySelector(".logo")
const userpic = document.querySelector(".userPic")
const menu = document.querySelector(".menu")
const mobilelightbox = document.querySelector(".mobilelightbox")
const mobilenext = document.getElementById("mobilenext")
const mobileprevious = document.getElementById("mobileprevious")

const mobilepic1 = document.getElementById("mobilepic1")
const mobilepic2 = document.getElementById("mobilepic2")
const mobilepic3 = document.getElementById("mobilepic3")
const mobilepic4 = document.getElementById("mobilepic4")


quantity.innerHTML = itemquantity


thumbnail1.addEventListener("mouseenter",()=>{
   thumbnail1.style.opacity='75%' 
   thumbnail1.style.border = '3px solid orangered'
   bigpic1.style.visibility= 'visible'
   thumbnail2.style.opacity='100%' 
   thumbnail2.style.border = 'none'
   bigpic2.style.visibility= 'hidden'
   thumbnail3.style.opacity='100%' 
   thumbnail3.style.border = 'none'
   bigpic3.style.visibility= 'hidden'
   thumbnail4.style.opacity='100%' 
   thumbnail4.style.border = 'none'
   bigpic4.style.visibility= 'hidden'
   
})
thumbnail2.addEventListener("mouseenter",()=>{
    thumbnail1.style.opacity='100%' 
    thumbnail1.style.border = 'none'
    bigpic1.style.visibility= 'hidden'
    thumbnail2.style.opacity='75%' 
    thumbnail2.style.border = '3px solid orangered'
    bigpic2.style.visibility= 'visible'
    thumbnail3.style.opacity='100%' 
    thumbnail3.style.border = 'none'
    bigpic3.style.visibility= 'hidden'
    thumbnail4.style.opacity='100%' 
    thumbnail4.style.border = 'none'
    bigpic4.style.visibility= 'hidden'
 })
 thumbnail3.addEventListener("mouseenter",()=>{
    thumbnail1.style.opacity='100%' 
    thumbnail1.style.border = 'none'
    bigpic1.style.visibility= 'hidden'
    thumbnail2.style.opacity='100%' 
    thumbnail2.style.border = 'none'
    bigpic2.style.visibility= 'hidden'
    thumbnail3.style.opacity='75%' 
    thumbnail3.style.border = '3px solid orangered'
    bigpic3.style.visibility= 'visible'
    thumbnail4.style.opacity='100%' 
    thumbnail4.style.border = 'none'
    bigpic4.style.visibility= 'hidden'
 })
 thumbnail4.addEventListener("mouseenter",()=>{
    thumbnail1.style.opacity='100%' 
    thumbnail1.style.border = 'none'
    bigpic1.style.visibility= 'hidden'
    thumbnail2.style.opacity='100%' 
    thumbnail2.style.border = 'none'
    bigpic2.style.visibility= 'hidden'
    thumbnail3.style.opacity='100%' 
    thumbnail3.style.border = 'none'
    bigpic3.style.visibility= 'hidden'
    thumbnail4.style.opacity='75%' 
    thumbnail4.style.border = '3px solid orangered'
    bigpic4.style.visibility= 'visible'
 })
 thumbnail12.addEventListener("click",()=>{
    thumbnail12.style.opacity='75%' 
    thumbnail12.style.border = '3px solid orangered'
    bigpic12.style.visibility= 'visible'
    thumbnail22.style.opacity='100%' 
    thumbnail22.style.border = 'none'
    bigpic22.style.visibility= 'hidden'
    thumbnail32.style.opacity='100%' 
    thumbnail32.style.border = 'none'
    bigpic32.style.visibility= 'hidden'
    thumbnail42.style.opacity='100%' 
    thumbnail42.style.border = 'none'
    bigpic42.style.visibility= 'hidden'
    nextButton.style.visibility = 'visible'
    previousButton.style.visibility = 'hidden'


 })
 thumbnail22.addEventListener("click",()=>{
     thumbnail12.style.opacity='100%' 
     thumbnail12.style.border = 'none'
     bigpic12.style.visibility= 'hidden'
     thumbnail22.style.opacity='75%' 
     thumbnail22.style.border = '3px solid orangered'
     bigpic22.style.visibility= 'visible'
     thumbnail32.style.opacity='100%' 
     thumbnail32.style.border = 'none'
     bigpic32.style.visibility= 'hidden'
     thumbnail42.style.opacity='100%' 
     thumbnail42.style.border = 'none'
     bigpic42.style.visibility= 'hidden'
     nextButton.style.visibility = 'visible'
     previousButton.style.visibility = 'visible'


  })
  thumbnail32.addEventListener("click",()=>{
     thumbnail12.style.opacity='100%' 
     thumbnail12.style.border = 'none'
     bigpic12.style.visibility= 'hidden'
     thumbnail22.style.opacity='100%' 
     thumbnail22.style.border = 'none'
     bigpic22.style.visibility= 'hidden'
     thumbnail32.style.opacity='75%' 
     thumbnail32.style.border = '3px solid orangered'
     bigpic32.style.visibility= 'visible'
     thumbnail42.style.opacity='100%' 
     thumbnail42.style.border = 'none'
     bigpic42.style.visibility= 'hidden'
     nextButton.style.visibility = 'visible'
     previousButton.style.visibility = 'visible'


  })
  thumbnail42.addEventListener("click",()=>{
     thumbnail12.style.opacity='100%' 
     thumbnail12.style.border = 'none'
     bigpic12.style.visibility= 'hidden'
     thumbnail22.style.opacity='100%' 
     thumbnail22.style.border = 'none'
     bigpic22.style.visibility= 'hidden'
     thumbnail32.style.opacity='100%' 
     thumbnail32.style.border = 'none'
     bigpic32.style.visibility= 'hidden'
     thumbnail42.style.opacity='75%' 
     thumbnail42.style.border = '3px solid orangered'
     bigpic42.style.visibility= 'visible'
     nextButton.style.visibility = 'hidden'
     previousButton.style.visibility = 'visible'


  })
  thumbnails.forEach(thumbnail=>(thumbnail.addEventListener("mouseenter",()=>{
    thumbnail.style.opacity='75%'
     })))
     thumbnails.forEach(thumbnail=>(thumbnail.addEventListener("mouseleave",()=>{
        thumbnail.style.opacity='100%'
        if (bigpic12.style.visibility=='visible') {
            thumbnail12.style.opacity = '20%'
        }
        else{
            thumbnail12.style.opacity = '100%'

        }
        if (bigpic22.style.visibility=='visible') {
            thumbnail22.style.opacity = '20%'
        }
        else{
            thumbnail22.style.opacity = '100%'

        }
        if (bigpic32.style.visibility=='visible') {
            thumbnail32.style.opacity = '20%'
        }
        else{
            thumbnail32.style.opacity = '100%'

        }
        if (bigpic42.style.visibility=='visible') {
            thumbnail42.style.opacity = '20%'
        }
        else{
            thumbnail42.style.opacity = '100%'

        }
        
         })))
         thumbnails2.forEach(thumbnail=>(thumbnail.addEventListener("mouseenter",()=>{
            thumbnail.style.opacity='75%'
             })))
             thumbnails2.forEach(thumbnail=>(thumbnail.addEventListener("mouseleave",()=>{
                thumbnail.style.opacity='100%'
                if (bigpic12.style.visibility=='visible') {
                    thumbnail12.style.opacity = '20%'
                }
                else{
                    thumbnail12.style.opacity = '100%'
        
                }
                if (bigpic22.style.visibility=='visible') {
                    thumbnail22.style.opacity = '20%'
                }
                else{
                    thumbnail22.style.opacity = '100%'
        
                }
                if (bigpic32.style.visibility=='visible') {
                    thumbnail32.style.opacity = '20%'
                }
                else{
                    thumbnail32.style.opacity = '100%'
        
                }
                if (bigpic42.style.visibility=='visible') {
                    thumbnail42.style.opacity = '20%'
                }
                else{
                    thumbnail42.style.opacity = '100%'
        
                }
                
                 })))
         function closelightbox(){
lightbox.style.display='none'
         }
         thumbnail1.addEventListener("click",()=>{
            lightbox.style.display= 'flex'
            bigpic12.style.visibility = "visible"
            bigpic22.style.visibility = 'hidden'
            bigpic32.style.visibility = 'hidden'
            bigpic42.style.visibility = 'hidden'
nextButton.style.visibility = 'visible'
previousButton.style.visibility = 'hidden'

         })
         thumbnail2.addEventListener("click",()=>{
            lightbox.style.display= 'flex'
            bigpic22.style.visibility = "visible"
            bigpic12.style.visibility = 'hidden'
            bigpic32.style.visibility = 'hidden'
            bigpic42.style.visibility = 'hidden'
            nextButton.style.visibility = 'visible'
            previousButton.style.visibility ='visible'

         })
         thumbnail3.addEventListener("click",()=>{
            lightbox.style.display= 'flex'
            bigpic32.style.visibility = "visible"
            bigpic22.style.visibility = 'hidden'
            bigpic12.style.visibility = 'hidden'
            bigpic42.style.visibility = 'hidden'
nextButton.style.visibility = 'visible'
previousButton.style.visibility ='visible'

         })
         thumbnail4.addEventListener("click",()=>{
            lightbox.style.display= 'flex'
            bigpic42.style.visibility = "visible"
            bigpic22.style.visibility = 'hidden'
            bigpic32.style.visibility = 'hidden'
            bigpic12.style.visibility = 'hidden'
            nextButton.style.visibility = 'hidden'
            previousButton.style.visibility ='visible'

         })
         nextButton.addEventListener("click",()=>{
            if(bigpic12.style.visibility == 'visible'){
               bigpic12.style.visibility = 'hidden'
               bigpic22.style.visibility = 'visible'
               previousButton.style.visibility='visible'
               thumbnail12.style.opacity ='100%'
               thumbnail12.style.border = 'none'
               thumbnail22.style.opacity = '20%'
               thumbnail22.style.border = '3px solid orangered'

            }
            else if(bigpic22.style.visibility == 'visible'){
                bigpic22.style.visibility = 'hidden'
                bigpic32.style.visibility = 'visible'
                previousButton.style.visibility='visible'
                thumbnail22.style.opacity ='100%'
                thumbnail22.style.border = 'none'
                thumbnail32.style.opacity = '20%'
                thumbnail32.style.border = '3px solid orangered'

             }
             else if(bigpic32.style.visibility == 'visible'){
                bigpic32.style.visibility = 'hidden'
                bigpic42.style.visibility = 'visible'
                nextButton.style.visibility='hidden'
                previousButton.style.visibility='visible'
                thumbnail32.style.opacity ='100%'
                thumbnail32.style.border = 'none'
                thumbnail42.style.opacity = '20%'
                thumbnail42.style.border = '3px solid orangered'

             }
         })
         previousButton.addEventListener("click",()=>{
            if(bigpic22.style.visibility == 'visible'){
                bigpic22.style.visibility = 'hidden'
                bigpic12.style.visibility = 'visible'
               previousButton.style.visibility ='hidden'
               nextButton.style.visibility = 'visible'
               thumbnail22.style.opacity ='100%'
               thumbnail22.style.border = 'none'
               thumbnail12.style.opacity = '20%'
               thumbnail12.style.border = '3px solid orangered'


            }
            else if(bigpic42.style.visibility == 'visible'){
                bigpic42.style.visibility = 'hidden'
                bigpic32.style.visibility = 'visible'
                nextButton.style.visibility = 'visible'
                thumbnail42.style.opacity ='100%'
                thumbnail42.style.border = 'none'
                thumbnail32.style.opacity = '20%'
                thumbnail32.style.border = '3px solid orangered'
                previousButton.style.visibility = 'visible'

             }
             else if(bigpic32.style.visibility == 'visible'){
                bigpic32.style.visibility = 'hidden'
                bigpic22.style.visibility = 'visible'
                nextButton.style.visibility = 'visible'
                thumbnail32.style.opacity ='100%'
                thumbnail32.style.border = 'none'
                thumbnail22.style.opacity = '20%'
                thumbnail22.style.border = '3px solid orangered'

             }
         })
         increaseQuantity.addEventListener("click",()=>{
           itemquantity = itemquantity + 1
           quantity.innerHTML = itemquantity
           decreaseQuantity.style.cursor = 'pointer'

         }) 
         decreaseQuantity.addEventListener("click",()=>{
            if (itemquantity > 0) {
                itemquantity = itemquantity - 1
                quantity.innerHTML = itemquantity
                decreaseQuantity.style.cursor = 'pointer'

            }
            if(quantity.textContent == '0'){
                decreaseQuantity.style.cursor = 'initial'
    
            }
          })
        
          addtocart.addEventListener("click",()=>{
            added.style.visibility = 'visible'
            added.innerText = itemquantity
            checkoutquantity.innerHTML = itemquantity
checkoutbill.innerHTML = '$' + 125*itemquantity
itembought.style.display = 'initial'
empty.style.display = 'none'


            if(quantity.textContent == '0'){
                added.style.visibility = 'hidden'
                itembought.style.display = 'none'
                empty.style.display = 'initial'
                
            }
          })
          deletecheckout.addEventListener("click",()=>{
            itembought.style.display = 'none'
            empty.style.display = 'initial'
            added.textContent = '0'
            added.style.visibility = 'hidden'
          })
 // mobile 
let query = window.matchMedia('(max-width : 750px)')


        function isCheckedcart(){
            if(cartcheckbox.checked){
                checkoutcart.style.visibility ='visible'
                mobilenext.style.display='none'
                mobileprevious.style.display='none'

                
                
              }
              else {
                checkoutcart.style.visibility ='hidden'
                empty.style.display = 'none'
                itembought.style.display = 'none'
                mobilenext.style.display='initial'
                mobileprevious.style.display='initial'

              }
              if (added.textContent== 0) {
                empty.style.display = 'initial'
                itembought.style.display = 'none'

            }
            else{
               
                empty.style.display = 'none'
                itembought.style.display = 'initial'

            }
        }
        function isCheckedmenu(){
            if (menucheckbox.checked) {
               closemenu.style.display = 'initial' 
               mobilemenu.style.display = 'none' 
               logo.style.display = 'none' 
               menu.style.left = '0%'
               mobilelightbox.style.display = 'flex'

            }
            else{
                closemenu.style.display = 'none' 
                mobilemenu.style.display = 'initial' 
                logo.style.display = 'initial' 
                menu.style.left = '-4000%'
                mobilelightbox.style.display = 'none'




  
            }
        }
        var a = 1

mobilenext.addEventListener("click",()=>nextgallery())
 


function nextgallery(){
    
    a = a + 1
    if(a == 2){
        mobilepic1.style.left = '-100%'
        mobilepic2.style.left = '0'
     }
     else if(a == 3){
        mobilepic2.style.left = '-100%'
        mobilepic3.style.left = '0'

     }
     else if(a == 4){
        mobilepic3.style.left = '-100%'
        mobilepic4.style.left = '0'
        mobilenext.style.display = 'none'
        mobileprevious.style.display = 'initial'


    }

}
mobileprevious.addEventListener("click",()=>previousgallery(), )

function previousgallery(){
    a = a - 1
    if(a == 1){
        mobilepic1.style.left = '0'
        mobilepic2.style.left = '-100%'
        mobileprevious.style.display = 'none'
        mobilenext.style.display = 'initial'


     }
     else if(a == 2){
        mobilepic2.style.left = '0'
        mobilepic3.style.left = '-100%'

     }
     else if(a == 3){
        mobilepic3.style.left = '0%'
        mobilepic4.style.left = '100%'
        mobilenext.style.display = 'initial'

    }
}


