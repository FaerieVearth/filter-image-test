new hoverEffect({
    parent: document.querySelector('.distortion'),
    intesity: 0.3,
    image1: 'https://live.staticflickr.com/65535/51761786269_a8c3419448_k.jpg',
    image2: 'https://live.staticflickr.com/65535/51761375468_c8d2dafb3c_k.jpg',
    speedIn: 0.8,
    speedOut: 1,
    angle: Math.PI / 8,
    imagesRatio: 5 / 4,
    displacementImage: './img/heightMap.png'
})
/* 
var $grid = $('.grid').isotope({
    layoutMode: 'fir-rows'
  }) */

  $('.grid').isotope({
    // set itemSelector so .grid-sizer is not used in layout
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // set to the element
      columnWidth: '.grid-sizer'
    }
  })