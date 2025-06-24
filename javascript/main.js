const navbarItems = document.querySelectorAll(".item-1, .item-2");
const boxes = document.querySelectorAll(".box, .box-01");
const certBoxes = document.querySelectorAll(".web, .javascript, .database");
const projects = document.querySelectorAll(".project-header");

// phần hiệu ứng cho bar
navbarItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.classList.add("hover-effect");
  });

  item.addEventListener("mouseleave", () => {
    item.classList.remove("hover-effect");
  });
});

// phần hiệu ứng hover cho Mục tiêu và thông tin
document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll(".muctieu, .thongtin");

  targets.forEach((el) => {
    el.addEventListener("mouseenter", function () {
      el.classList.add("hover-effect");
    });

    el.addEventListener("mouseleave", function () {
      el.classList.remove("hover-effect");
    });
  });
});

// phần ẩn hiện thông tin cá nhân
document.querySelector(".email").addEventListener("submit", function (e) {
  e.preventDefault();

  const emailInput = document.getElementById("email");
  const emailValue = emailInput.value.trim();

  if (emailValue !== "") {
    document.querySelector(".mail").classList.add("hidden");
    document.querySelector(".infomation").classList.remove("hidden");
  } else {
    alert("Vui lòng nhập email!");
  }
});

// phần ẩn hiện chi tiết kỹ năng và nút Viewmore
// Chọn tất cả các nút "toggle"
document.querySelectorAll(".toggle-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const content = this.previousElementSibling; // lấy div.content trước button

    // Toggle class hidden
    content.classList.toggle("hidden");

    // Đổi tên nút
    if (content.classList.contains("hidden")) {
      this.textContent = "View More";
    } else {
      this.textContent = "View Less";
    }
  });
});

// phần hiệu ứng cho kinh nghiệm
// Chọn tất cả các thẻ .box và .box-01
boxes.forEach((box) => {
  // Khi rê chuột vào box
  box.addEventListener("mouseenter", () => {
    box.classList.add("hover-effect");
  });

  // Khi chuột rời khỏi box
  box.addEventListener("mouseleave", () => {
    box.classList.remove("hover-effect");
  });
});

// phần hiệu ứng cho chứng chỉ
function applyHoverAndZoomEffect(elements) {
  elements.forEach((el) => {
    // Hover effect
    el.addEventListener("mouseenter", () => el.classList.add("hover-effect"));
    el.addEventListener("mouseleave", () =>
      el.classList.remove("hover-effect")
    );

    // Zoom effect on click
    el.addEventListener("click", () => {
      elements.forEach((other) => {
        if (other !== el) other.classList.remove("zoomed");
      });
      el.classList.toggle("zoomed");
    });
  });
}

applyHoverAndZoomEffect(certBoxes);

// phần hiệu ứng cho dự án
projects.forEach((project) => {
  project.addEventListener("mouseenter", () => {
    project.classList.add("hover-effect");
  });

  project.addEventListener("mouseleave", () => {
    project.classList.remove("hover-effect");
  });
});
