//with the help ofhttps://www.w3schools.com/howto/howto_js_slideshow_gallery.asp
    const createGalleryElements = (bodyContainer) => {
    bodyContainer.innerHTML = '';
    const mainContainer = document.createElement('div');
    mainContainer.className = 'main-gallery'
    bodyContainer.appendChild(mainContainer);

    //  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    //  <a class="next" onclick="plusSlides(1)">&#10095;</a>
    const prevButton = document.createElement('prev');
    prevButton.className = 'prev'
    prevButton.innerHTML ='&#10094;';
    prevButton.addEventListener('click', function() {plusSlides(1)});
    const nextButton = document.createElement('next');
    nextButton.className = 'next'
    nextButton.innerHTML ='&#10095;';
    nextButton.addEventListener('click', function() {plusSlides(-1)});
    mainContainer.append(prevButton, nextButton);
}
    function createSlides(path, bodyContainer) {
  const galeryContainer = document.createElement('div');
  galeryContainer.className = 'gallery-container';
  const imageEl = document.createElement('img');
  galeryContainer.appendChild(imageEl);
  imageEl.src = path;
  imageEl.style = 'width:100%';
  bodyContainer.appendChild(galeryContainer);
}
    let slideIndex = 1;
    function loadslides (){
    showSlides(slideIndex);
    }
    // Next/previous controls
    function plusSlides(index) {
      showSlides(slideIndex += index);
    }
    
    function showSlides(n) {
      let slides = document.getElementsByClassName('gallery-container');
      if (n > slides.length) {slideIndex = 1} // go back to the first
      if (n < 1) {slideIndex = slides.length} // go to the last
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      console.log(slides)
      slides[slideIndex-1].style.display = "block";
}
export {createGalleryElements, createSlides, showSlides, loadslides, plusSlides, slideIndex}
