/* jshint esversion: 6 */
const editButtons = document.getElementsByClassName("btn-edit");
const commentText = document.getElementById("id_content");
const commentForm = document.getElementById("commentForm");
const submitButton = document.getElementById("submitButton");

const deleteModalEl = document.getElementById("deleteModal");
let deleteModal = null;
if (deleteModalEl) {
  deleteModal = new bootstrap.Modal(deleteModalEl);
}

const deleteButtons = document.getElementsByClassName("btn-delete");
const deleteConfirm = document.getElementById("deleteConfirm");

for (let button of editButtons) {
  button.addEventListener("click", () => {
    const commentId = button.dataset.commentId;
    const editUrl = button.dataset.editUrl;

    const commentContentEl = document.getElementById(`comment${commentId}`);
    if (!commentContentEl) return;

    commentText.value = commentContentEl.innerText;
    submitButton.innerText = "Update";
    commentForm.action = editUrl;
  });
}

for (let button of deleteButtons) {
  button.addEventListener("click", (e) => {
    const commentId = button.dataset.commentId || e.target.getAttribute("comment_id");

    if (deleteConfirm && commentId) {
      deleteConfirm.href = `delete_comment/${commentId}`;
    }

    if (deleteModal) {
      deleteModal.show();
    }
  });
}
