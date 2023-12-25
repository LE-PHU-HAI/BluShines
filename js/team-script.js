// document.getElementById('direction').onclick = function(){
//     document.getElementById('heading').classList.toggle('activeMenu');
// }



document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}



// 多言語切り替え

// Lấy dữ liệu từ tệp JSON
fetch('./js/team-lang.json')
  .then(response => response.json())
  .then(data => {
    // Lấy ngôn ngữ hiện tại (theo thẻ <html lang="">)
    const currentLanguage = document.documentElement.lang;

    // Lấy dữ liệu cho ngôn ngữ hiện tại
    const labels = data[currentLanguage];

    
  })
  .catch(error => console.error('Error:', error));


  // Lấy các phần tử HTML
const btnLangEn = document.getElementById('btn-lang-en');
const btnLangVi = document.getElementById('btn-lang-vi');
const btnLangMm = document.getElementById('btn-lang-mm');
const btnLangJa = document.getElementById('btn-lang-ja');


// Sự kiện nhấp chuột cho nút tiếng Anh
btnLangEn.addEventListener('click', function() {
  changeLanguage('en');
});

// Sự kiện nhấp chuột cho nút tiếng Việt
btnLangVi.addEventListener('click', function() {
  changeLanguage('vi');
});

// Sự kiện nhấp chuột cho nút tiếng Myanma
btnLangMm.addEventListener('click', function() {
  changeLanguage('mm');
});

// Sự kiện nhấp chuột cho nút tiếng nhật
btnLangJa.addEventListener('click', function() {
  changeLanguage('ja');
});

// Hàm thay đổi ngôn ngữ
function changeLanguage(lang) {
  // Lấy dữ liệu từ tệp JSON theo ngôn ngữ đã chọn
  fetch('./js/team-lang.json')
    .then(response => response.json())
    .then(data => {
// Áp dụng dữ liệu vào các phần tử HTML
      const elements = document.querySelectorAll('[data-lang]');
      elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (data[lang][key]) {
          element.innerText = data[lang][key];
        }
      });
    });
}


  










