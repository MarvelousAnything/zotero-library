function placeOrder(tickerid,scId,source,stkname)
{
	if(stkname == undefined){
		stkname = 'NA';
	}
	var pageUrl = $(location).attr("href");
	var domainName = get_hostname(pageUrl);
	var user_id=getCookie('nnmc');
	
	/* if (user_id == "" || user_id == null || user_id == 'null' || user_id == undefined) {	
		if(source == 'S'){
			ga('send', 'event', 'Trade Not LoggedIn', 'Stock Quote', ''+stkname+'');
		}else if(source == 'A'){
			ga('send', 'event', 'Trade Not LoggedIn', 'Articles',''+stkname+'');
		}else if(source == 'W'){
			ga('send', 'event', 'Trade Not LoggedIn', 'Watchlist',''+stkname+'');
		}
		$("#ifval").val("490px");
		$("#myframe").attr('src','https://stgaccounts.moneycontrol.com/mclogin/?d=2&redirect=sc');
		$("#LoginModal").modal();
	} else { */
		let searchParams = new URLSearchParams(window.location.search)
		if(searchParams.has('sc')){
			let param = searchParams.get('sc');
			if(param == 'true'){
				if(source == 'S'){
					ga('send', 'event', 'Trade Force Login', 'Stock Quote', ''+stkname+'');
				}else if(source == 'A'){
					ga('send', 'event', 'Trade Force Login', 'Articles',''+stkname+'');
				}else if(source == 'W'){
					ga('send', 'event', 'Trade Force Login', 'Watchlist',''+stkname+'');
				}
				var url = window.location.origin + window.location.pathname;
				var title = $(document).prop('title'); 
				history.replaceState(null,title,url);
			}
		}else{
			if(source == 'S'){
				ga('send', 'event', 'Trade', 'Stock Quote', ''+stkname+'');
			}else if(source == 'A'){
				ga('send', 'event', 'Trade', 'Articles',''+stkname+'');
			}else if(source == 'W'){
				ga('send', 'event', 'Trade', 'Watchlist',''+stkname+'');
			}
		}		
		if($("#tradepop").length){
			$("#tradepop").remove();
		}
		var modalHtml ='<div class="modal fade" id="tradepop" role="dialog" data-backdrop="static" data-keyboard="false" style=" /*display: block; opacity: 1; */ "></div>';
		$(modalHtml).appendTo(document.body);
		$.ajax({
			type: "POST",
			url: "https://www.moneycontrol.com/mc/smallcase?classic=true" ,
			data: { 'ticker': encodeURIComponent(tickerid) , 'env' : 'prod'},
			dataType: "json",			
			success : function(res) {
				const scGateway = new scDK({
					gateway: 'moneycontrol',
                    smallcaseAuthToken: res.smallcaseAuthId,
                    config: {
                        amo : true
                    }
				});  
				if(source == 'S'){
					ga('send', 'event', 'Trade ID', 'Stock Quote',res.connectTxnId);
				}else if(source == 'A'){
					ga('send', 'event', 'Trade ID', 'Articles',res.connectTxnId);
				}else if(source == 'W'){
					ga('send', 'event', 'Trade ID', 'Watchlist',res.connectTxnId);
				}
				
				var transactionId = res.connectTxnId;
				var response = scGateway.triggerTransaction({
					transactionId,
				}).then(function(e) {
					e.scId = scId;
					getUserAccountsForSmallCase(e);
					//getMarketClosedMsg(tickerid);
					console.log("Order Response", JSON.stringify(e));
					console.log("buyAmount", e.orderBatches[0].buyAmount);
					console.log("tradingsymbol", e.orderBatches[0].orders[0].tradingsymbol);
					console.log("transactionType", e.orderBatches[0].orders[0].transactionType);
					console.log("exchange", e.orderBatches[0].orders[0].exchange);
					console.log("status", e.orderBatches[0].status);
				}).catch((err) => {
					var msg = err.message;
					if(source == 'S'){
						ga('send', 'event', 'Smallcase Failure', 'Stock Quote',''+msg+'');
					}else if(source == 'A'){
						ga('send', 'event', 'Smallcase Failure', 'Articles',''+msg+'');
					}else if(source == 'W'){
						ga('send', 'event', 'Smallcase Failure', 'Watchlist',''+msg+'');
					}
					//getTransactionExpiredMsg(tickerid);
					if(msg == 'market_closed'){
						getMarketClosedMsg(tickerid);
					}else if(msg == 'internal_error'){
						getInternalErrorMsg(tickerid);
					}else if(msg == 'transaction_expired'){
						getTransactionExpiredMsg(tickerid);
					}
				})
			}
		});
	//}
}

function getUserAccountsForSmallCase(smallcaseData){
	var pageUrl = $(location).attr("href");
	var domainName = get_hostname(pageUrl);
	smallcaseData.normalToken = getCookie('token-normal'); 
	$.ajax({
		type: "POST",
		url: "https://www.moneycontrol.com/mc/smallcase/userAccountsV2?classic=true" ,
		data: JSON.stringify(smallcaseData),
		dataType: "html",
		contentType: "application/json",
		success : function(result) {
			$("#tradepop").html(result).modal('show');
		}
	});
}

