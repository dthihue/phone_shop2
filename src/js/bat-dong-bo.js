/**
 * Đồng bộ: Code sẽ chạy theo thứ tự từ trên xuống dưới.
 * Bất đồng bộ: Code sẽ không chạy theo thứ tự.
 */

// Bất đồng bộ. setTimeout, fetch, setInterval
// setTimeout: hàm có sẵn của trình duyệt, sẽ thực thi callback function sau một khoảng thời gian.

/**
 * Các bước pha chế cafe
 * B1: Chuẩn bị ly, tách
 * B2: Nấu nước sôi, 10p
 * B3: Pha cafe fin, 5p
 * B4: Thưởng thức cafe
 */

console.log("Chuẩn bị ly, tách");
// Nấu nước sôi
setTimeout(() => {
  console.log("Nấu nước sôi, xong");
}, 0);
// Pha cafe fin
// setTimeout(() => {
//   console.log("Pha cafe, xong");
// }, 300_000);
console.log("Thưởng thức cafe");
