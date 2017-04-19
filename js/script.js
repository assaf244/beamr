$(function(){

	function calculate(key){
		switch(key){

			case 'AC':
				$('.answer').val('');
				break;

			case '=':
				$('.answer').val(function(){
					return eval(this.value);
				});
				break;

			default:
				$('.answer').val(function(){
					return this.value += key;
				});
		}
	}

	$(document).on('click', '.btn', function(){
		var key = $(this).val();
		calculate(key)

	});
	
});