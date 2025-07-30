const getTrack = async () => {
  const urlInput = document.getElementById('trackUrl').value;
  const trackId = urlInput.split("/track/")[1]?.split("?")[0];

  if (!trackId) {
    alert("Invalid Spotify track URL.");
    return;
  }

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '23b9dcf3famshd982s65d53a57113p11767ejsn0344e673c6f2',
      'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
    }
  };

  const response = await fetch(`https://spotify23.p.rapidapi.com/tracks/?ids=${trackId}`, options);
  const data = await response.json();
  const track = data.tracks[0];

  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    <h2>${track.name} by ${track.artists[0].name}</h2>
    <img src="${track.album.images[0].url}" width="300"/>
    <p><audio controls src="${track.preview_url}">Preview not available</audio></p>
  `;
};