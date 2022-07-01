<script>
window.onload = ()=>{
  // canvas準備
  const board = document.querySelector("#board");  //getElementById()等でも可。オブジェクトが取れれば良い。
  const ctx = board.getContext("2d");

  // 画像読み込み
  const chara = new Image();
  chara.src = "/image/yurudora/2_stand/1248010201.png";  // 画像のURLを指定
  chara.onload = () => {
    ctx.drawImage(chara, 0, 0);
  };
};
</script>