const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const responsiveCSS = `
/* --- Responsive Typography & Layout --- */
@media (max-width: 768px) {
  h1 { font-size: clamp(1.8rem, 5vw, 2.2rem); }
  h2 { font-size: clamp(1.4rem, 4vw, 1.8rem); }
  h3 { font-size: clamp(1.05rem, 3vw, 1.25rem); }
  body { font-size: 0.95rem; line-height: 1.6; }
  
  .container { padding: 0 16px; }
  .nav__inner { padding: 0 16px; }
  
  /* Make sure result photocard has tighter padding on mobile */
  .photocard { padding: 24px; border-radius: 20px; }
  .photocard__img { width: 140px; }
  .photocard__title { font-size: 1.8rem; }
  
  /* Shrink capture area slightly for mobile view rendering (though it's invisible) */
  /* Keep capture area absolute size for HQ export, just UI adjustments above */
}

@media (min-width: 769px) {
  /* PC Optimizations for Result Page */
  #resultWrapper {
    max-width: 800px;
    margin: 120px auto 40px;
  }
  
  .photocard {
    padding: 60px;
    border-radius: 40px;
  }
  
  .photocard__img {
    width: 200px;
  }
  
  .photocard__title {
    font-size: 2.8rem;
  }
  
  .photocard__content p {
    font-size: 1.2rem !important; /* Override inline styles to make it bigger on PC */
    line-height: 1.8 !important;
  }
}
`;

css += '\n' + responsiveCSS;

fs.writeFileSync('style.css', css);
console.log('style.css updated with responsive media queries');
