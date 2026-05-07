import { useState } from "react";

const questions = [
  // ACARA 2 — 5 poin
  { category: "Acara 2", points: 5, question: "Praktikum alat ukur, pengukuran, dan komponen pasif bertujuan agar mahasiswa dapat memahami konsep dasar elektronika terutama tentang…", options: ["Pemrograman dan jaringan komputer","Resistansi, tegangan, dan arus","Desain grafis rangkaian","Sistem komunikasi digital"], answer: "B" },
  { category: "Acara 2", points: 5, question: "Salah satu tujuan praktikum dalam modul adalah…", options: ["Mengetahui jenis alat ukur yang digunakan dalam pengukuran besaran listrik","Membuat program simulasi komputer","Merakit motor listrik tiga fasa","Menguji sensor suhu digital"], answer: "A" },
  { category: "Acara 2", points: 5, question: "Alat ukur yang digunakan dalam praktikum ini adalah…", options: ["Osiloskop","Multimeter digital","Generator sinyal","Spektrometer"], answer: "B" },
  { category: "Acara 2", points: 5, question: "Berikut ini yang termasuk bahan dalam praktikum adalah…", options: ["Resistor, potensiometer, dan power supply","Transistor, IC, dan mikrokontroler","Motor DC, relay, dan buzzer","Sensor suhu, LED, dan LCD"], answer: "A" },
  { category: "Acara 2", points: 5, question: "Komponen pasif yang digunakan untuk menghambat arus listrik adalah…", options: ["Resistor","Transistor","Dioda","IC"], answer: "A" },
  // ACARA 2 — 7 poin
  { category: "Acara 2", points: 7, question: "Langkah pertama dalam percobaan pembacaan kode warna resistor adalah…", options: ["Mengukur tegangan power supply","Mengambil sebuah resistor","Mengatur posisi potensiometer","Menyalakan rangkaian"], answer: "B" },
  { category: "Acara 2", points: 7, question: "Pada percobaan kode warna resistor, warna pada resistor digunakan untuk mengetahui…", options: ["Tegangan baterai","Nilai resistansi resistor","Jenis arus listrik","Nilai frekuensi sinyal"], answer: "B" },
  { category: "Acara 2", points: 7, question: "Setelah memperhatikan warna pada resistor, langkah berikutnya adalah…", options: ["Menghitung nilai resistor menggunakan kode warna","Menghubungkan resistor ke osiloskop","Mengubah nilai resistor dengan potensiometer","Mengukur arus AC"], answer: "A" },
  { category: "Acara 2", points: 7, question: "Pada gambar kode warna resistor dalam modul, kode warna dapat digunakan untuk membaca…", options: ["Nilai resistor dan toleransi","Tegangan maksimum power supply","Frekuensi rangkaian","Nilai kapasitansi kapasitor"], answer: "A" },
  { category: "Acara 2", points: 7, question: "Pada percobaan rangkaian resistansi, hasil resistansi dibandingkan pada titik…", options: ["AB dan BC","AC dan CD","A dan D","B dan D"], answer: "A" },
  // ACARA 2 — 8 poin
  { category: "Acara 2", points: 8, question: "Komponen yang disebut sebagai variable resistor dalam modul adalah…", options: ["Resistor tetap","Potensiometer","Kapasitor","Induktor"], answer: "B" },
  { category: "Acara 2", points: 8, question: "Pada percobaan potensiometer, alat yang disiapkan adalah…", options: ["Potensiometer dan catu daya","Dioda dan osiloskop","Kapasitor dan generator sinyal","Transistor dan IC"], answer: "A" },
  { category: "Acara 2", points: 8, question: "Posisi potensiometer yang digunakan dalam pengukuran pada modul adalah…", options: ["¼, ½, ¾, dan 1 putaran","1 Hz, 10 Hz, 100 Hz, dan 1 kHz","1 V, 2 V, 3 V, dan 4 V","10 Ω, 20 Ω, 30 Ω, dan 40 Ω"], answer: "A" },
  { category: "Acara 2", points: 8, question: "Data yang dicatat pada tabel hasil pengukuran potensiometer adalah…", options: ["Posisi potensiometer dan tegangan terukur","Warna resistor dan arus listrik","Frekuensi dan kapasitansi","Tegangan input dan frekuensi output"], answer: "A" },
  { category: "Acara 2", points: 8, question: "Power supply dalam praktikum berfungsi sebagai…", options: ["Sumber tegangan listrik","Pengukur nilai resistansi","Penyimpan data pengukuran","Penampil bentuk gelombang"], answer: "A" },
  // ACARA 3 — 5 poin
  { category: "Acara 3", points: 5, question: "Fungsi utama Proteus dalam praktikum ini adalah untuk…", options: ["Membuat laporan otomatis","Merancang, mensimulasikan, dan menganalisis rangkaian elektronika","Mengukur suhu komponen elektronik","Mengedit gambar rangkaian secara manual"], answer: "B" },
  { category: "Acara 3", points: 5, question: "Salah satu tujuan praktikum pada modul ini adalah…", options: ["Mahasiswa mampu membuat program mikrokontroler","Mahasiswa mampu membuat rangkaian DC dan AC menggunakan Proteus","Mahasiswa mampu membuat PCB secara fisik","Mahasiswa mampu memperbaiki laptop"], answer: "B" },
  { category: "Acara 3", points: 5, question: "Arus DC atau Direct Current adalah arus listrik yang…", options: ["Berubah-ubah terhadap waktu","Mengalir bolak-balik","Mengalir dalam satu arah saja","Hanya berasal dari PLN"], answer: "C" },
  { category: "Acara 3", points: 5, question: "Contoh sumber arus DC yang disebutkan dalam modul adalah…", options: ["Generator AC PLN","Baterai dan sel surya","Stop kontak rumah","Osiloskop"], answer: "B" },
  { category: "Acara 3", points: 5, question: "Arus AC atau Alternating Current memiliki ciri utama yaitu…", options: ["Nilainya tetap dan arahnya selalu sama","Mengalir hanya pada rangkaian resistor","Nilainya berubah-ubah terhadap waktu","Tidak dapat digunakan pada rumah tangga"], answer: "C" },
  // ACARA 3 — 7 poin
  { category: "Acara 3", points: 7, question: "Komponen yang berfungsi untuk mengatur aliran arus listrik adalah…", options: ["Resistor","Kapasitor","Induktor","Osiloskop"], answer: "A" },
  { category: "Acara 3", points: 7, question: "Komponen yang berfungsi sebagai penyimpan muatan listrik adalah…", options: ["Resistor","Kapasitor","Dioda","Transistor"], answer: "B" },
  { category: "Acara 3", points: 7, question: "Untuk memasuki mode komponen pada Proteus, langkah yang dilakukan adalah…", options: ["Menekan tombol Play","Menekan Component Mode","Menekan Stop","Membuka menu Debug"], answer: "B" },
  { category: "Acara 3", points: 7, question: "Untuk mengakses library komponen pada Component Mode, tombol yang ditekan adalah…", options: ["A","R","P","S"], answer: "C" },
  { category: "Acara 3", points: 7, question: "Mode yang digunakan untuk merangkai atau menghubungkan komponen pada Proteus adalah…", options: ["Component Mode","Selection Mode","Virtual Instruments Mode","Debug Mode"], answer: "B" },
  // ACARA 3 — 8 poin
  { category: "Acara 3", points: 8, question: "Tombol yang digunakan untuk menjalankan simulasi pada Proteus adalah…", options: ["Play","Pause","Stop","Rotate"], answer: "A" },
  { category: "Acara 3", points: 8, question: "Pada simulasi rangkaian DC, instrumen yang digunakan untuk mengukur arus adalah…", options: ["Oscilloscope","Signal Generator","DC Ammeter","Logic Analyzer"], answer: "C" },
  { category: "Acara 3", points: 8, question: "Pada rangkaian DC dalam modul, satuan DC Ammeter diubah dari Ampere menjadi…", options: ["Volt","Ohm","Miliampere","Hertz"], answer: "C" },
  { category: "Acara 3", points: 8, question: "Pada simulasi rangkaian AC, instrumen yang digunakan untuk menampilkan bentuk gelombang adalah…", options: ["DC Ammeter","Oscilloscope","Resistor","Battery"], answer: "B" },
  { category: "Acara 3", points: 8, question: "Rumus Vpp berdasarkan modul adalah…", options: ["Vpp = Arus × Hambatan","Vpp = Jumlah kotak vertikal pada satu gelombang × Volt/Div","Vpp = Frekuensi × Waktu","Vpp = Tegangan ÷ Hambatan"], answer: "B" },
];

