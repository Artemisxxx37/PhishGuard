document.getElementById("proceed").addEventListener("click", () => {
  chrome.tabs.update({ url: localStorage.getItem("blockedUrl") });
});
