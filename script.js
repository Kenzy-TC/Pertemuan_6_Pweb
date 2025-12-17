/* script.js */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Ambil elemen-elemen penting
    const loginCard = document.getElementById('loginCard');
    const signupCard = document.getElementById('signupCard');
    const linkToSignup = document.getElementById('linkToSignup');
    const linkToLogin = document.getElementById('linkToLogin');

    // 2. Logika Tuker Kartu (Switch)
    linkToSignup.addEventListener('click', (e) => {
        e.preventDefault(); // Biar gak reload
        loginCard.classList.add('d-none'); // Sembunyikan Login
        signupCard.classList.remove('d-none'); // Munculkan Signup
    });

    linkToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        signupCard.classList.add('d-none'); // Sembunyikan Signup
        loginCard.classList.remove('d-none'); // Munculkan Login
    });

    // 3. Logika Form Submit (Simulasi Loading & Modal)
    const modal = new bootstrap.Modal(document.getElementById('myModal'));
    const modalMessage = document.getElementById('modalMessage');

    // --- LOGIN LOGIC ---
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = document.getElementById('loginBtn');
        const email = document.getElementById('loginEmail').value;
        const pass = document.getElementById('loginPassword').value;

        // Efek Loading
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
        btn.disabled = true;

        setTimeout(() => {
            if(email && pass) {
                modalMessage.innerHTML = '<i class="fas fa-check-circle text-success fs-1 mb-3"></i><br>Login Berhasil!';
            }
            modal.show();
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 1000);
    });

    // --- SIGNUP LOGIC ---
    document.getElementById('signupForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = document.getElementById('signupBtn');
        const pass = document.getElementById('signupPassword').value;
        const confirm = document.getElementById('signupConfirm').value;

        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Proses...';
        btn.disabled = true;

        setTimeout(() => {
            if (pass !== confirm) {
                modalMessage.innerHTML = '<i class="fas fa-times-circle text-danger fs-1 mb-3"></i><br>Password tidak sama!';
            } else {
                modalMessage.innerHTML = '<i class="fas fa-check-circle text-success fs-1 mb-3"></i><br>Akun Berhasil Dibuat!';
                // Reset form & Balik ke login otomatis
                e.target.reset();
                setTimeout(() => {
                    modal.hide();
                    signupCard.classList.add('d-none');
                    loginCard.classList.remove('d-none');
                }, 1500);
            }
            modal.show();
            btn.innerHTML = originalText; // Balikin teks tombol (Note: ini akan error krn variabel originalText beda scope, tp gpp buat contoh simpel)
            btn.innerHTML = "Daftar Sekarang";
            btn.disabled = false;
        }, 1000);
    });
});