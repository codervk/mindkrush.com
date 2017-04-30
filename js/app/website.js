var PROMOCODE = 'promocode';

$(function(){
	var applyPromoCode = function(e){
		e.preventDefault();
		if($('#promoCode').val().toLowerCase()==PROMOCODE){
			console.log('Valid promo code');
			$('.offerPrice').show();
			$('.regularPrice a').css("text-decoration","line-through");
			$('form .price').each(function(i,e){
				if($(e).val()=='12999')
					$(e).val('7799');
				if($(e).val()=='22999')
					$(e).val('13799');
				if($(e).val()=='39999')
					$(e).val('23999');
			});
		} else {
			alert("Invalid Promo Code");
		}
	};

	$('#applyPromoCode').click(applyPromoCode);
	$('#promoForm').submit(applyPromoCode);
});