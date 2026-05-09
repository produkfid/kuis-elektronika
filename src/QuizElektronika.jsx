import React, { useState, useEffect, useRef } from "react";

const questions = [
  // ── ACARA 4 — 5 poin
  { category: "Acara 4", points: 5, question: "Komponen elektronika yang digunakan untuk mendeteksi intensitas cahaya adalah...", options: ["Transistor", "Kapasitor", "LDR", "Dioda"], answer: "C" },
  { category: "Acara 4", points: 5, question: "Kepanjangan dari LDR adalah...", options: ["Light Dependent Resistor", "Low Dynamic Resistor", "Light Digital Relay", "Low Dependent Relay"], answer: "A" },
  { category: "Acara 4", points: 5, question: "Nilai resistansi LDR akan menjadi kecil ketika...", options: ["Tidak dialiri arus", "Terkena cahaya", "Dalam kondisi gelap", "Tegangan diputus"], answer: "B" },
  { category: "Acara 4", points: 5, question: "Fungsi utama sensor cahaya dalam bidang pertanian adalah...", options: ["Mengukur kelembapan tanah", "Mengukur suhu udara", "Mengawasi intensitas cahaya tanaman", "Mengukur kandungan pupuk"], answer: "C" },
  { category: "Acara 4", points: 5, question: "Intensitas cahaya merupakan...", options: ["Jumlah arus listrik dalam rangkaian", "Jumlah energi radiasi cahaya pada arah tertentu", "Hambatan total suatu rangkaian", "Tegangan keluaran sensor"], answer: "B" },
  // ── ACARA 4 — 7 poin
  { category: "Acara 4", points: 7, question: "Pada kondisi gelap, nilai resistansi LDR akan...", options: ["Tetap", "Menjadi nol", "Menjadi kecil", "Menjadi besar"], answer: "D" },
  { category: "Acara 4", points: 7, question: "Rangkaian pembagi tegangan berfungsi untuk...", options: ["Memperbesar arus listrik", "Membagi tegangan input menjadi beberapa output", "Mengubah AC menjadi DC", "Mengurangi hambatan total"], answer: "B" },
  { category: "Acara 4", points: 7, question: "Alat yang digunakan untuk mengukur intensitas cahaya adalah...", options: ["Multimeter", "Lux meter", "Osiloskop", "Amperemeter"], answer: "B" },
  { category: "Acara 4", points: 7, question: "Jembatan Wheatstone umumnya digunakan untuk...", options: ["Mengukur suhu", "Mengukur tegangan tinggi", "Mengukur resistansi yang tidak diketahui", "Mengukur frekuensi"], answer: "C" },
  { category: "Acara 4", points: 7, question: "Komponen yang digunakan sebagai sumber tegangan pada praktikum adalah...", options: ["Potensio", "Resistor", "Power supply", "LED"], answer: "C" },
  // ── ACARA 4 — 8 poin
  { category: "Acara 4", points: 8, question: "Pada prosedur praktikum, tegangan power supply diatur sebesar...", options: ["3 volt", "5 volt", "6 volt", "12 volt"], answer: "C" },
  { category: "Acara 4", points: 8, question: "Alat yang digunakan untuk mengukur tegangan dan hambatan listrik adalah...", options: ["Lux meter", "Termometer", "Multimeter", "Voltmeter"], answer: "C" },
  { category: "Acara 4", points: 8, question: "Dalam rangkaian Wheatstone, dua kaki rangkaian harus berada dalam kondisi...", options: ["Terbuka", "Seimbang", "Panas", "Tertutup"], answer: "B" },
  { category: "Acara 4", points: 8, question: "Salah satu aplikasi sensor LDR dalam kehidupan sehari-hari adalah...", options: ["Mesin cuci otomatis", "Pengaturan kecerahan layar", "Pengukur tekanan udara", "Pengatur volume suara"], answer: "B" },
  { category: "Acara 4", points: 8, question: "Pada praktikum, kondisi pengukuran LDR dilakukan pada keadaan berikut, kecuali...", options: ["LDR terbuka", "LDR tertutup", "LDR terkena cahaya", "LDR dipanaskan"], answer: "D" },
  // ── ACARA 5 — 5 poin
  { category: "Acara 5", points: 5, question: "Berapakah besar kenaikan tegangan keluaran sensor LM35 untuk setiap kenaikan suhu sebesar 1°C?", options: ["100 mV", "0,5 mV", "10 mV", "1 mV"], answer: "C" },
  { category: "Acara 5", points: 5, question: "Jika sensor LM35 mendeteksi suhu sebesar 30 derajat celcius, berapakah tegangan keluaran yang dihasilkan?", options: ["300 mV", "30 mV", "0,3 mV", "3 mV"], answer: "A" },
  { category: "Acara 5", points: 5, question: "Faktor apa yang dapat menyebabkan pembacaan suhu pada sensor LM35 menjadi kurang akurat karena peningkatan suhu internal sensor?", options: ["Penggunaan Simulasi Proteus yang terlalu lama", "Arus yang terlalu rendah", "Tegangan suplai yang terlalu tinggi", "Impedansi keluaran yang rendah"], answer: "C" },
  { category: "Acara 5", points: 5, question: "Berapakah rentang tegangan kerja yang diperbolehkan untuk mengoperasikan sensor LM35?", options: ["Hanya tepat 10V", "10V sampai 50V", "0V sampai 5V", "4V sampai 30V"], answer: "D" },
  { category: "Acara 5", points: 5, question: "Berapakah jangkauan maksimal operasi suhu untuk sensor LM35?", options: ["–55°C sampai +150°C", "0°C sampai +100°C", "–50°C sampai +50°C", "–100°C sampai +200°C"], answer: "A" },
  // ── ACARA 5 — 7 poin
  { category: "Acara 5", points: 7, question: "Apa judul acara 5?", options: ["Pengukuran Tegangan dan Arus", "Simulasi Rangkaian Elektronika Dasar", "Karakteristik Sensor Suhu Digital", "Karakteristik dan Kalibrasi Sensor Suhu (LM35)"], answer: "D" },
  { category: "Acara 5", points: 7, question: "Persamaan yang benar untuk keluaran sensor LM35 adalah...", options: ["V = T / 10", "V = T × 10 mV", "V = T² × 10", "V = 10 / T"], answer: "B" },
  { category: "Acara 5", points: 7, question: "Sensor LM35 memiliki hubungan antara suhu dan tegangan yang bersifat...", options: ["Eksponensial", "Logaritmik", "Linier", "Acak"], answer: "C" },
  { category: "Acara 5", points: 7, question: "Sensor LM35 termasuk jenis sensor...", options: ["Digital", "Analog", "Optik", "Mekanik"], answer: "B" },
  { category: "Acara 5", points: 7, question: "Efek self-heating pada sensor LM35 adalah kondisi di mana...", options: ["Sensor tidak menghasilkan tegangan", "Sensor menghasilkan arus besar", "Suhu internal sensor meningkat akibat penggunaan", "Sensor menjadi dingin saat digunakan"], answer: "C" },
  // ── ACARA 5 — 8 poin
  { category: "Acara 5", points: 8, question: "Upaya yang dapat dilakukan untuk mengurangi efek self-heating adalah...", options: ["Menaikkan tegangan suplai", "Menggunakan tegangan sesuai spesifikasi", "Menambah beban rangkaian", "Mengurangi suhu lingkungan"], answer: "B" },
  { category: "Acara 5", points: 8, question: "Efek apa yang terdapat pada sensor LM35 yang dapat memengaruhi hasil pengukuran?", options: ["Efek induksi", "Efek kapasitif", "Efek self-heating", "Efek resonansi"], answer: "C" },
  { category: "Acara 5", points: 8, question: "Sensor apa yang digunakan dalam praktikum ini?", options: ["DHT11", "Termokopel", "LM35", "LDR"], answer: "C" },
  { category: "Acara 5", points: 8, question: "Alat dan bahan apa yang digunakan pada praktikum kali ini?", options: ["LM016L, Arduino UNO, Sensor suhu LM35", "Multimeter, Osiloskop, Generator sinyal", "Motor DC, Relay, Baterai", "Termokopel, Transformator, Amperemeter"], answer: "A" },
  { category: "Acara 5", points: 8, question: "Berapakah tingkat ketidaklinieran (non-linearity) pada sensor LM35?", options: ["±5°C", "±1°C", "±½°C", "±¼°C"], answer: "C" },
];

