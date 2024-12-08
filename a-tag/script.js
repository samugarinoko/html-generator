function createLink() {
  const linkInput = document.getElementById('link');
  const textInput = document.getElementById('text');
  const downloadCheckbox = document.getElementById('download');
  const result = document.getElementById('result');

  // リンクの作成
  let link = `<a href="${linkInput.value}">${textInput.value}</a>`;
  if (downloadCheckbox.checked) {
    link = `<a href="${linkInput.value}" download>${textInput.value}</a>`;
  }

  result.textContent = link;
}
