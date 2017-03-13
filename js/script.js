$(function(){
	console.log('DOM załadoway - mozna dzialac');

	var allSpans = $("span");
	allSpans.each(function(index, element) {
		if (index % 2 == 0) {
			$(element).css('color', 'red');
		}
	});

	var allParagraphs = $("p");
	allParagraphs.each(function(index, element) {
		var addButton = '<button class="btn" data-tmp="' + (index+1) + '">Click me</button>';
		$(element).append(addButton);
	});

	$("Button").click(function(){
		alert($(this).attr("data-tmp"));
	});
});