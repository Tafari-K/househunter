const editButtons = document.getElementsByClassName("btn-edit");
const commentText = document.getElementById("id_content");
const commentForm = document.getElementById("commentForm");
const submitButton = document.getElementById("submitButton");
const deleteModal = new bootstrap.Modal(document.getElementById("deleteModal"));
const deleteButtons = document.getElementsByClassName("btn-delete");
const deleteConfirm = document.getElementById("deleteConfirm");

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

for (let button of deleteButtons) {
  button.addEventListener("click", (e) => {
    let commentId = e.target.getAttribute("comment_id");
    deleteConfirm.href = `delete_comment/${commentId}`;
    deleteModal.show();
  });
}