function get_hostname(url) {
    var m = url.match(/^http:\/\/[^/]+/);
    return m ? m[0] : null;
}

$(document).ready(function(){
	let searchParams = new URLSearchParams(window.location.search)
	if(searchParams.has('sc')){
		let param = searchParams.get('sc');
		if(param == 'true'){
			$(".trd_btn").trigger( "click" );
		}
	}
});

function getMarketClosedMsg(tickerid){
	var html = '';
	html += '<div class="modal-dialog">';
	html += '<div class="modal-content">';
	html += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
	html += '<div class="modal-body">';
	html += '<div class="trd_head"><figure><img src="https://images.moneycontrol.com/images/common/mc_icon_logo_50x50.png" alt=""></figure>Market Closed</div>';
	html += '<div class="MT15">'
	html += '<table width="100%" cellpadding="0" cellspacing="0" border="0">';
	html += '<thead>';
	html += '<tr>';
	html += '<th width="60%">Trading Symbol</th>';
	html += '<th>Status</th>';
	html += '</tr>';
	html += '</thead>';
	html += '<tbody>';
	html += '<tr>';
	html += '<td>'+tickerid+'</td>';
	html += '<td>';
	html += '<span class="trdcomplete canceled">';
	html += '<strong>&times;</strong>';
	html += 'Cancelled';
	html += '</span>';
	html += '</td>';
	html += '</tr>';
	html += '</tbody>';
	html += '</table>';
	html += '</div>';
	html += '<div class="selec_actoad">';
	html += '<div class="succestick2 ">';
	html += '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60" height="60" viewBox="0 0 60 60">';
	html += '<defs>';
	html += '<clipPath id="clip-icon_mktclosed">';
	html += '<rect width="60" height="60"/>';
	html += '</clipPath>';
	html += '</defs>';
	html += '<g id="icon_mktclosed" clip-path="url(#clip-icon_mktclosed)">';
	html += '<g id="icon_mktclosed-2" data-name="icon_mktclosed" transform="translate(-807 -574)">';
	html += '<g id="Group_610" data-name="Group 610">';
	html += '<g id="clock" transform="translate(893 577.234)">';
	html += '<g id="Group_607" data-name="Group 607">';
	html += '<path id="Path_293" data-name="Path 293" d="M26.667,53.334A26.667,26.667,0,1,1,53.334,26.667,26.745,26.745,0,0,1,26.667,53.334Z" transform="translate(-86)" fill="#111"/>';
	html += '<path id="Path_299" data-name="Path 299" d="M26.667,4.444A22.222,22.222,0,1,0,48.889,26.667,22.288,22.288,0,0,0,26.667,4.444Z" transform="translate(-86)" fill="#cfdee6"/>';
	html += '<path id="Path_294" data-name="Path 294" d="M13.222,24A2.1,2.1,0,0,1,11,21.778V6.222A2.1,2.1,0,0,1,13.222,4a2.1,2.1,0,0,1,2.222,2.222V21.778A2.1,2.1,0,0,1,13.222,24Z" transform="translate(-72.555 4.889)" fill="#111"/>'
	html += '<path id="Path_295" data-name="Path 295" d="M22.111,24.333a2.017,2.017,0,0,1-1.556-.667l-8.889-8.889a2.2,2.2,0,0,1,3.111-3.111l8.889,8.889a2.148,2.148,0,0,1,0,3.111A2.017,2.017,0,0,1,22.111,24.333Z" transform="translate(-72.555 13.445)" fill="#111"/>';
	html += '</g>';
	html += '</g>';
	html += '<g id="Group_620" data-name="Group 620" transform="translate(-13495 12030)">';
	html += '<g id="Path_288" data-name="Path 288" transform="translate(14342 -11435)" fill="#d14b4b">';
	html += '<path d="M 18.33097267150879 17.27776908874512 L 1.668262243270874 17.27776908874512 C 1.247272253036499 17.27776908874512 0.8699722290039062 17.05970001220703 0.6590122580528259 16.69441986083984 C 0.4478122293949127 16.32876014709473 0.4473322331905365 15.89274978637695 0.6577122211456299 15.52807903289795 L 8.989192008972168 1.082619428634644 C 9.199662208557129 0.7178194522857666 9.577312469482422 0.4999994337558746 9.999392509460449 0.4999994337558746 C 10.42187213897705 0.4999994337558746 10.79977226257324 0.7178194522857666 11.01027202606201 1.082679390907288 L 19.34148216247559 15.52801990509033 C 19.55191230773926 15.89274978637695 19.55156135559082 16.32853889465332 19.34059143066406 16.69381904602051 C 19.12940216064453 17.05946922302246 18.75197219848633 17.27776908874512 18.33097267150879 17.27776908874512 Z" stroke="none"/>';
	html += '<path d="M 18.33097267150879 16.77776908874512 C 18.67731285095215 16.77776908874512 18.84961128234863 16.54417991638184 18.90761184692383 16.44375038146973 C 18.96551132202148 16.3435001373291 19.08150291442871 16.07793998718262 18.90836143493652 15.77781963348389 L 10.57718181610107 1.332539439201355 C 10.40402221679688 1.032399415969849 10.1154317855835 0.9999994039535522 9.999392509460449 0.9999994039535522 C 9.883552551269531 0.9999994039535522 9.595412254333496 1.032399415969849 9.422322273254395 1.332419395446777 L 1.090812206268311 15.77793979644775 C 0.9177422523498535 16.07792854309082 1.033972263336182 16.34391975402832 1.091982245445251 16.44434928894043 C 1.149882197380066 16.54459953308105 1.321942210197449 16.77776908874512 1.668262243270874 16.77776908874512 L 18.33097267150879 16.77776908874512 M 18.33097267150879 17.77776908874512 L 1.668262243270874 17.77776908874512 C 0.3857322335243225 17.77776908874512 -0.4150377810001373 16.3869686126709 0.2246222347021103 15.27821922302246 L 8.556072235107422 0.8328094482421875 C 8.87652587890625 0.2773707807064056 9.43800163269043 -1.976623480004491e-06 9.9993896484375 -1.976623480004491e-06 C 10.56132698059082 -1.976623480004491e-06 11.12317562103271 0.2778335809707642 11.44336223602295 0.8328094482421875 L 19.77461242675781 15.27821922302246 C 20.4155216217041 16.38912963867188 19.61104202270508 17.77776908874512 18.33097267150879 17.77776908874512 Z" stroke="none"/>';
	html += '</g>';
	html += '<path id="Path_298" data-name="Path 298" d="M7.9,10.764a1.6,1.6,0,1,0,1.6,1.6A1.6,1.6,0,0,0,7.9,10.764ZM6.383,5.023,6.64,9.745a.417.417,0,0,0,.416.394H8.742a.417.417,0,0,0,.416-.394l.258-4.722A.417.417,0,0,0,9,4.583H6.8A.417.417,0,0,0,6.383,5.023Z" transform="translate(14344.101 -11433.473)" fill="#fff"/>';
	html += '</g>';
	html += '</g>';
	html += '</g>';
	html += '</g>';
	html += '</svg>';
	html += '</div>';
	html += '<p class="addes_success">Unable to place your order as the <strong>market is closed</strong></p>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	$("#tradepop").html(html).modal('show');
}

