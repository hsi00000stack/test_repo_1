
const card = document.querySelector(".prompt-card");
const input = document.querySelector(".prompt-input");

if (card && input) {
  card.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() !== "input") {
      input.focus();
    }
  });

  // 엔터 치면 구글 검색
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      const query = input.value.trim();
      if (!query) return;

      const googleUrl =
        "https://www.google.com/search?q=" + encodeURIComponent(query);

      window.open(googleUrl, "_blank"); // 새 탭에서 검색
      // window.location.href = googleUrl; // 같은 탭 원하면 이걸로

      input.value = "";
    }
  });
}
