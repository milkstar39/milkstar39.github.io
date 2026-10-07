// =========================
// Mobile Menu
// =========================

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

if (menuButton && nav) {

  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");

    menuButton.setAttribute("aria-expanded", isOpen);
  });

  const navLinks = nav.querySelectorAll("a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}


// =========================
// Contact Form
// =========================

const contactForm = document.getElementById("contactForm");
const submitButton = document.getElementById("submitButton");
const submitButtonText = document.getElementById("submitButtonText");
const formMessage = document.getElementById("formMessage");

// ↓↓↓ 自分のGASウェブアプリURLに変更 ↓↓↓
const GAS_URL =
  "https://script.google.com/macros/s/AKfycbz1wj0t-B2UnZDg-7kazQ6AkzjmTLty85j_pSROiI8ZReoej2uyBIj7gaozhQ4J75EmzQ/exec";


if (contactForm) {

  contactForm.addEventListener("submit", async (event) => {

    // ★これがページ遷移を止める
    event.preventDefault();

    console.log("フォーム送信開始");

    submitButton.disabled = true;
    submitButtonText.textContent = "送信中...";

    formMessage.textContent = "";
    formMessage.className = "form-message";

    try {

      const formData = new FormData(contactForm);

      console.log("GASへ送信します");

      await fetch(GAS_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors"
      });

      console.log("GASへの送信処理完了");

      formMessage.textContent =
        "お問い合わせありがとうございます。内容を確認後、ご連絡いたします。";

      formMessage.classList.add("success");

      contactForm.reset();

    } catch (error) {

      console.error("送信エラー:", error);

      formMessage.textContent =
        "送信できませんでした。時間をおいてもう一度お試しください。";

      formMessage.classList.add("error");

    } finally {

      submitButton.disabled = false;
      submitButtonText.textContent = "相談内容を送信";

    }

  });
}