function getInternalErrorMsg(tickerid){
	var html = '';
	html += '<div class="modal-dialog">';
	html += '<div class="modal-content">';
	html += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
	html += '<div class="modal-body">';
	html += '<div class="trd_head"><figure><img src="https://images.moneycontrol.com/images/common/mc_icon_logo_50x50.png" alt=""></figure>Order Failed!</div>';
	html += '<div class="MT15">'
	html += '<table width="100%" cellpadding="0" cellspacing="0" border="0">';
	html += '<thead>';
	html += '<tr>';
	html += '<th width="60%">Trading Symbol</th>';
	html += '<th>Status</th>';
	html += '</tr>';
	html += '</thead>';
	html += '<tbody>';
	html += '<tr>';
	html += '<td>'+tickerid+'</td>';
	html += '<td>';
	html += '<span class="trdcomplete canceled">';
	html += '<strong>&times;</strong>';
	html += 'Cancelled';
	html += '</span>';
	html += '</td>';
	html += '</tr>';
	html += '</tbody>';
	html += '</table>';
	html += '</div>';
	html += '<div class="selec_actoad">';
	html += '<div class="succestick2 ">';
	html += '</div>';
	html += '<p class="addes_success">We encountered an unexpected error. Please try again.</p>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	$("#tradepop").html(html).modal('show');
}

function getTransactionExpiredMsg(tickerid){
	var html = '';
	html += '<div class="modal-dialog">';
	html += '<div class="modal-content">';
	html += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
	html += '<div class="modal-body">';
	html += '<div class="trd_head"><figure><img src="https://images.moneycontrol.com/images/common/mc_icon_logo_50x50.png" alt=""></figure>Session Expired!</div>';
	html += '<div class="MT15">'
	html += '<table width="100%" cellpadding="0" cellspacing="0" border="0">';
	html += '<thead>';
	html += '<tr>';
	html += '<th width="60%">Trading Symbol</th>';
	html += '<th>Status</th>';
	html += '</tr>';
	html += '</thead>';
	html += '<tbody>';
	html += '<tr>';
	html += '<td>'+tickerid+'</td>';
	html += '<td>';
	html += '<span class="trdcomplete canceled">';
	html += '<strong>&times;</strong>';
	html += 'Cancelled';
	html += '</span>';
	html += '</td>';
	html += '</tr>';
	html += '</tbody>';
	html += '</table>';
	html += '</div>';
	html += '<div class="selec_actoad">';
	html += '<div class="succestick2 ">';
	html += '</div>';
	html += '<p class="addes_success">Your session has expired. Please try again.</p>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	html += '</div>';
	$("#tradepop").html(html).modal('show');
}