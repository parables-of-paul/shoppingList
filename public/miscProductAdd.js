$(document).ready(function(){
  var setCatObj = sessionStorage.getItem("categoryDrop");
  console.log(setCatObj + ' this proves that the session storage is fine');
  var client34 = $("#listchooser option:selected");
  $(`.listChooser3000 option:eq(${setCatObj}.)`).prop('selected', true)
  console.log('this is the index of the selected drop down ' + client34.index())


  $('.listProductsHeader').on('click', function(){
    var miscClick = 0;
    $(`.listChooser3000 option:eq(${miscClick}.)`).prop('selected', true)
    window.scrollTo(0, 0);
  });

  $('.bathListProductsHeader').on('click', function(){
    var bathClick = 1;
    $(`.listChooser3000 option:eq(${bathClick}.)`).prop('selected', true)
    window.scrollTo(0, 0);
  });

  $('.fruitListProductsHeader').on('click', function(){
    var fruitClick = 2;
    $(`.listChooser3000 option:eq(${fruitClick}.)`).prop('selected', true)
    window.scrollTo(0, 0);
  });

  $('.fridgeListProductsHeader').on('click', function(){
    var fridgeClick = 3;
    $(`.listChooser3000 option:eq(${fridgeClick}.)`).prop('selected', true)
    window.scrollTo(0, 0);
  });

  $('.freezerListProductsHeader').on('click', function(){
    var freezeClick = 4;
    $(`.listChooser3000 option:eq(${freezeClick}.)`).prop('selected', true)
    window.scrollTo(0, 0);
  });

  $('.bakingListProductsHeader').on('click', function(){
    var bakeClick = 5;
    $(`.listChooser3000 option:eq(${bakeClick}.)`).prop('selected', true)
    window.scrollTo(0, 0);
  });
  
   $('form').on('submit', function(){
  var productName = $('form input');
   var client34 = $("#listchooser option:selected");
   var dataMisc = {product: productName.val(), category: client34.val()};
   var selectedCat = client34.index();
   console.log(selectedCat);
   var setCat = sessionStorage.setItem("categoryDrop", selectedCat);

           $.ajax({
            type: 'POST',
            url: '/',
            data: dataMisc,
            success: function(){
              //do something with the data via front-end framework
              location.reload();
            } 
              });
          
          
          
            });



  
  //JQuery & AJAX for Misc list products
    $('.listProducts').on('click', function(){
      if (confirm("Are you sure you want to delete '" + $(this).text() + " from the Misc. List?")) {
        var dasher = $(this).text().replace(/-/g, "dash").replace(/ /g, "-").replace(/\?/g, "qMark").replace(/\#/g, "hashMark").replace(/\%/g, "percentMark").replace(/\&/g, "ampersandMark").replace(/\./g, "periodMark").replace(/\//g, "fwdSlash").replace(/\\/g, "backSlash");
        var list = 'misc';
        var fullUrl = {dasher: dasher, catList: list};
        $.ajax({
          type: 'DELETE',
          url: '/' + dasher,
          data: fullUrl,
          success: function(){
            //do something with the data via front-end framework
            location.reload();
            console.log(fullUrl);
          }
        });
      } else {
        location.reload();
      }
  });

//JQuery & AJAX for Fruit & Veg list products
    $('.fruitListProducts').on('click', function(){
      if (confirm("Are you sure you want to delete '" + $(this).text() + "'from the Fruit List?")) {
        var dasher = $(this).text().replace(/-/g, "dash").replace(/ /g, "-").replace(/\?/g, "qMark").replace(/\#/g, "hashMark").replace(/\%/g, "percentMark").replace(/\&/g, "ampersandMark").replace(/\./g, "periodMark").replace(/\//g, "fwdSlash").replace(/\\/g, "backSlash");
        var list = 'fruit';
        var fullUrl = {dasher: dasher, catList: list};
        $.ajax({
          type: 'DELETE',
          url: '/' + dasher,
          data: fullUrl,
          success: function(){
            //do something with the data via front-end framework
            
            location.reload();
          }
        });
      } else {
        location.reload();
        
      }
  });


  //JQuery & AJAX for Fridge list products
  $('.fridgeListProducts').on('click', function(){
    if (confirm("Are you sure you want to delete '" + $(this).text() + "' from the Fridge List?")) {
      var dasher = $(this).text().replace(/-/g, "dash").replace(/ /g, "-").replace(/\?/g, "qMark").replace(/\#/g, "hashMark").replace(/\%/g, "percentMark").replace(/\&/g, "ampersandMark").replace(/\./g, "periodMark").replace(/\//g, "fwdSlash").replace(/\\/g, "backSlash");
      var list = 'fridge';
      var fullUrl = {dasher: dasher, catList: list};
      $.ajax({
        type: 'DELETE',
        url: '/' + dasher,
        data: fullUrl,
        success: function(){
          //do something with the data via front-end framework
          location.reload();
        }
      });
    } else {
      location.reload();
    }
});



//JQuery & AJAX for Freezer list products
$('.freezerListProducts').on('click', function(){
  if (confirm("Are you sure you want to delete '" + $(this).text() + "'from the Freezer List?")) {
    var dasher = $(this).text().replace(/-/g, "dash").replace(/ /g, "-").replace(/\?/g, "qMark").replace(/\#/g, "hashMark").replace(/\%/g, "percentMark").replace(/\&/g, "ampersandMark").replace(/\./g, "periodMark").replace(/\//g, "fwdSlash").replace(/\\/g, "backSlash");
    var list = 'freezer';
        var fullUrl = {dasher: dasher, catList: list};
    $.ajax({
      type: 'DELETE',
      url: '/' + dasher,
      data: fullUrl,
      success: function(){
        //do something with the data via front-end framework
        location.reload();
      }
    });
  } else {
    location.reload();
  }
});
//JQuery & AJAX for baking list products
$('.bakingListProducts').on('click', function(){
  if (confirm("Are you sure you want to delete '" + $(this).text() + "' from the Baking List?")) {
    var dasher = $(this).text().replace(/-/g, "dash").replace(/ /g, "-").replace(/\?/g, "qMark").replace(/\#/g, "hashMark").replace(/\%/g, "percentMark").replace(/\&/g, "ampersandMark").replace(/\./g, "periodMark").replace(/\//g, "fwdSlash").replace(/\\/g, "backSlash");
    var list = 'Baking';
        var fullUrl = {dasher: dasher, catList: list};
    $.ajax({
      type: 'DELETE',
      url: '/' + dasher,
      data: fullUrl,
      success: function(){
        //do something with the data via front-end framework
        location.reload();
      }
    });
  } else {
    location.reload();
  }
});

//JQuery & AJAX for Bathroom list products
$('.bathListProducts').on('click', function(){
  if (confirm("Are you sure you want to delete '" + $(this).text() + "' from the Bathroom List?")) {
    var dasher = $(this).text().replace(/-/g, "dash").replace(/ /g, "-").replace(/\?/g, "qMark").replace(/\#/g, "hashMark").replace(/\%/g, "percentMark").replace(/\&/g, "ampersandMark").replace(/\./g, "periodMark").replace(/\//g, "fwdSlash").replace(/\\/g, "backSlash");
    var list = 'Bathroom';
        var fullUrl = {dasher: dasher, catList: list};
    $.ajax({
      type: 'DELETE',
      url: '/' + dasher,
      data: fullUrl,
      success: function(){
        //do something with the data via front-end framework
        location.reload();
      }
    });
  } else {
    location.reload();
  }
});

  });
  