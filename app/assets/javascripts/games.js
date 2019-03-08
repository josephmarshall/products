// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var currentGame = {};


$(document).ready( function() {
  $('.game-name').on('click', function() {
    currentGame.id = this.dataset.id
    $.ajax({
      url: '/games/' + currentGame.id + '/characters',
      method: 'GET',
      dataType: 'JSON'
    }).done( function(characters) {
      var list = $('#characters');
      list.empty();
      characters.forEach( function(char) {
        var li = '<li data-character-id="' + char.id + '">' + char.name + '-' + char.superpower + '</li>'
        list.append(li)
      });
    });
  });

$('#new-game-button').on('click', function(){
  $.ajax({
    url: '/games/new',
    method: 'POST',
    datatype: 'JSON'
  }).done( function(form) {
    $("#games-list").html(form)
  })
})

// $(document).on('submit', '#new-game-form form', function(e) {
//   e.preventDefault();
//   var data = $(this).serializeArray();

});