const LABELS      = ["A", "B", "C", "D"];
const TOTAL_POINTS = questions.reduce((s, q) => s + q.points, 0);

// ── URL Google Apps Script terbaru ──────────────────────────────────────────
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbx0H8WPRLb73B5WI-TRECtLCg6gc_UVq9VkBBszYRgKuF98p60izBVzA2cB_pvNwXfi/exec";
const VALID_UNLOCK_CODES = ["A1C024", "A1C025"];

const OPTION_COLORS = [
  { bg: "#EBF4FF", border: "#93C5FD", selBg: "#3B82F6", selBorder: "#1D4ED8", text: "#1E40AF", selText: "#FFFFFF", dot: "#3B82F6" },
  { bg: "#ECFDF5", border: "#6EE7B7", selBg: "#10B981", selBorder: "#059669", text: "#065F46", selText: "#FFFFFF", dot: "#10B981" },
  { bg: "#FFFBEB", border: "#FCD34D", selBg: "#F59E0B", selBorder: "#D97706", text: "#92400E", selText: "#FFFFFF", dot: "#F59E0B" },
  { bg: "#FFF1F2", border: "#FDA4AF", selBg: "#F43F5E", selBorder: "#E11D48", text: "#9F1239", selText: "#FFFFFF", dot: "#F43F5E" },
];

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&family=Space+Mono:wght@700&display=swap');
  * { box-sizing: border-box; margin: 0; padding: 0; }

  .qe-root {
    background: linear-gradient(135deg, #F0F9FF 0%, #FEF9FF 50%, #F0FDF4 100%);
    min-height: 100vh; font-family: 'Nunito', sans-serif; padding: 32px 20px 72px;
  }
  .qe-inner { max-width: 720px; margin: 0 auto; }
  .qe-header { text-align: center; margin-bottom: 32px; }
  .qe-badge {
    display: inline-flex; align-items: center; gap: 7px;
    background: #EEF2FF; border: 1.5px solid #C7D2FE; border-radius: 100px;
    padding: 5px 16px; font-size: 12px; font-weight: 700; color: #4338CA;
    letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 14px;
  }
  .qe-badge-dot { width: 7px; height: 7px; background: #6366F1; border-radius: 50%; animation: qePulse 2s infinite; }
  .qe-h1 { font-size: 32px; font-weight: 800; color: #1E1B4B; margin-bottom: 6px; }
  .qe-sub { color: #6B7280; font-size: 13px; font-weight: 600; }

  .qe-card { background: #FFFFFF; border: 1.5px solid #E5E7EB; border-radius: 20px; padding: 24px; margin-bottom: 18px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); }
  .qe-section-label { font-size: 11px; font-weight: 700; color: #9CA3AF; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 14px; }
  .qe-id-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .qe-field label { display: block; font-size: 11px; font-weight: 700; color: #6B7280; text-transform: uppercase; letter-spacing: 0.07em; margin-bottom: 5px; }
  .qe-field input { width: 100%; background: #F9FAFB; border: 1.5px solid #E5E7EB; border-radius: 12px; padding: 10px 14px; color: #111827; font-family: 'Nunito', sans-serif; font-size: 14px; font-weight: 600; outline: none; transition: border-color 0.2s, box-shadow 0.2s; }
  .qe-field input:focus { border-color: #818CF8; box-shadow: 0 0 0 3px rgba(129,140,248,0.2); background: #fff; }
  .qe-field input:disabled { opacity: 0.5; cursor: not-allowed; }
  .qe-field input::placeholder { color: #9CA3AF; }

  .qe-start-wrap { display: flex; justify-content: center; margin-bottom: 18px; }
  .qe-btn-start { display: inline-flex; align-items: center; gap: 10px; padding: 14px 44px; border-radius: 16px; border: none; font-family: 'Nunito', sans-serif; font-size: 16px; font-weight: 800; cursor: pointer; background: linear-gradient(135deg, #6366F1, #8B5CF6); color: #fff; box-shadow: 0 4px 20px rgba(99,102,241,0.4); transition: all 0.2s; }
  .qe-btn-start:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(99,102,241,0.5); }

  .qe-timer-bar { display: flex; justify-content: center; margin-bottom: 18px; }
  .qe-timer { display: inline-flex; align-items: center; gap: 10px; background: #fff; border: 2px solid #E5E7EB; border-radius: 100px; padding: 10px 28px; font-family: 'Space Mono', monospace; font-size: 22px; font-weight: 700; color: #374151; box-shadow: 0 2px 8px rgba(0,0,0,0.07); transition: all 0.3s; }
  .qe-timer.warning { color: #D97706; border-color: #FCD34D; background: #FFFBEB; }
  .qe-timer.danger  { color: #DC2626; border-color: #FCA5A5; background: #FEF2F2; animation: qeShake 0.5s ease infinite; }

  .qe-progress-row { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; }
  .qe-bar-bg { flex: 1; height: 8px; background: #E5E7EB; border-radius: 100px; overflow: hidden; }
  .qe-bar-fill { height: 100%; background: linear-gradient(90deg, #6366F1, #8B5CF6); border-radius: 100px; transition: width 0.4s cubic-bezier(0.4,0,0.2,1); }
  .qe-progress-txt { font-size: 13px; font-weight: 700; color: #6B7280; white-space: nowrap; }

  .qe-dots { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 20px; }
  .qe-dot { width: 32px; height: 32px; border-radius: 10px; border: 1.5px solid #E5E7EB; background: #fff; font-size: 11px; font-weight: 700; color: #9CA3AF; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.18s; user-select: none; }
  .qe-dot:hover { border-color: #818CF8; color: #6366F1; background: #EEF2FF; }
  .qe-dot.answered { background: #EEF2FF; border-color: #818CF8; color: #4338CA; }
  .qe-dot.current  { background: #6366F1; border-color: #6366F1; color: #fff; }

  .qe-qcard { background: #fff; border: 1.5px solid #E5E7EB; border-radius: 20px; padding: 28px; box-shadow: 0 2px 12px rgba(0,0,0,0.06); position: relative; overflow: hidden; }
  .qe-qcard::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg, #6366F1, #8B5CF6, #EC4899); border-radius: 20px 20px 0 0; }
  .qe-qmeta { display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px; }
  .qe-qtag { font-size: 12px; font-weight: 700; padding: 5px 14px; border-radius: 100px; }
  .qe-qtag.a4 { color: #B45309; background: #FFFBEB; border: 1.5px solid #FCD34D; }
  .qe-qtag.a5 { color: #5B21B6; background: #EDE9FE; border: 1.5px solid #C4B5FD; }
  .qe-qpoints { font-size: 12px; font-weight: 700; color: #065F46; background: #ECFDF5; border: 1.5px solid #6EE7B7; padding: 5px 14px; border-radius: 100px; }
  .qe-qtext { font-size: 17px; font-weight: 700; line-height: 1.6; color: #111827; margin-bottom: 22px; }

  .qe-options { display: flex; flex-direction: column; gap: 10px; }
  .qe-option { display: flex; align-items: center; gap: 14px; padding: 14px 18px; border-radius: 14px; border: 2px solid; cursor: pointer; transition: all 0.18s; user-select: none; }
  .qe-option:hover { transform: translateX(4px); filter: brightness(0.97); }
  .qe-opt-circle { width: 34px; height: 34px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: 'Space Mono', monospace; font-size: 12px; font-weight: 700; flex-shrink: 0; border: 2px solid currentColor; transition: all 0.18s; }
  .qe-opt-text { font-size: 14px; font-weight: 600; line-height: 1.4; transition: color 0.18s; }

  .qe-actions { display: flex; align-items: center; justify-content: space-between; margin-top: 26px; gap: 12px; }
  .qe-btn { display: inline-flex; align-items: center; gap: 8px; padding: 12px 22px; border-radius: 12px; border: none; font-family: 'Nunito', sans-serif; font-size: 14px; font-weight: 800; cursor: pointer; transition: all 0.18s; outline: none; white-space: nowrap; }
  .qe-btn-prev { background: #F3F4F6; border: 1.5px solid #E5E7EB; color: #6B7280; }
  .qe-btn-prev:hover:not(:disabled) { background: #E5E7EB; color: #374151; }
  .qe-btn-prev:disabled { opacity: 0.35; cursor: not-allowed; }
  .qe-btn-next { background: #6366F1; color: #fff; box-shadow: 0 4px 14px rgba(99,102,241,0.4); }
  .qe-btn-next:hover { background: #4F46E5; transform: translateY(-1px); }
  .qe-btn-submit { background: #10B981; color: #fff; box-shadow: 0 4px 14px rgba(16,185,129,0.4); }
  .qe-btn-submit:hover { background: #059669; transform: translateY(-1px); }
  .qe-ans-count { font-size: 12px; font-weight: 700; color: #9CA3AF; flex: 1; text-align: center; }

  .qe-overlay { position: fixed; inset: 0; background: rgba(255,255,255,0.88); display: flex; flex-direction: column; align-items: center; justify-content: center; z-index: 200; backdrop-filter: blur(6px); }
  .qe-spinner { width: 52px; height: 52px; border: 4px solid #E5E7EB; border-top-color: #6366F1; border-radius: 50%; animation: qeSpin 0.75s linear infinite; margin-bottom: 16px; }
  .qe-overlay-txt { font-family: 'Nunito', sans-serif; font-weight: 700; color: #6B7280; font-size: 14px; }
  .qe-overlay-sub { font-family: 'Nunito', sans-serif; font-weight: 600; color: #9CA3AF; font-size: 12px; margin-top: 6px; }

  .qe-locked { min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #FEF2F2; font-family: 'Nunito', sans-serif; color: #111827; padding: 40px; gap: 14px; text-align: center; }
  .qe-locked-icon { font-size: 64px; }
  .qe-locked-title { font-size: 22px; font-weight: 800; color: #DC2626; }
  .qe-locked-desc { color: #6B7280; font-size: 14px; font-weight: 600; max-width: 340px; line-height: 1.6; }

  .qe-modal-backdrop { position: fixed; inset: 0; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 300; backdrop-filter: blur(4px); animation: qeFadeIn 0.2s ease both; }
  .qe-modal { background: #fff; border-radius: 24px; padding: 32px; max-width: 380px; width: 90%; box-shadow: 0 20px 60px rgba(0,0,0,0.2); animation: qeZoomIn 0.3s cubic-bezier(0.34,1.56,0.64,1) both; text-align: center; }
  .qe-modal-icon { font-size: 48px; margin-bottom: 12px; }
  .qe-modal-title { font-size: 20px; font-weight: 800; color: #1E1B4B; margin-bottom: 6px; }
  .qe-modal-desc  { color: #6B7280; font-size: 13px; font-weight: 600; margin-bottom: 20px; line-height: 1.5; }
  .qe-modal-input { width: 100%; padding: 12px 16px; border-radius: 12px; border: 2px solid #E5E7EB; font-family: 'Space Mono', monospace; font-size: 18px; font-weight: 700; text-align: center; color: #1E1B4B; letter-spacing: 0.15em; outline: none; margin-bottom: 8px; transition: border-color 0.2s, box-shadow 0.2s; }
  .qe-modal-input:focus { border-color: #6366F1; box-shadow: 0 0 0 3px rgba(99,102,241,0.2); }
  .qe-modal-input.error { border-color: #F43F5E; animation: qeShake 0.4s ease; }
  .qe-modal-err { font-size: 12px; font-weight: 700; color: #F43F5E; margin-bottom: 16px; min-height: 18px; }
  .qe-modal-actions { display: flex; gap: 10px; }
  .qe-btn-cancel { flex: 1; padding: 12px; border-radius: 12px; border: 1.5px solid #E5E7EB; background: #F9FAFB; color: #6B7280; font-family: 'Nunito', sans-serif; font-size: 14px; font-weight: 800; cursor: pointer; transition: all 0.18s; }
  .qe-btn-cancel:hover { background: #E5E7EB; color: #374151; }
  .qe-btn-unlock { flex: 1; padding: 12px; border-radius: 12px; border: none; background: linear-gradient(135deg, #6366F1, #8B5CF6); color: #fff; font-family: 'Nunito', sans-serif; font-size: 14px; font-weight: 800; cursor: pointer; transition: all 0.18s; box-shadow: 0 4px 14px rgba(99,102,241,0.4); }
  .qe-btn-unlock:hover { transform: translateY(-1px); }

  .qe-result { text-align: center; animation: qeZoomIn 0.5s cubic-bezier(0.34,1.56,0.64,1) both; }
  .qe-ring-wrap { position: relative; width: 160px; height: 160px; margin: 0 auto 24px; }
  .qe-ring-wrap svg { transform: rotate(-90deg); }
  .qe-ring-val { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; }
  .qe-ring-num { font-size: 36px; font-family: 'Space Mono', monospace; font-weight: 700; color: #4338CA; }
  .qe-ring-lbl { font-size: 11px; font-weight: 700; color: #9CA3AF; }
  .qe-result-title { font-size: 26px; font-weight: 800; color: #1E1B4B; margin-bottom: 8px; }
  .qe-result-sub   { color: #6B7280; font-size: 13px; font-weight: 600; margin-bottom: 28px; line-height: 1.7; }
  .qe-stat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
  .qe-stat { border-radius: 16px; padding: 18px 10px; text-align: center; }
  .qe-stat.s1 { background: #EEF2FF; } .qe-stat.s2 { background: #ECFDF5; } .qe-stat.s3 { background: #FFF1F2; }
  .qe-stat-val { font-size: 28px; font-family: 'Space Mono', monospace; font-weight: 700; }
  .qe-stat.s1 .qe-stat-val { color: #4338CA; } .qe-stat.s2 .qe-stat-val { color: #065F46; } .qe-stat.s3 .qe-stat-val { color: #9F1239; }
  .qe-stat-lbl { font-size: 12px; font-weight: 700; color: #6B7280; margin-top: 4px; }
  .qe-sent-notice { display: inline-flex; align-items: center; gap: 6px; background: #ECFDF5; border: 1.5px solid #6EE7B7; border-radius: 100px; padding: 6px 16px; font-size: 12px; font-weight: 700; color: #065F46; margin-bottom: 20px; }

  @keyframes qeFadeDown  { from { opacity:0; transform:translateY(-16px); } to { opacity:1; transform:translateY(0); } }
  @keyframes qeFadeUp    { from { opacity:0; transform:translateY(16px); }  to { opacity:1; transform:translateY(0); } }
  @keyframes qeFadeIn    { from { opacity:0; } to { opacity:1; } }
  @keyframes qeZoomIn    { from { opacity:0; transform:scale(0.88); } to { opacity:1; transform:scale(1); } }
  @keyframes qeSpin      { to { transform:rotate(360deg); } }
  @keyframes qePulse     { 0%,100% { opacity:1; transform:scale(1); } 50% { opacity:0.4; transform:scale(0.75); } }
  @keyframes qeShake     { 0%,100% { transform:translateX(0); } 25% { transform:translateX(-5px); } 75% { transform:translateX(5px); } }
`;

export default function QuizElektronika() {
  const [identity, setIdentity]     = useState({ nama: "", nim: "", kelas: "", kelompok: "" });
  const [current, setCurrent]       = useState(0);
  const [answers, setAnswers]       = useState({});
  const [started, setStarted]       = useState(false);
  const [locked, setLocked]         = useState(false);
  const [timeLeft, setTimeLeft]     = useState(900);
  const [phase, setPhase]           = useState("quiz");
  const [sending, setSending]       = useState(false);
  const [showUnlock, setShowUnlock] = useState(false);
  const [unlockCode, setUnlockCode] = useState("");
  const [unlockError, setUnlockError] = useState("");
  const [inputShake, setInputShake] = useState(false);
  const unlockInputRef = useRef(null);

  const q             = questions[current];
  const answeredCount = Object.keys(answers).length;
  const pct           = Math.round((current / questions.length) * 100);

  // ── Timer ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (!started || locked || phase === "result") return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) { clearInterval(timer); handleSubmit(true); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [started, locked, phase]);

  // ── Tab visibility → lock ──────────────────────────────────────────────────
  useEffect(() => {
    const handleVisibility = () => {
      if (document.hidden && started && phase === "quiz") setLocked(true);
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [started, phase]);

  // ── Auto-focus unlock input ────────────────────────────────────────────────
  useEffect(() => {
    if (showUnlock && unlockInputRef.current) {
      setTimeout(() => unlockInputRef.current?.focus(), 100);
    }
  }, [showUnlock]);

  const formatTime = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;
  const timerClass  = timeLeft <= 60 ? "danger" : timeLeft <= 180 ? "warning" : "";

  const handleIdentity = (key, val) => setIdentity(prev => ({ ...prev, [key]: val }));
  const handleAnswer   = (label)    => setAnswers(prev => ({ ...prev, [current]: label }));

  const startQuiz = () => {
    if (!identity.nama || !identity.nim || !identity.kelas || !identity.kelompok) {
      alert("Lengkapi semua identitas terlebih dahulu!");
      return;
    }
    setStarted(true);
  };

  const handleUnlockAttempt = () => {
    const code = unlockCode.trim().toUpperCase();
    if (VALID_UNLOCK_CODES.includes(code)) {
      setLocked(false); setShowUnlock(false); setUnlockCode(""); setUnlockError("");
    } else {
      setUnlockError("Kode tidak valid. Hubungi pengawas.");
      setInputShake(true);
      setTimeout(() => setInputShake(false), 500);
    }
  };

  const handleUnlockKeyDown = (e) => {
    if (e.key === "Enter")  handleUnlockAttempt();
    if (e.key === "Escape") { setShowUnlock(false); setUnlockCode(""); setUnlockError(""); }
  };

  const calcScore = () =>
    questions.reduce((s, q, i) => s + (answers[i] === q.answer ? q.points : 0), 0);

  // ── SUBMIT — dual method (GET + POST no-cors) untuk maksimalkan keberhasilan ─
  const handleSubmit = (auto = false) => {
    if (!auto) {
      const unanswered = questions.length - answeredCount;
      if (unanswered > 0 && !confirm(`Masih ada ${unanswered} soal yang belum dijawab. Tetap submit?`)) return;
    }

    setSending(true);

    const submitTime = new Date().toLocaleString("id-ID");
    const score = calcScore();
    const jawabanDetail = questions.map((q, i) => {
      const jawaban = answers[i] || "-";
      const benar   = jawaban === q.answer ? "benar" : "salah";
      return `Q${i + 1}:${jawaban}(${benar})`;
    }).join(",");

    const payload = {
      waktu_submit:   submitTime,
      nama:           identity.nama,
      nim:            identity.nim,
      kelas:          identity.kelas,
      kelompok:       identity.kelompok,
      nilai:          score,
      total_poin:     TOTAL_POINTS,
      jumlah_benar:   questions.filter((q, i) => answers[i] === q.answer).length,
      jumlah_soal:    questions.length,
      jawaban_detail: jawabanDetail,
    };

    // Metode GET: kirim via query string (doGet di GAS) — andal karena tidak ada CORS preflight
    // Metode GET: kirim via query string
        const params = new URLSearchParams(payload);

         fetch(`${GOOGLE_SCRIPT_URL}?${params.toString()}`, {
        method: "GET",
        mode: "no-cors"
  }).catch(() => {});
  

    // Tampilkan hasil setelah 2 detik
    setTimeout(() => {
      setSending(false);
      setPhase("result");
    }, 2000);
  };

  // ── LOCKED ─────────────────────────────────────────────────────────────────
  if (locked) {
    return (
      <>
        <style>{css}</style>
        {showUnlock && (
          <div className="qe-modal-backdrop" onClick={() => { setShowUnlock(false); setUnlockCode(""); setUnlockError(""); }}>
            <div className="qe-modal" onClick={e => e.stopPropagation()}>
              <div className="qe-modal-icon">🔑</div>
              <div className="qe-modal-title">Masukkan Kode Pengawas</div>
              <div className="qe-modal-desc">
                Masukkan kode kelas yang diberikan pengawas untuk membuka kembali ujian Anda.
              </div>
              <input
                ref={unlockInputRef}
                className={`qe-modal-input${inputShake ? " error" : ""}`}
                type="text"
                placeholder="Kode Kelas"
                value={unlockCode}
                onChange={e => { setUnlockCode(e.target.value.toUpperCase()); setUnlockError(""); }}
                onKeyDown={handleUnlockKeyDown}
                maxLength={10}
              />
              <div className="qe-modal-err">{unlockError}</div>
              <div className="qe-modal-actions">
                <button className="qe-btn-cancel" onClick={() => { setShowUnlock(false); setUnlockCode(""); setUnlockError(""); }}>Batal</button>
                <button className="qe-btn-unlock" onClick={handleUnlockAttempt}>🔓 Buka Kunci</button>
              </div>
            </div>
          </div>
        )}
        <div className="qe-locked">
          <div className="qe-locked-icon">🔒</div>
          <div className="qe-locked-title">Ujian Dikunci!</div>
          <div className="qe-locked-desc">
            Anda terdeteksi keluar dari tab ujian.<br />
            Hubungi pengawas untuk mendapatkan kode pembuka.
          </div>
          <button className="qe-btn-start" style={{ marginTop: 8 }} onClick={() => setShowUnlock(true)}>
            🔑 Masukkan Kode Pengawas
          </button>
        </div>
      </>
    );
  }

  // ── RESULT ─────────────────────────────────────────────────────────────────
  if (phase === "result") {
    const score    = calcScore();
    const correct  = questions.filter((q, i) => answers[i] === q.answer).length;
    const pctScore = Math.round((score / TOTAL_POINTS) * 100);
    const circ     = 2 * Math.PI * 60;
    const dash     = (pctScore / 100) * circ;
    const emoji    = pctScore >= 80 ? "🎉 Luar Biasa!" : pctScore >= 60 ? "👍 Bagus!" : "💪 Terus Belajar!";

    return (
      <>
        <style>{css}</style>
        <div className="qe-root">
          <div className="qe-inner">
            <div className="qe-header" style={{ animation: "qeFadeDown 0.6s ease both" }}>
              <div className="qe-badge"><span className="qe-badge-dot" />⚡ Elektronika</div>
              <div className="qe-h1">Hasil Kuis</div>
              <div className="qe-sub">Praktikum Acara 4 &amp; Acara 5</div>
            </div>
            <div className="qe-card qe-result">
              <div className="qe-sent-notice">✅ Jawaban berhasil dikirim ke sistem</div>
              <div className="qe-ring-wrap">
                <svg width="160" height="160" viewBox="0 0 160 160">
                  <circle cx="80" cy="80" r="60" fill="none" stroke="#E5E7EB" strokeWidth="12" />
                  <circle cx="80" cy="80" r="60" fill="none" stroke="url(#qeGrad)" strokeWidth="12"
                    strokeDasharray={`${dash} ${circ}`} strokeLinecap="round" />
                  <defs>
                    <linearGradient id="qeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#6366F1" />
                      <stop offset="100%" stopColor="#EC4899" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="qe-ring-val">
                  <div className="qe-ring-num">{pctScore}%</div>
                  <div className="qe-ring-lbl">Nilai</div>
                </div>
              </div>
              <div className="qe-result-title">{emoji}</div>
              <div className="qe-result-sub">
                {identity.nama}<br />
                {identity.nim} · {identity.kelas} · Kelompok {identity.kelompok}
              </div>
              <div className="qe-stat-grid">
                <div className="qe-stat s1"><div className="qe-stat-val">{score}</div><div className="qe-stat-lbl">Total Poin</div></div>
                <div className="qe-stat s2"><div className="qe-stat-val">{correct}</div><div className="qe-stat-lbl">Benar</div></div>
                <div className="qe-stat s3"><div className="qe-stat-val">{questions.length - correct}</div><div className="qe-stat-lbl">Salah</div></div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // ── QUIZ ───────────────────────────────────────────────────────────────────
  return (
    <>
      <style>{css}</style>

      {sending && (
        <div className="qe-overlay">
          <div className="qe-spinner" />
          <div className="qe-overlay-txt">Mengirim jawaban...</div>
          <div className="qe-overlay-sub">Mohon tunggu sebentar</div>
        </div>
      )}

      <div className="qe-root">
        <div className="qe-inner">

          <div className="qe-header" style={{ animation: "qeFadeDown 0.6s ease both" }}>
            <div className="qe-badge"><span className="qe-badge-dot" />⚡ Elektronika</div>
            <div className="qe-h1">Kuis Elektronika</div>
            <div className="qe-sub">Praktikum Acara 4 &amp; Acara 5 · {questions.length} Soal · {TOTAL_POINTS} Poin</div>
          </div>

          <div className="qe-card" style={{ animation: "qeFadeUp 0.5s ease 0.1s both" }}>
            <div className="qe-section-label">— Data Mahasiswa</div>
            <div className="qe-id-grid">
              {[
                { key: "nama",     label: "Nama",     placeholder: "Nama lengkap" },
                { key: "nim",      label: "NIM",      placeholder: "Nomor Induk Mahasiswa" },
                { key: "kelas",    label: "Kelas",    placeholder: "Kelas" },
                { key: "kelompok", label: "Kelompok", placeholder: "Kelompok" },
              ].map(({ key, label, placeholder }) => (
                <div className="qe-field" key={key}>
                  <label>{label}</label>
                  <input
                    type="text"
                    placeholder={placeholder}
                    value={identity[key]}
                    disabled={started}
                    onChange={e => handleIdentity(key, e.target.value)}
                  />
                </div>
              ))}
            </div>
          </div>

          {!started && (
            <div className="qe-start-wrap" style={{ animation: "qeFadeUp 0.5s ease 0.2s both" }}>
              <button className="qe-btn-start" onClick={startQuiz}>▶ Mulai Ujian</button>
            </div>
          )}

          {started && (
            <div className="qe-timer-bar" style={{ animation: "qeFadeUp 0.4s ease both" }}>
              <div className={`qe-timer ${timerClass}`}>⏱ {formatTime(timeLeft)}</div>
            </div>
          )}

          {started && (
            <>
              <div className="qe-progress-row">
                <div className="qe-bar-bg"><div className="qe-bar-fill" style={{ width: `${pct}%` }} /></div>
                <div className="qe-progress-txt">{current + 1} / {questions.length}</div>
              </div>

              <div className="qe-dots">
                {questions.map((_, i) => {
                  let cls = "qe-dot";
                  if (i === current) cls += " current";
                  else if (answers[i] !== undefined) cls += " answered";
                  return <div key={i} className={cls} onClick={() => setCurrent(i)}>{i + 1}</div>;
                })}
              </div>

              <div className="qe-qcard">
                <div className="qe-qmeta">
                  <span className={`qe-qtag ${q.category === "Acara 4" ? "a4" : "a5"}`}>{q.category}</span>
                  <span className="qe-qpoints">+{q.points} poin</span>
                </div>
                <div className="qe-qtext">{current + 1}. {q.question}</div>
                <div className="qe-options">
                  {q.options.map((opt, i) => {
                    const lbl = LABELS[i];
                    const sel = answers[current] === lbl;
                    const c   = OPTION_COLORS[i];
                    return (
                      <div key={i} className="qe-option" onClick={() => handleAnswer(lbl)}
                        style={{ backgroundColor: sel ? c.selBg : c.bg, borderColor: sel ? c.selBorder : c.border }}>
                        <div className="qe-opt-circle"
                          style={{ backgroundColor: sel ? "rgba(255,255,255,0.25)" : c.bg, borderColor: sel ? "rgba(255,255,255,0.6)" : c.dot, color: sel ? c.selText : c.dot }}>
                          {lbl}
                        </div>
                        <div className="qe-opt-text" style={{ color: sel ? c.selText : c.text }}>{opt}</div>
                      </div>
                    );
                  })}
                </div>
                <div className="qe-actions">
                  <button className="qe-btn qe-btn-prev" disabled={current === 0} onClick={() => setCurrent(c => c - 1)}>← Sebelumnya</button>
                  <span className="qe-ans-count">{answeredCount} / {questions.length} dijawab</span>
                  {current < questions.length - 1
                    ? <button className="qe-btn qe-btn-next" onClick={() => setCurrent(c => c + 1)}>Berikutnya →</button>
                    : <button className="qe-btn qe-btn-submit" onClick={() => handleSubmit(false)}>Submit ✓</button>
                  }
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </>
  );
}