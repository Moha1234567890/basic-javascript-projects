
var i = 0;

var slidesIamges = ['img/1.jpg','img/2.jpg','img/3.jpg'];


var Cool = function () {

	document.hole.src = slidesIamges[i];

	if (i < slidesIamges.length - 1) {
		i++;
	} else {

		i=0;
	}

	setTimeout("Cool()", 3000);
}


Cool()