const ham = document.querySelector('#ham');
  const menu_wrapper = document.querySelector('#menu_wrapper')

// addEventListener さまざまなイベント処理を実行することができるメソッド
  ham.addEventListener('click', function(){ 
// classListとは、対象要素に設定しているクラスを配列のように扱えるオブジェクト
    ham.classList.toggle('clicked');
    menu_wrapper.classList.toggle('clicked')
  });