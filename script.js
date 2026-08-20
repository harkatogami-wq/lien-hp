// ===== 申込み導線リンク設定 =====
// ここのURLを差し替えるだけで、サイト全体のボタンが更新されます。
const LINKS = {
  line: "https://utage-system.com/line/open/xe5Fn3q5YbF2?mtid=WSvCfRkiXhnn",  // LINE公式アカウント 友だち追加
  booking: "https://utage-system.com/p/yUTOiAhUpUHb",  // 無料相談 申込みページ（UTAGE）に統一
  instagram: "https://www.instagram.com/haruka_hagukumi_touch?igsh=ajV5ZXkzajBydjhz&igsi=ajV5ZXkzajBydjhz&utm_source=qr",
};

document.querySelectorAll("[data-link]").forEach((el) => {
  const key = el.getAttribute("data-link");
  if (LINKS[key] && LINKS[key] !== "#") {
    el.setAttribute("href", LINKS[key]);
    if (key === "line" || key === "instagram" || key === "booking") {
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    }
  }
});

// ===== モバイルメニュー =====
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
if (navToggle && nav) {
  navToggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => nav.classList.remove("open"))
  );
}
