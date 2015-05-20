$(document).ready (function () {

	var side = 16;

	for (var i=0; i<side; i++) {
		$('#tab').append('<tr><td></td></tr>');
	}

	for (var j=0; j<side-1; j++) {
		$('tr').append($('<td></td>'));
	}

	$("td").on('mouseenter', function() {
		var randColor = '#'+Math.floor(Math.random()*16777215).toString(16);
		$(this).css({"background-color": randColor});
	});

	$("td").on('mouseleave', function() {
		var randColor = '#'+Math.floor(Math.random()*16777215).toString(16);
		$(this).css({"background-color": randColor});
	});

$('button').on('click', function() {
	var newside=prompt("How many squares per side?");
	$('tr').remove();
	$(side).val('newside');
	var num = 800/newside;

	for (var k=0; k<newside; k++) {
		$('#tab').append('<tr><td></td></tr>');
	}

	for (var l=0; l<newside-1; l++) {
		$('tr').append($('<td></td>'));
	}

var n = (800)/newside;

	$('tr').css("height", n);
	$('td').css({"width" : n, "background-color" : "#F9F9F9"});

		$("td").on('mouseenter', function() {
		var randColor = '#'+Math.floor(Math.random()*16777215).toString(16);
		$(this).css({"background-color": randColor});
	});

	$("td").on('mouseleave', function() {
		var randColor = '#'+Math.floor(Math.random()*16777215).toString(16);
		$(this).css({"background-color": randColor});
	});
	});

});
