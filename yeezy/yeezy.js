let isBLockOpen = false;
let cartIsOpen = false;
var animTime = 500;
let imgWidth = "550px";
let products = {
	"1": {
		"id": 1,
		"name": "YEEZY BOOST 350 V2 STATIC",
		"color": "REFLECTIVE BLACK",
		"price": 425,
		"img": "1.png",
	},
	"2": {
		"id": 2,
		"name": "YEEZY BOOST 350 V2 'EARTH'",
		"color": 'EARTH',
		"price": 375,
		"img": "2.png",
	},
	"3": {
		"id": 3,
		"name": "YEEZY BOOST 350 V2 'CLAY'",
		"color": 'CLAY',
		"price": 520,
		"img": "3.png",
	},
	"4": {
		"id": 4,
		"name": "YEEZY BOOST 350 V2 'CITRIN'",
		"color": 'CITRIN',
		"price": 295,
		"img": "4.png",
	},
};

let cart = [];

function addToCart(event) {
	var id = event.target.attributes["data-id"].value;
	//console.log(products[id].name);
	cart.push(products[id]);

	renderCart();
}

function removeFromCart(event) {
	var id = event.target.attributes["data-id"].value;

	console.log(id);

	for (var i = cart.length - 1; i >= 0; i--) {
		if(cart[i].id == id){
			cart.splice(i, 1);
			i = -1;
		}
	}

	if($('.inp_price[data-id="' + id + '"]').val() == 1){
		$(".shoppingCart_item" + id).remove();
	}

	renderCart();
}

function deleteItem(event) {
	var id = event.target.attributes["data-id"].value;

	console.log(id);

	for (var i = cart.length - 1; i >= 0; i--) {
		if(cart[i].id == id){
			cart.splice(i, 1);
		}
	}

		$(".shoppingCart_item" + id).remove();

	renderCart();
}

function setGoodsAmount() {
	let goodsAmount = cart.length
	if (goodsAmount > 0) {
		$(".shopping-cart_amount").html(goodsAmount)
	} else {
		$(".shopping-cart_amount").html("")
	}
}

function countTotalDue() {
	let totalDue = 0;
	for (var i = 0; i <= cart.length - 1; i++) {
		totalDue = totalDue + cart[i].price;
	}

	return totalDue;
}

function getStackedCartItems() {
	var groupBy = function(xs, key) {
	  return xs.reduce(function(rv, x) {
	    (rv[x[key]] = rv[x[key]] || []).push(x);
	    return rv;
	  }, {});
	};

	return groupBy(cart, 'id');
}

function prettify (num) {
    var n = num.toString();
    var separator = ",";
    return n.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + separator);
}

function renderCart(){
	console.log(cart);

	setGoodsAmount();

	if (cart.length>0) {
		$(".shopping-cart-img").css("display","none")
		$(".body__shoppingCart-text").css("display","none")
		$('.cart-container_total-due').css("display", "block");
		$('#cart-container_checkout-button').css("display", "block");
		$('#cart-container_shopping-cart-button').css("display", "block");
	} else {
		$(".shopping-cart-img").css("display","")
		$(".body__shoppingCart-text").css("display","block")
		$('.cart-container_total-due').css("display", "none");
		$('#cart-container_checkout-button').css("display", "none");
		$('#cart-container_shopping-cart-button').css("display", "none");
	}
	
	let stackedItem = getStackedCartItems();

	_.map(stackedItem, function (value, id) {
		let product = products[id];
		let div = $('<div/>', {
			"class": "shoppingCart_item" + product.id
		});
		if($('.inp_price[data-id="' + id + '"]').length === 0){
			div.append("<img src='" + product.img + "' class='selected-item-img'/>")
			div.append("<p class='selected-item-text'>" + product.name + "</p>");
			div
			.append("<div class='count_box'> <div class='plus' data-id='" + product.id + "'><img src='plus.png' ></div><input class='inp_price' data-id='" + product.id + "' type='text' value='" + value.length + "'><div class='minus' data-id='" + product.id + "'><img src='minus.png'></div></div>");
			div.append("<p class='cart-container_price'>$"+ product.price + "</p>") 
			div.append("<button class='delete-item' data-id='" + product.id + "'><img src='delete.png'></button>")
			$('.cart-container').append(div);
			$('.plus').click(addToCart);
			$('.minus').click(removeFromCart); 
			$(".delete-item").click(deleteItem);
		} else {
			$('.inp_price[data-id="' + id + '"]').val(value.length);
		}
	});
	
	console.log(stackedItem, $('.inp_price'));

	let totalDue = countTotalDue();
	$('.totalDue').html(prettify(totalDue));
}

