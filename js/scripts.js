// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Memilih elemen video
    const video = document.querySelector('.video-background');

    // Fungsi untuk memutar video saat halaman dimuat
    function playVideo() {
        if (video && video.paused) {
            video.play().catch(error => {
                console.error('Error attempting to play video:', error);
            });
        }
    }

    // Fungsi untuk menjeda video
    function pauseVideo() {
        if (video && !video.paused) {
            video.pause();
        }
    }

    // Memutar video ketika halaman selesai dimuat
    window.addEventListener('load', playVideo);

    // Contoh: Menjeda video ketika pengguna mengklik tombol
    document.getElementById('pauseVideoButton').addEventListener('click', pauseVideo);
});

document.addEventListener('DOMContentLoaded', function () {
    // Fungsi Modal Bootstrap untuk Halaman Tentang
    $('#productModal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget); // Tombol yang memicu modal
        var title = button.data('title'); // Mengambil informasi dari atribut data-*
        var description = button.data('description');
        var image = button.attr('src'); // Mendapatkan sumber gambar

        var modal = $(this);
        modal.find('.modal-title').text(title);
        modal.find('#productModalImage').attr('src', image);
        modal.find('.modal-body p').text(description);
    });

    // Pengiriman Formulir Kontak untuk Halaman Kontak
    document.getElementById('contactForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Mencegah pengiriman formulir default
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

        // Menggunakan SweetAlert untuk menampilkan alert
        Swal.fire({
            title: 'Message Sent!',
            text: `Thank you, ${name}. Your message has been sent successfully.`,
            icon: 'success',
            confirmButtonText: 'OK'
        });

        // Membersihkan formulir
        document.getElementById('contactForm').reset();
    });
});
