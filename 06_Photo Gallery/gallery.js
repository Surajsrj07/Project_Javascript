//creating div element using JS
const modal =document.createElement('div');
modal.id='modal';
//appending/joining
document.body.appendChild(modal);

const images =document.querySelectorAll('.img');

//console.log(images); testing

//foreach images 
images.forEach(image=>{
    image.addEventListener('click',()=>{
        modal.classList.add('active');

        const img=document.createElement('img');
        img.src=image.src;
        img.id='img';
        while(modal.firstChild){
            modal.removeChild(modal.firstChild);
        }

        modal.append(img);

    });
});


modal.addEventListener('click',()=>{
modal.classList.remove('active');
});