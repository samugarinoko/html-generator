function createImageLink() {
    // テキストボックスの値を取得
    const imageLink = document.getElementById('imageLink').value;

    // 生成するHTMLコード
    const imgTag = `&lt;img src=&quot;${imageLink}&quot;&gt;&lt;/img&gt;`;

    // 結果を表示
    document.getElementById('result').innerHTML = imgTag;
}
