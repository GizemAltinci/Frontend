let toastTimer;
let toastStatus;
const toastContainerEl = document.querySelector(".toast_container");

const showHide = (status) => {
  toastStatus = status;

  if (toastContainerEl.classList.contains("hide"))
    toastContainerEl.classList.remove("hide");

  toastContainerEl.classList.add("show");
  toastContainerEl.classList.add(toastStatus);

  toastTimer = setTimeout(() => {
    toastContainerEl.classList.remove("show");
    toastContainerEl.classList.remove(toastStatus);
    toastContainerEl.classList.add("hide");
  }, 5000);
};

const closeAlert = () => {
  clearTimeout(toastTimer);
  toastContainerEl.classList.remove("show");
  toastContainerEl.classList.remove(toastStatus);
  toastContainerEl.classList.add("hide");
};
