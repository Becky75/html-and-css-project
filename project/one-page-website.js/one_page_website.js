<script>
//open the Modal
    function openModal(){
        document.getElementById("myModal").style.display="block";
    }
//Close the Modal
    function closeModal(){
        document.getElementById("myModal").style.display ="none";
    }
    var slideIndex=1;
    showSlides(slideIndex);

//next/previous controls
function plusSlide (n) {
    showSlides(slideIndex +=n);
}

//Thumbnail image controls
function currentSlide(n){
    showSlides(slideIndex =n);
} 

function showSlides(n){
    var i;
    var slides= document.getElementsByClassName("mySlides");
    var dots=document.getElementsByClassName("demo");
    var captionText=document.getElementById("caption");
    if(n > slides.lenght){slideIndex=1}
    if(n < 1 ){slideIndex=slides.length}
    for (i=0;i<slides.length ; i++){
        slides[i].style.display="none";
    }
    for(i=0;i<DOMStringList.length;i++){
        dots[i].className=dots[i].className.replace("ative","");
    }
    slides[slideIndex-1].style.display="block";
    dots[slideIndex-1].className+="active";
    captionText.innerHTML=dots[slideIndex-1].alt;
}

</script>