$('.addToCard').click(addToCart);

function homePosition() {
	if(isBLockOpen === false){
		$( ".img-block-1" ).css( "width", "" )
		$( ".img-block-2" ).css( "width", "" )
		$( ".img-block-3" ).css( "width", "" )
		$( ".img-block-4" ).css( "width", "" )
		$( ".img-block-1" ).css( "top", "" )
		$( ".img-block-2" ).css( "top", "" )
		$( ".img-block-3" ).css( "top", "" )
		$( ".img-block-4" ).css( "top", "" )
		$( ".yeezy-block-1" ).css( "left", "" )
		$( ".yeezy-block-2" ).css( "left", "" )
		$( ".yeezy-block-3" ).css( "left", "" )
		$( ".yeezy-block-4" ).css( "left", "" );
			$( "#nameOfBoots-onHover1" ).css( "left", "" )
			$( "#nameOfBoots-onHover1" ).css( "opacity", "" )
			$( "#nameOfBoots-onHover2" ).css( "left", "" )
			$( "#nameOfBoots-onHover2" ).css( "opacity", "" )
			$( "#nameOfBoots-onHover3" ).css( "left", "" )
			$( "#nameOfBoots-onHover3" ).css( "opacity", "" )
			$( "#nameOfBoots-onHover4" ).css( "left", "" )
			$( "#nameOfBoots-onHover4" ).css( "opacity", "" )
	}
}

function startPage() {
	$( ".img-block-1" ).css( "width", "" )
	$( ".img-block-2" ).css( "width", "" )
	$( ".img-block-3" ).css( "width", "" )
	$( ".img-block-4" ).css( "width", "" )
		$( ".yeezy-block-1" ).css( "left", "0px" )
		$( ".yeezy-block-2" ).css( "left", "" )
		$( ".yeezy-block-3" ).css( "left", "" )
		$( ".yeezy-block-4" ).css( "left", "" )
	$( ".yeezy-block-1" ).css( "display", "" )
	$( ".yeezy-block-2" ).css( "display", "" )
	$( ".yeezy-block-3" ).css( "display", "" )
	$( ".yeezy-block-4" ).css( "display", "" )
		$( ".img-block-1" ).css( "left", "" )
		$( ".img-block-1" ).css( "top", "" )
		$( ".img-block-2" ).css( "left", "" )
		$( ".img-block-2" ).css( "top", "" )
		$( ".img-block-3" ).css( "left", "" )
		$( ".img-block-3" ).css( "top", "" )
		$( ".img-block-4" ).css( "left", "" )
		$( ".img-block-4" ).css( "top", "" )
	$( ".yeezy-block-1" ).css( "pointer-events", "" )
	$( ".yeezy-block-2" ).css( "pointer-events", "" )
	$( ".yeezy-block-3" ).css( "pointer-events", "" )
	$( ".yeezy-block-4" ).css( "pointer-events", "" )
		$( ".yeezy-block-1-description" ).css( "display", "" )
		$( ".yeezy-block-2-description" ).css( "display", "" )
		$( ".yeezy-block-3-description" ).css( "display", "" )
		$( ".yeezy-block-4-description" ).css( "display", "" )
	$( ".yeezy-block-1" ).css( "z-index", "" )
	$( ".yeezy-block-2" ).css( "z-index", "" )
	$( ".yeezy-block-3" ).css( "z-index", "" )
	$( ".yeezy-block-4" ).css( "z-index", "" )
		$( "#button_back" ).css( "margin-left", "" )
		$( ".nameOfPage" ).css( "margin-left", "" )
		$(".body__checkout").css("left", "-50%")
		$(".body__result").css("left", "150%")
		$( ".yeezy-block-1-description" ).css( "left", "" )
		$( ".yeezy-block-2-description" ).css( "left", "" )
		$( ".yeezy-block-3-description" ).css( "left", "" )
		$( ".yeezy-block-4-description" ).css( "left", "" )
}

