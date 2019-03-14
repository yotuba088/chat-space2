$(function(){
  function buildHTML(message){
    var insertImage = '';
    if (message.image) {
      insertImage = `<img src="${message.image}">`;
    }
  	var html = `<div class="message" data-message_id = "${message.id}">
      					  <div class="upper-message">
      					    <div class="upper-message__user-name">
      					      ${message.name}
      					    </div>
      					    <div class="upper-message__date">
      					      ${message.time}
      					    </div>
      					  </div>
      					  <div class="lower-message">
      				      <p class="lower-message__content">
      				        ${message.content}
                      ${insertImage}
      				      </p>
      					  </div>
      					</div>`;
  	return html;
  }

  function scroll(){
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var api_url = window.location.pathname;
    $.ajax({
      url: api_url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(message){
      var html = buildHTML(message);
      $('.messages').append(html);
      $('.form__message').val('');
      $('.form__submit').prop('disabled',false);
      scroll();
    })
    .fail(function(message){
      alert('メッセージの送信に失敗しました');
    })
  })

  var interval = setInterval(function(){
    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
      var last_message_id = $('.message:last').data('message_id');
      $.ajax({
        url: location.href.json,
        type: 'GET',
        data: {message: {id: last_message_id}},
        dataType: 'json'
      })

      .done(function(messages){
        if ($.isEmptyObject(messages) == false){
          messages.forEach(function(message){
            var html = buildHTML(message);
            $('.messages').append(html);
          })
          scroll();
        }
      })

      .fail(function(json){
        alert('自動更新に失敗しました');
      });
    }else{
      clearInterval(interval);
    }
  } ,5000);
})



