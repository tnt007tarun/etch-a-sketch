$(document).ready (function () {

	var side = 16;

	for (var i=0; i<side; i++) {
		$('#tab').append('<tr><td></td></tr>');
	}

	for (var j=0; j<side-1; j++) {
		$('tr').append($('<td></td>'));
	}

	$("td").on('mouseenter', function() {
		$(this).css({"background-color": "black"});
	});

	$("td").on('mouseleave', function() {
		$(this).css({"background-color": "#1A1A19"});
	});

$('button').on('click', function() {
	var newside=prompt("How many squares per side?");
	$('tr').remove();
	$(side).val('newside');

	for (var k=0; k<newside; k++) {
		$('#tab').append('<tr><td></td></tr>');
	}

	for (var l=0; l<newside-1; l++) {
		$('tr').append($('<td></td>'));
	}

	$('tr').css("height", "8");
	$('td').css({"width" : "8", "background-color" : "#FFFFEB"});

		$("td").on('mouseenter', function() {
		$(this).css({"background-color": "black"});
	});

	$("td").on('mouseleave', function() {
		$(this).css({"background-color": "#1A1A19"});
	});
});

});
	
