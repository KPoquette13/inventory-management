$(document).ready(function () {
	$CURRENTPAGE = $('#inventory-container');
	$ACTIVEBUTTON =$('#inv-button');

	$('#inv-button').click(function() {
		if(!($(this).hasClass('active-button'))){
			$CURRENTPAGE.addClass('hidden');
			$ACTIVEBUTTON.removeClass('active-button');
			$('#inventory-container').removeClass('hidden');
			$CURRENTPAGE = $('#inventory-container');
			$('#inv-button').addClass('active-button');
			$ACTIVEBUTTON = $('#inv-button');
		}
	});

	$('#log-button').click(function() {
		if(!($(this).hasClass('active-button'))){
			$CURRENTPAGE.addClass('hidden');
			$ACTIVEBUTTON.removeClass('active-button');
			$('#log-container').removeClass('hidden');
			$('#log-button').addClass
			$CURRENTPAGE = $('#log-container');
			$('#log-button').addClass('active-button');
			$ACTIVEBUTTON = $('#log-button');
		}
	});

	$('#order-button').click(function() {
		if(!($(this).hasClass('active-button'))){
			$CURRENTPAGE.addClass('hidden');
			$ACTIVEBUTTON.removeClass('active-button');
			$('#order-container').removeClass('hidden');
			$CURRENTPAGE = $('#order-container');
			$('#order-button').addClass('active-button');
			$ACTIVEBUTTON = $('#order-button');
		}
	});



});