$( document ).ready(function() {
   // Меню
   $('.menu__trigger').on('click',function(){
      $('.mobile__menu').toggleClass('mobile__menu-active');
      $(this).toggleClass('close__menu');
   });
	$('.nav__menu-item').on('click',function(){
      $('.mobile__menu').toggleClass('mobile__menu-active');
      $('.menu__trigger').toggleClass('close__menu');
   });
   //Форма
	$(".form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Успешно отправлено!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});
