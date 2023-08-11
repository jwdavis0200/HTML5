window.onload = function () {
  let projectCards = document.getElementsByClassName("project-card");
  for (let i = 0; i < projectCards.length; i++) {
    projectCards[i].addEventListener("mouseenter", showPopup);
    projectCards[i].addEventListener("mouseleave", hidePopup);
  }
};

function showPopup(e) {
  let popup = e.target.querySelector(".popup");
  if (popup) {
    popup.style.display = "block";
  }
}

function hidePopup(e) {
  let popup = e.target.querySelector(".popup");
  if (popup) {
    popup.style.display = "none";
  }
}
