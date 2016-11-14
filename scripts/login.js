$( document ).ready(function() {
	if( $.cookie('PYA') == undefined ) {
		$('#loginModal').modal({ backdrop: 'static', keyboard: false });
		$( '#loginBTN' ).click(function() {
			if ( $('#loginName').val()=='pedidos' && $('#pass').val() == 'ya' ){
				$.cookie('PYA', 'ok', { expires: 7, path: '/' });
				$('#mainDiv').removeClass('blind')
				$('#loginModal').modal('hide');
			}else{
				$.removeCookie('PYA', { path: '/' });
				location.reload(true);
			}		    
		});
	}else{ $('#mainDiv').removeClass('blind') }
	$( '#logoutBTN' ).click(function() {
		console.log("logout")
		$.removeCookie('PYA', { path: '/' });
		location.reload(true)
	});
});