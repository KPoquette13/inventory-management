var queryURL = "vm343a.se.rit.edu/inventory"; //Is this right?

function submitInventory(){
	//parse table

	//build json array

	//call API

}

function populateLog(result){


}

function getLogs(){
	var finalURL = queryURL + "/logging/all";

	var result = $.ajax({
		url: finalURL,
		datatype:'json',
		type:'GET'
	})
	.done(function(result){
		populateLog(result);
	});
}

function populateInventory(result){
	//Need to see format of data
}

function getFullInventory(){
	var finalURL = queryURL + "/all";

	var result = $.ajax({
		url: finalURL,
		datatype:'json',
		type:'GET'
	})
	.done(function(result){
		populateInventory(result);
	});
}


$(document).ready(function () {
	var $CURRENTPAGE = $('#inventory-container');
	var $ACTIVEBUTTON =$('#inv-button');

	// Nav Button Functionality
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

	//Inventory Table Population


	//Inventory Submission


	//Inventory Table Validation


	//Order Submission


	//Build Inventory Object


	//Log table population

});