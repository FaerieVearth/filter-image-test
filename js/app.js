new hoverEffect({
    parent: document.querySelector('.distortion'),
    intesity: 0.3,
    image1: './img/janrozman1.jpg',
    image2: './img/janrozman2.jpg',
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