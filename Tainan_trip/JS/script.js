window.addEventListener('load', function() {
  var btn = document.querySelector('.back_to_top_button');
  var banner = document.querySelector('.banner');
  var floatingBanner = document.querySelector('.floating-banner');
  var parallaxImage = document.querySelector('.parallax-image');
  
  window.addEventListener('scroll', function() {
    // TOP按鈕顯示/隱藏
    if (window.scrollY > 100) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }

    // banner顯示
    banner.style.display = 'block';

    // 浮動橫幅樣式切換
    var scrollPosition = window.scrollY;
    if (scrollPosition < 500) {
      floatingBanner.style.display = 'none'; // 隱藏
    } else if (scrollPosition < 1000) {
      floatingBanner.style.display = 'block'; // 顯示
      floatingBanner.innerHTML = '<span class="day">Day 1</span><br><span class="time">Morning</span>';
      floatingBanner.classList.add('morning');
      floatingBanner.classList.remove('afternoon', 'evening');
    } else if (scrollPosition < 1500) {
      floatingBanner.style.display = 'block'; // 顯示
      floatingBanner.innerHTML = '<span class="day">Day 1</span><br><span class="time">Afternoon</span>';
      floatingBanner.classList.add('afternoon');
      floatingBanner.classList.remove('morning', 'evening');
    } else if (scrollPosition < 2000) {
      floatingBanner.style.display = 'block'; // 顯示
      floatingBanner.innerHTML = '<span class="day">Day 1</span><br><span class="time">Evening</span>';
      floatingBanner.classList.add('evening');
      floatingBanner.classList.remove('morning', 'afternoon');
    }

    // 視差滾動效果
    parallaxImage.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';
  });

  // TOP按鈕點擊回到頂部
  btn.addEventListener('click', function(e) {
    e.preventDefault();

    btn.addEventListener("click", function() {
      // 在點擊事件0.5秒後，添加一個 CSS class 來刪除按鈕上的 hover 狀態
      setTimeout(function() {
        btn.classList.add("clicked");
      }, 500);
      setTimeout(function() {
        btn.classList.remove("clicked");
      }, 600);
    });

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
