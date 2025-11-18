// 엔터 입력 시 동작
const input = document.querySelector(".input-field");

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value.trim() !== "") {
    alert("입력한 내용: " + input.value);
  }
});
