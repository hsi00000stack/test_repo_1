// 카드 아무 곳이나 클릭하면 입력창에 포커스
const card = document.querySelector(".prompt-card");
const input = document.querySelector(".prompt-input");

if (card && input) {
  card.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() !== "input") {
      input.focus();
    }
  });

  // 엔터 치면 간단히 알림만 띄우는 예시
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!input.value.trim()) return;
      alert("안녕하세요 ChatGPT 입니다 :)\n\n" + input.value);
      input.value = "";
    }
  });
}
