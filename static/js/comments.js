const editButtons = document.getElementsByClassName("btn-edit");
const commentText = document.getElementById("id_content");
const commentForm = document.getElementById("commentForm");
const submitButton = document.getElementById("submitButton");

for (let button of editButtons) {
  button.addEventListener("click", () => {
    const commentId = button.dataset.commentId;
    const editUrl = button.dataset.editUrl;

    const commentContent = document.getElementById(`comment${commentId}`).innerText;

    commentText.value = commentContent;
    submitButton.innerText = "Update";
    commentForm.action = editUrl;
  });
}
