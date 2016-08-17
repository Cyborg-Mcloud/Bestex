

function getscreenw()
	{	
	var winW = 640, winH = 460;
	if (document.body && document.body.offsetWidth) {
	 winW = document.body.offsetWidth;
	}
	if (document.compatMode=='CSS1Compat' &&
		document.documentElement &&
		document.documentElement.offsetWidth ) {
	 winW = document.documentElement.offsetWidth;
	}
	if (window.innerWidth && window.innerHeight) {
	 winW = window.innerWidth;
	}
	return winW;
	}


function getscreenh()
	{	
	var winW = 640, winH = 460;
	if (document.body && document.body.offsetWidth) {
	 winH = document.body.offsetHeight;
	}
	if (document.compatMode=='CSS1Compat' &&
		document.documentElement &&
		document.documentElement.offsetWidth ) {
	 winH = document.documentElement.offsetHeight;
	}
	if (window.innerWidth && window.innerHeight) {
	 winH = window.innerHeight;
	}
	return winH;
	}

var curint='none';

function checkConnection() 
	{
	var networkState = navigator.connection.type;

	var states = {};
	states[Connection.UNKNOWN]  = 'Unknown';
	states[Connection.ETHERNET] = 'Ethernet';
	states[Connection.WIFI]     = 'WiFi';
	states[Connection.CELL_2G]  = '2G';
	states[Connection.CELL_3G]  = '3G';
	states[Connection.CELL_4G]  = '4G';
	states[Connection.CELL]     = 'generic';
	states[Connection.NONE]     = 'none';
	
	inter= states[networkState];

	curint=inter;
	document.getElementById('erorebi').innerHTML="internet: "+inter;
	}


   function onError(error) 
		{
		document.getElementById('erorebi').innerHTML+='code: '    + error.code    + '<Br>' +              'message: ' + error.message + '<br>';
		}

