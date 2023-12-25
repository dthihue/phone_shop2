// -- Header --
document.querySelectorAll(".nav-link").forEach((nav) => {
  console.log(nav);

  // Lắng nghe sự kiện onclick
  nav.onclick = () => {
    // Xóa class active trước khi thêm vào
    document
      .querySelector(".nav-link__active")
      .classList.remove("nav-link__active");

    // Thêm class cho thẻ được click
    nav.classList.add("nav-link__active");
  };
});

// -- Footer --
const year = new Date().getFullYear();
document.querySelector("footer .created-by").innerHTML = `NgoDai © ${year}`;

// -- Back To Top --
// document.querySelector(".back-to-top").onclick = () => {
//   window.scrollTo({ top: 0, behavior: "smooth" });
// };
// --
// API
// fetch: có sẵn trong trình duyệt.
// axios: thư viện bên ngoài.

/**
 * method:
 * - get: lấy dữ liệu.
 * - post: cập nhật dữ liệu, thêm dữ liệu.
 * - put: cập nhật dữ liệu, thêm dữ liệu.
 * - delete: xóa dữ liệu.
 */
// tham số thứ 1: đường dẫn của api.
// tham số thứ 2: thông tin mà chúng ta gửi xuống BE.
fetch("http://localhost:3000/phones", {
  method: "get",
})
  // Sau khi phía BE trả dữ liệu về thành công thì sẽ gọi call back function và truyền dữ liệu vào cb function
  // res: chính là dữ liệu BE trả về cho chúng ta.
  // res: có kiểu dữ liệu là json
  .then((res) => {
    // convert từ json qua cấu trúc dữ liệu trong js, array, object
    return res.json();
  })
  // Sau khi chúng ta convert từ json -> kiểu dữ liệu trong js thì sẽ gọi callback function và truyền dữ liệu đã được convert xong
  // res: chính là dữ liệu đã convert xong.
  .then((phones) => {
    // Render dữ liệu lên giao diện
    let contentHTML = ``;

    // Mỗi lần lập qua thì chúng ta sẽ nối chuỗi để tạo ra nhiều thẻ card khác nhau
    phones.forEach((phone) => {
      const eleText = elt("span", undefined, phone.desc);
      const card = elt(
        "div",
        {
          className: "card",
        },
        elt("img", {
          src: phone.img,
          className: "card-img-top",
          alt: "...",
        }),
        elt(
          "div",
          {
            className: "card-body",
          },
          elt(
            "div",
            {
              className: "card-title-wrapper",
            },
            elt(
              "h5",
              {
                className: "card-title",
              },
              phone.name
            ),
            elt(
              "p",
              {
                className: "card-price",
              },
              "$" + phone.price
            )
          ),
          elt(
            "p",
            {
              className: "card-text",
            },
            eleText,
            elt(
              "button",
              {
                className: "more",
                onclick: (event) => {
                  const text = phone.desc;
                  const btn = event.target;

                  if (btn.innerText.toLowerCase() === "less") {
                    eleText.innerHTML = text.slice(0, 20) + "...";
                    btn.innerHTML = "more";
                  } else {
                    eleText.innerHTML = text;
                    btn.innerHTML = "less";
                  }
                },
              },
              "less"
            )
          ),
          elt(
            "div",
            {
              className: "card-body-bottom",
            },

            elt(
              "div",
              {
                className: "stars",
              },
              elt("i", { className: "fa-star" }),
              elt("i", { className: "fa-star" }),
              elt("i", { className: "fa-star" }),
              elt("i", { className: "fa-star" }),
              elt("i", { className: "fa-star" })
            ),
            elt(
              "button",
              {
                className: "btn-buy",
                onclick: () => {
                  handleClick(phone);
                },
              },
              elt("i", { className: "icon-cart" }),
              "Buy now"
            )
          )
        )
      );
      document.querySelector(".product-list").append(card);
    });
    // show lên UI
    // document.querySelector(".product-list").innerHTML = contentHTML;
  });

// phone: là một object
function handleClick(phone) {
  console.log(phone);
  alert(JSON.stringify(phone));
}

// Thêm thuộc tính handleClick cho window
window.handleClick = handleClick;
/**
 * Đối với inline function thì chúng ta không thể truyền kiểu Object type
 * Chỉ được phép truyền primitive type
 */

function elt(tagName, properties, ...children) {
  // Tạo element
  const ele = document.createElement(tagName);

  // Gắn thuộc tính lên trên element
  if (properties) {
    for (const prop of Object.entries(properties)) {
      const [key, value] = prop;
      ele[key] = value;
    }
  }

  // append chỉ chấp nhận là một element
  if (Array.isArray(children)) {
    children.forEach((child) => {
      ele.append(child);
    });
  } else {
    if (children) {
      ele.append(children);
    }
  }

  return ele;
}

// const backToTop = createElement(
//   "button",
//   {
//     className: "back-to-top",
//     id: "hhaa",
//   },
//   [
//     createElement("i", { className: "star" }),
//     createElement("span", undefined, "Back to top"),
//   ]
// );

// elt(
//   "div",
//   undefined,
//   elt("div", {
//     className: "card",
//   }),
//   elt("img")
// );

// -- render giao diện bằng js
// -- Header
// -- Hero
// -- Body
// -- Footer
function Header() {}
function Footer() {}
function Hero() {}
function Body() {}
// -- BackToTop
function BackToTop() {
  return elt(
    "button",
    {
      className: "back-to-top",
      onclick: () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      },
    },
    "Back to top"
  );
}

document.body.append(Header());
document.body.append(Hero());
document.body.append(Body());
document.body.append(Footer());
document.body.append(BackToTop());