$( ".yeezy-block-1" ).hover(
	function(){ 
		if(isBLockOpen === false){	
			$( ".img-block-1" ).css( "width", imgWidth )
			$( ".img-block-1" ).css( "top", "60px" )
			$( ".img-block-2" ).css( "width", "" )
			$( ".img-block-3" ).css( "width", "" )
			$( ".img-block-4" ).css( "width", "" )
			$( ".yeezy-block-2" ).css( "left", "42%" )
			$( ".yeezy-block-3" ).css( "left", "60%" )
			$( ".yeezy-block-4" ).css( "left", "80%" );
			$( "#nameOfBoots-onHover1" ).css( "left", "50px" )
			$( "#nameOfBoots-onHover1" ).css( "opacity", "0.9" )

			
		}
	}, homePosition);

$( ".yeezy-block-2" ).hover(function(){
	if(isBLockOpen === false){
		$( ".img-block-1" ).css( "width", "" )
		$( ".img-block-2" ).css( "width", imgWidth )
		$( ".img-block-2" ).css( "top", "60px" )
		$( ".img-block-3" ).css( "width", "" )
		$( ".img-block-4" ).css( "width", "" )
		$( ".yeezy-block-2" ).css( "left", "20%" )
		$( ".yeezy-block-3" ).css( "left", "62%" )
		$( ".yeezy-block-4" ).css( "left", "82%" )
			$( "#nameOfBoots-onHover2" ).css( "left", "50px" )
			$( "#nameOfBoots-onHover2" ).css( "opacity", "0.9" )
	}
}, homePosition);

$( ".yeezy-block-3" ).hover(function(){ 	
	if(isBLockOpen === false){
		$( ".img-block-1" ).css( "width", "" )
		$( ".img-block-2" ).css( "width", "" )
		$( ".img-block-3" ).css( "width", imgWidth )
		$( ".img-block-3" ).css( "top", "60px" )
		$( ".img-block-4" ).css( "width", "" )
		$( ".yeezy-block-2" ).css( "left", "20%" )
		$( ".yeezy-block-3" ).css( "left", "40%" )
		$( ".yeezy-block-4" ).css( "left", "82%" )
		$( "#nameOfBoots-onHover3" ).css( "left", "50px" )
		$( "#nameOfBoots-onHover3" ).css( "opacity", "0.9" )
	}
}, homePosition);

$( ".yeezy-block-4" ).hover(function(){ 
	if(isBLockOpen === false){
		$( ".img-block-1" ).css( "width", "" )
		$( ".img-block-2" ).css( "width", "" )
		$( ".img-block-3" ).css( "width", "" )	
		$( ".img-block-4" ).css( "width", imgWidth )
		$( ".img-block-4" ).css( "top", "60px" )
		$( ".yeezy-block-2" ).css( "left", "18%" )
		$( ".yeezy-block-3" ).css( "left", "38%" )
		$( ".yeezy-block-4" ).css( "left", "58%" )
		$( "#nameOfBoots-onHover4" ).css( "left", "50px" )
		$( "#nameOfBoots-onHover4" ).css( "opacity", "0.9" )
	}
}, homePosition);

$("#button_back").click(function(){
	startPage();
	isBLockOpen = false;
});

