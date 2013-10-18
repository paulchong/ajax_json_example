$(document).ready(function(){
  $('#get_color').on('click', function(e){
    e.preventDefault();
    console.log('default prevented!');
    $.ajax({
      url: '/color',
      type: 'post',
      dataType: 'json'
      
    }).done(function(result){
      console.log(result);
      $('li').eq(result.cell).css("backgroundColor", result.color);
    });


  });


  // var cell = document.getElementById('color_me');
  // var cell = document.getElementById('cell');
  // console.log("getting element");
  // // cell.style.backgroundColor = "blue";
  // $(#cell).on('click',function(){
    // cell.style.backgroundColor = "blue"});

});