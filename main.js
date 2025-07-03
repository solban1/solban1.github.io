document.getElementById("customer-name").addEventListener("input", (event) => {
  if (event.target.value) {
    event.target.setAttribute("list", "customer-name-list");
  } else {
    event.target.removeAttribute("list");
  }
});
