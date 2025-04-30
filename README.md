# OBS Clock Overlay by SekaliPakaiBuang
Sebuah overlay jam digital yang bisa dipakai di OBS  
Cocok buat streamer, yaiyalah orang buat OBS
## Fitur
- Jam digital (jam, menit, detik)
- Kalender (nama hari, tanggal, bulan, tahun)
- Progress bar (sama kayak jarum detik di jam analog tapi bentuknya progress bar) 4 WARNA
## Yang Kamu Butuhkan
 - OBS Studio, yang versi terbaru biar gampang
 - Aplikasi buat unzip, bisa winrar, 7zip dll (kalo mau jalur download)
## Yang Harus Kamu Lakukan
Cara yang direkomendasikan adalah dengan [link ini](https://sekalipakaibuang.github.io/obs-clock-overlay/), sama kayak yang di about section di kanan atas bro

Tapi kalo mau pakai jalur download, pakai cara dibawah ini
 - Download filenya (Code>Download ZIP atau clone)
 - Unzip filenya
 - Buka OBS Studio, tambah browser source baru (kalo gatau caranya cari di internet)
 - Centang opsi Local File, terus nanti prompt URL bakal ganti jadi Local file
 - Pencet Browse, terus cari deh file **index.html** yang udah di unzip tadi
 - Ganti width & height sesuai kebutuhan (saranku sih width 256 height 144)
 - Pencet OK
## Yang Bisa Kamu Lakukan
Kalo kalian merasa overlay nya kok jelek tampilannya apa gimana, kalian bisa modifikasi dengan 2 cara:
1. Pake Custom CSS (biar gampang)
2. Edit file nya langsung (kalo kalian merasa custom css nanggung karena udah punya filenya)
### Cara 1: Pake Custom CSS
- Klik kanan browser source, pilih Properties
- Cari tulisan Custom CSS, kalo gak kelihatan scroll kebawah
- Edit dari situ

Contoh:

    html {
    	--bar-color-1: red;
    	--bar-color-2: yellow;
    	--bar-color-3: green;
    	--bar-color-4: blue;
    	
    	--fg-color: white;
    	--bg-color: black;
    }
Bar color 1 sampe 4 untuk warna progress bar,  
FG Color untuk warna teks,  
BG Color untuk warna latar belakang (background)

NB: Pastikan kalian mudeng CSS ya adik-adik, kalo gak mudeng mending minta tolong temenmu
### Cara 2: Edit filenya langsung
Kalo kalian mau lebih dari sekedar ganti warna, misal mau ganti layout,  
ganti codingannya sekalian biar gak kayak jam lagi mungkin /chuaksssss  
Kalian bisa edit filenya.

- index.html isinya kerangka halaman (anjay kerangka)
- style.css isinya styling biar page nya jadi lebih **a e s t h e t i c**
- main.js isinya codingan biar jam nya jalan

NB: Pastikan kalian mudeng HTML, JS, dan CSS ya adik-adik, kalo gak mudeng mending minta tolong temenmu
