$(function () {
  'use strict';
  
  // quantity - start
  let qnt_val = $('#qnt').val();
  $('.input_number_decrement').on('click',function(){
      document.getElementById('qnt').value --;
  });

  $('.input_number_increment').on('click',function(){
      document.getElementById('qnt').value ++;
  });


});