const form = document.getElementById('loginForm');
const modal = new bootstrap.Modal(document.getElementById('loginModal'));
const modalMessage = document.getElementById('modalMessage');
const btn = document.getElementById('loginBtn'); // Ambil tombol

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // 1. Ubah tombol jadi Loading
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Memproses...';
    btn.disabled = true;

    // 2. Simulasi delay (pura-pura ngecek server 1.5 detik)
    setTimeout(() => {
        if (email && password) {
            modalMessage.innerHTML = '<i class="fas fa-check-circle text-success display-4 mb-3"></i><br>Login Berhasil!';
        } else {
            modalMessage.textContent = 'Silakan isi semua kolom!';
        }
      
        modal.show();
        
        // Kembalikan tombol seperti semula
        btn.innerHTML = originalText;
        btn.disabled = false;
        if(email && password) form.reset();

    }, 1500); // Delay 1.5 detik
});
