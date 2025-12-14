const form = document.getElementById('signupForm');
const modal = new bootstrap.Modal(document.getElementById('signupModal'));
const modalMessage = document.getElementById('modalMessage');
const btn = document.getElementById('signupBtn');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const pass = document.getElementById('password').value;
    const confirm = document.getElementById('confirm').value;

    // Ubah tombol jadi Loading
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mendaftar...';
    btn.disabled = true;

    setTimeout(() => {
        if (!name || !email || !pass || !confirm) {
            modalMessage.innerHTML = '<i class="fas fa-exclamation-circle text-danger mb-2" style="font-size:3rem"></i><br>Semua kolom harus diisi!';
        } else if (pass !== confirm) {
            modalMessage.innerHTML = '<i class="fas fa-times-circle text-danger mb-2" style="font-size:3rem"></i><br>Kata sandi tidak cocok!';
        } else {
            modalMessage.innerHTML = '<i class="fas fa-check-circle text-success mb-2" style="font-size:3rem"></i><br>Akun berhasil dibuat!';
            form.reset();
        }
    
        modal.show();
        
        // Reset tombol
        btn.innerHTML = originalText;
        btn.disabled = false;
    }, 1500);
});
