function report() {
	var txt = document.getElementById('scale').value;
	document.getElementById('mapScale').innerHTML = txt;

	var n1 = count();
	document.getElementById('numLayers').innerHTML = n1;

	var x1 = document.getElementById('img');
	document.getElementById('XCoord').value = x1.width / 2;

	var y1 = document.getElementById('img');
	document.getElementById('YCoord').value = y1.height / 2;

	document.getElementById('mapC').innerHTML = "(" + x1.width / 2 + " , " + y1.height / 2 + ")";


	var ct = count();
	alert(ct + " layer(s) are selected");
}

function changeMap() {
	var sc = document.getElementById("scale").value;
	var image = document.getElementById("img");
	image.src = "maps/" + sc + ".jpg";

	switch (document.getElementById("scale").value) {
		case "250000": {
			document.getElementById("checkAerial Photo Layer").checked = false;
			document.getElementById("checkBuildings").checked = false;
			break;
		}
		case "50000": {
			document.getElementById("checkAerial Photo Layer").checked = false;
			document.getElementById("checkBuildings").checked = false;
			break;
		}
		case "500000": {
			document.getElementById("checkAerial Photo Layer").checked = false;
			document.getElementById("checkBuildings").checked = false;
			break;
		}
		case "10000":{
			document.getElementById("checkAerial Photo Layer").checked = true;
			document.getElementById("checkBuildings").checked = true;
			break;
		}
		case "2000":{
			document.getElementById("checkAerial Photo Layer").checked = true;
			document.getElementById("checkBuildings").checked = true;
			break;
		}
	}
}