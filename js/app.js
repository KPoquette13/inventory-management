var queryURL = "http://vm343a.se.rit.edu:8008/inventory";
var inventoryArray = [];
var logArray = [];

function submitInventory(){
	//parse table

	//build json array

	//call API

}

//clone log row template, update each span, add to table
function updateLogs(){
	$.each(logArray, function(index, value){
		var row = $('#log-template').clone().removeAttr('id').removeClass('hidden').addClass('log-row');

		var rowId = row.find('.logId');
		rowId.text = value.id;

		var rowTransactionId = row.find('.logTransactionId');
		rowTransactionId.text = value.transactionId;

		var rowDescription = row.find('.logDescription');
		rowDescription.text = value.description;

		var rowProductId = row.find('.logProductId');
		rowProductId.text = value.productId;

		var rowAmountChanged = row.find('.logAmountChanged');
		rowAmountChanged.text = value.amountChanged;

		$('#log-table').append(row);
	});
}

//handles building the row objects
function populateLog(result){
	$.each(resultArray, function(index, value){
		var id = value.id;
		var transactionId = value.transactionId;
		var description = value.description;
		var productId = value.productId;
		var amountChanged = value.amountChanged;

		var rowObj = buildInvObject(id, transactionId, description, productId, amountChanged);
		console.log(rowObj);
		logArray.push(rowObj);
	});

}

//makes api call for json array of log rows
function getLogs(){
	var finalURL = queryURL + "/logging";

	var result = $.ajax({
		url: finalURL,
		datatype:'json',
		type:'GET'
	})
	.done(function(result){
		populateLog(result);
		updateLogs();
	});
}

function updateInventory(){
	$.each(inventoryArray, function(index, value){
		var row = $('#inv-template').clone().removeAttr('id').removeClass('hidden').addClass('data-row');

		var rowProduct = row.find('.invProduct');
		rowProduct.text = value.product;

		var rowName = row.find('.invName');
		rowName.text = value.name;

		var rowAmount = row.find('.invAmount');
		rowAmount.text = value.amount;

		var rowBasePrice = row.find('.invBasePrice');
		rowBasePrice.text = value.basePrice;

		var rowBaseCost = row.find('.invBaseCost');
		rowBaseCost.text = value.baseCost;

		$('#inv-table').append(row);
	});
}

//builds inventory row object
function buildInvObject(product, name, amount, basePrice, baseCost){
	console.log('got to buildObj');
	var rowObj = {};
	rowObj.product = product;
	rowObj.name = name;
	rowObj.amount = amount;
	rowObj.basePrice = basePrice;
	rowObj.baseCost = baseCost;

	console.log(rowObj);
	return rowObj;
}

//for each object in array, build row object and put in array to update table
function populateInventory(resultArray){
	console.log('got to PopulateInv');
	$.each(resultArray, function(index, value){
		var product = value.product;
		var name = value.name;
		var amount = value.amount;
		var basePrice = value.basePrice;
		var baseCost = value.baseCost;

		var rowObj = buildInvObject(product, name, amount, basePrice, baseCost);
		console.log(rowObj);
		inventoryArray.push(rowObj);
	});

}

function getFullInventory(){
	console.log('Got to FullInventory');
	var finalURL = queryURL + "/products";

	var result = $.ajax({
		url: finalURL,
		datatype:'json',
		type:'GET'
	})
	.done(function(result){
		console.log(result);
		populateInventory(result);
		updateInventory();
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
	//getFullInventory();

	//Inventory Submission

	//Inventory Table Validation

	//Order Submission

	//Log table population
	//getLogs();
});