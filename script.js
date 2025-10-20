<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>💖 MY LOVE 💖</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
  <style>
    body {
      background: linear-gradient(135deg, #030303, #1b1a1a, #ffe4e1);
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      overflow: hidden;
      font-family: 'Poppins', sans-serif;
      padding: 20px;
    }

    h1 {
      font-size: 42px;
      color: #ff1493;
      margin-bottom: 20px;
      text-shadow: 0 0 10px rgba(255, 0, 100, 0.6);
      animation: glow 2s infinite alternate;
      line-height: 1.3;
    }

    @keyframes glow {
      from { text-shadow: 0 0 10px #ff69b4; }
      to { text-shadow: 0 0 25px #ff1493; }
    }

    #quote {
      font-size: 18px;
      color: #fff;
      max-width: 90%;
      line-height: 1.6;
      padding: 0 10px;
      animation: fadeIn 1s ease-in-out;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Popup Musik */
    #musicPopup {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: white;
      z-index: 9999;
      padding: 20px;
    }

    #musicPopup div {
      background: rgba(255,255,255,0.1);
      padding: 25px;
      border-radius: 20px;
      box-shadow: 0 0 20px rgba(255,192,203,0.5);
      text-align: center;
      width: 90%;
      max-width: 350px;
    }

    #musicPopup h2 {
      font-size: 20px;
      margin-bottom: 15px;
      line-height: 1.5;
    }

    #musicPopup button {
      background: #ff69b4;
      color: white;
      border: none;
      border-radius: 25px;
      padding: 10px 25px;
      font-size: 16px;
      cursor: pointer;
      transition: 0.3s;
    }

    #musicPopup button:hover {
      background: #ff1493;
      transform: scale(1.05);
    }

    /* Efek Hati 💕 */
    .heart {
      position: fixed;
      color: #ff1493;
      font-size: 20px;
      animation: fall 5s linear infinite;
      pointer-events: none;
    }

    @keyframes fall {
      0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
      100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
    }

    /* 🌸 RESPONSIF UNTUK HP */
    @media (max-width: 600px) {
      h1 {
        font-size: 28px;
      }
      #quote {
        font-size: 16px;
      }
      #musicPopup h2 {
        font-size: 18px;
      }
      #musicPopup button {
        font-size: 15px;
        padding: 8px 20px;
      }
    }

    @media (max-width: 400px) {
      h1 {
        font-size: 24px;
      }
      #quote {
        font-size: 14px;
      }
    }
  </style>
</head>
<body>

  <h1>💖 UNTUK NUR ALYA KESAYANGANKU 💖</h1>
  <p id="quote">Klik tombol di bawah untuk memutar musik dan melihat kata cinta...</p>

  <!-- Popup Musik -->
  <div id="musicPopup">
    <div>
      <h2>💗 Klik untuk memulai kisah cinta 💗</h2>
      <button id="playMusicBtn">Putar Musik 🎵</button>
    </div>
  </div>

  <!-- Musik romantis -->
  <iframe id="musicPlayer" width="0" height="0"
    src="https://www.youtube.com/embed/qndgrmEoSho?autoplay=1&loop=1&playlist=qndgrmEoSho"
    frameborder="0"
    allow="autoplay">
  </iframe>

  <script>
    const popup = document.getElementById('musicPopup');
    const playBtn = document.getElementById('playMusicBtn');
    const musicPlayer = document.getElementById('musicPlayer');
    const quoteText = document.getElementById('quote');

    // 🎶 Kata-kata bucin
    const quotes = [
      "💞 Aku nggak butuh alasan untuk mencintaimu, karena setiap detik bersamamu selalu punya maknanya sendiri.",
      "🌙 Dunia ini bisa berhenti berputar, tapi perasaanku ke kamu nggak akan pernah berhenti.",
      "💖 Aku nggak minta banyak, cuma pengin jadi alasan kamu senyum setiap hari.",
      "🌷 Kamu itu kayak lagu favorit — nggak pernah bosan didengar, dan selalu bikin hati tenang.",
      "💘 Kalau kamu tanya kenapa aku masih di sini, jawabannya cuma satu — karena kamu masih jadi rumah terindah buat aku.",
      "💗 Aku nggak tahu kenapa bisa sebucin ini, tapi setiap lihat senyum kamu, semua alasan terasa masuk akal.",
      "🌸 Cinta bukan tentang siapa yang datang duluan, tapi siapa yang tetap bertahan sampai akhir.",
      "💐 Kamu bukan hanya seseorang, kamu adalah segalanya yang aku semogakan.",
      "💞 Kadang cinta itu nggak butuh kata, cukup tatapan mata yang bilang 'aku milikmu selamanya'."
    ];

    let index = 0;

    function changeQuote() {
      quoteText.style.opacity = 0;
      setTimeout(() => {
        quoteText.innerHTML = quotes[index];
        quoteText.style.opacity = 1;
        index = (index + 1) % quotes.length;
      }, 500);
    }
    setInterval(changeQuote, 5000);

    // Popup musik
    playBtn.addEventListener('click', () => {
      popup.style.display = 'none';
      musicPlayer.style.display = 'block';
      startHearts();
    });

    // Efek hati beterbangan 💕
    function startHearts() {
      setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '💖';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
      }, 300);
    }
  </script>
</body>
</html>