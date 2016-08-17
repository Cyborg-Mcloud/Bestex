
function WriteData()
	{
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotfswrite, fail);
	}

function ReadData()
	{
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotfsread, fail);
	}
function gotfswrite(fileSystem) 
	{
	fileSystem.root.getFile("bestex/bestdata.txt", {create: true, exclusive: false}, gotFileEntry, fail);
	}

function gotfsread(fileSystem)
	{
	fileSystem.root.getFile("bestex/bestdata.txt", null, gotFileEntry2, fail2);
	}

function gotFileEntry(fileEntry) 
	{
	fileEntry.createWriter(gotFileWriter, fail);
	}

function gotFileWriter(writer) 
	{
	writer.write(MyUser+";"+MyPass);

	}

function fail(error)
	{
	alert("error: "+error.code);
	}



function gotFileEntry2(fileEntry) 
	{
	fileEntry.file(gotFile, fail);
	}

function gotFile(file)
	{
	readAsText(file);
	}

function readAsText(file) 
	{
	var reader = new FileReader();
	reader.onloadend = function(evt) 
		{
		var myData =evt.target.result;
		a=myData.split(";");
		MyUser=a[0];
		MyPass=a[1];
		if (MyUser=="")
			{MyUser="nouser";MyPass="nopass";}
		if (MyUser!="nouser")
			{
			document.getElementById("myname").value=MyUser;
			document.getElementById("mypass").value=MyPass;
			}
		else
			{
			show_settings();
			}
		};
	reader.readAsText(file);

	
	}

function fail2(evt) 
	{
	alert(evt.target.error.code);
	}

function checkIfFileExists(path)
	{
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){fileSystem.root.getDirectory("bestex", {create: true, exclusive: false}, fileExists, fileDoesNotExist); } , getFSFail); 
	window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem){fileSystem.root.getFile("bestex/"+path, { create: false }, fileExists_main, fileDoesNotExist_main);}, getFSFail); 
	}


function fileExists(fileEntry)
	{
//		console.log("aris!");
//	dataex=1;
	}
function fileDoesNotExist()
	{
//		console.log("ar arsebobda");
//    dataex=0;
	}


function fileExists_main(fileEntry)
	{
	console.log("aris faili!");
	dataex=1;
	ReadData();
	}
function fileDoesNotExist_main()
	{
	console.log("ar arsebobda");
	WriteData();
    dataex=0;
	}

function getFSFail(evt)
	{
    console.log("shit error");
	}



