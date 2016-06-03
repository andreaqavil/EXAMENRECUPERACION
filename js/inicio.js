//2. Agregar overlay Imag incio
var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");

//imagen
$overlay.append($image);

//texto
$overlay.append($caption);


$("body").append($overlay);


$("#galeria li a").click(function(event)
{
	event.preventDefault();
	var href=$(this).attr("href");

	//light box importante al dar  click imagen
	$image.attr("src",href);

	var texto = $(this).children("img").attr("alt");
	$caption.text(texto);

	$overlay.show();
});


$("#galeria-buques li a").click(function(event)
{
	event.preventDefault();
	var texto = $(this).children("img").attr("alt");
	$caption.text(texto);

	$overlay.show();
});


$overlay.click(function()
{
	$overlay.hide();
});