$( ".yeezy-block-1" ).click(function(){
	isBLockOpen = true;
		$( ".yeezy-block-2" ).css( "left", "100%" )
		$( ".yeezy-block-3" ).css( "left", "100%" )
		$( ".yeezy-block-4" ).css( "left", "100%" )
		$( "body" ).css( "background-color", "#0f0f12" )
		$( ".img-block-1" ).css( "left", "80px" )
		$( ".img-block-1" ).css( "top", "80px" )
		$( ".yeezy-block-2" ).css( "pointer-events", "none" )
		$( ".yeezy-block-3" ).css( "pointer-events", "none" )
		$( ".yeezy-block-4" ).css( "pointer-events", "none" )
		$( ".yeezy-block-1-description" ).css( "display", "block" )
		$( ".yeezy-block-1-description" ).css( "color", "white" )
		$( ".nameOfPage" ).css( "margin-left", "-200px" )
		$( "#button_back" ).css( "margin-left", "0px" )
		$( "#nameOfBoots-onHover1" ).css( "left", "" )
		$( "#nameOfBoots-onHover1" ).css( "opacity", "" )
});

$( ".yeezy-block-2" ).click(function(){
		isBLockOpen = true;
		$( ".yeezy-block-3" ).css( "left", "100%" )
		$( ".yeezy-block-4" ).css( "left", "100%" )
		$( "body" ).css( "background-color", "#3b3027" )
		$( ".yeezy-block-2" ).css( "z-index", "999" )
		$( ".yeezy-block-2" ).css( "left", "0" )
		$( ".img-block-2" ).css( "left", "80px" )
		$( ".img-block-2" ).css( "top", "80px" )
		$( ".yeezy-block-1" ).css( "pointer-events", "none" )
		$( ".yeezy-block-2-description" ).css( "display", "block" )
		$( ".yeezy-block-2-description" ).css( "color", "#f5eee7" )
		$( ".nameOfPage" ).css( "margin-left", "-200px" )
		$( "#button_back" ).css( "margin-left", "0px" )
		$( "#nameOfBoots-onHover2" ).css( "left", "" )
		$( "#nameOfBoots-onHover2" ).css( "opacity", "" )
});

$( ".yeezy-block-3" ).click(function(){
		isBLockOpen = true;
		$( ".yeezy-block-1" ).css( "left", "0%" )
		$( ".yeezy-block-2" ).css( "left", "0%" )
		$( ".yeezy-block-3" ).css( "left", "0%" )
		$( ".yeezy-block-4" ).css( "display", "none" )
		$( "body" ).css( "background-color", "#9e7b62" )
		$( ".yeezy-block-3" ).css( "z-index", "999" )
		$( ".img-block-3" ).css( "left", "80px" )
		$( ".img-block-3" ).css( "top", "80px" )
		$( ".yeezy-block-3-description" ).css( "display", "block" )
		$( ".yeezy-block-3-description" ).css( "color", "#fdf5ee" )
		$( ".nameOfPage" ).css( "margin-left", "-200px" )
		$( "#button_back" ).css( "margin-left", "0px" )
		$( "#nameOfBoots-onHover3" ).css( "left", "" )
		$( "#nameOfBoots-onHover3" ).css( "opacity", "" )
});

$( ".yeezy-block-4" ).click(function(){
		isBLockOpen = true;
		$( ".yeezy-block-1" ).css( "left", "0%" )
		$( ".yeezy-block-2" ).css( "left", "0%" )
		$( ".yeezy-block-3" ).css( "left", "0%" )
		$( ".yeezy-block-4" ).css( "left", "0%" )
		$( "body" ).css( "background-color", "#bfb8a6" )
		$( ".yeezy-block-4" ).css( "z-index", "1999" )
		$( ".img-block-4" ).css( "left", "80px" )
		$( ".img-block-4" ).css( "top", "80px" )
		$( ".yeezy-block-4-description" ).css( "display", "block" )
		$( ".nameOfPage" ).css( "margin-left", "-200px" )
		$( "#button_back" ).css( "margin-left", "0px" )
		$( "#nameOfBoots-onHover4" ).css( "left", "" )
		$( "#nameOfBoots-onHover4" ).css( "opacity", "" )
});

$("#shopping-cart-button").click(function(){
	$( ".body__shoppingCart" )
		.css( "display", "block" )
	$( "#shopping-cart-button" )
		.css( "display", "none" )
});

