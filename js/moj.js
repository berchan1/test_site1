  $( "document" ).ready(function() {
$("#moneySlider").slider({
	tooltip: 'show',
	min: 0,
	max: 1000
});

$('.hide_me').hide();

$('#rootwizard').bootstrapWizard({onTabShow: function(tab, navigation, index) {
		var $total = navigation.find('li').length;
		var $current = index+1;
		var $percent = ($current/$total) * 100;
		$('#rootwizard').find('.bar').css({width:$percent+'%'});
	}});
	$('#rootwizard .finish').click(function() {
		
	});
	
$('.radio_tak').click(function() {
  if($('.nie').is(':checked')) { 
  $('.hide_me').hide();
   
  }
});
	
$('.radio_nie').click(function() {
  if($('.nie').is(':checked')) { 
  $('.hide_me').show();
   
  }
});
	
});