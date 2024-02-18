const showHide = () => {
  const toastContainerEl = document.querySelector(".toast_container");

  if (toastContainerEl.classList.contains("hide"))
    toastContainerEl.classList.remove("hide");

  toastContainerEl.classList.add("show");

  setTimeout(() => {
    toastContainerEl.classList.remove("show");
    toastContainerEl.classList.add("hide");
  }, 5000);
};