$("#body__shoppingCart-close").click(function(){
	if(cartIsOpen === false){
		$( ".body__shoppingCart" ).css( "display", "none" )
		$( "#shopping-cart-button" ).css( "display", "" )
	} else {
		startPage()
		$( ".body__shoppingCart" ).css( "display", "none" )
		$( "#shopping-cart-button" ).css( "display", "" )
		$(".body__shoppingCart").css("width", "")
				.css("left", "")
				.css("margin-left", "")
				.css("top", "")
		isBLockOpen = false;
		$("#cart-container_shopping-cart-button").css("display", "block")
			$(".selected-item-img").css("width", "")
			$(".selected-item-text").css("font-size", "")
									.css("vertical-align", "")							
			$(".cart-container_price").css("font-size", "")
									.css("float", "")
									.css("vertical-align", "")
									.css("margin-left", "")
			$(".delete-item").css("display", "")
	};
});


function animEnd(img) {
	img.remove();
}


$(".addToCard").click(function(event){
	let currentId = event.target.dataset.id;
	let cloned_img = $( ".img-block-" + currentId )
		.clone()
		.addClass("img-cloned")
		.appendTo("body")
	cloned_img.css("z-index", "1000")
	cloned_img.animate({
		width: "50px",
		top: "3%",
		left: "94%",
		opacity: 0.25,
	})

	setTimeout(function() { animEnd(cloned_img); }, 1400);
	setTimeout(function() { $( ".shopping-cart_amount" )
		.css( "display", "block" ); }, 1400);
});

$("#cart-container_checkout-button").click(function(){
	$( ".body__shoppingCart" ).css( "display", "" )
		$( "#shopping-cart-button" ).css( "display", "" )
	$(".body__checkout").css("left", "50%")
	$( ".yeezy-block-1" ).css( "left", "150%" )
	$( ".yeezy-block-1-description" ).css( "left", "150%" )
		$( ".yeezy-block-2" ).css( "left", "150%" )
	$( ".yeezy-block-2-description" ).css( "left", "150%" )
		$( ".yeezy-block-3" ).css( "left", "150%" )
	$( ".yeezy-block-3-description" ).css( "left", "150%" )
		$( ".yeezy-block-4" ).css( "left", "150%" )
	$( ".yeezy-block-4-description" ).css( "left", "150%" )
	$(".plus").css("display", "none")
	$(".minus").css("display", "none")
	$( ".yeezy-block-1" ).css( "pointer-events", "none" )
	$( ".yeezy-block-2" ).css( "pointer-events", "none" )
	$( ".yeezy-block-3" ).css( "pointer-events", "none" )
	$( ".yeezy-block-4" ).css( "pointer-events", "none" )
});

$("#cart-container_shopping-cart-button").click(function(){
	cartIsOpen = true;
	$(".body__shoppingCart").css("width", "60%")
			.css("left", "50%")
			.css("margin-left", "-30%")
			.css("top", "100px") 
	$(".selected-item-img").css("width", "100px")
	$(".selected-item-text").css("font-size", "16px")
							.css("vertical-align", "super")							
	$(".cart-container_price").css("font-size", "17px")
							.css("float", "unset")
							.css("vertical-align", "super")
							.css("margin-right", "10%")
	$(".delete-item").css("display", "block")
	$("#cart-container_shopping-cart-button").css("display", "none")
	$( ".yeezy-block-1" ).css( "left", "150%" )
	$( ".yeezy-block-1-description" ).css( "left", "150%" )
		$( ".yeezy-block-2" ).css( "left", "150%" )
	$( ".yeezy-block-2-description" ).css( "left", "150%" )
		$( ".yeezy-block-3" ).css( "left", "150%" )
	$( ".yeezy-block-3-description" ).css( "left", "150%" )
		$( ".yeezy-block-4" ).css( "left", "150%" )
	$( ".yeezy-block-4-description" ).css( "left", "150%" )
});

$(".body__block-close").click(function(){
	startPage();
	isBLockOpen = false;
});

$("#body__checkout-header-login").click(function(){
	$(".body__checkout").css("left", "-50%")
	$(".body__result").css("left", "50%")
});

$("#body__order-summary-button").click(function(){
	$(".body__checkout").css("left", "-50%")
	$(".body__result").css("left", "50%")
});