const LABELS = ["A", "B", "C", "D"];
const TOTAL_POINTS = questions.reduce((s, q) => s + q.points, 0);
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/a/macros/mhs.unsoed.ac.id/s/AKfycbz16n2Eg9jyaMb8lui33Y2CtQzzJFXvco3qYjE-ZZKO0eP7gLJqoxYNUjM0U35pUsP3Zw/exec";

// ─── Styles ───────────────────────────────────────────────────────────────────
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Sora:wght@300;400;500;600;700&display=swap');

  :root {
    --bg: #080c18;
    --surface: #0f1624;
    --surface2: #151e30;
    --border: #1b2847;
    --accent: #3b82f6;
    --accent2: #6366f1;
    --glow: rgba(59,130,246,0.22);
    --success: #10b981;
    --warning: #f59e0b;
    --text: #e2e8f0;
    --text2: #94a3b8;
    --text3: #4b5e80;
    --mono: 'Space Mono', monospace;
    --sans: 'Sora', sans-serif;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .qe-root {
    background: var(--bg);
    min-height: 100vh;
    color: var(--text);
    font-family: var(--sans);
    padding: 36px 20px 80px;
    position: relative;
    overflow-x: hidden;
  }

  .qe-root::before {
    content: '';
    position: fixed;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 50% at 15% 15%, rgba(59,130,246,0.09) 0%, transparent 70%),
      radial-gradient(ellipse 50% 50% at 85% 85%, rgba(99,102,241,0.09) 0%, transparent 70%),
      radial-gradient(ellipse 40% 40% at 50% 50%, rgba(16,185,129,0.04) 0%, transparent 60%);
    pointer-events: none;
    z-index: 0;
  }

  .qe-inner {
    position: relative;
    z-index: 1;
    max-width: 760px;
    margin: 0 auto;
  }

  /* ── Header ── */
  .qe-header {
    text-align: center;
    margin-bottom: 36px;
    animation: qeFadeDown 0.6s ease both;
  }

  .qe-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(59,130,246,0.1);
    border: 1px solid rgba(59,130,246,0.28);
    border-radius: 100px;
    padding: 6px 16px;
    font-size: 11px;
    font-family: var(--mono);
    color: var(--accent);
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 18px;
  }

  .qe-badge-dot {
    width: 6px; height: 6px;
    background: var(--accent);
    border-radius: 50%;
    animation: qePulse 2s infinite;
  }

  .qe-h1 {
    font-size: 30px;
    font-weight: 700;
    background: linear-gradient(135deg, #e2e8f0 0%, #93c5fd 50%, #818cf8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: 8px;
    line-height: 1.2;
  }

  .qe-sub {
    color: var(--text3);
    font-size: 12px;
    font-family: var(--mono);
  }

  /* ── Card ── */
  .qe-card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 24px;
    margin-bottom: 20px;
    animation: qeFadeUp 0.55s ease both;
  }

  .qe-section-label {
    font-size: 10px;
    font-family: var(--mono);
    color: var(--text3);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 14px;
  }

  /* ── Identity grid ── */
  .qe-id-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .qe-field label {
    display: block;
    font-size: 10px;
    color: var(--text3);
    font-family: var(--mono);
    margin-bottom: 6px;
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .qe-field input {
    width: 100%;
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 10px;
    padding: 11px 14px;
    color: var(--text);
    font-family: var(--sans);
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
  }

  .qe-field input:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 3px var(--glow);
  }

  .qe-field input::placeholder { color: var(--text3); }

  /* ── Progress ── */
  .qe-progress-row {
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 18px;
  }

  .qe-bar-bg {
    flex: 1;
    height: 4px;
    background: var(--border);
    border-radius: 100px;
    overflow: hidden;
  }

  .qe-bar-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
    border-radius: 100px;
    transition: width 0.4s cubic-bezier(0.4,0,0.2,1);
  }

  .qe-progress-txt {
    font-size: 11px;
    font-family: var(--mono);
    color: var(--text3);
    white-space: nowrap;
  }

  /* ── Nav dots ── */
  .qe-dots {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 22px;
  }

  .qe-dot {
    width: 30px; height: 30px;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--surface2);
    font-size: 10px;
    font-family: var(--mono);
    color: var(--text3);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.18s;
    user-select: none;
  }

  .qe-dot:hover { border-color: var(--accent); color: var(--accent); }
  .qe-dot.answered { background: rgba(59,130,246,0.13); border-color: rgba(59,130,246,0.5); color: var(--accent); }
  .qe-dot.current { background: var(--accent); border-color: var(--accent); color: #fff; font-weight: 700; }

  /* ── Question card ── */
  .qe-qcard {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 28px;
    position: relative;
    overflow: hidden;
    animation: qeFadeUp 0.5s ease both;
  }

  .qe-qcard::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--accent), var(--accent2));
  }

  .qe-qmeta {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .qe-qtag {
    font-size: 11px;
    font-family: var(--mono);
    padding: 5px 13px;
    border-radius: 100px;
    border: 1px solid var(--border);
    color: var(--text3);
  }

  .qe-qtag.a2 { color: #f59e0b; border-color: rgba(245,158,11,0.35); background: rgba(245,158,11,0.07); }
  .qe-qtag.a3 { color: #818cf8; border-color: rgba(129,140,248,0.35); background: rgba(129,140,248,0.07); }

  .qe-qpoints {
    font-size: 11px;
    font-family: var(--mono);
    color: var(--success);
    background: rgba(16,185,129,0.09);
    border: 1px solid rgba(16,185,129,0.28);
    padding: 5px 13px;
    border-radius: 100px;
  }

  .qe-qtext {
    font-size: 16px;
    font-weight: 500;
    line-height: 1.65;
    color: var(--text);
    margin-bottom: 24px;
  }

  /* ── Options ── */
  .qe-options { display: flex; flex-direction: column; gap: 10px; }

  .qe-option {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px 18px;
    border-radius: 13px;
    border: 1px solid var(--border);
    background: var(--surface2);
    cursor: pointer;
    transition: all 0.18s;
    user-select: none;
  }

  .qe-option:hover {
    border-color: rgba(59,130,246,0.45);
    background: rgba(59,130,246,0.05);
    transform: translateX(3px);
  }

  .qe-option.sel {
    border-color: var(--accent);
    background: rgba(59,130,246,0.1);
    box-shadow: 0 0 0 1px var(--accent), 0 0 18px var(--glow);
  }

  .qe-opt-letter {
    width: 32px; height: 32px;
    border-radius: 8px;
    border: 1px solid currentColor;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--mono);
    font-size: 11px;
    font-weight: 700;
    flex-shrink: 0;
    color: var(--text3);
    transition: all 0.18s;
  }

  .qe-option.sel .qe-opt-letter {
    background: var(--accent);
    color: #fff;
    border-color: var(--accent);
  }

  .qe-opt-text { font-size: 14px; color: var(--text2); line-height: 1.4; }
  .qe-option.sel .qe-opt-text { color: var(--text); }

  /* ── Actions ── */
  .qe-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 28px;
    gap: 12px;
  }

  .qe-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 22px;
    border-radius: 12px;
    border: none;
    font-family: var(--sans);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.18s;
    outline: none;
    white-space: nowrap;
  }

  .qe-btn-prev {
    background: var(--surface2);
    border: 1px solid var(--border);
    color: var(--text2);
  }
  .qe-btn-prev:hover:not(:disabled) { border-color: var(--text3); color: var(--text); }
  .qe-btn-prev:disabled { opacity: 0.3; cursor: not-allowed; }

  .qe-btn-next {
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    color: #fff;
    box-shadow: 0 4px 18px rgba(59,130,246,0.38);
  }
  .qe-btn-next:hover { transform: translateY(-2px); box-shadow: 0 6px 22px rgba(59,130,246,0.5); }

  .qe-btn-submit {
    background: linear-gradient(135deg, #059669, #10b981);
    color: #fff;
    box-shadow: 0 4px 18px rgba(16,185,129,0.38);
  }
  .qe-btn-submit:hover { transform: translateY(-2px); box-shadow: 0 6px 22px rgba(16,185,129,0.5); }

  .qe-ans-count {
    font-size: 11px;
    font-family: var(--mono);
    color: var(--text3);
    flex: 1;
    text-align: center;
  }

  /* ── Sending overlay ── */
  .qe-overlay {
    position: fixed;
    inset: 0;
    background: rgba(8,12,24,0.88);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 200;
    backdrop-filter: blur(8px);
    animation: qeFadeIn 0.2s ease;
  }

  .qe-spinner {
    width: 46px; height: 46px;
    border: 3px solid var(--border);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: qeSpin 0.75s linear infinite;
    margin-bottom: 16px;
  }

  .qe-overlay-txt { font-family: var(--mono); color: var(--text3); font-size: 13px; }

  /* ── Result screen ── */
  .qe-result {
    text-align: center;
    animation: qeZoomIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both;
  }

  .qe-ring-wrap {
    position: relative;
    width: 160px; height: 160px;
    margin: 0 auto 24px;
  }

  .qe-ring-wrap svg { transform: rotate(-90deg); }

  .qe-ring-val {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .qe-ring-num {
    font-size: 34px;
    font-family: var(--mono);
    font-weight: 700;
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .qe-ring-lbl { font-size: 10px; color: var(--text3); font-family: var(--mono); }

  .qe-result-title { font-size: 26px; font-weight: 700; margin-bottom: 8px; }
  .qe-result-sub { color: var(--text3); font-size: 13px; margin-bottom: 30px; font-family: var(--mono); }

  .qe-stat-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    margin-bottom: 28px;
  }

  .qe-stat {
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 14px;
    padding: 18px 10px;
    text-align: center;
  }

  .qe-stat-val { font-size: 26px; font-family: var(--mono); font-weight: 700; color: var(--text); }
  .qe-stat-lbl { font-size: 11px; color: var(--text3); margin-top: 4px; }

  .qe-btn-retry {
    background: var(--surface2);
    border: 1px solid var(--border);
    color: var(--text2);
    padding: 13px 28px;
    border-radius: 12px;
    font-family: var(--sans);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.18s;
  }
  .qe-btn-retry:hover { border-color: var(--accent); color: var(--accent); }

  /* ── Keyframes ── */
  @keyframes qeFadeDown { from { opacity:0; transform:translateY(-18px); } to { opacity:1; transform:translateY(0); } }
  @keyframes qeFadeUp   { from { opacity:0; transform:translateY(18px); }  to { opacity:1; transform:translateY(0); } }
  @keyframes qeFadeIn   { from { opacity:0; } to { opacity:1; } }
  @keyframes qeZoomIn   { from { opacity:0; transform:scale(0.88); } to { opacity:1; transform:scale(1); } }
  @keyframes qeSpin     { to { transform:rotate(360deg); } }
  @keyframes qePulse    { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.45; transform:scale(0.75); } }
`;

export default function QuizElektronika() {
  const [identity, setIdentity] = useState({ nama: "", nim: "", kelas: "", kelompok: "" });
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState({});
  const [phase, setPhase] = useState("quiz"); // "quiz" | "result"
  const [sending, setSending] = useState(false);

  const q = questions[current];
  const answeredCount = Object.keys(answers).length;
  const pct = Math.round((current / questions.length) * 100);

  const handleIdentity = (key, val) => setIdentity(prev => ({ ...prev, [key]: val }));

  const handleAnswer = (label) => setAnswers(prev => ({ ...prev, [current]: label }));

  const calcScore = () => questions.reduce((s, q, i) => s + (answers[i] === q.answer ? q.points : 0), 0);

  const submitQuiz = async () => {
    if (!identity.nama || !identity.nim) {
      alert("Harap isi Nama dan NIM terlebih dahulu.");
      return;
    }
    if (answeredCount < questions.length) {
      const unanswered = questions.length - answeredCount;
      if (!confirm(`Masih ada ${unanswered} soal yang belum dijawab. Tetap submit?`)) return;
    }

    const data = { ...identity, nilai: calcScore(), jawaban: answers };
    setSending(true);
    try {
      await fetch(GOOGLE_SCRIPT_URL, { method: "POST", body: JSON.stringify(data) });
      setPhase("result");
    } catch (err) {
      alert("Gagal mengirim data. Periksa koneksi internet.");
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  const retry = () => {
    setAnswers({});
    setCurrent(0);
    setPhase("quiz");
  };

  // ── Result Screen ──────────────────────────────────────────────────────────
  if (phase === "result") {
    const score = calcScore();
    const correct = questions.filter((q, i) => answers[i] === q.answer).length;
    const pctScore = Math.round((score / TOTAL_POINTS) * 100);
    const circ = 2 * Math.PI * 60;
    const dash = (pctScore / 100) * circ;
    const emoji = pctScore >= 80 ? "🎉 Luar Biasa!" : pctScore >= 60 ? "👍 Bagus!" : "💪 Terus Belajar!";

    return (
      <>
        <style>{css}</style>
        <div className="qe-root">
          <div className="qe-inner">
            <div className="qe-header">
              <div className="qe-badge"><span className="qe-badge-dot" />⚡ Elektronika</div>
              <div className="qe-h1">Hasil Kuis</div>
              <div className="qe-sub">Praktikum Acara 2 &amp; Acara 3</div>
            </div>
            <div className="qe-card qe-result">
              <div className="qe-ring-wrap">
                <svg width="160" height="160" viewBox="0 0 160 160">
                  <circle cx="80" cy="80" r="60" fill="none" stroke="#1b2847" strokeWidth="10" />
                  <circle cx="80" cy="80" r="60" fill="none"
                    stroke="url(#qeGrad)" strokeWidth="10"
                    strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" />
                  <defs>
                    <linearGradient id="qeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="qe-ring-val">
                  <div className="qe-ring-num">{pctScore}%</div>
                  <div className="qe-ring-lbl">Nilai</div>
                </div>
              </div>
              <div className="qe-result-title">{emoji}</div>
              <div className="qe-result-sub">{identity.nama || "Mahasiswa"} · {identity.nim || "-"}</div>
              <div className="qe-stat-grid">
                <div className="qe-stat"><div className="qe-stat-val">{score}</div><div className="qe-stat-lbl">Total Poin</div></div>
                <div className="qe-stat"><div className="qe-stat-val">{correct}</div><div className="qe-stat-lbl">Benar</div></div>
                <div className="qe-stat"><div className="qe-stat-val">{questions.length - correct}</div><div className="qe-stat-lbl">Salah</div></div>
              </div>
              <button className="qe-btn-retry" onClick={retry}>↩ Ulangi Kuis</button>
            </div>
          </div>
        </div>
      </>
    );
  }

  // ── Quiz Screen ────────────────────────────────────────────────────────────
  return (
    <>
      <style>{css}</style>
      {sending && (
        <div className="qe-overlay">
          <div className="qe-spinner" />
          <div className="qe-overlay-txt">Mengirim jawaban...</div>
        </div>
      )}
      <div className="qe-root">
        <div className="qe-inner">

          {/* Header */}
          <div className="qe-header">
            <div className="qe-badge"><span className="qe-badge-dot" />⚡ Elektronika</div>
            <div className="qe-h1">Kuis Elektronika</div>
            <div className="qe-sub">Praktikum Acara 2 &amp; Acara 3 · {questions.length} Soal · {TOTAL_POINTS} Poin Total</div>
          </div>

          {/* Identity */}
          <div className="qe-card">
            <div className="qe-section-label">— Data Mahasiswa</div>
            <div className="qe-id-grid">
              {[
                { key: "nama", label: "Nama", placeholder: "Nama lengkap" },
                { key: "nim",  label: "NIM",  placeholder: "Nomor Induk Mahasiswa" },
                { key: "kelas",     label: "Kelas",    placeholder: "Kelas" },
                { key: "kelompok",  label: "Kelompok", placeholder: "Kelompok" },
              ].map(({ key, label, placeholder }) => (
                <div className="qe-field" key={key}>
                  <label>{label}</label>
                  <input
                    type="text"
                    placeholder={placeholder}
                    value={identity[key]}
                    onChange={e => handleIdentity(key, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Progress */}
          <div className="qe-progress-row">
            <div className="qe-bar-bg">
              <div className="qe-bar-fill" style={{ width: `${pct}%` }} />
            </div>
            <div className="qe-progress-txt">{current + 1} / {questions.length}</div>
          </div>

          {/* Nav dots */}
          <div className="qe-dots">
            {questions.map((_, i) => {
              let cls = "qe-dot";
              if (i === current) cls += " current";
              else if (answers[i] !== undefined) cls += " answered";
              return (
                <div key={i} className={cls} onClick={() => setCurrent(i)}>{i + 1}</div>
              );
            })}
          </div>

          {/* Question */}
          <div className="qe-qcard">
            <div className="qe-qmeta">
              <span className={`qe-qtag ${q.category === "Acara 2" ? "a2" : "a3"}`}>{q.category}</span>
              <span className="qe-qpoints">+{q.points} poin</span>
            </div>
            <div className="qe-qtext">{current + 1}. {q.question}</div>
            <div className="qe-options">
              {q.options.map((opt, i) => {
                const lbl = LABELS[i];
                const sel = answers[current] === lbl;
                return (
                  <div
                    key={i}
                    className={`qe-option${sel ? " sel" : ""}`}
                    onClick={() => handleAnswer(lbl)}
                  >
                    <div className="qe-opt-letter">{lbl}</div>
                    <div className="qe-opt-text">{opt}</div>
                  </div>
                );
              })}
            </div>
            <div className="qe-actions">
              <button
                className="qe-btn qe-btn-prev"
                disabled={current === 0}
                onClick={() => setCurrent(c => c - 1)}
              >← Sebelumnya</button>

              <span className="qe-ans-count">{answeredCount} / {questions.length} dijawab</span>

              {current < questions.length - 1 ? (
                <button
                  className="qe-btn qe-btn-next"
                  onClick={() => setCurrent(c => c + 1)}
                >Berikutnya →</button>
              ) : (
                <button
                  className="qe-btn qe-btn-submit"
                  onClick={submitQuiz}
                >Submit ✓</button>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}