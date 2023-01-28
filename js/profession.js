fetch("./profession.json").then((res) => {
    return res.json();
}).then((fullData) => {
    console.log(fullData);
    let data = "";
    fullData.map((val) => {
        data += `
        <div class="card" style="width: auto; padding: 0px;">
        <iframe class="card-img-top" src=${val.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="card-body">
          <p class="card-text" style="color: black;">${val.title.substr(0,60)}...</p>
        </div>
      </div>
        `;
    })
    document.getElementById("cards").innerHTML = data;
}).catch((error) => {
    console.log(error);
});