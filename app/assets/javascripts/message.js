$(function(){
  function buildHTML(message){
    var insertImage = '';
    if (message.image) {
      insertImage = `<img src="${message.image}">`;
    }
  	var html = `<div class="message">
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
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    console.log('fire');
    var formData = new FormData(this);
    var api_url = window.location.pathname;
    console.log(formData);
    console.log(api_url);
    $.ajax({
      url: api_url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false,
    })
    .done(function(message){
        console.log('success');
        console.log(message);
        var html = buildHTML(message);
        $('.messages').append(html);
        $('.form__message').val('');
        $('.form__submit').prop('disabled',false);
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(message){
    	console.log('error');
    })
  })
})
