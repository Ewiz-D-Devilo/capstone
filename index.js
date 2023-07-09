var accesskey = "RZEIOVfPhS7vMLkFdd2TSKGFBS4o9_FmcV1Nje3FSjw";
var form = document.querySelector("form");
var searchButton = document.getElementById("SearchButton");
var showmoreButton = document.getElementById("ShowMore");
var searchInput = document.getElementById("searchInput");
var searchResult = document.getElementById("ResultContainer");
var inputData = "";
var page = 1;

async function searchImages() {
  inputData = searchInput.value;
  console.log(inputData);
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accesskey}`;
  console.log(url);
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  if (page === 1) {
    searchResult.innerHTML = "";
  }
  const results = data.results;
  console.log(data);
  results.map((i) => {
    // console.log(i);
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("FinalResult");
    const image = document.createElement("img");
    image.src = i.urls.small;
    image.alt = i.alt_description;
    var imageLink = document.createElement("a");
    imageLink.target = "_blank";
    imageLink.textContent = i.alt_description;
    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    searchResult.appendChild(imageWrapper);
  });
  page+=1
  if (page > 1){
    showmoreButton.style.display="block"
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  page=1
  searchImages();
});

showmoreButton.addEventListener("click",()=>{
  searchImages();
})