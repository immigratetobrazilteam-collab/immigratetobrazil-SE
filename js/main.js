/** SE JS - Aracaju - Warm-welcoming with red-orange tones */
const STATE_CONFIG = {
  stateCode: 'se',
  capital: 'Aracaju',
  formspreeUrl: 'https://formspree.io/f/xseqbddb',
  colors: { primary: '#ff6347', secondary: '#ff8c00', accent: '#ffa500' },
  animations: {"enabled": true, "header": {"type": "sergipanoSlide", "duration": "0.7s", "easing": "ease-out", "delay": "0s"}, "sections": {"type": "coastalReveal", "duration": "1.1s", "easing": "ease-in-out", "stagger": "0.18s"}, "hero": {"type": "riverParallax", "speed": 0.4, "direction": "horizontal"}, "cards": {"type": "culturalFloat", "traditional": true, "warm": true}, "images": {"type": "coastalReveal", "golden": true, "duration": "1s"}},
  interactions: {"hover": "cultural-lift", "scroll": "river-flow", "transitions": "coastal-ease", "click": "festival-pop"},
  premiumEffects: ["coastal-gradient", "river-shimmer", "cultural-warmth", "beach-breeze"]
};

const SECTIONS = ["se-index-section--map", "se-index-section-frequently-asked-questions-about-living-in-", "se-index-contact"];

document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      try {
        await fetch(STATE_CONFIG.formspreeUrl, { method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' } });
        alert('Message sent!');
        form.reset();
      } catch(err) { alert('Error'); }
    });
  });
});
