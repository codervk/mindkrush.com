var PROMOCODE = 'promocode';
var prices=[12999,22999,39999];
var promoCodes =[{code:'sploffer40',discount:40,expired:false},
				 {code:'happy30',discount:30,expired:false}];

$(function(){

	$('#price1').html(prices[0]);
	$('#price2').html(prices[1]);
	$('#price3').html(prices[2]);
	$('#form1 .price').val(prices[0]);
	$('#form2 .price').val(prices[1]);
	$('#form3 .price').val(prices[2]);


	var discountPrice = function(price,discount){
		var newPrice = price * (100-discount)/100;
		// 99->100->100->99
		// 98->99->50->49
		newPrice +=1;
		newPrice = Math.floor(newPrice/50) * 50;
		newPrice -=1;
		return newPrice;
	}

	var applyPromoCode = function(e){
		e.preventDefault();
		var i;
		var found = false;
		for(i=0;i<promoCodes.length;i++){
			var promoCode = promoCodes[i];
			if($('#promoCode').val().toLowerCase()==promoCode.code){
				found = true;
				if (promoCode.expired) {
					alert("Promo Code Expired");
					return;
				}
				console.log('Valid promo code');
				$('#discount1').html(promoCode.discount);
				$('#discount2').html(promoCode.discount);
				$('#discount3').html(promoCode.discount);
				$('.offerPrice').show();
				$('.regularPrice a').css("text-decoration","line-through");
				$('.regularPrice a').css("color","black");
				$('.regularPrice a').removeClass("btn-default");
				$('.regularPrice a').addClass("btn-warning");

				$('#offerprice1').html(discountPrice(prices[0],promoCode.discount));
				$('#offerprice2').html(discountPrice(prices[1],promoCode.discount));
				$('#offerprice3').html(discountPrice(prices[2],promoCode.discount));

				$('#form1 .price').val(discountPrice(prices[0],promoCode.discount));
				$('#form2 .price').val(discountPrice(prices[1],promoCode.discount));
				$('#form3 .price').val(discountPrice(prices[2],promoCode.discount));
			}
		}
		if (!found) {
			alert("Invalid Promo Code");
		}

	};

	$('#applyPromoCode').click(applyPromoCode);
	$('#promoForm').submit(applyPromoCode);
});
