// ============================================================
// 부부 유틸리티 위젯 로직 (Theme, BGM, Random Q, Missions, Dates)
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // 1. Theme Switcher
  const themeBtns = document.querySelectorAll('[data-set-theme]');
  const savedTheme = localStorage.getItem('alkong_theme') || 'dark';

  function setTheme(theme) {
    if (theme === 'lovely') {
      document.documentElement.setAttribute('data-theme', 'lovely');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('alkong_theme', theme);
    themeBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.setTheme === theme);
    });
  }

  setTheme(savedTheme);

  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => setTheme(btn.dataset.setTheme));
  });

  // 2. Back to Top
  const bttBtn = document.getElementById('back-to-top');
  if (bttBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) bttBtn.classList.add('visible');
      else bttBtn.classList.remove('visible');
    });
    bttBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // 3. BGM Player
  const bgmBtn = document.getElementById('btn-bgm');
  if (bgmBtn) {
    const eqBars = bgmBtn.querySelector('.eq-bars');
    let bgmAudio = null;
    let isPlaying = false;
    const BGM_URL = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3";

    bgmBtn.addEventListener('click', () => {
      if (!bgmAudio) {
        bgmAudio = new Audio(BGM_URL);
        bgmAudio.loop = true;
        bgmAudio.volume = 0.4;
      }
      
      if (isPlaying) {
        bgmAudio.pause();
        eqBars.classList.remove('playing');
        bgmBtn.classList.remove('active');
      } else {
        bgmAudio.play().catch(e => console.log('Audio play failed:', e));
        eqBars.classList.add('playing');
        bgmBtn.classList.add('active');
      }
      isPlaying = !isPlaying;
    });
  }

  // 4. Multi-Modal Logic (Questions, Missions, Dates)
  const openModalBtns = document.querySelectorAll('[data-open-modal]');
  const modals = document.querySelectorAll('.modal-overlay');
  const closeBtns = document.querySelectorAll('.modal-close');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-open-modal');
      const targetModal = document.getElementById(targetId);
      
      if (targetModal) {
        // Init content if needed before opening
        if (targetId === 'modal-questions') initQuestionModal();
        if (targetId === 'modal-mission') initMissionModal();
        if (targetId === 'modal-date') initDateModal();

        targetModal.classList.add('active');
      }
    });
  });

  closeBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.target.closest('.modal-overlay').classList.remove('active');
    });
  });

  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  });

  // --- 4.1 Question Modal Logic ---
  let currentQCategory = 'deep';
  function initQuestionModal() {
    const textEl = document.getElementById('q-modal-text');
    const qArray = widgetData.questions[currentQCategory];
    textEl.innerHTML = qArray[Math.floor(Math.random() * qArray.length)];
    
    // Set active tab
    document.querySelectorAll('.cat-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.cat === currentQCategory);
    });
  }

  document.querySelectorAll('.cat-tab').forEach(tab => {
    tab.addEventListener('click', (e) => {
      currentQCategory = e.target.dataset.cat;
      initQuestionModal();
    });
  });

  const btnNewQ = document.getElementById('btn-new-q');
  if (btnNewQ) btnNewQ.addEventListener('click', initQuestionModal);


  // --- 4.2 Mission Modal Logic ---
  function initMissionModal() {
    const textEl = document.getElementById('mission-modal-text');
    const mArray = widgetData.missions;
    textEl.innerHTML = mArray[Math.floor(Math.random() * mArray.length)];
  }
  const btnNewM = document.getElementById('btn-new-m');
  if (btnNewM) btnNewM.addEventListener('click', initMissionModal);


  // --- 4.3 Date Roulette Modal Logic ---
  function initDateModal() {
    // Only reset if it's the first time or they want to spin again
    const textEl = document.getElementById('date-modal-text');
    const descEl = document.getElementById('date-modal-desc');
    textEl.innerHTML = "버튼을 눌러 룰렛을 돌려보세요!";
    descEl.innerHTML = "";
  }
  const btnSpinDate = document.getElementById('btn-spin-date');
  if (btnSpinDate) {
    btnSpinDate.addEventListener('click', () => {
      const textEl = document.getElementById('date-modal-text');
      const descEl = document.getElementById('date-modal-desc');
      const dArray = widgetData.dateIdeas;
      
      // Roulette Animation Effect
      let count = 0;
      let interval = setInterval(() => {
        textEl.innerHTML = dArray[Math.floor(Math.random() * dArray.length)].title;
        count++;
        if(count > 15) {
          clearInterval(interval);
          const finalDate = dArray[Math.floor(Math.random() * dArray.length)];
          textEl.innerHTML = `🎉 ${finalDate.title}`;
          descEl.innerHTML = finalDate.desc;
        }
      }, 50);
    });
  }

});
