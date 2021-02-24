addEventListener("DOMContentLoaded",() => {
   const earht = document.querySelector(".earth");
   const MoveEarht = document.querySelector(".moveEarth");
   const stars = document.querySelector(".stars");
   let ImageSpeed = 1;
   setInterval(() => {
    MoveEarht.style.right = ImageSpeed+'px';
    stars.style.transform = 'rotate('+ImageSpeed/10+'deg)';

    
    if(ImageSpeed % 500 == 0){
        const createImage = document.createElement("img");
        createImage.src='./earth.png';
        MoveEarht.appendChild(createImage);
    }
  
    ImageSpeed++;

   },70)
})