fetch("./project.json").then((res) => {
    return res.json();
}).then((fullData) => {
    console.log(fullData);
    let work = "";
    fullData.map((val) => {
        work += `
        <div class="card" style="width: 30rem; padding: 0px;">
        <img src=${val.img} class="card-img-top" alt=${val.name} height="250px" width="250px" >
        <div class="card-body">
          <p class="card-text" style="color: black;">${val.name}</p>
        </div>
      </div>
        `;
    })
    document.getElementById("myWorks").innerHTML = work;
}).catch((error) => {
    console.log(error);
})