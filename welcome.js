// ==========================================
// INISIALISASI ELEMEN
// ==========================================
const enterBtn = document.getElementById("enterBtn");
const welcome = document.getElementById("welcome");
const mainPage = document.getElementById("main-page");
const starsContainer = document.getElementById("stars"); // PERBAIKAN: Mengambil container bintang

// ==========================================
// AKSYON TOMBOL MASUK (FADE OUT & FADE IN)
// ==========================================
if (enterBtn && welcome && mainPage) {
    enterBtn.addEventListener("click", () => {
        // 1. Jalankan animasi transisi keluar halaman sambutan
        welcome.classList.add("fade-out");

        setTimeout(() => {
            // 2. Sembunyikan halaman sambutan, munculkan halaman utama
            welcome.style.display = "none";
            mainPage.style.display = "block"; // Diubah ke 'block' (bawaan <main>) agar layout section di bawahnya tidak rusak/miring

            // 3. Jalankan animasi masuk halaman utama
            requestAnimationFrame(() => {
                mainPage.classList.add("fade-in");
            });

            // 4. Reset scroll ke paling atas
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            // PERBAIKAN: Jalankan ulang deteksi scroll reveal 
            // karena halaman utama baru saja muncul ke layar
            setTimeout(revealSections, 100);

        }, 800); // Durasi delay disamakan dengan animasi CSS fade-out kamu
    });
}

// ==========================================
// SCROLL REVEAL (ANIMASI MUNCUL SAAT DI-SCROLL)
// ==========================================
const reveals = document.querySelectorAll(".reveal");

function revealSections() {
    const trigger = window.innerHeight * 0.85;

    reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;

        // Jika posisi elemen sudah masuk ke area pandang layar
        if (top < trigger) {
            section.classList.add("active");
        }
    });
}

// Jalankan fungsi saat web di-scroll
window.addEventListener("scroll", revealSections);

// Jalankan sekali saat pertama kali load
revealSections();

// ==========================================
// GENERATE BINTANG SECARA OTOMATIS
// ==========================================
if (starsContainer) {
    for (let i = 0; i < 30; i++) {
        const star = document.createElement("div");
        star.classList.add("star");

        // Menentukan ukuran bintang acak (1px - 5px)
        const size = Math.random() * 4 + 1;
        star.style.width = size + "px";
        star.style.height = size + "px";

        // Menentukan posisi acak di layar
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";

        // Menentukan durasi dan jeda kelap-kelip secara acak
        star.style.animationDuration = (Math.random() * 5 + 2) + "s";
        star.style.animationDelay = (Math.random() * 5) + "s";

        // PERBAIKAN: Memasukkan bintang ke container yang benar
        starsContainer.appendChild(star);
    }
}

// ==========================================
// FUNGSI NAVIGASI SCROLL SMOOTH (OPSIONAL)
// ==========================================
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}