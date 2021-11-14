// get the mPopup
var mpopup = document.getElementById('mpopupBox');

// get the link that opens the mPopup
var mpLink = document.getElementById("mpopupLink");

// get the close action element
var close = document.getElementsByClassName("close")[0];

// open the mPopup once the link is clicked
mpLink.onclick = function() {
    mpopup.style.display = "block";
}

// close the mPopup once close element is clicked
close.onclick = function() {
    mpopup.style.display = "none";
}

// close the mPopup when user clicks outside of the box
window.onclick = function(event) {
    if (event.target == mpopup) {
        mpopup.style.display = "none";
    }
}

// Fetches URL
function getContent()
{
	return fetch('http://127.0.0.1:8080/generate')
	.then(response => response.json())
	.then(data => data);
}

// Adds video or image URL to div
async function addContent() 
{
	// Gets array containing content URL and true/false value indicating whether
	// video or not
	btn.innerText = "Generating...";
	media = await getContent();
	btn.innerText = "Generate";
	
	if (media["Video"] == true)
	{
		var video = document.createElement('video');
		
		video.src = media["Content_URL"];
		video.width = 500;
		video.height = 500;
		video.autoplay = true;
		video.loop = true;
		
		// Add video to div "content_location"
		// (this section might not be applicable if going with a popup)
		var dv = document.getElementById('content_location');
		// Remove existing video or image
		while (dv.hasChildNodes())
		{
			dv.removeChild(dv.lastChild);
		}
		
		dv.appendChild(video);
	}

	else
	{
		var img = new Image();
		img.src = media["Content_URL"];
		img.height = 500;
		img.width = 500;
		
		// Add image to div "content_location"
		// (this section might not be applicable if going with a popup)
		var dv = document.getElementById('content_location');
		// Remove existing video or image
		while (dv.hasChildNodes())
		{
			dv.removeChild(dv.lastChild);
		}
				
		dv.appendChild(img);
	}
}