const onLoader = document.querySelector(".loader");
const tableData = document.getElementById("table-data");
fetch(`https://jsonplaceholder.typicode.com/posts`)
  .then((res) => res.json())
  .then((data) => {
    //console.log(data);

    data.forEach((item) => {
      const divContainer = document.createElement("div");
      divContainer.classList.add("container");

      divContainer.innerHTML = ` 
      <p>#${item.id}</p>
      <p class="title">${item.title}</p>
      <p class="content">${item.body}</p>
      <div class="comment-container">
        <p class="comment-display" data-id="${item.id}">Hiển thị comment</p>
         <div class="loader hidden"></div>
     </div>   `;
      tableData.appendChild(divContainer);

      const commentDisplay = divContainer.querySelector(
        " .comment-container .comment-display "
      );
      commentDisplay.addEventListener("click", (event) =>
        loadList(event, item.id)
      );
    });
    onLoader.classList.add("hidden");
  });
const loadList = (event, postID) => {
  const loadLists = event.target;
  const divContainerNode = loadLists.closest(".container");
  const commentDisplay = divContainerNode.querySelector(
    ".comment-container .comment-display"
  );
  const loaderDisplay = divContainerNode.querySelector(
    ".comment-container .loader"
  );
  commentDisplay.classList.add("hidden");
  loaderDisplay.classList.remove("hidden");
  fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postID}`)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      data.forEach((item) => {
        // <div class="loader"></div>;
        const divComment = document.createElement("div");
        divComment.classList.add("comment-item");

        divComment.innerHTML = `

               <p class="comment-name">${item.name}</p>
                <p class="comment-content">${item.body}</p>

          `;
        divContainerNode.appendChild(divComment);
      });
      loaderDisplay.classList.add("hidden");
    });
};
