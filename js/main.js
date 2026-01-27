
// Master JS for State: SE - Persona: Small Coast Relaxer
// Comprehensive, mobile-first animations using GSAP (CDN: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>)
// Draws from js_data.json for globals; animations match stereotype (e.g., bouncy for expressive, smooth for conservative)
// Best practices: DOMContentLoaded, element checks, reduced motion support, mobile detection for shorter durations

document.addEventListener('DOMContentLoaded', () => {
  // Load js_data.json for globals (async fetch for modularity)
  fetch('js/js_data.json')
    .then(response => response.json())
    .then(data => {
      const intensityMod = data.persona.visual_intensity === 'high' ? 1.2 : data.persona.visual_intensity === 'medium' ? 1.0 : 0.8;
      const isMobile = window.innerWidth < 768;
      const mobileMod = data.animation_customizations.mobile_mod;
      const durationMod = isMobile ? intensityMod * mobileMod : intensityMod;

      // Reduced motion check (best practice)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        return;  // Skip all animations
      }

      // General smooth scroll (vanilla JS, mobile-friendly)
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });

      // Section-specific animations (comprehensive, per role/ID)

  const se_index_section_immigrate_to_sergipe = document.getElementById('se-index-section-immigrate-to-sergipe');
  if (se_index_section_immigrate_to_sergipe) {
    gsap.fromTo('#se-index-section-immigrate-to-sergipe', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_form_immigrate_to_sergipe = document.getElementById('se-index-form-immigrate-to-sergipe');
  if (se_index_form_immigrate_to_sergipe) {
    gsap.from('#se-index-form-immigrate-to-sergipe input, #se-index-form-immigrate-to-sergipe textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_section_state_vibe = document.getElementById('se-index-section-state-vibe');
  if (se_index_section_state_vibe) {
    gsap.fromTo('#se-index-section-state-vibe', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_section_quick_facts_snapshot = document.getElementById('se-index-section-quick-facts-snapshot');
  if (se_index_section_quick_facts_snapshot) {
    gsap.fromTo('#se-index-section-quick-facts-snapshot', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_section_sergipe_map = document.getElementById('se-index-section-sergipe-map');
  if (se_index_section_sergipe_map) {
    gsap.fromTo('#se-index-section-sergipe-map', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_section_cost_of_living_sergipe = document.getElementById('se-index-section-cost-of-living-sergipe');
  if (se_index_section_cost_of_living_sergipe) {
    gsap.fromTo('#se-index-section-cost-of-living-sergipe', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_section_government_context = document.getElementById('se-index-section-government-context');
  if (se_index_section_government_context) {
    gsap.fromTo('#se-index-section-government-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_hero_immigration_notes = document.getElementById('se-index-hero-immigration-notes');
  if (se_index_hero_immigration_notes) {
    gsap.fromTo('#se-index-hero-immigration-notes', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_list_common_applicant_profiles = document.getElementById('se-index-list-common-applicant-profiles');
  if (se_index_list_common_applicant_profiles) {
    gsap.from('#se-index-list-common-applicant-profiles li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_list_economic_drivers = document.getElementById('se-index-list-economic-drivers');
  if (se_index_list_economic_drivers) {
    gsap.from('#se-index-list-economic-drivers li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_section_demographics = document.getElementById('se-index-section-demographics');
  if (se_index_section_demographics) {
    gsap.fromTo('#se-index-section-demographics', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_section_regional_challenges = document.getElementById('se-index-section-regional-challenges');
  if (se_index_section_regional_challenges) {
    gsap.fromTo('#se-index-section-regional-challenges', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_section_regional_opportunities = document.getElementById('se-index-section-regional-opportunities');
  if (se_index_section_regional_opportunities) {
    gsap.fromTo('#se-index-section-regional-opportunities', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_section_culture_daily_life = document.getElementById('se-index-section-culture-daily-life');
  if (se_index_section_culture_daily_life) {
    gsap.fromTo('#se-index-section-culture-daily-life', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_list_local_language_expressions = document.getElementById('se-index-list-local-language-expressions');
  if (se_index_list_local_language_expressions) {
    gsap.from('#se-index-list-local-language-expressions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_list_food_cuisine = document.getElementById('se-index-list-food-cuisine');
  if (se_index_list_food_cuisine) {
    gsap.from('#se-index-list-food-cuisine li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_list_festivals_traditions = document.getElementById('se-index-list-festivals-traditions');
  if (se_index_list_festivals_traditions) {
    gsap.from('#se-index-list-festivals-traditions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_list_music_artistic_expression = document.getElementById('se-index-list-music-artistic-expression');
  if (se_index_list_music_artistic_expression) {
    gsap.from('#se-index-list-music-artistic-expression li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_list_sports_recreation = document.getElementById('se-index-list-sports-recreation');
  if (se_index_list_sports_recreation) {
    gsap.from('#se-index-list-sports-recreation li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_list_landmarks_historical_sites = document.getElementById('se-index-list-landmarks-historical-sites');
  if (se_index_list_landmarks_historical_sites) {
    gsap.from('#se-index-list-landmarks-historical-sites li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_list_natural_features = document.getElementById('se-index-list-natural-features');
  if (se_index_list_natural_features) {
    gsap.from('#se-index-list-natural-features li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_list_parks_protected_areas = document.getElementById('se-index-list-parks-protected-areas');
  if (se_index_list_parks_protected_areas) {
    gsap.from('#se-index-list-parks-protected-areas li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_list_museums_cultural_institutions = document.getElementById('se-index-list-museums-cultural-institutions');
  if (se_index_list_museums_cultural_institutions) {
    gsap.from('#se-index-list-museums-cultural-institutions li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_section_image_gallery = document.getElementById('se-index-section-image-gallery');
  if (se_index_section_image_gallery) {
    gsap.fromTo('#se-index-section-image-gallery', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_section_useful_government_links = document.getElementById('se-index-section-useful-government-links');
  if (se_index_section_useful_government_links) {
    gsap.fromTo('#se-index-section-useful-government-links', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_hero_federal_police_immigration_links = document.getElementById('se-index-hero-federal-police-immigration-links');
  if (se_index_hero_federal_police_immigration_links) {
    gsap.fromTo('#se-index-hero-federal-police-immigration-links', {opacity: 0, y: 50}, {opacity: 1, y: 0, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_section_external_references = document.getElementById('se-index-section-external-references');
  if (se_index_section_external_references) {
    gsap.fromTo('#se-index-section-external-references', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_list_immigration_services_overview = document.getElementById('se-index-list-immigration-services-overview');
  if (se_index_list_immigration_services_overview) {
    gsap.from('#se-index-list-immigration-services-overview li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_section_why_immigrate_here = document.getElementById('se-index-section-why-immigrate-here');
  if (se_index_section_why_immigrate_here) {
    gsap.fromTo('#se-index-section-why-immigrate-here', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_section_legal_guidance_disclaimers = document.getElementById('se-index-section-legal-guidance-disclaimers');
  if (se_index_section_legal_guidance_disclaimers) {
    gsap.fromTo('#se-index-section-legal-guidance-disclaimers', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_list_travel_services = document.getElementById('se-index-list-travel-services');
  if (se_index_list_travel_services) {
    gsap.from('#se-index-list-travel-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_list_how_the_process_works = document.getElementById('se-index-list-how-the-process-works');
  if (se_index_list_how_the_process_works) {
    gsap.from('#se-index-list-how-the-process-works li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_index_section__frequently_asked_questions_about_living_in_sergipe_ = document.getElementById('se-index-section--frequently-asked-questions-about-living-in-sergipe-');
  if (se_index_section__frequently_asked_questions_about_living_in_sergipe_) {
    gsap.fromTo('#se-index-section--frequently-asked-questions-about-living-in-sergipe-', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const contact_cta.html = document.getElementById('contact-cta.html');
  if (contact_cta.html) {
    gsap.fromTo('#contact-cta.html', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_contactcta_section_get_started_in_sergipe = document.getElementById('se-contactcta-section-get-started-in-sergipe');
  if (se_contactcta_section_get_started_in_sergipe) {
    gsap.fromTo('#se-contactcta-section-get-started-in-sergipe', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const renouncing_citizenship.html = document.getElementById('renouncing-citizenship.html');
  if (renouncing_citizenship.html) {
    gsap.fromTo('#renouncing-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_renouncingcitizenship_form_renounce_brazilian_citizenship = document.getElementById('se-renouncingcitizenship-form-renounce-brazilian-citizenship');
  if (se_renouncingcitizenship_form_renounce_brazilian_citizenship) {
    gsap.from('#se-renouncingcitizenship-form-renounce-brazilian-citizenship input, #se-renouncingcitizenship-form-renounce-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_renouncingcitizenship_list_quick_facts = document.getElementById('se-renouncingcitizenship-list-quick-facts');
  if (se_renouncingcitizenship_list_quick_facts) {
    gsap.from('#se-renouncingcitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_renouncingcitizenship_list_common_challenges_applicants_face = document.getElementById('se-renouncingcitizenship-list-common-challenges-applicants-face');
  if (se_renouncingcitizenship_list_common_challenges_applicants_face) {
    gsap.from('#se-renouncingcitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_renouncingcitizenship_list_how_we_solve_these_challenges = document.getElementById('se-renouncingcitizenship-list-how-we-solve-these-challenges');
  if (se_renouncingcitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#se-renouncingcitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_renouncingcitizenship_section_renunciation_overview = document.getElementById('se-renouncingcitizenship-section-renunciation-overview');
  if (se_renouncingcitizenship_section_renunciation_overview) {
    gsap.fromTo('#se-renouncingcitizenship-section-renunciation-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_renouncingcitizenship_form_who_is_this_for = document.getElementById('se-renouncingcitizenship-form-who-is-this-for');
  if (se_renouncingcitizenship_form_who_is_this_for) {
    gsap.from('#se-renouncingcitizenship-form-who-is-this-for input, #se-renouncingcitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_renouncingcitizenship_list_required_documents = document.getElementById('se-renouncingcitizenship-list-required-documents');
  if (se_renouncingcitizenship_list_required_documents) {
    gsap.from('#se-renouncingcitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_renouncingcitizenship_list_process = document.getElementById('se-renouncingcitizenship-list-process');
  if (se_renouncingcitizenship_list_process) {
    gsap.from('#se-renouncingcitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_renouncingcitizenship_section_timelines_deadlines = document.getElementById('se-renouncingcitizenship-section-timelines-deadlines');
  if (se_renouncingcitizenship_section_timelines_deadlines) {
    gsap.fromTo('#se-renouncingcitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_renouncingcitizenship_section_fees_costs = document.getElementById('se-renouncingcitizenship-section-fees-costs');
  if (se_renouncingcitizenship_section_fees_costs) {
    gsap.fromTo('#se-renouncingcitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_renouncingcitizenship_list_risks_common_mistakes = document.getElementById('se-renouncingcitizenship-list-risks-common-mistakes');
  if (se_renouncingcitizenship_list_risks_common_mistakes) {
    gsap.from('#se-renouncingcitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_renouncingcitizenship_section_diy_vs_professional_assistance = document.getElementById('se-renouncingcitizenship-section-diy-vs-professional-assistance');
  if (se_renouncingcitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-renouncingcitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_renouncingcitizenship_section_sergipe_specific_context = document.getElementById('se-renouncingcitizenship-section-sergipe-specific-context');
  if (se_renouncingcitizenship_section_sergipe_specific_context) {
    gsap.fromTo('#se-renouncingcitizenship-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_renouncingcitizenship_section_what_our_clients_say = document.getElementById('se-renouncingcitizenship-section-what-our-clients-say');
  if (se_renouncingcitizenship_section_what_our_clients_say) {
    gsap.fromTo('#se-renouncingcitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_renouncingcitizenship_section_frequently_asked_questions = document.getElementById('se-renouncingcitizenship-section-frequently-asked-questions');
  if (se_renouncingcitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#se-renouncingcitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_renouncingcitizenship_section_international_support = document.getElementById('se-renouncingcitizenship-section-international-support');
  if (se_renouncingcitizenship_section_international_support) {
    gsap.fromTo('#se-renouncingcitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_renouncingcitizenship_list_our_credentials = document.getElementById('se-renouncingcitizenship-list-our-credentials');
  if (se_renouncingcitizenship_list_our_credentials) {
    gsap.from('#se-renouncingcitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_renouncingcitizenship_list_related_services = document.getElementById('se-renouncingcitizenship-list-related-services');
  if (se_renouncingcitizenship_list_related_services) {
    gsap.from('#se-renouncingcitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_renouncingcitizenship_section_youre_in_good_hands = document.getElementById('se-renouncingcitizenship-section-youre-in-good-hands');
  if (se_renouncingcitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#se-renouncingcitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_renouncingcitizenship_section_21 = document.getElementById('se-renouncingcitizenship-section-21');
  if (se_renouncingcitizenship_section_21) {
    gsap.fromTo('#se-renouncingcitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_provisional_form_provisional_naturalisation_in_brazil_for_minors = document.getElementById('se-provisional-form-provisional-naturalisation-in-brazil-for-minors');
  if (se_provisional_form_provisional_naturalisation_in_brazil_for_minors) {
    gsap.from('#se-provisional-form-provisional-naturalisation-in-brazil-for-minors input, #se-provisional-form-provisional-naturalisation-in-brazil-for-minors textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_provisional_list_quick_facts = document.getElementById('se-provisional-list-quick-facts');
  if (se_provisional_list_quick_facts) {
    gsap.from('#se-provisional-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_provisional_list_common_challenges_applicants_face = document.getElementById('se-provisional-list-common-challenges-applicants-face');
  if (se_provisional_list_common_challenges_applicants_face) {
    gsap.from('#se-provisional-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_provisional_list_how_we_solve_these_challenges = document.getElementById('se-provisional-list-how-we-solve-these-challenges');
  if (se_provisional_list_how_we_solve_these_challenges) {
    gsap.from('#se-provisional-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_provisional_section_naturalisation_overview = document.getElementById('se-provisional-section-naturalisation-overview');
  if (se_provisional_section_naturalisation_overview) {
    gsap.fromTo('#se-provisional-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_provisional_form_who_is_this_naturalisation_for = document.getElementById('se-provisional-form-who-is-this-naturalisation-for');
  if (se_provisional_form_who_is_this_naturalisation_for) {
    gsap.from('#se-provisional-form-who-is-this-naturalisation-for input, #se-provisional-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_provisional_list_required_documents = document.getElementById('se-provisional-list-required-documents');
  if (se_provisional_list_required_documents) {
    gsap.from('#se-provisional-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_provisional_list_application_process = document.getElementById('se-provisional-list-application-process');
  if (se_provisional_list_application_process) {
    gsap.from('#se-provisional-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_provisional_section_timelines_deadlines = document.getElementById('se-provisional-section-timelines-deadlines');
  if (se_provisional_section_timelines_deadlines) {
    gsap.fromTo('#se-provisional-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_provisional_section_fees_costs = document.getElementById('se-provisional-section-fees-costs');
  if (se_provisional_section_fees_costs) {
    gsap.fromTo('#se-provisional-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_provisional_list_risks_common_mistakes = document.getElementById('se-provisional-list-risks-common-mistakes');
  if (se_provisional_list_risks_common_mistakes) {
    gsap.from('#se-provisional-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_provisional_section_diy_vs_professional_assistance = document.getElementById('se-provisional-section-diy-vs-professional-assistance');
  if (se_provisional_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-provisional-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_provisional_section_sergipe_specific_context = document.getElementById('se-provisional-section-sergipe-specific-context');
  if (se_provisional_section_sergipe_specific_context) {
    gsap.fromTo('#se-provisional-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_provisional_section_what_our_clients_say = document.getElementById('se-provisional-section-what-our-clients-say');
  if (se_provisional_section_what_our_clients_say) {
    gsap.fromTo('#se-provisional-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_provisional_section_frequently_asked_questions = document.getElementById('se-provisional-section-frequently-asked-questions');
  if (se_provisional_section_frequently_asked_questions) {
    gsap.fromTo('#se-provisional-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_provisional_section_international_support = document.getElementById('se-provisional-section-international-support');
  if (se_provisional_section_international_support) {
    gsap.fromTo('#se-provisional-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_provisional_list_our_credentials = document.getElementById('se-provisional-list-our-credentials');
  if (se_provisional_list_our_credentials) {
    gsap.from('#se-provisional-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_provisional_list_related_services = document.getElementById('se-provisional-list-related-services');
  if (se_provisional_list_related_services) {
    gsap.from('#se-provisional-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_provisional_section_youre_in_good_hands = document.getElementById('se-provisional-section-youre-in-good-hands');
  if (se_provisional_section_youre_in_good_hands) {
    gsap.fromTo('#se-provisional-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_provisional_section_21 = document.getElementById('se-provisional-section-21');
  if (se_provisional_section_21) {
    gsap.fromTo('#se-provisional-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_special_form_special_naturalisation_in_brazil_for_particular_cases = document.getElementById('se-special-form-special-naturalisation-in-brazil-for-particular-cases');
  if (se_special_form_special_naturalisation_in_brazil_for_particular_cases) {
    gsap.from('#se-special-form-special-naturalisation-in-brazil-for-particular-cases input, #se-special-form-special-naturalisation-in-brazil-for-particular-cases textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_special_list_quick_facts = document.getElementById('se-special-list-quick-facts');
  if (se_special_list_quick_facts) {
    gsap.from('#se-special-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_special_list_common_challenges_applicants_face = document.getElementById('se-special-list-common-challenges-applicants-face');
  if (se_special_list_common_challenges_applicants_face) {
    gsap.from('#se-special-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_special_list_how_we_solve_these_challenges = document.getElementById('se-special-list-how-we-solve-these-challenges');
  if (se_special_list_how_we_solve_these_challenges) {
    gsap.from('#se-special-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_special_section_naturalisation_overview = document.getElementById('se-special-section-naturalisation-overview');
  if (se_special_section_naturalisation_overview) {
    gsap.fromTo('#se-special-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_special_form_who_is_this_naturalisation_for = document.getElementById('se-special-form-who-is-this-naturalisation-for');
  if (se_special_form_who_is_this_naturalisation_for) {
    gsap.from('#se-special-form-who-is-this-naturalisation-for input, #se-special-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_special_list_required_documents = document.getElementById('se-special-list-required-documents');
  if (se_special_list_required_documents) {
    gsap.from('#se-special-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_special_list_application_process = document.getElementById('se-special-list-application-process');
  if (se_special_list_application_process) {
    gsap.from('#se-special-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_special_section_timelines_deadlines = document.getElementById('se-special-section-timelines-deadlines');
  if (se_special_section_timelines_deadlines) {
    gsap.fromTo('#se-special-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_special_section_fees_costs = document.getElementById('se-special-section-fees-costs');
  if (se_special_section_fees_costs) {
    gsap.fromTo('#se-special-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_special_list_risks_common_mistakes = document.getElementById('se-special-list-risks-common-mistakes');
  if (se_special_list_risks_common_mistakes) {
    gsap.from('#se-special-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_special_section_diy_vs_professional_assistance = document.getElementById('se-special-section-diy-vs-professional-assistance');
  if (se_special_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-special-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_special_section_sergipe_specific_context = document.getElementById('se-special-section-sergipe-specific-context');
  if (se_special_section_sergipe_specific_context) {
    gsap.fromTo('#se-special-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_special_section_what_our_clients_say = document.getElementById('se-special-section-what-our-clients-say');
  if (se_special_section_what_our_clients_say) {
    gsap.fromTo('#se-special-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_special_section_frequently_asked_questions = document.getElementById('se-special-section-frequently-asked-questions');
  if (se_special_section_frequently_asked_questions) {
    gsap.fromTo('#se-special-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_special_section_international_support = document.getElementById('se-special-section-international-support');
  if (se_special_section_international_support) {
    gsap.fromTo('#se-special-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_special_list_our_credentials = document.getElementById('se-special-list-our-credentials');
  if (se_special_list_our_credentials) {
    gsap.from('#se-special-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_special_list_related_services = document.getElementById('se-special-list-related-services');
  if (se_special_list_related_services) {
    gsap.from('#se-special-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_special_section_youre_in_good_hands = document.getElementById('se-special-section-youre-in-good-hands');
  if (se_special_section_youre_in_good_hands) {
    gsap.fromTo('#se-special-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_special_section_21 = document.getElementById('se-special-section-21');
  if (se_special_section_21) {
    gsap.fromTo('#se-special-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation = document.getElementById('se-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation');
  if (se_ordinary_form_obtain_brazilian_citizenship_through_ordinary_naturalisation) {
    gsap.from('#se-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation input, #se-ordinary-form-obtain-brazilian-citizenship-through-ordinary-naturalisation textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_ordinary_list_quick_facts = document.getElementById('se-ordinary-list-quick-facts');
  if (se_ordinary_list_quick_facts) {
    gsap.from('#se-ordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_ordinary_list_common_challenges_applicants_face = document.getElementById('se-ordinary-list-common-challenges-applicants-face');
  if (se_ordinary_list_common_challenges_applicants_face) {
    gsap.from('#se-ordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_ordinary_list_how_we_solve_these_challenges = document.getElementById('se-ordinary-list-how-we-solve-these-challenges');
  if (se_ordinary_list_how_we_solve_these_challenges) {
    gsap.from('#se-ordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_ordinary_section_naturalisation_overview = document.getElementById('se-ordinary-section-naturalisation-overview');
  if (se_ordinary_section_naturalisation_overview) {
    gsap.fromTo('#se-ordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_ordinary_form_who_is_this_naturalisation_for = document.getElementById('se-ordinary-form-who-is-this-naturalisation-for');
  if (se_ordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#se-ordinary-form-who-is-this-naturalisation-for input, #se-ordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_ordinary_list_required_documents = document.getElementById('se-ordinary-list-required-documents');
  if (se_ordinary_list_required_documents) {
    gsap.from('#se-ordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_ordinary_list_application_process = document.getElementById('se-ordinary-list-application-process');
  if (se_ordinary_list_application_process) {
    gsap.from('#se-ordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_ordinary_section_timelines_deadlines = document.getElementById('se-ordinary-section-timelines-deadlines');
  if (se_ordinary_section_timelines_deadlines) {
    gsap.fromTo('#se-ordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_ordinary_section_fees_costs = document.getElementById('se-ordinary-section-fees-costs');
  if (se_ordinary_section_fees_costs) {
    gsap.fromTo('#se-ordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_ordinary_list_risks_common_mistakes = document.getElementById('se-ordinary-list-risks-common-mistakes');
  if (se_ordinary_list_risks_common_mistakes) {
    gsap.from('#se-ordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_ordinary_section_diy_vs_professional_assistance = document.getElementById('se-ordinary-section-diy-vs-professional-assistance');
  if (se_ordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-ordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_ordinary_section_sergipe_specific_context = document.getElementById('se-ordinary-section-sergipe-specific-context');
  if (se_ordinary_section_sergipe_specific_context) {
    gsap.fromTo('#se-ordinary-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_ordinary_section_what_our_clients_say = document.getElementById('se-ordinary-section-what-our-clients-say');
  if (se_ordinary_section_what_our_clients_say) {
    gsap.fromTo('#se-ordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_ordinary_section_frequently_asked_questions = document.getElementById('se-ordinary-section-frequently-asked-questions');
  if (se_ordinary_section_frequently_asked_questions) {
    gsap.fromTo('#se-ordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_ordinary_section_international_support = document.getElementById('se-ordinary-section-international-support');
  if (se_ordinary_section_international_support) {
    gsap.fromTo('#se-ordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_ordinary_list_our_credentials = document.getElementById('se-ordinary-list-our-credentials');
  if (se_ordinary_list_our_credentials) {
    gsap.from('#se-ordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_ordinary_list_related_services = document.getElementById('se-ordinary-list-related-services');
  if (se_ordinary_list_related_services) {
    gsap.from('#se-ordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_ordinary_section_youre_in_good_hands = document.getElementById('se-ordinary-section-youre-in-good-hands');
  if (se_ordinary_section_youre_in_good_hands) {
    gsap.fromTo('#se-ordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_ordinary_section_21 = document.getElementById('se-ordinary-section-21');
  if (se_ordinary_section_21) {
    gsap.fromTo('#se-ordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions = document.getElementById('se-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions');
  if (se_extraordinary_form_extraordinary_naturalisation_in_brazil_for_contributions) {
    gsap.from('#se-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions input, #se-extraordinary-form-extraordinary-naturalisation-in-brazil-for-contributions textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extraordinary_list_quick_facts = document.getElementById('se-extraordinary-list-quick-facts');
  if (se_extraordinary_list_quick_facts) {
    gsap.from('#se-extraordinary-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extraordinary_list_common_challenges_applicants_face = document.getElementById('se-extraordinary-list-common-challenges-applicants-face');
  if (se_extraordinary_list_common_challenges_applicants_face) {
    gsap.from('#se-extraordinary-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extraordinary_list_how_we_solve_these_challenges = document.getElementById('se-extraordinary-list-how-we-solve-these-challenges');
  if (se_extraordinary_list_how_we_solve_these_challenges) {
    gsap.from('#se-extraordinary-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extraordinary_section_naturalisation_overview = document.getElementById('se-extraordinary-section-naturalisation-overview');
  if (se_extraordinary_section_naturalisation_overview) {
    gsap.fromTo('#se-extraordinary-section-naturalisation-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extraordinary_form_who_is_this_naturalisation_for = document.getElementById('se-extraordinary-form-who-is-this-naturalisation-for');
  if (se_extraordinary_form_who_is_this_naturalisation_for) {
    gsap.from('#se-extraordinary-form-who-is-this-naturalisation-for input, #se-extraordinary-form-who-is-this-naturalisation-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extraordinary_list_required_documents = document.getElementById('se-extraordinary-list-required-documents');
  if (se_extraordinary_list_required_documents) {
    gsap.from('#se-extraordinary-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extraordinary_list_application_process = document.getElementById('se-extraordinary-list-application-process');
  if (se_extraordinary_list_application_process) {
    gsap.from('#se-extraordinary-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extraordinary_section_timelines_deadlines = document.getElementById('se-extraordinary-section-timelines-deadlines');
  if (se_extraordinary_section_timelines_deadlines) {
    gsap.fromTo('#se-extraordinary-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extraordinary_section_fees_costs = document.getElementById('se-extraordinary-section-fees-costs');
  if (se_extraordinary_section_fees_costs) {
    gsap.fromTo('#se-extraordinary-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extraordinary_list_risks_common_mistakes = document.getElementById('se-extraordinary-list-risks-common-mistakes');
  if (se_extraordinary_list_risks_common_mistakes) {
    gsap.from('#se-extraordinary-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extraordinary_section_diy_vs_professional_assistance = document.getElementById('se-extraordinary-section-diy-vs-professional-assistance');
  if (se_extraordinary_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-extraordinary-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extraordinary_section_sergipe_specific_context = document.getElementById('se-extraordinary-section-sergipe-specific-context');
  if (se_extraordinary_section_sergipe_specific_context) {
    gsap.fromTo('#se-extraordinary-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extraordinary_section_what_our_clients_say = document.getElementById('se-extraordinary-section-what-our-clients-say');
  if (se_extraordinary_section_what_our_clients_say) {
    gsap.fromTo('#se-extraordinary-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extraordinary_section_frequently_asked_questions = document.getElementById('se-extraordinary-section-frequently-asked-questions');
  if (se_extraordinary_section_frequently_asked_questions) {
    gsap.fromTo('#se-extraordinary-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extraordinary_section_international_support = document.getElementById('se-extraordinary-section-international-support');
  if (se_extraordinary_section_international_support) {
    gsap.fromTo('#se-extraordinary-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extraordinary_list_our_credentials = document.getElementById('se-extraordinary-list-our-credentials');
  if (se_extraordinary_list_our_credentials) {
    gsap.from('#se-extraordinary-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extraordinary_list_related_services = document.getElementById('se-extraordinary-list-related-services');
  if (se_extraordinary_list_related_services) {
    gsap.from('#se-extraordinary-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extraordinary_section_youre_in_good_hands = document.getElementById('se-extraordinary-section-youre-in-good-hands');
  if (se_extraordinary_section_youre_in_good_hands) {
    gsap.fromTo('#se-extraordinary-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extraordinary_section_21 = document.getElementById('se-extraordinary-section-21');
  if (se_extraordinary_section_21) {
    gsap.fromTo('#se-extraordinary-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const reacquisition_citizenship.html = document.getElementById('reacquisition-citizenship.html');
  if (reacquisition_citizenship.html) {
    gsap.fromTo('#reacquisition-citizenship.html', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_reacquisitioncitizenship_form_reacquire_brazilian_citizenship = document.getElementById('se-reacquisitioncitizenship-form-reacquire-brazilian-citizenship');
  if (se_reacquisitioncitizenship_form_reacquire_brazilian_citizenship) {
    gsap.from('#se-reacquisitioncitizenship-form-reacquire-brazilian-citizenship input, #se-reacquisitioncitizenship-form-reacquire-brazilian-citizenship textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_reacquisitioncitizenship_list_quick_facts = document.getElementById('se-reacquisitioncitizenship-list-quick-facts');
  if (se_reacquisitioncitizenship_list_quick_facts) {
    gsap.from('#se-reacquisitioncitizenship-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_reacquisitioncitizenship_list_common_challenges_applicants_face = document.getElementById('se-reacquisitioncitizenship-list-common-challenges-applicants-face');
  if (se_reacquisitioncitizenship_list_common_challenges_applicants_face) {
    gsap.from('#se-reacquisitioncitizenship-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_reacquisitioncitizenship_list_how_we_solve_these_challenges = document.getElementById('se-reacquisitioncitizenship-list-how-we-solve-these-challenges');
  if (se_reacquisitioncitizenship_list_how_we_solve_these_challenges) {
    gsap.from('#se-reacquisitioncitizenship-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_reacquisitioncitizenship_section_reacquisition_overview = document.getElementById('se-reacquisitioncitizenship-section-reacquisition-overview');
  if (se_reacquisitioncitizenship_section_reacquisition_overview) {
    gsap.fromTo('#se-reacquisitioncitizenship-section-reacquisition-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_reacquisitioncitizenship_form_who_is_this_for = document.getElementById('se-reacquisitioncitizenship-form-who-is-this-for');
  if (se_reacquisitioncitizenship_form_who_is_this_for) {
    gsap.from('#se-reacquisitioncitizenship-form-who-is-this-for input, #se-reacquisitioncitizenship-form-who-is-this-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_reacquisitioncitizenship_list_required_documents = document.getElementById('se-reacquisitioncitizenship-list-required-documents');
  if (se_reacquisitioncitizenship_list_required_documents) {
    gsap.from('#se-reacquisitioncitizenship-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_reacquisitioncitizenship_list_process = document.getElementById('se-reacquisitioncitizenship-list-process');
  if (se_reacquisitioncitizenship_list_process) {
    gsap.from('#se-reacquisitioncitizenship-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_reacquisitioncitizenship_section_timelines_deadlines = document.getElementById('se-reacquisitioncitizenship-section-timelines-deadlines');
  if (se_reacquisitioncitizenship_section_timelines_deadlines) {
    gsap.fromTo('#se-reacquisitioncitizenship-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_reacquisitioncitizenship_section_fees_costs = document.getElementById('se-reacquisitioncitizenship-section-fees-costs');
  if (se_reacquisitioncitizenship_section_fees_costs) {
    gsap.fromTo('#se-reacquisitioncitizenship-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_reacquisitioncitizenship_list_risks_common_mistakes = document.getElementById('se-reacquisitioncitizenship-list-risks-common-mistakes');
  if (se_reacquisitioncitizenship_list_risks_common_mistakes) {
    gsap.from('#se-reacquisitioncitizenship-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_reacquisitioncitizenship_section_diy_vs_professional_assistance = document.getElementById('se-reacquisitioncitizenship-section-diy-vs-professional-assistance');
  if (se_reacquisitioncitizenship_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-reacquisitioncitizenship-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_reacquisitioncitizenship_section_sergipe_specific_context = document.getElementById('se-reacquisitioncitizenship-section-sergipe-specific-context');
  if (se_reacquisitioncitizenship_section_sergipe_specific_context) {
    gsap.fromTo('#se-reacquisitioncitizenship-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_reacquisitioncitizenship_section_what_our_clients_say = document.getElementById('se-reacquisitioncitizenship-section-what-our-clients-say');
  if (se_reacquisitioncitizenship_section_what_our_clients_say) {
    gsap.fromTo('#se-reacquisitioncitizenship-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_reacquisitioncitizenship_section_frequently_asked_questions = document.getElementById('se-reacquisitioncitizenship-section-frequently-asked-questions');
  if (se_reacquisitioncitizenship_section_frequently_asked_questions) {
    gsap.fromTo('#se-reacquisitioncitizenship-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_reacquisitioncitizenship_section_international_support = document.getElementById('se-reacquisitioncitizenship-section-international-support');
  if (se_reacquisitioncitizenship_section_international_support) {
    gsap.fromTo('#se-reacquisitioncitizenship-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_reacquisitioncitizenship_list_our_credentials = document.getElementById('se-reacquisitioncitizenship-list-our-credentials');
  if (se_reacquisitioncitizenship_list_our_credentials) {
    gsap.from('#se-reacquisitioncitizenship-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_reacquisitioncitizenship_list_related_services = document.getElementById('se-reacquisitioncitizenship-list-related-services');
  if (se_reacquisitioncitizenship_list_related_services) {
    gsap.from('#se-reacquisitioncitizenship-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_reacquisitioncitizenship_section_youre_in_good_hands = document.getElementById('se-reacquisitioncitizenship-section-youre-in-good-hands');
  if (se_reacquisitioncitizenship_section_youre_in_good_hands) {
    gsap.fromTo('#se-reacquisitioncitizenship-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_reacquisitioncitizenship_section_21 = document.getElementById('se-reacquisitioncitizenship-section-21');
  if (se_reacquisitioncitizenship_section_21) {
    gsap.fromTo('#se-reacquisitioncitizenship-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const scientific_research.html = document.getElementById('scientific-research.html');
  if (scientific_research.html) {
    gsap.fromTo('#scientific-research.html', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil = document.getElementById('se-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil');
  if (se_scientificresearch_form_conduct_scientific_research_with_residency_in_brazil) {
    gsap.from('#se-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil input, #se-scientificresearch-form-conduct-scientific-research-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_scientificresearch_list_quick_facts = document.getElementById('se-scientificresearch-list-quick-facts');
  if (se_scientificresearch_list_quick_facts) {
    gsap.from('#se-scientificresearch-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_scientificresearch_list_common_challenges_applicants_face = document.getElementById('se-scientificresearch-list-common-challenges-applicants-face');
  if (se_scientificresearch_list_common_challenges_applicants_face) {
    gsap.from('#se-scientificresearch-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_scientificresearch_list_how_we_solve_these_challenges = document.getElementById('se-scientificresearch-list-how-we-solve-these-challenges');
  if (se_scientificresearch_list_how_we_solve_these_challenges) {
    gsap.from('#se-scientificresearch-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_scientificresearch_section_residency_overview = document.getElementById('se-scientificresearch-section-residency-overview');
  if (se_scientificresearch_section_residency_overview) {
    gsap.fromTo('#se-scientificresearch-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_scientificresearch_form_who_is_this_residency_for = document.getElementById('se-scientificresearch-form-who-is-this-residency-for');
  if (se_scientificresearch_form_who_is_this_residency_for) {
    gsap.from('#se-scientificresearch-form-who-is-this-residency-for input, #se-scientificresearch-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_scientificresearch_list_required_documents = document.getElementById('se-scientificresearch-list-required-documents');
  if (se_scientificresearch_list_required_documents) {
    gsap.from('#se-scientificresearch-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_scientificresearch_list_application_process = document.getElementById('se-scientificresearch-list-application-process');
  if (se_scientificresearch_list_application_process) {
    gsap.from('#se-scientificresearch-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_scientificresearch_section_timelines_deadlines = document.getElementById('se-scientificresearch-section-timelines-deadlines');
  if (se_scientificresearch_section_timelines_deadlines) {
    gsap.fromTo('#se-scientificresearch-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_scientificresearch_section_fees_costs = document.getElementById('se-scientificresearch-section-fees-costs');
  if (se_scientificresearch_section_fees_costs) {
    gsap.fromTo('#se-scientificresearch-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_scientificresearch_list_risks_common_mistakes = document.getElementById('se-scientificresearch-list-risks-common-mistakes');
  if (se_scientificresearch_list_risks_common_mistakes) {
    gsap.from('#se-scientificresearch-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_scientificresearch_section_diy_vs_professional_assistance = document.getElementById('se-scientificresearch-section-diy-vs-professional-assistance');
  if (se_scientificresearch_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-scientificresearch-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_scientificresearch_section_sergipe_specific_context = document.getElementById('se-scientificresearch-section-sergipe-specific-context');
  if (se_scientificresearch_section_sergipe_specific_context) {
    gsap.fromTo('#se-scientificresearch-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_scientificresearch_section_what_our_clients_say = document.getElementById('se-scientificresearch-section-what-our-clients-say');
  if (se_scientificresearch_section_what_our_clients_say) {
    gsap.fromTo('#se-scientificresearch-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_scientificresearch_section_frequently_asked_questions = document.getElementById('se-scientificresearch-section-frequently-asked-questions');
  if (se_scientificresearch_section_frequently_asked_questions) {
    gsap.fromTo('#se-scientificresearch-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_scientificresearch_section_international_support = document.getElementById('se-scientificresearch-section-international-support');
  if (se_scientificresearch_section_international_support) {
    gsap.fromTo('#se-scientificresearch-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_scientificresearch_list_our_credentials = document.getElementById('se-scientificresearch-list-our-credentials');
  if (se_scientificresearch_list_our_credentials) {
    gsap.from('#se-scientificresearch-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_scientificresearch_list_related_services = document.getElementById('se-scientificresearch-list-related-services');
  if (se_scientificresearch_list_related_services) {
    gsap.from('#se-scientificresearch-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_scientificresearch_section_youre_in_good_hands = document.getElementById('se-scientificresearch-section-youre-in-good-hands');
  if (se_scientificresearch_section_youre_in_good_hands) {
    gsap.fromTo('#se-scientificresearch-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_scientificresearch_section_21 = document.getElementById('se-scientificresearch-section-21');
  if (se_scientificresearch_section_21) {
    gsap.fromTo('#se-scientificresearch-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_study_form_study_in_brazil_with_study_residency = document.getElementById('se-study-form-study-in-brazil-with-study-residency');
  if (se_study_form_study_in_brazil_with_study_residency) {
    gsap.from('#se-study-form-study-in-brazil-with-study-residency input, #se-study-form-study-in-brazil-with-study-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_study_list_quick_facts = document.getElementById('se-study-list-quick-facts');
  if (se_study_list_quick_facts) {
    gsap.from('#se-study-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_study_list_common_challenges_applicants_face = document.getElementById('se-study-list-common-challenges-applicants-face');
  if (se_study_list_common_challenges_applicants_face) {
    gsap.from('#se-study-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_study_list_how_we_solve_these_challenges = document.getElementById('se-study-list-how-we-solve-these-challenges');
  if (se_study_list_how_we_solve_these_challenges) {
    gsap.from('#se-study-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_study_section_residency_overview = document.getElementById('se-study-section-residency-overview');
  if (se_study_section_residency_overview) {
    gsap.fromTo('#se-study-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_study_form_who_is_this_residency_for = document.getElementById('se-study-form-who-is-this-residency-for');
  if (se_study_form_who_is_this_residency_for) {
    gsap.from('#se-study-form-who-is-this-residency-for input, #se-study-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_study_list_required_documents = document.getElementById('se-study-list-required-documents');
  if (se_study_list_required_documents) {
    gsap.from('#se-study-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_study_list_application_process = document.getElementById('se-study-list-application-process');
  if (se_study_list_application_process) {
    gsap.from('#se-study-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_study_section_timelines_deadlines = document.getElementById('se-study-section-timelines-deadlines');
  if (se_study_section_timelines_deadlines) {
    gsap.fromTo('#se-study-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_study_section_fees_costs = document.getElementById('se-study-section-fees-costs');
  if (se_study_section_fees_costs) {
    gsap.fromTo('#se-study-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_study_list_risks_common_mistakes = document.getElementById('se-study-list-risks-common-mistakes');
  if (se_study_list_risks_common_mistakes) {
    gsap.from('#se-study-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_study_section_diy_vs_professional_assistance = document.getElementById('se-study-section-diy-vs-professional-assistance');
  if (se_study_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-study-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_study_section_sergipe_specific_context = document.getElementById('se-study-section-sergipe-specific-context');
  if (se_study_section_sergipe_specific_context) {
    gsap.fromTo('#se-study-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_study_section_what_our_clients_say = document.getElementById('se-study-section-what-our-clients-say');
  if (se_study_section_what_our_clients_say) {
    gsap.fromTo('#se-study-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_study_section_frequently_asked_questions = document.getElementById('se-study-section-frequently-asked-questions');
  if (se_study_section_frequently_asked_questions) {
    gsap.fromTo('#se-study-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_study_section_international_support = document.getElementById('se-study-section-international-support');
  if (se_study_section_international_support) {
    gsap.fromTo('#se-study-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_study_list_our_credentials = document.getElementById('se-study-list-our-credentials');
  if (se_study_list_our_credentials) {
    gsap.from('#se-study-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_study_list_related_services = document.getElementById('se-study-list-related-services');
  if (se_study_list_related_services) {
    gsap.from('#se-study-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_study_section_youre_in_good_hands = document.getElementById('se-study-section-youre-in-good-hands');
  if (se_study_section_youre_in_good_hands) {
    gsap.fromTo('#se-study-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_study_section_21 = document.getElementById('se-study-section-21');
  if (se_study_section_21) {
    gsap.fromTo('#se-study-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const educational_exchange.html = document.getElementById('educational-exchange.html');
  if (educational_exchange.html) {
    gsap.fromTo('#educational-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil = document.getElementById('se-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil');
  if (se_educationalexchange_form_participate_in_educational_exchanges_with_residency_in_brazil) {
    gsap.from('#se-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil input, #se-educationalexchange-form-participate-in-educational-exchanges-with-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_educationalexchange_list_quick_facts = document.getElementById('se-educationalexchange-list-quick-facts');
  if (se_educationalexchange_list_quick_facts) {
    gsap.from('#se-educationalexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_educationalexchange_list_common_challenges_applicants_face = document.getElementById('se-educationalexchange-list-common-challenges-applicants-face');
  if (se_educationalexchange_list_common_challenges_applicants_face) {
    gsap.from('#se-educationalexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_educationalexchange_list_how_we_solve_these_challenges = document.getElementById('se-educationalexchange-list-how-we-solve-these-challenges');
  if (se_educationalexchange_list_how_we_solve_these_challenges) {
    gsap.from('#se-educationalexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_educationalexchange_section_residency_overview = document.getElementById('se-educationalexchange-section-residency-overview');
  if (se_educationalexchange_section_residency_overview) {
    gsap.fromTo('#se-educationalexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_educationalexchange_form_who_is_this_residency_for = document.getElementById('se-educationalexchange-form-who-is-this-residency-for');
  if (se_educationalexchange_form_who_is_this_residency_for) {
    gsap.from('#se-educationalexchange-form-who-is-this-residency-for input, #se-educationalexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_educationalexchange_list_required_documents = document.getElementById('se-educationalexchange-list-required-documents');
  if (se_educationalexchange_list_required_documents) {
    gsap.from('#se-educationalexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_educationalexchange_list_application_process = document.getElementById('se-educationalexchange-list-application-process');
  if (se_educationalexchange_list_application_process) {
    gsap.from('#se-educationalexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_educationalexchange_section_timelines_deadlines = document.getElementById('se-educationalexchange-section-timelines-deadlines');
  if (se_educationalexchange_section_timelines_deadlines) {
    gsap.fromTo('#se-educationalexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_educationalexchange_section_fees_costs = document.getElementById('se-educationalexchange-section-fees-costs');
  if (se_educationalexchange_section_fees_costs) {
    gsap.fromTo('#se-educationalexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_educationalexchange_list_risks_common_mistakes = document.getElementById('se-educationalexchange-list-risks-common-mistakes');
  if (se_educationalexchange_list_risks_common_mistakes) {
    gsap.from('#se-educationalexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_educationalexchange_section_diy_vs_professional_assistance = document.getElementById('se-educationalexchange-section-diy-vs-professional-assistance');
  if (se_educationalexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-educationalexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_educationalexchange_section_sergipe_specific_context = document.getElementById('se-educationalexchange-section-sergipe-specific-context');
  if (se_educationalexchange_section_sergipe_specific_context) {
    gsap.fromTo('#se-educationalexchange-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_educationalexchange_section_what_our_clients_say = document.getElementById('se-educationalexchange-section-what-our-clients-say');
  if (se_educationalexchange_section_what_our_clients_say) {
    gsap.fromTo('#se-educationalexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_educationalexchange_section_frequently_asked_questions = document.getElementById('se-educationalexchange-section-frequently-asked-questions');
  if (se_educationalexchange_section_frequently_asked_questions) {
    gsap.fromTo('#se-educationalexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_educationalexchange_section_international_support = document.getElementById('se-educationalexchange-section-international-support');
  if (se_educationalexchange_section_international_support) {
    gsap.fromTo('#se-educationalexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_educationalexchange_list_our_credentials = document.getElementById('se-educationalexchange-list-our-credentials');
  if (se_educationalexchange_list_our_credentials) {
    gsap.from('#se-educationalexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_educationalexchange_list_related_services = document.getElementById('se-educationalexchange-list-related-services');
  if (se_educationalexchange_list_related_services) {
    gsap.from('#se-educationalexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_educationalexchange_section_youre_in_good_hands = document.getElementById('se-educationalexchange-section-youre-in-good-hands');
  if (se_educationalexchange_section_youre_in_good_hands) {
    gsap.fromTo('#se-educationalexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_educationalexchange_section_21 = document.getElementById('se-educationalexchange-section-21');
  if (se_educationalexchange_section_21) {
    gsap.fromTo('#se-educationalexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_humanitarian_form_humanitarian_residency_in_brazil_for_protection = document.getElementById('se-humanitarian-form-humanitarian-residency-in-brazil-for-protection');
  if (se_humanitarian_form_humanitarian_residency_in_brazil_for_protection) {
    gsap.from('#se-humanitarian-form-humanitarian-residency-in-brazil-for-protection input, #se-humanitarian-form-humanitarian-residency-in-brazil-for-protection textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_humanitarian_list_quick_facts = document.getElementById('se-humanitarian-list-quick-facts');
  if (se_humanitarian_list_quick_facts) {
    gsap.from('#se-humanitarian-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_humanitarian_list_common_challenges_applicants_face = document.getElementById('se-humanitarian-list-common-challenges-applicants-face');
  if (se_humanitarian_list_common_challenges_applicants_face) {
    gsap.from('#se-humanitarian-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_humanitarian_list_how_we_solve_these_challenges = document.getElementById('se-humanitarian-list-how-we-solve-these-challenges');
  if (se_humanitarian_list_how_we_solve_these_challenges) {
    gsap.from('#se-humanitarian-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_humanitarian_section_residency_overview = document.getElementById('se-humanitarian-section-residency-overview');
  if (se_humanitarian_section_residency_overview) {
    gsap.fromTo('#se-humanitarian-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_humanitarian_form_who_is_this_residency_for = document.getElementById('se-humanitarian-form-who-is-this-residency-for');
  if (se_humanitarian_form_who_is_this_residency_for) {
    gsap.from('#se-humanitarian-form-who-is-this-residency-for input, #se-humanitarian-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_humanitarian_list_required_documents = document.getElementById('se-humanitarian-list-required-documents');
  if (se_humanitarian_list_required_documents) {
    gsap.from('#se-humanitarian-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_humanitarian_list_application_process = document.getElementById('se-humanitarian-list-application-process');
  if (se_humanitarian_list_application_process) {
    gsap.from('#se-humanitarian-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_humanitarian_section_timelines_deadlines = document.getElementById('se-humanitarian-section-timelines-deadlines');
  if (se_humanitarian_section_timelines_deadlines) {
    gsap.fromTo('#se-humanitarian-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_humanitarian_section_fees_costs = document.getElementById('se-humanitarian-section-fees-costs');
  if (se_humanitarian_section_fees_costs) {
    gsap.fromTo('#se-humanitarian-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_humanitarian_list_risks_common_mistakes = document.getElementById('se-humanitarian-list-risks-common-mistakes');
  if (se_humanitarian_list_risks_common_mistakes) {
    gsap.from('#se-humanitarian-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_humanitarian_section_diy_vs_professional_assistance = document.getElementById('se-humanitarian-section-diy-vs-professional-assistance');
  if (se_humanitarian_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-humanitarian-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_humanitarian_section_sergipe_specific_context = document.getElementById('se-humanitarian-section-sergipe-specific-context');
  if (se_humanitarian_section_sergipe_specific_context) {
    gsap.fromTo('#se-humanitarian-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_humanitarian_section_what_our_clients_say = document.getElementById('se-humanitarian-section-what-our-clients-say');
  if (se_humanitarian_section_what_our_clients_say) {
    gsap.fromTo('#se-humanitarian-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_humanitarian_section_frequently_asked_questions = document.getElementById('se-humanitarian-section-frequently-asked-questions');
  if (se_humanitarian_section_frequently_asked_questions) {
    gsap.fromTo('#se-humanitarian-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_humanitarian_section_international_support = document.getElementById('se-humanitarian-section-international-support');
  if (se_humanitarian_section_international_support) {
    gsap.fromTo('#se-humanitarian-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_humanitarian_list_our_credentials = document.getElementById('se-humanitarian-list-our-credentials');
  if (se_humanitarian_list_our_credentials) {
    gsap.from('#se-humanitarian-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_humanitarian_list_related_services = document.getElementById('se-humanitarian-list-related-services');
  if (se_humanitarian_list_related_services) {
    gsap.from('#se-humanitarian-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_humanitarian_section_youre_in_good_hands = document.getElementById('se-humanitarian-section-youre-in-good-hands');
  if (se_humanitarian_section_youre_in_good_hands) {
    gsap.fromTo('#se-humanitarian-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_humanitarian_section_21 = document.getElementById('se-humanitarian-section-21');
  if (se_humanitarian_section_21) {
    gsap.fromTo('#se-humanitarian-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const digital_nomad.html = document.getElementById('digital-nomad.html');
  if (digital_nomad.html) {
    gsap.fromTo('#digital-nomad.html', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_digitalnomad_form_digital_nomad_residency_in_brazil = document.getElementById('se-digitalnomad-form-digital-nomad-residency-in-brazil');
  if (se_digitalnomad_form_digital_nomad_residency_in_brazil) {
    gsap.from('#se-digitalnomad-form-digital-nomad-residency-in-brazil input, #se-digitalnomad-form-digital-nomad-residency-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_digitalnomad_list_quick_facts = document.getElementById('se-digitalnomad-list-quick-facts');
  if (se_digitalnomad_list_quick_facts) {
    gsap.from('#se-digitalnomad-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_digitalnomad_list_common_challenges_applicants_face = document.getElementById('se-digitalnomad-list-common-challenges-applicants-face');
  if (se_digitalnomad_list_common_challenges_applicants_face) {
    gsap.from('#se-digitalnomad-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_digitalnomad_list_how_we_solve_these_challenges = document.getElementById('se-digitalnomad-list-how-we-solve-these-challenges');
  if (se_digitalnomad_list_how_we_solve_these_challenges) {
    gsap.from('#se-digitalnomad-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_digitalnomad_section_residency_overview = document.getElementById('se-digitalnomad-section-residency-overview');
  if (se_digitalnomad_section_residency_overview) {
    gsap.fromTo('#se-digitalnomad-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_digitalnomad_form_who_is_this_residency_for = document.getElementById('se-digitalnomad-form-who-is-this-residency-for');
  if (se_digitalnomad_form_who_is_this_residency_for) {
    gsap.from('#se-digitalnomad-form-who-is-this-residency-for input, #se-digitalnomad-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_digitalnomad_list_required_documents = document.getElementById('se-digitalnomad-list-required-documents');
  if (se_digitalnomad_list_required_documents) {
    gsap.from('#se-digitalnomad-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_digitalnomad_list_application_process = document.getElementById('se-digitalnomad-list-application-process');
  if (se_digitalnomad_list_application_process) {
    gsap.from('#se-digitalnomad-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_digitalnomad_section_timelines_deadlines = document.getElementById('se-digitalnomad-section-timelines-deadlines');
  if (se_digitalnomad_section_timelines_deadlines) {
    gsap.fromTo('#se-digitalnomad-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_digitalnomad_section_fees_costs = document.getElementById('se-digitalnomad-section-fees-costs');
  if (se_digitalnomad_section_fees_costs) {
    gsap.fromTo('#se-digitalnomad-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_digitalnomad_list_risks_common_mistakes = document.getElementById('se-digitalnomad-list-risks-common-mistakes');
  if (se_digitalnomad_list_risks_common_mistakes) {
    gsap.from('#se-digitalnomad-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_digitalnomad_section_diy_vs_professional_assistance = document.getElementById('se-digitalnomad-section-diy-vs-professional-assistance');
  if (se_digitalnomad_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-digitalnomad-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_digitalnomad_section_sergipe_specific_context = document.getElementById('se-digitalnomad-section-sergipe-specific-context');
  if (se_digitalnomad_section_sergipe_specific_context) {
    gsap.fromTo('#se-digitalnomad-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_digitalnomad_section_what_our_clients_say = document.getElementById('se-digitalnomad-section-what-our-clients-say');
  if (se_digitalnomad_section_what_our_clients_say) {
    gsap.fromTo('#se-digitalnomad-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_digitalnomad_section_frequently_asked_questions = document.getElementById('se-digitalnomad-section-frequently-asked-questions');
  if (se_digitalnomad_section_frequently_asked_questions) {
    gsap.fromTo('#se-digitalnomad-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_digitalnomad_section_international_support = document.getElementById('se-digitalnomad-section-international-support');
  if (se_digitalnomad_section_international_support) {
    gsap.fromTo('#se-digitalnomad-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_digitalnomad_list_our_credentials = document.getElementById('se-digitalnomad-list-our-credentials');
  if (se_digitalnomad_list_our_credentials) {
    gsap.from('#se-digitalnomad-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_digitalnomad_list_related_services = document.getElementById('se-digitalnomad-list-related-services');
  if (se_digitalnomad_list_related_services) {
    gsap.from('#se-digitalnomad-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_digitalnomad_section_youre_in_good_hands = document.getElementById('se-digitalnomad-section-youre-in-good-hands');
  if (se_digitalnomad_section_youre_in_good_hands) {
    gsap.fromTo('#se-digitalnomad-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_digitalnomad_section_21 = document.getElementById('se-digitalnomad-section-21');
  if (se_digitalnomad_section_21) {
    gsap.fromTo('#se-digitalnomad-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const family_reunion.html = document.getElementById('family-reunion.html');
  if (family_reunion.html) {
    gsap.fromTo('#family-reunion.html', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency = document.getElementById('se-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency');
  if (se_familyreunion_form_reunite_with_family_in_brazil_with_family_reunion_residency) {
    gsap.from('#se-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency input, #se-familyreunion-form-reunite-with-family-in-brazil-with-family-reunion-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_familyreunion_list_quick_facts = document.getElementById('se-familyreunion-list-quick-facts');
  if (se_familyreunion_list_quick_facts) {
    gsap.from('#se-familyreunion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_familyreunion_list_common_challenges_applicants_face = document.getElementById('se-familyreunion-list-common-challenges-applicants-face');
  if (se_familyreunion_list_common_challenges_applicants_face) {
    gsap.from('#se-familyreunion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_familyreunion_list_how_we_solve_these_challenges = document.getElementById('se-familyreunion-list-how-we-solve-these-challenges');
  if (se_familyreunion_list_how_we_solve_these_challenges) {
    gsap.from('#se-familyreunion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_familyreunion_section_residency_overview = document.getElementById('se-familyreunion-section-residency-overview');
  if (se_familyreunion_section_residency_overview) {
    gsap.fromTo('#se-familyreunion-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_familyreunion_form_who_is_this_residency_for = document.getElementById('se-familyreunion-form-who-is-this-residency-for');
  if (se_familyreunion_form_who_is_this_residency_for) {
    gsap.from('#se-familyreunion-form-who-is-this-residency-for input, #se-familyreunion-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_familyreunion_list_required_documents = document.getElementById('se-familyreunion-list-required-documents');
  if (se_familyreunion_list_required_documents) {
    gsap.from('#se-familyreunion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_familyreunion_list_application_process = document.getElementById('se-familyreunion-list-application-process');
  if (se_familyreunion_list_application_process) {
    gsap.from('#se-familyreunion-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_familyreunion_section_timelines_deadlines = document.getElementById('se-familyreunion-section-timelines-deadlines');
  if (se_familyreunion_section_timelines_deadlines) {
    gsap.fromTo('#se-familyreunion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_familyreunion_section_fees_costs = document.getElementById('se-familyreunion-section-fees-costs');
  if (se_familyreunion_section_fees_costs) {
    gsap.fromTo('#se-familyreunion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_familyreunion_list_risks_common_mistakes = document.getElementById('se-familyreunion-list-risks-common-mistakes');
  if (se_familyreunion_list_risks_common_mistakes) {
    gsap.from('#se-familyreunion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_familyreunion_section_diy_vs_professional_assistance = document.getElementById('se-familyreunion-section-diy-vs-professional-assistance');
  if (se_familyreunion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-familyreunion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_familyreunion_section_sergipe_specific_context = document.getElementById('se-familyreunion-section-sergipe-specific-context');
  if (se_familyreunion_section_sergipe_specific_context) {
    gsap.fromTo('#se-familyreunion-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_familyreunion_section_what_our_clients_say = document.getElementById('se-familyreunion-section-what-our-clients-say');
  if (se_familyreunion_section_what_our_clients_say) {
    gsap.fromTo('#se-familyreunion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_familyreunion_section_frequently_asked_questions = document.getElementById('se-familyreunion-section-frequently-asked-questions');
  if (se_familyreunion_section_frequently_asked_questions) {
    gsap.fromTo('#se-familyreunion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_familyreunion_section_international_support = document.getElementById('se-familyreunion-section-international-support');
  if (se_familyreunion_section_international_support) {
    gsap.fromTo('#se-familyreunion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_familyreunion_list_our_credentials = document.getElementById('se-familyreunion-list-our-credentials');
  if (se_familyreunion_list_our_credentials) {
    gsap.from('#se-familyreunion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_familyreunion_list_related_services = document.getElementById('se-familyreunion-list-related-services');
  if (se_familyreunion_list_related_services) {
    gsap.from('#se-familyreunion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_familyreunion_section_youre_in_good_hands = document.getElementById('se-familyreunion-section-youre-in-good-hands');
  if (se_familyreunion_section_youre_in_good_hands) {
    gsap.fromTo('#se-familyreunion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_familyreunion_section_21 = document.getElementById('se-familyreunion-section-21');
  if (se_familyreunion_section_21) {
    gsap.fromTo('#se-familyreunion-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_mercosul_form_residency_for_mercosul_citizens_in_brazil = document.getElementById('se-mercosul-form-residency-for-mercosul-citizens-in-brazil');
  if (se_mercosul_form_residency_for_mercosul_citizens_in_brazil) {
    gsap.from('#se-mercosul-form-residency-for-mercosul-citizens-in-brazil input, #se-mercosul-form-residency-for-mercosul-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_mercosul_list_quick_facts = document.getElementById('se-mercosul-list-quick-facts');
  if (se_mercosul_list_quick_facts) {
    gsap.from('#se-mercosul-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_mercosul_list_common_challenges_applicants_face = document.getElementById('se-mercosul-list-common-challenges-applicants-face');
  if (se_mercosul_list_common_challenges_applicants_face) {
    gsap.from('#se-mercosul-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_mercosul_list_how_we_solve_these_challenges = document.getElementById('se-mercosul-list-how-we-solve-these-challenges');
  if (se_mercosul_list_how_we_solve_these_challenges) {
    gsap.from('#se-mercosul-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_mercosul_section_residency_overview = document.getElementById('se-mercosul-section-residency-overview');
  if (se_mercosul_section_residency_overview) {
    gsap.fromTo('#se-mercosul-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_mercosul_form_who_is_this_residency_for = document.getElementById('se-mercosul-form-who-is-this-residency-for');
  if (se_mercosul_form_who_is_this_residency_for) {
    gsap.from('#se-mercosul-form-who-is-this-residency-for input, #se-mercosul-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_mercosul_list_required_documents = document.getElementById('se-mercosul-list-required-documents');
  if (se_mercosul_list_required_documents) {
    gsap.from('#se-mercosul-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_mercosul_list_application_process = document.getElementById('se-mercosul-list-application-process');
  if (se_mercosul_list_application_process) {
    gsap.from('#se-mercosul-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_mercosul_section_timelines_deadlines = document.getElementById('se-mercosul-section-timelines-deadlines');
  if (se_mercosul_section_timelines_deadlines) {
    gsap.fromTo('#se-mercosul-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_mercosul_section_fees_costs = document.getElementById('se-mercosul-section-fees-costs');
  if (se_mercosul_section_fees_costs) {
    gsap.fromTo('#se-mercosul-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_mercosul_list_risks_common_mistakes = document.getElementById('se-mercosul-list-risks-common-mistakes');
  if (se_mercosul_list_risks_common_mistakes) {
    gsap.from('#se-mercosul-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_mercosul_section_diy_vs_professional_assistance = document.getElementById('se-mercosul-section-diy-vs-professional-assistance');
  if (se_mercosul_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-mercosul-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_mercosul_section_sergipe_specific_context = document.getElementById('se-mercosul-section-sergipe-specific-context');
  if (se_mercosul_section_sergipe_specific_context) {
    gsap.fromTo('#se-mercosul-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_mercosul_section_what_our_clients_say = document.getElementById('se-mercosul-section-what-our-clients-say');
  if (se_mercosul_section_what_our_clients_say) {
    gsap.fromTo('#se-mercosul-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_mercosul_section_frequently_asked_questions = document.getElementById('se-mercosul-section-frequently-asked-questions');
  if (se_mercosul_section_frequently_asked_questions) {
    gsap.fromTo('#se-mercosul-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_mercosul_section_international_support = document.getElementById('se-mercosul-section-international-support');
  if (se_mercosul_section_international_support) {
    gsap.fromTo('#se-mercosul-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_mercosul_list_our_credentials = document.getElementById('se-mercosul-list-our-credentials');
  if (se_mercosul_list_our_credentials) {
    gsap.from('#se-mercosul-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_mercosul_list_related_services = document.getElementById('se-mercosul-list-related-services');
  if (se_mercosul_list_related_services) {
    gsap.from('#se-mercosul-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_mercosul_section_youre_in_good_hands = document.getElementById('se-mercosul-section-youre-in-good-hands');
  if (se_mercosul_section_youre_in_good_hands) {
    gsap.fromTo('#se-mercosul-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_mercosul_section_21 = document.getElementById('se-mercosul-section-21');
  if (se_mercosul_section_21) {
    gsap.fromTo('#se-mercosul-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_retiree_form_retire_in_brazil_with_retiree_residency = document.getElementById('se-retiree-form-retire-in-brazil-with-retiree-residency');
  if (se_retiree_form_retire_in_brazil_with_retiree_residency) {
    gsap.from('#se-retiree-form-retire-in-brazil-with-retiree-residency input, #se-retiree-form-retire-in-brazil-with-retiree-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_retiree_list_quick_facts = document.getElementById('se-retiree-list-quick-facts');
  if (se_retiree_list_quick_facts) {
    gsap.from('#se-retiree-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_retiree_list_common_challenges_applicants_face = document.getElementById('se-retiree-list-common-challenges-applicants-face');
  if (se_retiree_list_common_challenges_applicants_face) {
    gsap.from('#se-retiree-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_retiree_list_how_we_solve_these_challenges = document.getElementById('se-retiree-list-how-we-solve-these-challenges');
  if (se_retiree_list_how_we_solve_these_challenges) {
    gsap.from('#se-retiree-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_retiree_section_residency_overview = document.getElementById('se-retiree-section-residency-overview');
  if (se_retiree_section_residency_overview) {
    gsap.fromTo('#se-retiree-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_retiree_form_who_is_this_residency_for = document.getElementById('se-retiree-form-who-is-this-residency-for');
  if (se_retiree_form_who_is_this_residency_for) {
    gsap.from('#se-retiree-form-who-is-this-residency-for input, #se-retiree-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_retiree_list_required_documents = document.getElementById('se-retiree-list-required-documents');
  if (se_retiree_list_required_documents) {
    gsap.from('#se-retiree-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_retiree_list_application_process = document.getElementById('se-retiree-list-application-process');
  if (se_retiree_list_application_process) {
    gsap.from('#se-retiree-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_retiree_section_timelines_deadlines = document.getElementById('se-retiree-section-timelines-deadlines');
  if (se_retiree_section_timelines_deadlines) {
    gsap.fromTo('#se-retiree-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_retiree_section_fees_costs = document.getElementById('se-retiree-section-fees-costs');
  if (se_retiree_section_fees_costs) {
    gsap.fromTo('#se-retiree-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_retiree_list_risks_common_mistakes = document.getElementById('se-retiree-list-risks-common-mistakes');
  if (se_retiree_list_risks_common_mistakes) {
    gsap.from('#se-retiree-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_retiree_section_diy_vs_professional_assistance = document.getElementById('se-retiree-section-diy-vs-professional-assistance');
  if (se_retiree_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-retiree-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_retiree_section_sergipe_specific_context = document.getElementById('se-retiree-section-sergipe-specific-context');
  if (se_retiree_section_sergipe_specific_context) {
    gsap.fromTo('#se-retiree-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_retiree_section_what_our_clients_say = document.getElementById('se-retiree-section-what-our-clients-say');
  if (se_retiree_section_what_our_clients_say) {
    gsap.fromTo('#se-retiree-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_retiree_section_frequently_asked_questions = document.getElementById('se-retiree-section-frequently-asked-questions');
  if (se_retiree_section_frequently_asked_questions) {
    gsap.fromTo('#se-retiree-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_retiree_section_international_support = document.getElementById('se-retiree-section-international-support');
  if (se_retiree_section_international_support) {
    gsap.fromTo('#se-retiree-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_retiree_list_our_credentials = document.getElementById('se-retiree-list-our-credentials');
  if (se_retiree_list_our_credentials) {
    gsap.from('#se-retiree-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_retiree_list_related_services = document.getElementById('se-retiree-list-related-services');
  if (se_retiree_list_related_services) {
    gsap.from('#se-retiree-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_retiree_section_youre_in_good_hands = document.getElementById('se-retiree-section-youre-in-good-hands');
  if (se_retiree_section_youre_in_good_hands) {
    gsap.fromTo('#se-retiree-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_retiree_section_21 = document.getElementById('se-retiree-section-21');
  if (se_retiree_section_21) {
    gsap.fromTo('#se-retiree-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_volunteer_form_volunteer_in_brazil_with_volunteer_residency = document.getElementById('se-volunteer-form-volunteer-in-brazil-with-volunteer-residency');
  if (se_volunteer_form_volunteer_in_brazil_with_volunteer_residency) {
    gsap.from('#se-volunteer-form-volunteer-in-brazil-with-volunteer-residency input, #se-volunteer-form-volunteer-in-brazil-with-volunteer-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_volunteer_list_quick_facts = document.getElementById('se-volunteer-list-quick-facts');
  if (se_volunteer_list_quick_facts) {
    gsap.from('#se-volunteer-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_volunteer_list_common_challenges_applicants_face = document.getElementById('se-volunteer-list-common-challenges-applicants-face');
  if (se_volunteer_list_common_challenges_applicants_face) {
    gsap.from('#se-volunteer-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_volunteer_list_how_we_solve_these_challenges = document.getElementById('se-volunteer-list-how-we-solve-these-challenges');
  if (se_volunteer_list_how_we_solve_these_challenges) {
    gsap.from('#se-volunteer-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_volunteer_section_residency_overview = document.getElementById('se-volunteer-section-residency-overview');
  if (se_volunteer_section_residency_overview) {
    gsap.fromTo('#se-volunteer-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_volunteer_form_who_is_this_residency_for = document.getElementById('se-volunteer-form-who-is-this-residency-for');
  if (se_volunteer_form_who_is_this_residency_for) {
    gsap.from('#se-volunteer-form-who-is-this-residency-for input, #se-volunteer-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_volunteer_list_required_documents = document.getElementById('se-volunteer-list-required-documents');
  if (se_volunteer_list_required_documents) {
    gsap.from('#se-volunteer-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_volunteer_list_application_process = document.getElementById('se-volunteer-list-application-process');
  if (se_volunteer_list_application_process) {
    gsap.from('#se-volunteer-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_volunteer_section_timelines_deadlines = document.getElementById('se-volunteer-section-timelines-deadlines');
  if (se_volunteer_section_timelines_deadlines) {
    gsap.fromTo('#se-volunteer-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_volunteer_section_fees_costs = document.getElementById('se-volunteer-section-fees-costs');
  if (se_volunteer_section_fees_costs) {
    gsap.fromTo('#se-volunteer-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_volunteer_list_risks_common_mistakes = document.getElementById('se-volunteer-list-risks-common-mistakes');
  if (se_volunteer_list_risks_common_mistakes) {
    gsap.from('#se-volunteer-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_volunteer_section_diy_vs_professional_assistance = document.getElementById('se-volunteer-section-diy-vs-professional-assistance');
  if (se_volunteer_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-volunteer-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_volunteer_section_sergipe_specific_context = document.getElementById('se-volunteer-section-sergipe-specific-context');
  if (se_volunteer_section_sergipe_specific_context) {
    gsap.fromTo('#se-volunteer-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_volunteer_section_what_our_clients_say = document.getElementById('se-volunteer-section-what-our-clients-say');
  if (se_volunteer_section_what_our_clients_say) {
    gsap.fromTo('#se-volunteer-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_volunteer_section_frequently_asked_questions = document.getElementById('se-volunteer-section-frequently-asked-questions');
  if (se_volunteer_section_frequently_asked_questions) {
    gsap.fromTo('#se-volunteer-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_volunteer_section_international_support = document.getElementById('se-volunteer-section-international-support');
  if (se_volunteer_section_international_support) {
    gsap.fromTo('#se-volunteer-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_volunteer_list_our_credentials = document.getElementById('se-volunteer-list-our-credentials');
  if (se_volunteer_list_our_credentials) {
    gsap.from('#se-volunteer-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_volunteer_list_related_services = document.getElementById('se-volunteer-list-related-services');
  if (se_volunteer_list_related_services) {
    gsap.from('#se-volunteer-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_volunteer_section_youre_in_good_hands = document.getElementById('se-volunteer-section-youre-in-good-hands');
  if (se_volunteer_section_youre_in_good_hands) {
    gsap.fromTo('#se-volunteer-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_volunteer_section_21 = document.getElementById('se-volunteer-section-21');
  if (se_volunteer_section_21) {
    gsap.fromTo('#se-volunteer-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const skilled_worker.html = document.getElementById('skilled-worker.html');
  if (skilled_worker.html) {
    gsap.fromTo('#skilled-worker.html', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals = document.getElementById('se-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals');
  if (se_skilledworker_form_skilled_worker_residency_in_brazil_for_professionals) {
    gsap.from('#se-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals input, #se-skilledworker-form-skilled-worker-residency-in-brazil-for-professionals textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_skilledworker_list_quick_facts = document.getElementById('se-skilledworker-list-quick-facts');
  if (se_skilledworker_list_quick_facts) {
    gsap.from('#se-skilledworker-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_skilledworker_list_common_challenges_applicants_face = document.getElementById('se-skilledworker-list-common-challenges-applicants-face');
  if (se_skilledworker_list_common_challenges_applicants_face) {
    gsap.from('#se-skilledworker-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_skilledworker_list_how_we_solve_these_challenges = document.getElementById('se-skilledworker-list-how-we-solve-these-challenges');
  if (se_skilledworker_list_how_we_solve_these_challenges) {
    gsap.from('#se-skilledworker-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_skilledworker_section_residency_overview = document.getElementById('se-skilledworker-section-residency-overview');
  if (se_skilledworker_section_residency_overview) {
    gsap.fromTo('#se-skilledworker-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_skilledworker_form_who_is_this_residency_for = document.getElementById('se-skilledworker-form-who-is-this-residency-for');
  if (se_skilledworker_form_who_is_this_residency_for) {
    gsap.from('#se-skilledworker-form-who-is-this-residency-for input, #se-skilledworker-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_skilledworker_list_required_documents = document.getElementById('se-skilledworker-list-required-documents');
  if (se_skilledworker_list_required_documents) {
    gsap.from('#se-skilledworker-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_skilledworker_list_application_process = document.getElementById('se-skilledworker-list-application-process');
  if (se_skilledworker_list_application_process) {
    gsap.from('#se-skilledworker-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_skilledworker_section_timelines_deadlines = document.getElementById('se-skilledworker-section-timelines-deadlines');
  if (se_skilledworker_section_timelines_deadlines) {
    gsap.fromTo('#se-skilledworker-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_skilledworker_section_fees_costs = document.getElementById('se-skilledworker-section-fees-costs');
  if (se_skilledworker_section_fees_costs) {
    gsap.fromTo('#se-skilledworker-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_skilledworker_list_risks_common_mistakes = document.getElementById('se-skilledworker-list-risks-common-mistakes');
  if (se_skilledworker_list_risks_common_mistakes) {
    gsap.from('#se-skilledworker-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_skilledworker_section_diy_vs_professional_assistance = document.getElementById('se-skilledworker-section-diy-vs-professional-assistance');
  if (se_skilledworker_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-skilledworker-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_skilledworker_section_sergipe_specific_context = document.getElementById('se-skilledworker-section-sergipe-specific-context');
  if (se_skilledworker_section_sergipe_specific_context) {
    gsap.fromTo('#se-skilledworker-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_skilledworker_section_what_our_clients_say = document.getElementById('se-skilledworker-section-what-our-clients-say');
  if (se_skilledworker_section_what_our_clients_say) {
    gsap.fromTo('#se-skilledworker-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_skilledworker_section_frequently_asked_questions = document.getElementById('se-skilledworker-section-frequently-asked-questions');
  if (se_skilledworker_section_frequently_asked_questions) {
    gsap.fromTo('#se-skilledworker-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_skilledworker_section_international_support = document.getElementById('se-skilledworker-section-international-support');
  if (se_skilledworker_section_international_support) {
    gsap.fromTo('#se-skilledworker-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_skilledworker_list_our_credentials = document.getElementById('se-skilledworker-list-our-credentials');
  if (se_skilledworker_list_our_credentials) {
    gsap.from('#se-skilledworker-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_skilledworker_list_related_services = document.getElementById('se-skilledworker-list-related-services');
  if (se_skilledworker_list_related_services) {
    gsap.from('#se-skilledworker-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_skilledworker_section_youre_in_good_hands = document.getElementById('se-skilledworker-section-youre-in-good-hands');
  if (se_skilledworker_section_youre_in_good_hands) {
    gsap.fromTo('#se-skilledworker-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_skilledworker_section_21 = document.getElementById('se-skilledworker-section-21');
  if (se_skilledworker_section_21) {
    gsap.fromTo('#se-skilledworker-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_religious_form_religious_residency_in_brazil_for_missions = document.getElementById('se-religious-form-religious-residency-in-brazil-for-missions');
  if (se_religious_form_religious_residency_in_brazil_for_missions) {
    gsap.from('#se-religious-form-religious-residency-in-brazil-for-missions input, #se-religious-form-religious-residency-in-brazil-for-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_religious_list_quick_facts = document.getElementById('se-religious-list-quick-facts');
  if (se_religious_list_quick_facts) {
    gsap.from('#se-religious-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_religious_list_common_challenges_applicants_face = document.getElementById('se-religious-list-common-challenges-applicants-face');
  if (se_religious_list_common_challenges_applicants_face) {
    gsap.from('#se-religious-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_religious_list_how_we_solve_these_challenges = document.getElementById('se-religious-list-how-we-solve-these-challenges');
  if (se_religious_list_how_we_solve_these_challenges) {
    gsap.from('#se-religious-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_religious_section_residency_overview = document.getElementById('se-religious-section-residency-overview');
  if (se_religious_section_residency_overview) {
    gsap.fromTo('#se-religious-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_religious_form_who_is_this_residency_for = document.getElementById('se-religious-form-who-is-this-residency-for');
  if (se_religious_form_who_is_this_residency_for) {
    gsap.from('#se-religious-form-who-is-this-residency-for input, #se-religious-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_religious_list_required_documents = document.getElementById('se-religious-list-required-documents');
  if (se_religious_list_required_documents) {
    gsap.from('#se-religious-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_religious_list_application_process = document.getElementById('se-religious-list-application-process');
  if (se_religious_list_application_process) {
    gsap.from('#se-religious-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_religious_section_timelines_deadlines = document.getElementById('se-religious-section-timelines-deadlines');
  if (se_religious_section_timelines_deadlines) {
    gsap.fromTo('#se-religious-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_religious_section_fees_costs = document.getElementById('se-religious-section-fees-costs');
  if (se_religious_section_fees_costs) {
    gsap.fromTo('#se-religious-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_religious_list_risks_common_mistakes = document.getElementById('se-religious-list-risks-common-mistakes');
  if (se_religious_list_risks_common_mistakes) {
    gsap.from('#se-religious-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_religious_section_diy_vs_professional_assistance = document.getElementById('se-religious-section-diy-vs-professional-assistance');
  if (se_religious_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-religious-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_religious_section_sergipe_specific_context = document.getElementById('se-religious-section-sergipe-specific-context');
  if (se_religious_section_sergipe_specific_context) {
    gsap.fromTo('#se-religious-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_religious_section_what_our_clients_say = document.getElementById('se-religious-section-what-our-clients-say');
  if (se_religious_section_what_our_clients_say) {
    gsap.fromTo('#se-religious-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_religious_section_frequently_asked_questions = document.getElementById('se-religious-section-frequently-asked-questions');
  if (se_religious_section_frequently_asked_questions) {
    gsap.fromTo('#se-religious-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_religious_section_international_support = document.getElementById('se-religious-section-international-support');
  if (se_religious_section_international_support) {
    gsap.fromTo('#se-religious-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_religious_list_our_credentials = document.getElementById('se-religious-list-our-credentials');
  if (se_religious_list_our_credentials) {
    gsap.from('#se-religious-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_religious_list_related_services = document.getElementById('se-religious-list-related-services');
  if (se_religious_list_related_services) {
    gsap.from('#se-religious-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_religious_section_youre_in_good_hands = document.getElementById('se-religious-section-youre-in-good-hands');
  if (se_religious_section_youre_in_good_hands) {
    gsap.fromTo('#se-religious-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_religious_section_21 = document.getElementById('se-religious-section-21');
  if (se_religious_section_21) {
    gsap.fromTo('#se-religious-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_investor_form_gain_residency_in_brazil_through_investment = document.getElementById('se-investor-form-gain-residency-in-brazil-through-investment');
  if (se_investor_form_gain_residency_in_brazil_through_investment) {
    gsap.from('#se-investor-form-gain-residency-in-brazil-through-investment input, #se-investor-form-gain-residency-in-brazil-through-investment textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_investor_list_quick_facts = document.getElementById('se-investor-list-quick-facts');
  if (se_investor_list_quick_facts) {
    gsap.from('#se-investor-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_investor_list_common_challenges_applicants_face = document.getElementById('se-investor-list-common-challenges-applicants-face');
  if (se_investor_list_common_challenges_applicants_face) {
    gsap.from('#se-investor-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_investor_list_how_we_solve_these_challenges = document.getElementById('se-investor-list-how-we-solve-these-challenges');
  if (se_investor_list_how_we_solve_these_challenges) {
    gsap.from('#se-investor-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_investor_section_residency_overview = document.getElementById('se-investor-section-residency-overview');
  if (se_investor_section_residency_overview) {
    gsap.fromTo('#se-investor-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_investor_form_who_is_this_residency_for = document.getElementById('se-investor-form-who-is-this-residency-for');
  if (se_investor_form_who_is_this_residency_for) {
    gsap.from('#se-investor-form-who-is-this-residency-for input, #se-investor-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_investor_list_required_documents = document.getElementById('se-investor-list-required-documents');
  if (se_investor_list_required_documents) {
    gsap.from('#se-investor-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_investor_list_application_process = document.getElementById('se-investor-list-application-process');
  if (se_investor_list_application_process) {
    gsap.from('#se-investor-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_investor_section_timelines_deadlines = document.getElementById('se-investor-section-timelines-deadlines');
  if (se_investor_section_timelines_deadlines) {
    gsap.fromTo('#se-investor-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_investor_section_fees_costs = document.getElementById('se-investor-section-fees-costs');
  if (se_investor_section_fees_costs) {
    gsap.fromTo('#se-investor-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_investor_list_risks_common_mistakes = document.getElementById('se-investor-list-risks-common-mistakes');
  if (se_investor_list_risks_common_mistakes) {
    gsap.from('#se-investor-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_investor_section_diy_vs_professional_assistance = document.getElementById('se-investor-section-diy-vs-professional-assistance');
  if (se_investor_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-investor-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_investor_section_sergipe_specific_context = document.getElementById('se-investor-section-sergipe-specific-context');
  if (se_investor_section_sergipe_specific_context) {
    gsap.fromTo('#se-investor-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_investor_section_what_our_clients_say = document.getElementById('se-investor-section-what-our-clients-say');
  if (se_investor_section_what_our_clients_say) {
    gsap.fromTo('#se-investor-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_investor_section_frequently_asked_questions = document.getElementById('se-investor-section-frequently-asked-questions');
  if (se_investor_section_frequently_asked_questions) {
    gsap.fromTo('#se-investor-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_investor_section_international_support = document.getElementById('se-investor-section-international-support');
  if (se_investor_section_international_support) {
    gsap.fromTo('#se-investor-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_investor_list_our_credentials = document.getElementById('se-investor-list-our-credentials');
  if (se_investor_list_our_credentials) {
    gsap.from('#se-investor-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_investor_list_related_services = document.getElementById('se-investor-list-related-services');
  if (se_investor_list_related_services) {
    gsap.from('#se-investor-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_investor_section_youre_in_good_hands = document.getElementById('se-investor-section-youre-in-good-hands');
  if (se_investor_section_youre_in_good_hands) {
    gsap.fromTo('#se-investor-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_investor_section_21 = document.getElementById('se-investor-section-21');
  if (se_investor_section_21) {
    gsap.fromTo('#se-investor-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const health_treatment.html = document.getElementById('health-treatment.html');
  if (health_treatment.html) {
    gsap.fromTo('#health-treatment.html', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil = document.getElementById('se-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil');
  if (se_healthtreatment_form_extend_your_stay_for_health_treatment_in_brazil) {
    gsap.from('#se-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil input, #se-healthtreatment-form-extend-your-stay-for-health-treatment-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_healthtreatment_list_quick_facts = document.getElementById('se-healthtreatment-list-quick-facts');
  if (se_healthtreatment_list_quick_facts) {
    gsap.from('#se-healthtreatment-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_healthtreatment_list_common_challenges_applicants_face = document.getElementById('se-healthtreatment-list-common-challenges-applicants-face');
  if (se_healthtreatment_list_common_challenges_applicants_face) {
    gsap.from('#se-healthtreatment-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_healthtreatment_list_how_we_solve_these_challenges = document.getElementById('se-healthtreatment-list-how-we-solve-these-challenges');
  if (se_healthtreatment_list_how_we_solve_these_challenges) {
    gsap.from('#se-healthtreatment-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_healthtreatment_section_residency_overview = document.getElementById('se-healthtreatment-section-residency-overview');
  if (se_healthtreatment_section_residency_overview) {
    gsap.fromTo('#se-healthtreatment-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_healthtreatment_form_who_is_this_residency_for = document.getElementById('se-healthtreatment-form-who-is-this-residency-for');
  if (se_healthtreatment_form_who_is_this_residency_for) {
    gsap.from('#se-healthtreatment-form-who-is-this-residency-for input, #se-healthtreatment-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_healthtreatment_list_required_documents = document.getElementById('se-healthtreatment-list-required-documents');
  if (se_healthtreatment_list_required_documents) {
    gsap.from('#se-healthtreatment-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_healthtreatment_list_application_process = document.getElementById('se-healthtreatment-list-application-process');
  if (se_healthtreatment_list_application_process) {
    gsap.from('#se-healthtreatment-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_healthtreatment_section_timelines_deadlines = document.getElementById('se-healthtreatment-section-timelines-deadlines');
  if (se_healthtreatment_section_timelines_deadlines) {
    gsap.fromTo('#se-healthtreatment-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_healthtreatment_section_fees_costs = document.getElementById('se-healthtreatment-section-fees-costs');
  if (se_healthtreatment_section_fees_costs) {
    gsap.fromTo('#se-healthtreatment-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_healthtreatment_list_risks_common_mistakes = document.getElementById('se-healthtreatment-list-risks-common-mistakes');
  if (se_healthtreatment_list_risks_common_mistakes) {
    gsap.from('#se-healthtreatment-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_healthtreatment_section_diy_vs_professional_assistance = document.getElementById('se-healthtreatment-section-diy-vs-professional-assistance');
  if (se_healthtreatment_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-healthtreatment-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_healthtreatment_section_sergipe_specific_context = document.getElementById('se-healthtreatment-section-sergipe-specific-context');
  if (se_healthtreatment_section_sergipe_specific_context) {
    gsap.fromTo('#se-healthtreatment-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_healthtreatment_section_what_our_clients_say = document.getElementById('se-healthtreatment-section-what-our-clients-say');
  if (se_healthtreatment_section_what_our_clients_say) {
    gsap.fromTo('#se-healthtreatment-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_healthtreatment_section_frequently_asked_questions = document.getElementById('se-healthtreatment-section-frequently-asked-questions');
  if (se_healthtreatment_section_frequently_asked_questions) {
    gsap.fromTo('#se-healthtreatment-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_healthtreatment_section_international_support = document.getElementById('se-healthtreatment-section-international-support');
  if (se_healthtreatment_section_international_support) {
    gsap.fromTo('#se-healthtreatment-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_healthtreatment_list_our_credentials = document.getElementById('se-healthtreatment-list-our-credentials');
  if (se_healthtreatment_list_our_credentials) {
    gsap.from('#se-healthtreatment-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_healthtreatment_list_related_services = document.getElementById('se-healthtreatment-list-related-services');
  if (se_healthtreatment_list_related_services) {
    gsap.from('#se-healthtreatment-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_healthtreatment_section_youre_in_good_hands = document.getElementById('se-healthtreatment-section-youre-in-good-hands');
  if (se_healthtreatment_section_youre_in_good_hands) {
    gsap.fromTo('#se-healthtreatment-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_healthtreatment_section_21 = document.getElementById('se-healthtreatment-section-21');
  if (se_healthtreatment_section_21) {
    gsap.fromTo('#se-healthtreatment-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_cplp_form_residency_for_cplp_citizens_in_brazil = document.getElementById('se-cplp-form-residency-for-cplp-citizens-in-brazil');
  if (se_cplp_form_residency_for_cplp_citizens_in_brazil) {
    gsap.from('#se-cplp-form-residency-for-cplp-citizens-in-brazil input, #se-cplp-form-residency-for-cplp-citizens-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_cplp_list_quick_facts = document.getElementById('se-cplp-list-quick-facts');
  if (se_cplp_list_quick_facts) {
    gsap.from('#se-cplp-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_cplp_list_common_challenges_applicants_face = document.getElementById('se-cplp-list-common-challenges-applicants-face');
  if (se_cplp_list_common_challenges_applicants_face) {
    gsap.from('#se-cplp-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_cplp_list_how_we_solve_these_challenges = document.getElementById('se-cplp-list-how-we-solve-these-challenges');
  if (se_cplp_list_how_we_solve_these_challenges) {
    gsap.from('#se-cplp-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_cplp_section_residency_overview = document.getElementById('se-cplp-section-residency-overview');
  if (se_cplp_section_residency_overview) {
    gsap.fromTo('#se-cplp-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_cplp_form_who_is_this_residency_for = document.getElementById('se-cplp-form-who-is-this-residency-for');
  if (se_cplp_form_who_is_this_residency_for) {
    gsap.from('#se-cplp-form-who-is-this-residency-for input, #se-cplp-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_cplp_list_required_documents = document.getElementById('se-cplp-list-required-documents');
  if (se_cplp_list_required_documents) {
    gsap.from('#se-cplp-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_cplp_list_application_process = document.getElementById('se-cplp-list-application-process');
  if (se_cplp_list_application_process) {
    gsap.from('#se-cplp-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_cplp_section_timelines_deadlines = document.getElementById('se-cplp-section-timelines-deadlines');
  if (se_cplp_section_timelines_deadlines) {
    gsap.fromTo('#se-cplp-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_cplp_section_fees_costs = document.getElementById('se-cplp-section-fees-costs');
  if (se_cplp_section_fees_costs) {
    gsap.fromTo('#se-cplp-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_cplp_list_risks_common_mistakes = document.getElementById('se-cplp-list-risks-common-mistakes');
  if (se_cplp_list_risks_common_mistakes) {
    gsap.from('#se-cplp-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_cplp_section_diy_vs_professional_assistance = document.getElementById('se-cplp-section-diy-vs-professional-assistance');
  if (se_cplp_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-cplp-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_cplp_section_sergipe_specific_context = document.getElementById('se-cplp-section-sergipe-specific-context');
  if (se_cplp_section_sergipe_specific_context) {
    gsap.fromTo('#se-cplp-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_cplp_section_what_our_clients_say = document.getElementById('se-cplp-section-what-our-clients-say');
  if (se_cplp_section_what_our_clients_say) {
    gsap.fromTo('#se-cplp-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_cplp_section_frequently_asked_questions = document.getElementById('se-cplp-section-frequently-asked-questions');
  if (se_cplp_section_frequently_asked_questions) {
    gsap.fromTo('#se-cplp-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_cplp_section_international_support = document.getElementById('se-cplp-section-international-support');
  if (se_cplp_section_international_support) {
    gsap.fromTo('#se-cplp-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_cplp_list_our_credentials = document.getElementById('se-cplp-list-our-credentials');
  if (se_cplp_list_our_credentials) {
    gsap.from('#se-cplp-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_cplp_list_related_services = document.getElementById('se-cplp-list-related-services');
  if (se_cplp_list_related_services) {
    gsap.from('#se-cplp-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_cplp_section_youre_in_good_hands = document.getElementById('se-cplp-section-youre-in-good-hands');
  if (se_cplp_section_youre_in_good_hands) {
    gsap.fromTo('#se-cplp-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_cplp_section_21 = document.getElementById('se-cplp-section-21');
  if (se_cplp_section_21) {
    gsap.fromTo('#se-cplp-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const youth_exchange.html = document.getElementById('youth-exchange.html');
  if (youth_exchange.html) {
    gsap.fromTo('#youth-exchange.html', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_youthexchange_form_youth_exchange_residency_in_brazil_for_programs = document.getElementById('se-youthexchange-form-youth-exchange-residency-in-brazil-for-programs');
  if (se_youthexchange_form_youth_exchange_residency_in_brazil_for_programs) {
    gsap.from('#se-youthexchange-form-youth-exchange-residency-in-brazil-for-programs input, #se-youthexchange-form-youth-exchange-residency-in-brazil-for-programs textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_youthexchange_list_quick_facts = document.getElementById('se-youthexchange-list-quick-facts');
  if (se_youthexchange_list_quick_facts) {
    gsap.from('#se-youthexchange-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_youthexchange_list_common_challenges_applicants_face = document.getElementById('se-youthexchange-list-common-challenges-applicants-face');
  if (se_youthexchange_list_common_challenges_applicants_face) {
    gsap.from('#se-youthexchange-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_youthexchange_list_how_we_solve_these_challenges = document.getElementById('se-youthexchange-list-how-we-solve-these-challenges');
  if (se_youthexchange_list_how_we_solve_these_challenges) {
    gsap.from('#se-youthexchange-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_youthexchange_section_residency_overview = document.getElementById('se-youthexchange-section-residency-overview');
  if (se_youthexchange_section_residency_overview) {
    gsap.fromTo('#se-youthexchange-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_youthexchange_form_who_is_this_residency_for = document.getElementById('se-youthexchange-form-who-is-this-residency-for');
  if (se_youthexchange_form_who_is_this_residency_for) {
    gsap.from('#se-youthexchange-form-who-is-this-residency-for input, #se-youthexchange-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_youthexchange_list_required_documents = document.getElementById('se-youthexchange-list-required-documents');
  if (se_youthexchange_list_required_documents) {
    gsap.from('#se-youthexchange-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_youthexchange_list_application_process = document.getElementById('se-youthexchange-list-application-process');
  if (se_youthexchange_list_application_process) {
    gsap.from('#se-youthexchange-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_youthexchange_section_timelines_deadlines = document.getElementById('se-youthexchange-section-timelines-deadlines');
  if (se_youthexchange_section_timelines_deadlines) {
    gsap.fromTo('#se-youthexchange-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_youthexchange_section_fees_costs = document.getElementById('se-youthexchange-section-fees-costs');
  if (se_youthexchange_section_fees_costs) {
    gsap.fromTo('#se-youthexchange-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_youthexchange_list_risks_common_mistakes = document.getElementById('se-youthexchange-list-risks-common-mistakes');
  if (se_youthexchange_list_risks_common_mistakes) {
    gsap.from('#se-youthexchange-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_youthexchange_section_diy_vs_professional_assistance = document.getElementById('se-youthexchange-section-diy-vs-professional-assistance');
  if (se_youthexchange_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-youthexchange-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_youthexchange_section_sergipe_specific_context = document.getElementById('se-youthexchange-section-sergipe-specific-context');
  if (se_youthexchange_section_sergipe_specific_context) {
    gsap.fromTo('#se-youthexchange-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_youthexchange_section_what_our_clients_say = document.getElementById('se-youthexchange-section-what-our-clients-say');
  if (se_youthexchange_section_what_our_clients_say) {
    gsap.fromTo('#se-youthexchange-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_youthexchange_section_frequently_asked_questions = document.getElementById('se-youthexchange-section-frequently-asked-questions');
  if (se_youthexchange_section_frequently_asked_questions) {
    gsap.fromTo('#se-youthexchange-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_youthexchange_section_international_support = document.getElementById('se-youthexchange-section-international-support');
  if (se_youthexchange_section_international_support) {
    gsap.fromTo('#se-youthexchange-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_youthexchange_list_our_credentials = document.getElementById('se-youthexchange-list-our-credentials');
  if (se_youthexchange_list_our_credentials) {
    gsap.from('#se-youthexchange-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_youthexchange_list_related_services = document.getElementById('se-youthexchange-list-related-services');
  if (se_youthexchange_list_related_services) {
    gsap.from('#se-youthexchange-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_youthexchange_section_youre_in_good_hands = document.getElementById('se-youthexchange-section-youre-in-good-hands');
  if (se_youthexchange_section_youre_in_good_hands) {
    gsap.fromTo('#se-youthexchange-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_youthexchange_section_21 = document.getElementById('se-youthexchange-section-21');
  if (se_youthexchange_section_21) {
    gsap.fromTo('#se-youthexchange-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_work_form_work_and_reside_in_brazil_with_work_residency = document.getElementById('se-work-form-work-and-reside-in-brazil-with-work-residency');
  if (se_work_form_work_and_reside_in_brazil_with_work_residency) {
    gsap.from('#se-work-form-work-and-reside-in-brazil-with-work-residency input, #se-work-form-work-and-reside-in-brazil-with-work-residency textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_work_list_quick_facts = document.getElementById('se-work-list-quick-facts');
  if (se_work_list_quick_facts) {
    gsap.from('#se-work-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_work_list_common_challenges_applicants_face = document.getElementById('se-work-list-common-challenges-applicants-face');
  if (se_work_list_common_challenges_applicants_face) {
    gsap.from('#se-work-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_work_list_how_we_solve_these_challenges = document.getElementById('se-work-list-how-we-solve-these-challenges');
  if (se_work_list_how_we_solve_these_challenges) {
    gsap.from('#se-work-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_work_section_residency_overview = document.getElementById('se-work-section-residency-overview');
  if (se_work_section_residency_overview) {
    gsap.fromTo('#se-work-section-residency-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_work_form_who_is_this_residency_for = document.getElementById('se-work-form-who-is-this-residency-for');
  if (se_work_form_who_is_this_residency_for) {
    gsap.from('#se-work-form-who-is-this-residency-for input, #se-work-form-who-is-this-residency-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_work_list_required_documents = document.getElementById('se-work-list-required-documents');
  if (se_work_list_required_documents) {
    gsap.from('#se-work-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_work_list_application_process = document.getElementById('se-work-list-application-process');
  if (se_work_list_application_process) {
    gsap.from('#se-work-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_work_section_timelines_deadlines = document.getElementById('se-work-section-timelines-deadlines');
  if (se_work_section_timelines_deadlines) {
    gsap.fromTo('#se-work-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_work_section_fees_costs = document.getElementById('se-work-section-fees-costs');
  if (se_work_section_fees_costs) {
    gsap.fromTo('#se-work-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_work_list_risks_common_mistakes = document.getElementById('se-work-list-risks-common-mistakes');
  if (se_work_list_risks_common_mistakes) {
    gsap.from('#se-work-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_work_section_diy_vs_professional_assistance = document.getElementById('se-work-section-diy-vs-professional-assistance');
  if (se_work_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-work-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_work_section_sergipe_specific_context = document.getElementById('se-work-section-sergipe-specific-context');
  if (se_work_section_sergipe_specific_context) {
    gsap.fromTo('#se-work-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_work_section_what_our_clients_say = document.getElementById('se-work-section-what-our-clients-say');
  if (se_work_section_what_our_clients_say) {
    gsap.fromTo('#se-work-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_work_section_frequently_asked_questions = document.getElementById('se-work-section-frequently-asked-questions');
  if (se_work_section_frequently_asked_questions) {
    gsap.fromTo('#se-work-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_work_section_international_support = document.getElementById('se-work-section-international-support');
  if (se_work_section_international_support) {
    gsap.fromTo('#se-work-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_work_list_our_credentials = document.getElementById('se-work-list-our-credentials');
  if (se_work_list_our_credentials) {
    gsap.from('#se-work-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_work_list_related_services = document.getElementById('se-work-list-related-services');
  if (se_work_list_related_services) {
    gsap.from('#se-work-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_work_section_youre_in_good_hands = document.getElementById('se-work-section-youre-in-good-hands');
  if (se_work_section_youre_in_good_hands) {
    gsap.fromTo('#se-work-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_work_section_21 = document.getElementById('se-work-section-21');
  if (se_work_section_21) {
    gsap.fromTo('#se-work-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_startup_form_launch_your_startup_in_brazil_with_the_startup_visa = document.getElementById('se-startup-form-launch-your-startup-in-brazil-with-the-startup-visa');
  if (se_startup_form_launch_your_startup_in_brazil_with_the_startup_visa) {
    gsap.from('#se-startup-form-launch-your-startup-in-brazil-with-the-startup-visa input, #se-startup-form-launch-your-startup-in-brazil-with-the-startup-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_startup_list_quick_facts = document.getElementById('se-startup-list-quick-facts');
  if (se_startup_list_quick_facts) {
    gsap.from('#se-startup-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_startup_list_common_challenges_applicants_face = document.getElementById('se-startup-list-common-challenges-applicants-face');
  if (se_startup_list_common_challenges_applicants_face) {
    gsap.from('#se-startup-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_startup_list_how_we_solve_these_challenges = document.getElementById('se-startup-list-how-we-solve-these-challenges');
  if (se_startup_list_how_we_solve_these_challenges) {
    gsap.from('#se-startup-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_startup_section_visa_overview = document.getElementById('se-startup-section-visa-overview');
  if (se_startup_section_visa_overview) {
    gsap.fromTo('#se-startup-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_startup_form_who_is_this_visa_for = document.getElementById('se-startup-form-who-is-this-visa-for');
  if (se_startup_form_who_is_this_visa_for) {
    gsap.from('#se-startup-form-who-is-this-visa-for input, #se-startup-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_startup_list_required_documents = document.getElementById('se-startup-list-required-documents');
  if (se_startup_list_required_documents) {
    gsap.from('#se-startup-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_startup_list_application_process = document.getElementById('se-startup-list-application-process');
  if (se_startup_list_application_process) {
    gsap.from('#se-startup-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_startup_section_timelines_deadlines = document.getElementById('se-startup-section-timelines-deadlines');
  if (se_startup_section_timelines_deadlines) {
    gsap.fromTo('#se-startup-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_startup_section_fees_costs = document.getElementById('se-startup-section-fees-costs');
  if (se_startup_section_fees_costs) {
    gsap.fromTo('#se-startup-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_startup_list_risks_common_mistakes = document.getElementById('se-startup-list-risks-common-mistakes');
  if (se_startup_list_risks_common_mistakes) {
    gsap.from('#se-startup-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_startup_section_diy_vs_professional_assistance = document.getElementById('se-startup-section-diy-vs-professional-assistance');
  if (se_startup_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-startup-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_startup_section_sergipe_specific_context = document.getElementById('se-startup-section-sergipe-specific-context');
  if (se_startup_section_sergipe_specific_context) {
    gsap.fromTo('#se-startup-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_startup_section_what_our_clients_say = document.getElementById('se-startup-section-what-our-clients-say');
  if (se_startup_section_what_our_clients_say) {
    gsap.fromTo('#se-startup-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_startup_section_frequently_asked_questions = document.getElementById('se-startup-section-frequently-asked-questions');
  if (se_startup_section_frequently_asked_questions) {
    gsap.fromTo('#se-startup-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_startup_section_international_support = document.getElementById('se-startup-section-international-support');
  if (se_startup_section_international_support) {
    gsap.fromTo('#se-startup-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_startup_list_our_credentials = document.getElementById('se-startup-list-our-credentials');
  if (se_startup_list_our_credentials) {
    gsap.from('#se-startup-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_startup_list_related_services = document.getElementById('se-startup-list-related-services');
  if (se_startup_list_related_services) {
    gsap.from('#se-startup-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_startup_section_youre_in_good_hands = document.getElementById('se-startup-section-youre-in-good-hands');
  if (se_startup_section_youre_in_good_hands) {
    gsap.fromTo('#se-startup-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_startup_section_21 = document.getElementById('se-startup-section-21');
  if (se_startup_section_21) {
    gsap.fromTo('#se-startup-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_family_form_reunite_with_family_in_brazil_with_the_family_visa = document.getElementById('se-family-form-reunite-with-family-in-brazil-with-the-family-visa');
  if (se_family_form_reunite_with_family_in_brazil_with_the_family_visa) {
    gsap.from('#se-family-form-reunite-with-family-in-brazil-with-the-family-visa input, #se-family-form-reunite-with-family-in-brazil-with-the-family-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_family_list_quick_facts = document.getElementById('se-family-list-quick-facts');
  if (se_family_list_quick_facts) {
    gsap.from('#se-family-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_family_list_common_challenges_applicants_face = document.getElementById('se-family-list-common-challenges-applicants-face');
  if (se_family_list_common_challenges_applicants_face) {
    gsap.from('#se-family-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_family_list_how_we_solve_these_challenges = document.getElementById('se-family-list-how-we-solve-these-challenges');
  if (se_family_list_how_we_solve_these_challenges) {
    gsap.from('#se-family-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_family_section_visa_overview = document.getElementById('se-family-section-visa-overview');
  if (se_family_section_visa_overview) {
    gsap.fromTo('#se-family-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_family_form_who_is_this_visa_for = document.getElementById('se-family-form-who-is-this-visa-for');
  if (se_family_form_who_is_this_visa_for) {
    gsap.from('#se-family-form-who-is-this-visa-for input, #se-family-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_family_list_required_documents = document.getElementById('se-family-list-required-documents');
  if (se_family_list_required_documents) {
    gsap.from('#se-family-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_family_list_application_process = document.getElementById('se-family-list-application-process');
  if (se_family_list_application_process) {
    gsap.from('#se-family-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_family_section_timelines_deadlines = document.getElementById('se-family-section-timelines-deadlines');
  if (se_family_section_timelines_deadlines) {
    gsap.fromTo('#se-family-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_family_section_fees_costs = document.getElementById('se-family-section-fees-costs');
  if (se_family_section_fees_costs) {
    gsap.fromTo('#se-family-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_family_list_risks_common_mistakes = document.getElementById('se-family-list-risks-common-mistakes');
  if (se_family_list_risks_common_mistakes) {
    gsap.from('#se-family-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_family_section_diy_vs_professional_assistance = document.getElementById('se-family-section-diy-vs-professional-assistance');
  if (se_family_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-family-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_family_section_sergipe_specific_context = document.getElementById('se-family-section-sergipe-specific-context');
  if (se_family_section_sergipe_specific_context) {
    gsap.fromTo('#se-family-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_family_section_what_our_clients_say = document.getElementById('se-family-section-what-our-clients-say');
  if (se_family_section_what_our_clients_say) {
    gsap.fromTo('#se-family-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_family_section_frequently_asked_questions = document.getElementById('se-family-section-frequently-asked-questions');
  if (se_family_section_frequently_asked_questions) {
    gsap.fromTo('#se-family-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_family_section_international_support = document.getElementById('se-family-section-international-support');
  if (se_family_section_international_support) {
    gsap.fromTo('#se-family-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_family_list_our_credentials = document.getElementById('se-family-list-our-credentials');
  if (se_family_list_our_credentials) {
    gsap.from('#se-family-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_family_list_related_services = document.getElementById('se-family-list-related-services');
  if (se_family_list_related_services) {
    gsap.from('#se-family-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_family_section_youre_in_good_hands = document.getElementById('se-family-section-youre-in-good-hands');
  if (se_family_section_youre_in_good_hands) {
    gsap.fromTo('#se-family-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_family_section_21 = document.getElementById('se-family-section-21');
  if (se_family_section_21) {
    gsap.fromTo('#se-family-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_sports_form_compete_in_brazil_with_the_sports_visa = document.getElementById('se-sports-form-compete-in-brazil-with-the-sports-visa');
  if (se_sports_form_compete_in_brazil_with_the_sports_visa) {
    gsap.from('#se-sports-form-compete-in-brazil-with-the-sports-visa input, #se-sports-form-compete-in-brazil-with-the-sports-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_sports_list_quick_facts = document.getElementById('se-sports-list-quick-facts');
  if (se_sports_list_quick_facts) {
    gsap.from('#se-sports-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_sports_list_common_challenges_applicants_face = document.getElementById('se-sports-list-common-challenges-applicants-face');
  if (se_sports_list_common_challenges_applicants_face) {
    gsap.from('#se-sports-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_sports_list_how_we_solve_these_challenges = document.getElementById('se-sports-list-how-we-solve-these-challenges');
  if (se_sports_list_how_we_solve_these_challenges) {
    gsap.from('#se-sports-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_sports_section_visa_overview = document.getElementById('se-sports-section-visa-overview');
  if (se_sports_section_visa_overview) {
    gsap.fromTo('#se-sports-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_sports_form_who_is_this_visa_for = document.getElementById('se-sports-form-who-is-this-visa-for');
  if (se_sports_form_who_is_this_visa_for) {
    gsap.from('#se-sports-form-who-is-this-visa-for input, #se-sports-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_sports_list_required_documents = document.getElementById('se-sports-list-required-documents');
  if (se_sports_list_required_documents) {
    gsap.from('#se-sports-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_sports_list_application_process = document.getElementById('se-sports-list-application-process');
  if (se_sports_list_application_process) {
    gsap.from('#se-sports-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_sports_section_timelines_deadlines = document.getElementById('se-sports-section-timelines-deadlines');
  if (se_sports_section_timelines_deadlines) {
    gsap.fromTo('#se-sports-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_sports_section_fees_costs = document.getElementById('se-sports-section-fees-costs');
  if (se_sports_section_fees_costs) {
    gsap.fromTo('#se-sports-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_sports_list_risks_common_mistakes = document.getElementById('se-sports-list-risks-common-mistakes');
  if (se_sports_list_risks_common_mistakes) {
    gsap.from('#se-sports-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_sports_section_diy_vs_professional_assistance = document.getElementById('se-sports-section-diy-vs-professional-assistance');
  if (se_sports_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-sports-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_sports_section_sergipe_specific_context = document.getElementById('se-sports-section-sergipe-specific-context');
  if (se_sports_section_sergipe_specific_context) {
    gsap.fromTo('#se-sports-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_sports_section_what_our_clients_say = document.getElementById('se-sports-section-what-our-clients-say');
  if (se_sports_section_what_our_clients_say) {
    gsap.fromTo('#se-sports-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_sports_section_frequently_asked_questions = document.getElementById('se-sports-section-frequently-asked-questions');
  if (se_sports_section_frequently_asked_questions) {
    gsap.fromTo('#se-sports-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_sports_section_international_support = document.getElementById('se-sports-section-international-support');
  if (se_sports_section_international_support) {
    gsap.fromTo('#se-sports-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_sports_list_our_credentials = document.getElementById('se-sports-list-our-credentials');
  if (se_sports_list_our_credentials) {
    gsap.from('#se-sports-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_sports_list_related_services = document.getElementById('se-sports-list-related-services');
  if (se_sports_list_related_services) {
    gsap.from('#se-sports-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_sports_section_youre_in_good_hands = document.getElementById('se-sports-section-youre-in-good-hands');
  if (se_sports_section_youre_in_good_hands) {
    gsap.fromTo('#se-sports-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_sports_section_21 = document.getElementById('se-sports-section-21');
  if (se_sports_section_21) {
    gsap.fromTo('#se-sports-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa = document.getElementById('se-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa');
  if (se_medical_form_receive_medical_treatment_in_brazil_with_the_medical_visa) {
    gsap.from('#se-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa input, #se-medical-form-receive-medical-treatment-in-brazil-with-the-medical-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_medical_list_quick_facts = document.getElementById('se-medical-list-quick-facts');
  if (se_medical_list_quick_facts) {
    gsap.from('#se-medical-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_medical_list_common_challenges_applicants_face = document.getElementById('se-medical-list-common-challenges-applicants-face');
  if (se_medical_list_common_challenges_applicants_face) {
    gsap.from('#se-medical-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_medical_list_how_we_solve_these_challenges = document.getElementById('se-medical-list-how-we-solve-these-challenges');
  if (se_medical_list_how_we_solve_these_challenges) {
    gsap.from('#se-medical-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_medical_section_visa_overview = document.getElementById('se-medical-section-visa-overview');
  if (se_medical_section_visa_overview) {
    gsap.fromTo('#se-medical-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_medical_form_who_is_this_visa_for = document.getElementById('se-medical-form-who-is-this-visa-for');
  if (se_medical_form_who_is_this_visa_for) {
    gsap.from('#se-medical-form-who-is-this-visa-for input, #se-medical-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_medical_list_required_documents = document.getElementById('se-medical-list-required-documents');
  if (se_medical_list_required_documents) {
    gsap.from('#se-medical-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_medical_list_application_process = document.getElementById('se-medical-list-application-process');
  if (se_medical_list_application_process) {
    gsap.from('#se-medical-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_medical_section_timelines_deadlines = document.getElementById('se-medical-section-timelines-deadlines');
  if (se_medical_section_timelines_deadlines) {
    gsap.fromTo('#se-medical-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_medical_section_fees_costs = document.getElementById('se-medical-section-fees-costs');
  if (se_medical_section_fees_costs) {
    gsap.fromTo('#se-medical-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_medical_list_risks_common_mistakes = document.getElementById('se-medical-list-risks-common-mistakes');
  if (se_medical_list_risks_common_mistakes) {
    gsap.from('#se-medical-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_medical_section_diy_vs_professional_assistance = document.getElementById('se-medical-section-diy-vs-professional-assistance');
  if (se_medical_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-medical-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_medical_section_sergipe_specific_context = document.getElementById('se-medical-section-sergipe-specific-context');
  if (se_medical_section_sergipe_specific_context) {
    gsap.fromTo('#se-medical-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_medical_section_what_our_clients_say = document.getElementById('se-medical-section-what-our-clients-say');
  if (se_medical_section_what_our_clients_say) {
    gsap.fromTo('#se-medical-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_medical_section_frequently_asked_questions = document.getElementById('se-medical-section-frequently-asked-questions');
  if (se_medical_section_frequently_asked_questions) {
    gsap.fromTo('#se-medical-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_medical_section_international_support = document.getElementById('se-medical-section-international-support');
  if (se_medical_section_international_support) {
    gsap.fromTo('#se-medical-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_medical_list_our_credentials = document.getElementById('se-medical-list-our-credentials');
  if (se_medical_list_our_credentials) {
    gsap.from('#se-medical-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_medical_list_related_services = document.getElementById('se-medical-list-related-services');
  if (se_medical_list_related_services) {
    gsap.from('#se-medical-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_medical_section_youre_in_good_hands = document.getElementById('se-medical-section-youre-in-good-hands');
  if (se_medical_section_youre_in_good_hands) {
    gsap.fromTo('#se-medical-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_medical_section_21 = document.getElementById('se-medical-section-21');
  if (se_medical_section_21) {
    gsap.fromTo('#se-medical-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa = document.getElementById('se-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa');
  if (se_tourist_form_visit_brazil_as_a_tourist_with_the_tourist_visa) {
    gsap.from('#se-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa input, #se-tourist-form-visit-brazil-as-a-tourist-with-the-tourist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_tourist_list_quick_facts = document.getElementById('se-tourist-list-quick-facts');
  if (se_tourist_list_quick_facts) {
    gsap.from('#se-tourist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_tourist_list_common_challenges_applicants_face = document.getElementById('se-tourist-list-common-challenges-applicants-face');
  if (se_tourist_list_common_challenges_applicants_face) {
    gsap.from('#se-tourist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_tourist_list_how_we_solve_these_challenges = document.getElementById('se-tourist-list-how-we-solve-these-challenges');
  if (se_tourist_list_how_we_solve_these_challenges) {
    gsap.from('#se-tourist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_tourist_section_visa_overview = document.getElementById('se-tourist-section-visa-overview');
  if (se_tourist_section_visa_overview) {
    gsap.fromTo('#se-tourist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_tourist_form_who_is_this_visa_for = document.getElementById('se-tourist-form-who-is-this-visa-for');
  if (se_tourist_form_who_is_this_visa_for) {
    gsap.from('#se-tourist-form-who-is-this-visa-for input, #se-tourist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_tourist_list_required_documents = document.getElementById('se-tourist-list-required-documents');
  if (se_tourist_list_required_documents) {
    gsap.from('#se-tourist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_tourist_list_application_process = document.getElementById('se-tourist-list-application-process');
  if (se_tourist_list_application_process) {
    gsap.from('#se-tourist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_tourist_section_timelines_deadlines = document.getElementById('se-tourist-section-timelines-deadlines');
  if (se_tourist_section_timelines_deadlines) {
    gsap.fromTo('#se-tourist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_tourist_section_fees_costs = document.getElementById('se-tourist-section-fees-costs');
  if (se_tourist_section_fees_costs) {
    gsap.fromTo('#se-tourist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_tourist_list_risks_common_mistakes = document.getElementById('se-tourist-list-risks-common-mistakes');
  if (se_tourist_list_risks_common_mistakes) {
    gsap.from('#se-tourist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_tourist_section_diy_vs_professional_assistance = document.getElementById('se-tourist-section-diy-vs-professional-assistance');
  if (se_tourist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-tourist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_tourist_section_sergipe_specific_context = document.getElementById('se-tourist-section-sergipe-specific-context');
  if (se_tourist_section_sergipe_specific_context) {
    gsap.fromTo('#se-tourist-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_tourist_section_what_our_clients_say = document.getElementById('se-tourist-section-what-our-clients-say');
  if (se_tourist_section_what_our_clients_say) {
    gsap.fromTo('#se-tourist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_tourist_section_frequently_asked_questions = document.getElementById('se-tourist-section-frequently-asked-questions');
  if (se_tourist_section_frequently_asked_questions) {
    gsap.fromTo('#se-tourist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_tourist_section_international_support = document.getElementById('se-tourist-section-international-support');
  if (se_tourist_section_international_support) {
    gsap.fromTo('#se-tourist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_tourist_list_our_credentials = document.getElementById('se-tourist-list-our-credentials');
  if (se_tourist_list_our_credentials) {
    gsap.from('#se-tourist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_tourist_list_related_services = document.getElementById('se-tourist-list-related-services');
  if (se_tourist_list_related_services) {
    gsap.from('#se-tourist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_tourist_section_youre_in_good_hands = document.getElementById('se-tourist-section-youre-in-good-hands');
  if (se_tourist_section_youre_in_good_hands) {
    gsap.fromTo('#se-tourist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_tourist_section_21 = document.getElementById('se-tourist-section-21');
  if (se_tourist_section_21) {
    gsap.fromTo('#se-tourist-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_transit_form_transit_through_brazil_with_the_transit_visa = document.getElementById('se-transit-form-transit-through-brazil-with-the-transit-visa');
  if (se_transit_form_transit_through_brazil_with_the_transit_visa) {
    gsap.from('#se-transit-form-transit-through-brazil-with-the-transit-visa input, #se-transit-form-transit-through-brazil-with-the-transit-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_transit_list_quick_facts = document.getElementById('se-transit-list-quick-facts');
  if (se_transit_list_quick_facts) {
    gsap.from('#se-transit-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_transit_list_common_challenges_applicants_face = document.getElementById('se-transit-list-common-challenges-applicants-face');
  if (se_transit_list_common_challenges_applicants_face) {
    gsap.from('#se-transit-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_transit_list_how_we_solve_these_challenges = document.getElementById('se-transit-list-how-we-solve-these-challenges');
  if (se_transit_list_how_we_solve_these_challenges) {
    gsap.from('#se-transit-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_transit_section_visa_overview = document.getElementById('se-transit-section-visa-overview');
  if (se_transit_section_visa_overview) {
    gsap.fromTo('#se-transit-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_transit_form_who_is_this_visa_for = document.getElementById('se-transit-form-who-is-this-visa-for');
  if (se_transit_form_who_is_this_visa_for) {
    gsap.from('#se-transit-form-who-is-this-visa-for input, #se-transit-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_transit_list_required_documents = document.getElementById('se-transit-list-required-documents');
  if (se_transit_list_required_documents) {
    gsap.from('#se-transit-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_transit_list_application_process = document.getElementById('se-transit-list-application-process');
  if (se_transit_list_application_process) {
    gsap.from('#se-transit-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_transit_section_timelines_deadlines = document.getElementById('se-transit-section-timelines-deadlines');
  if (se_transit_section_timelines_deadlines) {
    gsap.fromTo('#se-transit-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_transit_section_fees_costs = document.getElementById('se-transit-section-fees-costs');
  if (se_transit_section_fees_costs) {
    gsap.fromTo('#se-transit-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_transit_list_risks_common_mistakes = document.getElementById('se-transit-list-risks-common-mistakes');
  if (se_transit_list_risks_common_mistakes) {
    gsap.from('#se-transit-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_transit_section_diy_vs_professional_assistance = document.getElementById('se-transit-section-diy-vs-professional-assistance');
  if (se_transit_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-transit-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_transit_section_sergipe_specific_context = document.getElementById('se-transit-section-sergipe-specific-context');
  if (se_transit_section_sergipe_specific_context) {
    gsap.fromTo('#se-transit-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_transit_section_what_our_clients_say = document.getElementById('se-transit-section-what-our-clients-say');
  if (se_transit_section_what_our_clients_say) {
    gsap.fromTo('#se-transit-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_transit_section_frequently_asked_questions = document.getElementById('se-transit-section-frequently-asked-questions');
  if (se_transit_section_frequently_asked_questions) {
    gsap.fromTo('#se-transit-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_transit_section_international_support = document.getElementById('se-transit-section-international-support');
  if (se_transit_section_international_support) {
    gsap.fromTo('#se-transit-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_transit_list_our_credentials = document.getElementById('se-transit-list-our-credentials');
  if (se_transit_list_our_credentials) {
    gsap.from('#se-transit-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_transit_list_related_services = document.getElementById('se-transit-list-related-services');
  if (se_transit_list_related_services) {
    gsap.from('#se-transit-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_transit_section_youre_in_good_hands = document.getElementById('se-transit-section-youre-in-good-hands');
  if (se_transit_section_youre_in_good_hands) {
    gsap.fromTo('#se-transit-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_transit_section_21 = document.getElementById('se-transit-section-21');
  if (se_transit_section_21) {
    gsap.fromTo('#se-transit-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_student_form_study_in_brazil_with_the_student_visa = document.getElementById('se-student-form-study-in-brazil-with-the-student-visa');
  if (se_student_form_study_in_brazil_with_the_student_visa) {
    gsap.from('#se-student-form-study-in-brazil-with-the-student-visa input, #se-student-form-study-in-brazil-with-the-student-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_student_list_quick_facts = document.getElementById('se-student-list-quick-facts');
  if (se_student_list_quick_facts) {
    gsap.from('#se-student-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_student_list_common_challenges_applicants_face = document.getElementById('se-student-list-common-challenges-applicants-face');
  if (se_student_list_common_challenges_applicants_face) {
    gsap.from('#se-student-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_student_list_how_we_solve_these_challenges = document.getElementById('se-student-list-how-we-solve-these-challenges');
  if (se_student_list_how_we_solve_these_challenges) {
    gsap.from('#se-student-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_student_section_visa_overview = document.getElementById('se-student-section-visa-overview');
  if (se_student_section_visa_overview) {
    gsap.fromTo('#se-student-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_student_form_who_is_this_visa_for = document.getElementById('se-student-form-who-is-this-visa-for');
  if (se_student_form_who_is_this_visa_for) {
    gsap.from('#se-student-form-who-is-this-visa-for input, #se-student-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_student_list_required_documents = document.getElementById('se-student-list-required-documents');
  if (se_student_list_required_documents) {
    gsap.from('#se-student-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_student_list_application_process = document.getElementById('se-student-list-application-process');
  if (se_student_list_application_process) {
    gsap.from('#se-student-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_student_section_timelines_deadlines = document.getElementById('se-student-section-timelines-deadlines');
  if (se_student_section_timelines_deadlines) {
    gsap.fromTo('#se-student-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_student_section_fees_costs = document.getElementById('se-student-section-fees-costs');
  if (se_student_section_fees_costs) {
    gsap.fromTo('#se-student-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_student_list_risks_common_mistakes = document.getElementById('se-student-list-risks-common-mistakes');
  if (se_student_list_risks_common_mistakes) {
    gsap.from('#se-student-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_student_section_diy_vs_professional_assistance = document.getElementById('se-student-section-diy-vs-professional-assistance');
  if (se_student_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-student-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_student_section_sergipe_specific_context = document.getElementById('se-student-section-sergipe-specific-context');
  if (se_student_section_sergipe_specific_context) {
    gsap.fromTo('#se-student-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_student_section_what_our_clients_say = document.getElementById('se-student-section-what-our-clients-say');
  if (se_student_section_what_our_clients_say) {
    gsap.fromTo('#se-student-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_student_section_frequently_asked_questions = document.getElementById('se-student-section-frequently-asked-questions');
  if (se_student_section_frequently_asked_questions) {
    gsap.fromTo('#se-student-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_student_section_international_support = document.getElementById('se-student-section-international-support');
  if (se_student_section_international_support) {
    gsap.fromTo('#se-student-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_student_list_our_credentials = document.getElementById('se-student-list-our-credentials');
  if (se_student_list_our_credentials) {
    gsap.from('#se-student-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_student_list_related_services = document.getElementById('se-student-list-related-services');
  if (se_student_list_related_services) {
    gsap.from('#se-student-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_student_section_youre_in_good_hands = document.getElementById('se-student-section-youre-in-good-hands');
  if (se_student_section_youre_in_good_hands) {
    gsap.fromTo('#se-student-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_student_section_21 = document.getElementById('se-student-section-21');
  if (se_student_section_21) {
    gsap.fromTo('#se-student-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_business_form_conduct_business_in_brazil_with_the_business_visa = document.getElementById('se-business-form-conduct-business-in-brazil-with-the-business-visa');
  if (se_business_form_conduct_business_in_brazil_with_the_business_visa) {
    gsap.from('#se-business-form-conduct-business-in-brazil-with-the-business-visa input, #se-business-form-conduct-business-in-brazil-with-the-business-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_business_list_quick_facts = document.getElementById('se-business-list-quick-facts');
  if (se_business_list_quick_facts) {
    gsap.from('#se-business-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_business_list_common_challenges_applicants_face = document.getElementById('se-business-list-common-challenges-applicants-face');
  if (se_business_list_common_challenges_applicants_face) {
    gsap.from('#se-business-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_business_list_how_we_solve_these_challenges = document.getElementById('se-business-list-how-we-solve-these-challenges');
  if (se_business_list_how_we_solve_these_challenges) {
    gsap.from('#se-business-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_business_section_visa_overview = document.getElementById('se-business-section-visa-overview');
  if (se_business_section_visa_overview) {
    gsap.fromTo('#se-business-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_business_form_who_is_this_visa_for = document.getElementById('se-business-form-who-is-this-visa-for');
  if (se_business_form_who_is_this_visa_for) {
    gsap.from('#se-business-form-who-is-this-visa-for input, #se-business-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_business_list_required_documents = document.getElementById('se-business-list-required-documents');
  if (se_business_list_required_documents) {
    gsap.from('#se-business-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_business_list_application_process = document.getElementById('se-business-list-application-process');
  if (se_business_list_application_process) {
    gsap.from('#se-business-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_business_section_timelines_deadlines = document.getElementById('se-business-section-timelines-deadlines');
  if (se_business_section_timelines_deadlines) {
    gsap.fromTo('#se-business-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_business_section_fees_costs = document.getElementById('se-business-section-fees-costs');
  if (se_business_section_fees_costs) {
    gsap.fromTo('#se-business-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_business_list_risks_common_mistakes = document.getElementById('se-business-list-risks-common-mistakes');
  if (se_business_list_risks_common_mistakes) {
    gsap.from('#se-business-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_business_section_diy_vs_professional_assistance = document.getElementById('se-business-section-diy-vs-professional-assistance');
  if (se_business_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-business-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_business_section_sergipe_specific_context = document.getElementById('se-business-section-sergipe-specific-context');
  if (se_business_section_sergipe_specific_context) {
    gsap.fromTo('#se-business-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_business_section_what_our_clients_say = document.getElementById('se-business-section-what-our-clients-say');
  if (se_business_section_what_our_clients_say) {
    gsap.fromTo('#se-business-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_business_section_frequently_asked_questions = document.getElementById('se-business-section-frequently-asked-questions');
  if (se_business_section_frequently_asked_questions) {
    gsap.fromTo('#se-business-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_business_section_international_support = document.getElementById('se-business-section-international-support');
  if (se_business_section_international_support) {
    gsap.fromTo('#se-business-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_business_list_our_credentials = document.getElementById('se-business-list-our-credentials');
  if (se_business_list_our_credentials) {
    gsap.from('#se-business-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_business_list_related_services = document.getElementById('se-business-list-related-services');
  if (se_business_list_related_services) {
    gsap.from('#se-business-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_business_section_youre_in_good_hands = document.getElementById('se-business-section-youre-in-good-hands');
  if (se_business_section_youre_in_good_hands) {
    gsap.fromTo('#se-business-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_business_section_21 = document.getElementById('se-business-section-21');
  if (se_business_section_21) {
    gsap.fromTo('#se-business-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_research_form_conduct_research_in_brazil_with_the_research_visa = document.getElementById('se-research-form-conduct-research-in-brazil-with-the-research-visa');
  if (se_research_form_conduct_research_in_brazil_with_the_research_visa) {
    gsap.from('#se-research-form-conduct-research-in-brazil-with-the-research-visa input, #se-research-form-conduct-research-in-brazil-with-the-research-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_research_list_quick_facts = document.getElementById('se-research-list-quick-facts');
  if (se_research_list_quick_facts) {
    gsap.from('#se-research-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_research_list_common_challenges_applicants_face = document.getElementById('se-research-list-common-challenges-applicants-face');
  if (se_research_list_common_challenges_applicants_face) {
    gsap.from('#se-research-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_research_list_how_we_solve_these_challenges = document.getElementById('se-research-list-how-we-solve-these-challenges');
  if (se_research_list_how_we_solve_these_challenges) {
    gsap.from('#se-research-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_research_section_visa_overview = document.getElementById('se-research-section-visa-overview');
  if (se_research_section_visa_overview) {
    gsap.fromTo('#se-research-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_research_form_who_is_this_visa_for = document.getElementById('se-research-form-who-is-this-visa-for');
  if (se_research_form_who_is_this_visa_for) {
    gsap.from('#se-research-form-who-is-this-visa-for input, #se-research-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_research_list_required_documents = document.getElementById('se-research-list-required-documents');
  if (se_research_list_required_documents) {
    gsap.from('#se-research-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_research_list_application_process = document.getElementById('se-research-list-application-process');
  if (se_research_list_application_process) {
    gsap.from('#se-research-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_research_section_timelines_deadlines = document.getElementById('se-research-section-timelines-deadlines');
  if (se_research_section_timelines_deadlines) {
    gsap.fromTo('#se-research-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_research_section_fees_costs = document.getElementById('se-research-section-fees-costs');
  if (se_research_section_fees_costs) {
    gsap.fromTo('#se-research-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_research_list_risks_common_mistakes = document.getElementById('se-research-list-risks-common-mistakes');
  if (se_research_list_risks_common_mistakes) {
    gsap.from('#se-research-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_research_section_diy_vs_professional_assistance = document.getElementById('se-research-section-diy-vs-professional-assistance');
  if (se_research_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-research-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_research_section_sergipe_specific_context = document.getElementById('se-research-section-sergipe-specific-context');
  if (se_research_section_sergipe_specific_context) {
    gsap.fromTo('#se-research-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_research_section_what_our_clients_say = document.getElementById('se-research-section-what-our-clients-say');
  if (se_research_section_what_our_clients_say) {
    gsap.fromTo('#se-research-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_research_section_frequently_asked_questions = document.getElementById('se-research-section-frequently-asked-questions');
  if (se_research_section_frequently_asked_questions) {
    gsap.fromTo('#se-research-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_research_section_international_support = document.getElementById('se-research-section-international-support');
  if (se_research_section_international_support) {
    gsap.fromTo('#se-research-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_research_list_our_credentials = document.getElementById('se-research-list-our-credentials');
  if (se_research_list_our_credentials) {
    gsap.from('#se-research-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_research_list_related_services = document.getElementById('se-research-list-related-services');
  if (se_research_list_related_services) {
    gsap.from('#se-research-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_research_section_youre_in_good_hands = document.getElementById('se-research-section-youre-in-good-hands');
  if (se_research_section_youre_in_good_hands) {
    gsap.fromTo('#se-research-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_research_section_21 = document.getElementById('se-research-section-21');
  if (se_research_section_21) {
    gsap.fromTo('#se-research-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_diplomatic_form_official_diplomatic_visa_for_brazil_missions = document.getElementById('se-diplomatic-form-official-diplomatic-visa-for-brazil-missions');
  if (se_diplomatic_form_official_diplomatic_visa_for_brazil_missions) {
    gsap.from('#se-diplomatic-form-official-diplomatic-visa-for-brazil-missions input, #se-diplomatic-form-official-diplomatic-visa-for-brazil-missions textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_diplomatic_list_quick_facts = document.getElementById('se-diplomatic-list-quick-facts');
  if (se_diplomatic_list_quick_facts) {
    gsap.from('#se-diplomatic-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_diplomatic_list_common_challenges_applicants_face = document.getElementById('se-diplomatic-list-common-challenges-applicants-face');
  if (se_diplomatic_list_common_challenges_applicants_face) {
    gsap.from('#se-diplomatic-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_diplomatic_list_how_we_solve_these_challenges = document.getElementById('se-diplomatic-list-how-we-solve-these-challenges');
  if (se_diplomatic_list_how_we_solve_these_challenges) {
    gsap.from('#se-diplomatic-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_diplomatic_section_visa_overview = document.getElementById('se-diplomatic-section-visa-overview');
  if (se_diplomatic_section_visa_overview) {
    gsap.fromTo('#se-diplomatic-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_diplomatic_form_who_is_this_visa_for = document.getElementById('se-diplomatic-form-who-is-this-visa-for');
  if (se_diplomatic_form_who_is_this_visa_for) {
    gsap.from('#se-diplomatic-form-who-is-this-visa-for input, #se-diplomatic-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_diplomatic_list_required_documents = document.getElementById('se-diplomatic-list-required-documents');
  if (se_diplomatic_list_required_documents) {
    gsap.from('#se-diplomatic-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_diplomatic_list_application_process = document.getElementById('se-diplomatic-list-application-process');
  if (se_diplomatic_list_application_process) {
    gsap.from('#se-diplomatic-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_diplomatic_section_timelines_deadlines = document.getElementById('se-diplomatic-section-timelines-deadlines');
  if (se_diplomatic_section_timelines_deadlines) {
    gsap.fromTo('#se-diplomatic-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_diplomatic_section_fees_costs = document.getElementById('se-diplomatic-section-fees-costs');
  if (se_diplomatic_section_fees_costs) {
    gsap.fromTo('#se-diplomatic-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_diplomatic_list_risks_common_mistakes = document.getElementById('se-diplomatic-list-risks-common-mistakes');
  if (se_diplomatic_list_risks_common_mistakes) {
    gsap.from('#se-diplomatic-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_diplomatic_section_diy_vs_professional_assistance = document.getElementById('se-diplomatic-section-diy-vs-professional-assistance');
  if (se_diplomatic_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-diplomatic-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_diplomatic_section_sergipe_specific_context = document.getElementById('se-diplomatic-section-sergipe-specific-context');
  if (se_diplomatic_section_sergipe_specific_context) {
    gsap.fromTo('#se-diplomatic-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_diplomatic_section_what_our_clients_say = document.getElementById('se-diplomatic-section-what-our-clients-say');
  if (se_diplomatic_section_what_our_clients_say) {
    gsap.fromTo('#se-diplomatic-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_diplomatic_section_frequently_asked_questions = document.getElementById('se-diplomatic-section-frequently-asked-questions');
  if (se_diplomatic_section_frequently_asked_questions) {
    gsap.fromTo('#se-diplomatic-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_diplomatic_section_international_support = document.getElementById('se-diplomatic-section-international-support');
  if (se_diplomatic_section_international_support) {
    gsap.fromTo('#se-diplomatic-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_diplomatic_list_our_credentials = document.getElementById('se-diplomatic-list-our-credentials');
  if (se_diplomatic_list_our_credentials) {
    gsap.from('#se-diplomatic-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_diplomatic_list_related_services = document.getElementById('se-diplomatic-list-related-services');
  if (se_diplomatic_list_related_services) {
    gsap.from('#se-diplomatic-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_diplomatic_section_youre_in_good_hands = document.getElementById('se-diplomatic-section-youre-in-good-hands');
  if (se_diplomatic_section_youre_in_good_hands) {
    gsap.fromTo('#se-diplomatic-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_diplomatic_section_21 = document.getElementById('se-diplomatic-section-21');
  if (se_diplomatic_section_21) {
    gsap.fromTo('#se-diplomatic-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_journalist_form_cover_news_in_brazil_with_the_journalist_visa = document.getElementById('se-journalist-form-cover-news-in-brazil-with-the-journalist-visa');
  if (se_journalist_form_cover_news_in_brazil_with_the_journalist_visa) {
    gsap.from('#se-journalist-form-cover-news-in-brazil-with-the-journalist-visa input, #se-journalist-form-cover-news-in-brazil-with-the-journalist-visa textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_journalist_list_quick_facts = document.getElementById('se-journalist-list-quick-facts');
  if (se_journalist_list_quick_facts) {
    gsap.from('#se-journalist-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_journalist_list_common_challenges_applicants_face = document.getElementById('se-journalist-list-common-challenges-applicants-face');
  if (se_journalist_list_common_challenges_applicants_face) {
    gsap.from('#se-journalist-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_journalist_list_how_we_solve_these_challenges = document.getElementById('se-journalist-list-how-we-solve-these-challenges');
  if (se_journalist_list_how_we_solve_these_challenges) {
    gsap.from('#se-journalist-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_journalist_section_visa_overview = document.getElementById('se-journalist-section-visa-overview');
  if (se_journalist_section_visa_overview) {
    gsap.fromTo('#se-journalist-section-visa-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_journalist_form_who_is_this_visa_for = document.getElementById('se-journalist-form-who-is-this-visa-for');
  if (se_journalist_form_who_is_this_visa_for) {
    gsap.from('#se-journalist-form-who-is-this-visa-for input, #se-journalist-form-who-is-this-visa-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_journalist_list_required_documents = document.getElementById('se-journalist-list-required-documents');
  if (se_journalist_list_required_documents) {
    gsap.from('#se-journalist-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_journalist_list_application_process = document.getElementById('se-journalist-list-application-process');
  if (se_journalist_list_application_process) {
    gsap.from('#se-journalist-list-application-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_journalist_section_timelines_deadlines = document.getElementById('se-journalist-section-timelines-deadlines');
  if (se_journalist_section_timelines_deadlines) {
    gsap.fromTo('#se-journalist-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_journalist_section_fees_costs = document.getElementById('se-journalist-section-fees-costs');
  if (se_journalist_section_fees_costs) {
    gsap.fromTo('#se-journalist-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_journalist_list_risks_common_mistakes = document.getElementById('se-journalist-list-risks-common-mistakes');
  if (se_journalist_list_risks_common_mistakes) {
    gsap.from('#se-journalist-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_journalist_section_diy_vs_professional_assistance = document.getElementById('se-journalist-section-diy-vs-professional-assistance');
  if (se_journalist_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-journalist-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_journalist_section_sergipe_specific_context = document.getElementById('se-journalist-section-sergipe-specific-context');
  if (se_journalist_section_sergipe_specific_context) {
    gsap.fromTo('#se-journalist-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_journalist_section_what_our_clients_say = document.getElementById('se-journalist-section-what-our-clients-say');
  if (se_journalist_section_what_our_clients_say) {
    gsap.fromTo('#se-journalist-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_journalist_section_frequently_asked_questions = document.getElementById('se-journalist-section-frequently-asked-questions');
  if (se_journalist_section_frequently_asked_questions) {
    gsap.fromTo('#se-journalist-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_journalist_section_international_support = document.getElementById('se-journalist-section-international-support');
  if (se_journalist_section_international_support) {
    gsap.fromTo('#se-journalist-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_journalist_list_our_credentials = document.getElementById('se-journalist-list-our-credentials');
  if (se_journalist_list_our_credentials) {
    gsap.from('#se-journalist-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_journalist_list_related_services = document.getElementById('se-journalist-list-related-services');
  if (se_journalist_list_related_services) {
    gsap.from('#se-journalist-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_journalist_section_youre_in_good_hands = document.getElementById('se-journalist-section-youre-in-good-hands');
  if (se_journalist_section_youre_in_good_hands) {
    gsap.fromTo('#se-journalist-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_journalist_section_21 = document.getElementById('se-journalist-section-21');
  if (se_journalist_section_21) {
    gsap.fromTo('#se-journalist-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_fines_form_resolve_immigration_fines_in_brazil = document.getElementById('se-fines-form-resolve-immigration-fines-in-brazil');
  if (se_fines_form_resolve_immigration_fines_in_brazil) {
    gsap.from('#se-fines-form-resolve-immigration-fines-in-brazil input, #se-fines-form-resolve-immigration-fines-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_fines_list_quick_facts = document.getElementById('se-fines-list-quick-facts');
  if (se_fines_list_quick_facts) {
    gsap.from('#se-fines-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_fines_list_common_challenges_applicants_face = document.getElementById('se-fines-list-common-challenges-applicants-face');
  if (se_fines_list_common_challenges_applicants_face) {
    gsap.from('#se-fines-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_fines_list_how_we_solve_these_challenges = document.getElementById('se-fines-list-how-we-solve-these-challenges');
  if (se_fines_list_how_we_solve_these_challenges) {
    gsap.from('#se-fines-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_fines_section_service_overview = document.getElementById('se-fines-section-service-overview');
  if (se_fines_section_service_overview) {
    gsap.fromTo('#se-fines-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_fines_form_who_is_this_service_for = document.getElementById('se-fines-form-who-is-this-service-for');
  if (se_fines_form_who_is_this_service_for) {
    gsap.from('#se-fines-form-who-is-this-service-for input, #se-fines-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_fines_list_required_documents = document.getElementById('se-fines-list-required-documents');
  if (se_fines_list_required_documents) {
    gsap.from('#se-fines-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_fines_list_process = document.getElementById('se-fines-list-process');
  if (se_fines_list_process) {
    gsap.from('#se-fines-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_fines_section_timelines_deadlines = document.getElementById('se-fines-section-timelines-deadlines');
  if (se_fines_section_timelines_deadlines) {
    gsap.fromTo('#se-fines-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_fines_section_fees_costs = document.getElementById('se-fines-section-fees-costs');
  if (se_fines_section_fees_costs) {
    gsap.fromTo('#se-fines-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_fines_list_risks_common_mistakes = document.getElementById('se-fines-list-risks-common-mistakes');
  if (se_fines_list_risks_common_mistakes) {
    gsap.from('#se-fines-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_fines_section_diy_vs_professional_assistance = document.getElementById('se-fines-section-diy-vs-professional-assistance');
  if (se_fines_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-fines-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_fines_section_sergipe_specific_context = document.getElementById('se-fines-section-sergipe-specific-context');
  if (se_fines_section_sergipe_specific_context) {
    gsap.fromTo('#se-fines-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_fines_section_what_our_clients_say = document.getElementById('se-fines-section-what-our-clients-say');
  if (se_fines_section_what_our_clients_say) {
    gsap.fromTo('#se-fines-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_fines_section_frequently_asked_questions = document.getElementById('se-fines-section-frequently-asked-questions');
  if (se_fines_section_frequently_asked_questions) {
    gsap.fromTo('#se-fines-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_fines_section_international_support = document.getElementById('se-fines-section-international-support');
  if (se_fines_section_international_support) {
    gsap.fromTo('#se-fines-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_fines_list_our_credentials = document.getElementById('se-fines-list-our-credentials');
  if (se_fines_list_our_credentials) {
    gsap.from('#se-fines-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_fines_list_related_services = document.getElementById('se-fines-list-related-services');
  if (se_fines_list_related_services) {
    gsap.from('#se-fines-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_fines_section_youre_in_good_hands = document.getElementById('se-fines-section-youre-in-good-hands');
  if (se_fines_section_youre_in_good_hands) {
    gsap.fromTo('#se-fines-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_fines_section_21 = document.getElementById('se-fines-section-21');
  if (se_fines_section_21) {
    gsap.fromTo('#se-fines-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_deportation_form_deportation_assistance_in_brazil = document.getElementById('se-deportation-form-deportation-assistance-in-brazil');
  if (se_deportation_form_deportation_assistance_in_brazil) {
    gsap.from('#se-deportation-form-deportation-assistance-in-brazil input, #se-deportation-form-deportation-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_deportation_list_quick_facts = document.getElementById('se-deportation-list-quick-facts');
  if (se_deportation_list_quick_facts) {
    gsap.from('#se-deportation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_deportation_list_common_challenges_applicants_face = document.getElementById('se-deportation-list-common-challenges-applicants-face');
  if (se_deportation_list_common_challenges_applicants_face) {
    gsap.from('#se-deportation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_deportation_list_how_we_solve_these_challenges = document.getElementById('se-deportation-list-how-we-solve-these-challenges');
  if (se_deportation_list_how_we_solve_these_challenges) {
    gsap.from('#se-deportation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_deportation_section_service_overview = document.getElementById('se-deportation-section-service-overview');
  if (se_deportation_section_service_overview) {
    gsap.fromTo('#se-deportation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_deportation_form_who_is_this_service_for = document.getElementById('se-deportation-form-who-is-this-service-for');
  if (se_deportation_form_who_is_this_service_for) {
    gsap.from('#se-deportation-form-who-is-this-service-for input, #se-deportation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_deportation_list_required_documents = document.getElementById('se-deportation-list-required-documents');
  if (se_deportation_list_required_documents) {
    gsap.from('#se-deportation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_deportation_list_process = document.getElementById('se-deportation-list-process');
  if (se_deportation_list_process) {
    gsap.from('#se-deportation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_deportation_section_timelines_deadlines = document.getElementById('se-deportation-section-timelines-deadlines');
  if (se_deportation_section_timelines_deadlines) {
    gsap.fromTo('#se-deportation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_deportation_section_fees_costs = document.getElementById('se-deportation-section-fees-costs');
  if (se_deportation_section_fees_costs) {
    gsap.fromTo('#se-deportation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_deportation_list_risks_common_mistakes = document.getElementById('se-deportation-list-risks-common-mistakes');
  if (se_deportation_list_risks_common_mistakes) {
    gsap.from('#se-deportation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_deportation_section_diy_vs_professional_assistance = document.getElementById('se-deportation-section-diy-vs-professional-assistance');
  if (se_deportation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-deportation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_deportation_section_sergipe_specific_context = document.getElementById('se-deportation-section-sergipe-specific-context');
  if (se_deportation_section_sergipe_specific_context) {
    gsap.fromTo('#se-deportation-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_deportation_section_what_our_clients_say = document.getElementById('se-deportation-section-what-our-clients-say');
  if (se_deportation_section_what_our_clients_say) {
    gsap.fromTo('#se-deportation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_deportation_section_frequently_asked_questions = document.getElementById('se-deportation-section-frequently-asked-questions');
  if (se_deportation_section_frequently_asked_questions) {
    gsap.fromTo('#se-deportation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_deportation_section_international_support = document.getElementById('se-deportation-section-international-support');
  if (se_deportation_section_international_support) {
    gsap.fromTo('#se-deportation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_deportation_list_our_credentials = document.getElementById('se-deportation-list-our-credentials');
  if (se_deportation_list_our_credentials) {
    gsap.from('#se-deportation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_deportation_list_related_services = document.getElementById('se-deportation-list-related-services');
  if (se_deportation_list_related_services) {
    gsap.from('#se-deportation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_deportation_section_youre_in_good_hands = document.getElementById('se-deportation-section-youre-in-good-hands');
  if (se_deportation_section_youre_in_good_hands) {
    gsap.fromTo('#se-deportation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_deportation_section_21 = document.getElementById('se-deportation-section-21');
  if (se_deportation_section_21) {
    gsap.fromTo('#se-deportation-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_translation_form_sworn_document_translation_services_in_brazil = document.getElementById('se-translation-form-sworn-document-translation-services-in-brazil');
  if (se_translation_form_sworn_document_translation_services_in_brazil) {
    gsap.from('#se-translation-form-sworn-document-translation-services-in-brazil input, #se-translation-form-sworn-document-translation-services-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_translation_list_quick_facts = document.getElementById('se-translation-list-quick-facts');
  if (se_translation_list_quick_facts) {
    gsap.from('#se-translation-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_translation_list_common_challenges_applicants_face = document.getElementById('se-translation-list-common-challenges-applicants-face');
  if (se_translation_list_common_challenges_applicants_face) {
    gsap.from('#se-translation-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_translation_list_how_we_solve_these_challenges = document.getElementById('se-translation-list-how-we-solve-these-challenges');
  if (se_translation_list_how_we_solve_these_challenges) {
    gsap.from('#se-translation-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_translation_section_service_overview = document.getElementById('se-translation-section-service-overview');
  if (se_translation_section_service_overview) {
    gsap.fromTo('#se-translation-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_translation_form_who_is_this_service_for = document.getElementById('se-translation-form-who-is-this-service-for');
  if (se_translation_form_who_is_this_service_for) {
    gsap.from('#se-translation-form-who-is-this-service-for input, #se-translation-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_translation_list_required_documents = document.getElementById('se-translation-list-required-documents');
  if (se_translation_list_required_documents) {
    gsap.from('#se-translation-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_translation_list_process = document.getElementById('se-translation-list-process');
  if (se_translation_list_process) {
    gsap.from('#se-translation-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_translation_section_timelines_deadlines = document.getElementById('se-translation-section-timelines-deadlines');
  if (se_translation_section_timelines_deadlines) {
    gsap.fromTo('#se-translation-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_translation_section_fees_costs = document.getElementById('se-translation-section-fees-costs');
  if (se_translation_section_fees_costs) {
    gsap.fromTo('#se-translation-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_translation_list_risks_common_mistakes = document.getElementById('se-translation-list-risks-common-mistakes');
  if (se_translation_list_risks_common_mistakes) {
    gsap.from('#se-translation-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_translation_section_diy_vs_professional_assistance = document.getElementById('se-translation-section-diy-vs-professional-assistance');
  if (se_translation_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-translation-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_translation_section_sergipe_specific_context = document.getElementById('se-translation-section-sergipe-specific-context');
  if (se_translation_section_sergipe_specific_context) {
    gsap.fromTo('#se-translation-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_translation_section_what_our_clients_say = document.getElementById('se-translation-section-what-our-clients-say');
  if (se_translation_section_what_our_clients_say) {
    gsap.fromTo('#se-translation-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_translation_section_frequently_asked_questions = document.getElementById('se-translation-section-frequently-asked-questions');
  if (se_translation_section_frequently_asked_questions) {
    gsap.fromTo('#se-translation-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_translation_section_international_support = document.getElementById('se-translation-section-international-support');
  if (se_translation_section_international_support) {
    gsap.fromTo('#se-translation-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_translation_list_our_credentials = document.getElementById('se-translation-list-our-credentials');
  if (se_translation_list_our_credentials) {
    gsap.from('#se-translation-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_translation_list_related_services = document.getElementById('se-translation-list-related-services');
  if (se_translation_list_related_services) {
    gsap.from('#se-translation-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_translation_section_youre_in_good_hands = document.getElementById('se-translation-section-youre-in-good-hands');
  if (se_translation_section_youre_in_good_hands) {
    gsap.fromTo('#se-translation-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_translation_section_21 = document.getElementById('se-translation-section-21');
  if (se_translation_section_21) {
    gsap.fromTo('#se-translation-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_expulsion_form_expulsion_assistance_in_brazil = document.getElementById('se-expulsion-form-expulsion-assistance-in-brazil');
  if (se_expulsion_form_expulsion_assistance_in_brazil) {
    gsap.from('#se-expulsion-form-expulsion-assistance-in-brazil input, #se-expulsion-form-expulsion-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_expulsion_list_quick_facts = document.getElementById('se-expulsion-list-quick-facts');
  if (se_expulsion_list_quick_facts) {
    gsap.from('#se-expulsion-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_expulsion_list_common_challenges_applicants_face = document.getElementById('se-expulsion-list-common-challenges-applicants-face');
  if (se_expulsion_list_common_challenges_applicants_face) {
    gsap.from('#se-expulsion-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_expulsion_list_how_we_solve_these_challenges = document.getElementById('se-expulsion-list-how-we-solve-these-challenges');
  if (se_expulsion_list_how_we_solve_these_challenges) {
    gsap.from('#se-expulsion-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_expulsion_section_service_overview = document.getElementById('se-expulsion-section-service-overview');
  if (se_expulsion_section_service_overview) {
    gsap.fromTo('#se-expulsion-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_expulsion_form_who_is_this_service_for = document.getElementById('se-expulsion-form-who-is-this-service-for');
  if (se_expulsion_form_who_is_this_service_for) {
    gsap.from('#se-expulsion-form-who-is-this-service-for input, #se-expulsion-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_expulsion_list_required_documents = document.getElementById('se-expulsion-list-required-documents');
  if (se_expulsion_list_required_documents) {
    gsap.from('#se-expulsion-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_expulsion_list_process = document.getElementById('se-expulsion-list-process');
  if (se_expulsion_list_process) {
    gsap.from('#se-expulsion-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_expulsion_section_timelines_deadlines = document.getElementById('se-expulsion-section-timelines-deadlines');
  if (se_expulsion_section_timelines_deadlines) {
    gsap.fromTo('#se-expulsion-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_expulsion_section_fees_costs = document.getElementById('se-expulsion-section-fees-costs');
  if (se_expulsion_section_fees_costs) {
    gsap.fromTo('#se-expulsion-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_expulsion_list_risks_common_mistakes = document.getElementById('se-expulsion-list-risks-common-mistakes');
  if (se_expulsion_list_risks_common_mistakes) {
    gsap.from('#se-expulsion-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_expulsion_section_diy_vs_professional_assistance = document.getElementById('se-expulsion-section-diy-vs-professional-assistance');
  if (se_expulsion_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-expulsion-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_expulsion_section_sergipe_specific_context = document.getElementById('se-expulsion-section-sergipe-specific-context');
  if (se_expulsion_section_sergipe_specific_context) {
    gsap.fromTo('#se-expulsion-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_expulsion_section_what_our_clients_say = document.getElementById('se-expulsion-section-what-our-clients-say');
  if (se_expulsion_section_what_our_clients_say) {
    gsap.fromTo('#se-expulsion-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_expulsion_section_frequently_asked_questions = document.getElementById('se-expulsion-section-frequently-asked-questions');
  if (se_expulsion_section_frequently_asked_questions) {
    gsap.fromTo('#se-expulsion-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_expulsion_section_international_support = document.getElementById('se-expulsion-section-international-support');
  if (se_expulsion_section_international_support) {
    gsap.fromTo('#se-expulsion-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_expulsion_list_our_credentials = document.getElementById('se-expulsion-list-our-credentials');
  if (se_expulsion_list_our_credentials) {
    gsap.from('#se-expulsion-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_expulsion_list_related_services = document.getElementById('se-expulsion-list-related-services');
  if (se_expulsion_list_related_services) {
    gsap.from('#se-expulsion-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_expulsion_section_youre_in_good_hands = document.getElementById('se-expulsion-section-youre-in-good-hands');
  if (se_expulsion_section_youre_in_good_hands) {
    gsap.fromTo('#se-expulsion-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_expulsion_section_21 = document.getElementById('se-expulsion-section-21');
  if (se_expulsion_section_21) {
    gsap.fromTo('#se-expulsion-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_appeals_form_appeal_immigration_denials_in_brazil = document.getElementById('se-appeals-form-appeal-immigration-denials-in-brazil');
  if (se_appeals_form_appeal_immigration_denials_in_brazil) {
    gsap.from('#se-appeals-form-appeal-immigration-denials-in-brazil input, #se-appeals-form-appeal-immigration-denials-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_appeals_list_quick_facts = document.getElementById('se-appeals-list-quick-facts');
  if (se_appeals_list_quick_facts) {
    gsap.from('#se-appeals-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_appeals_list_common_challenges_applicants_face = document.getElementById('se-appeals-list-common-challenges-applicants-face');
  if (se_appeals_list_common_challenges_applicants_face) {
    gsap.from('#se-appeals-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_appeals_list_how_we_solve_these_challenges = document.getElementById('se-appeals-list-how-we-solve-these-challenges');
  if (se_appeals_list_how_we_solve_these_challenges) {
    gsap.from('#se-appeals-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_appeals_section_service_overview = document.getElementById('se-appeals-section-service-overview');
  if (se_appeals_section_service_overview) {
    gsap.fromTo('#se-appeals-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_appeals_form_who_is_this_service_for = document.getElementById('se-appeals-form-who-is-this-service-for');
  if (se_appeals_form_who_is_this_service_for) {
    gsap.from('#se-appeals-form-who-is-this-service-for input, #se-appeals-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_appeals_list_required_documents = document.getElementById('se-appeals-list-required-documents');
  if (se_appeals_list_required_documents) {
    gsap.from('#se-appeals-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_appeals_list_appeal_process = document.getElementById('se-appeals-list-appeal-process');
  if (se_appeals_list_appeal_process) {
    gsap.from('#se-appeals-list-appeal-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_appeals_section_timelines_deadlines = document.getElementById('se-appeals-section-timelines-deadlines');
  if (se_appeals_section_timelines_deadlines) {
    gsap.fromTo('#se-appeals-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_appeals_section_fees_costs = document.getElementById('se-appeals-section-fees-costs');
  if (se_appeals_section_fees_costs) {
    gsap.fromTo('#se-appeals-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_appeals_list_risks_common_mistakes = document.getElementById('se-appeals-list-risks-common-mistakes');
  if (se_appeals_list_risks_common_mistakes) {
    gsap.from('#se-appeals-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_appeals_section_diy_vs_professional_assistance = document.getElementById('se-appeals-section-diy-vs-professional-assistance');
  if (se_appeals_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-appeals-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_appeals_section_sergipe_specific_context = document.getElementById('se-appeals-section-sergipe-specific-context');
  if (se_appeals_section_sergipe_specific_context) {
    gsap.fromTo('#se-appeals-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_appeals_section_what_our_clients_say = document.getElementById('se-appeals-section-what-our-clients-say');
  if (se_appeals_section_what_our_clients_say) {
    gsap.fromTo('#se-appeals-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_appeals_section_frequently_asked_questions = document.getElementById('se-appeals-section-frequently-asked-questions');
  if (se_appeals_section_frequently_asked_questions) {
    gsap.fromTo('#se-appeals-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_appeals_section_international_support = document.getElementById('se-appeals-section-international-support');
  if (se_appeals_section_international_support) {
    gsap.fromTo('#se-appeals-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_appeals_list_our_credentials = document.getElementById('se-appeals-list-our-credentials');
  if (se_appeals_list_our_credentials) {
    gsap.from('#se-appeals-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_appeals_list_related_services = document.getElementById('se-appeals-list-related-services');
  if (se_appeals_list_related_services) {
    gsap.from('#se-appeals-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_appeals_section_youre_in_good_hands = document.getElementById('se-appeals-section-youre-in-good-hands');
  if (se_appeals_section_youre_in_good_hands) {
    gsap.fromTo('#se-appeals-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_appeals_section_21 = document.getElementById('se-appeals-section-21');
  if (se_appeals_section_21) {
    gsap.fromTo('#se-appeals-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_consular_form_consular_services_in_brazil_for_citizens = document.getElementById('se-consular-form-consular-services-in-brazil-for-citizens');
  if (se_consular_form_consular_services_in_brazil_for_citizens) {
    gsap.from('#se-consular-form-consular-services-in-brazil-for-citizens input, #se-consular-form-consular-services-in-brazil-for-citizens textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_consular_list_quick_facts = document.getElementById('se-consular-list-quick-facts');
  if (se_consular_list_quick_facts) {
    gsap.from('#se-consular-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_consular_list_common_challenges_applicants_face = document.getElementById('se-consular-list-common-challenges-applicants-face');
  if (se_consular_list_common_challenges_applicants_face) {
    gsap.from('#se-consular-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_consular_list_how_we_solve_these_challenges = document.getElementById('se-consular-list-how-we-solve-these-challenges');
  if (se_consular_list_how_we_solve_these_challenges) {
    gsap.from('#se-consular-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_consular_section_service_overview = document.getElementById('se-consular-section-service-overview');
  if (se_consular_section_service_overview) {
    gsap.fromTo('#se-consular-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_consular_form_who_is_this_service_for = document.getElementById('se-consular-form-who-is-this-service-for');
  if (se_consular_form_who_is_this_service_for) {
    gsap.from('#se-consular-form-who-is-this-service-for input, #se-consular-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_consular_list_required_documents = document.getElementById('se-consular-list-required-documents');
  if (se_consular_list_required_documents) {
    gsap.from('#se-consular-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_consular_list_process = document.getElementById('se-consular-list-process');
  if (se_consular_list_process) {
    gsap.from('#se-consular-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_consular_section_timelines_deadlines = document.getElementById('se-consular-section-timelines-deadlines');
  if (se_consular_section_timelines_deadlines) {
    gsap.fromTo('#se-consular-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_consular_section_fees_costs = document.getElementById('se-consular-section-fees-costs');
  if (se_consular_section_fees_costs) {
    gsap.fromTo('#se-consular-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_consular_list_risks_common_mistakes = document.getElementById('se-consular-list-risks-common-mistakes');
  if (se_consular_list_risks_common_mistakes) {
    gsap.from('#se-consular-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_consular_section_diy_vs_professional_assistance = document.getElementById('se-consular-section-diy-vs-professional-assistance');
  if (se_consular_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-consular-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_consular_section_sergipe_specific_context = document.getElementById('se-consular-section-sergipe-specific-context');
  if (se_consular_section_sergipe_specific_context) {
    gsap.fromTo('#se-consular-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_consular_section_what_our_clients_say = document.getElementById('se-consular-section-what-our-clients-say');
  if (se_consular_section_what_our_clients_say) {
    gsap.fromTo('#se-consular-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_consular_section_frequently_asked_questions = document.getElementById('se-consular-section-frequently-asked-questions');
  if (se_consular_section_frequently_asked_questions) {
    gsap.fromTo('#se-consular-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_consular_section_international_support = document.getElementById('se-consular-section-international-support');
  if (se_consular_section_international_support) {
    gsap.fromTo('#se-consular-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_consular_list_our_credentials = document.getElementById('se-consular-list-our-credentials');
  if (se_consular_list_our_credentials) {
    gsap.from('#se-consular-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_consular_list_related_services = document.getElementById('se-consular-list-related-services');
  if (se_consular_list_related_services) {
    gsap.from('#se-consular-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_consular_section_youre_in_good_hands = document.getElementById('se-consular-section-youre-in-good-hands');
  if (se_consular_section_youre_in_good_hands) {
    gsap.fromTo('#se-consular-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_consular_section_21 = document.getElementById('se-consular-section-21');
  if (se_consular_section_21) {
    gsap.fromTo('#se-consular-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const criminal_records.html = document.getElementById('criminal-records.html');
  if (criminal_records.html) {
    gsap.fromTo('#criminal-records.html', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_criminalrecords_form_obtain_criminal_records_certificate_in_brazil = document.getElementById('se-criminalrecords-form-obtain-criminal-records-certificate-in-brazil');
  if (se_criminalrecords_form_obtain_criminal_records_certificate_in_brazil) {
    gsap.from('#se-criminalrecords-form-obtain-criminal-records-certificate-in-brazil input, #se-criminalrecords-form-obtain-criminal-records-certificate-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_criminalrecords_list_quick_facts = document.getElementById('se-criminalrecords-list-quick-facts');
  if (se_criminalrecords_list_quick_facts) {
    gsap.from('#se-criminalrecords-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_criminalrecords_list_common_challenges_applicants_face = document.getElementById('se-criminalrecords-list-common-challenges-applicants-face');
  if (se_criminalrecords_list_common_challenges_applicants_face) {
    gsap.from('#se-criminalrecords-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_criminalrecords_list_how_we_solve_these_challenges = document.getElementById('se-criminalrecords-list-how-we-solve-these-challenges');
  if (se_criminalrecords_list_how_we_solve_these_challenges) {
    gsap.from('#se-criminalrecords-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_criminalrecords_section_service_overview = document.getElementById('se-criminalrecords-section-service-overview');
  if (se_criminalrecords_section_service_overview) {
    gsap.fromTo('#se-criminalrecords-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_criminalrecords_form_who_is_this_service_for = document.getElementById('se-criminalrecords-form-who-is-this-service-for');
  if (se_criminalrecords_form_who_is_this_service_for) {
    gsap.from('#se-criminalrecords-form-who-is-this-service-for input, #se-criminalrecords-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_criminalrecords_list_required_documents = document.getElementById('se-criminalrecords-list-required-documents');
  if (se_criminalrecords_list_required_documents) {
    gsap.from('#se-criminalrecords-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_criminalrecords_list_process = document.getElementById('se-criminalrecords-list-process');
  if (se_criminalrecords_list_process) {
    gsap.from('#se-criminalrecords-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_criminalrecords_section_timelines_deadlines = document.getElementById('se-criminalrecords-section-timelines-deadlines');
  if (se_criminalrecords_section_timelines_deadlines) {
    gsap.fromTo('#se-criminalrecords-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_criminalrecords_section_fees_costs = document.getElementById('se-criminalrecords-section-fees-costs');
  if (se_criminalrecords_section_fees_costs) {
    gsap.fromTo('#se-criminalrecords-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_criminalrecords_list_risks_common_mistakes = document.getElementById('se-criminalrecords-list-risks-common-mistakes');
  if (se_criminalrecords_list_risks_common_mistakes) {
    gsap.from('#se-criminalrecords-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_criminalrecords_section_diy_vs_professional_assistance = document.getElementById('se-criminalrecords-section-diy-vs-professional-assistance');
  if (se_criminalrecords_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-criminalrecords-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_criminalrecords_section_sergipe_specific_context = document.getElementById('se-criminalrecords-section-sergipe-specific-context');
  if (se_criminalrecords_section_sergipe_specific_context) {
    gsap.fromTo('#se-criminalrecords-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_criminalrecords_section_what_our_clients_say = document.getElementById('se-criminalrecords-section-what-our-clients-say');
  if (se_criminalrecords_section_what_our_clients_say) {
    gsap.fromTo('#se-criminalrecords-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_criminalrecords_section_frequently_asked_questions = document.getElementById('se-criminalrecords-section-frequently-asked-questions');
  if (se_criminalrecords_section_frequently_asked_questions) {
    gsap.fromTo('#se-criminalrecords-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_criminalrecords_section_international_support = document.getElementById('se-criminalrecords-section-international-support');
  if (se_criminalrecords_section_international_support) {
    gsap.fromTo('#se-criminalrecords-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_criminalrecords_list_our_credentials = document.getElementById('se-criminalrecords-list-our-credentials');
  if (se_criminalrecords_list_our_credentials) {
    gsap.from('#se-criminalrecords-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_criminalrecords_list_related_services = document.getElementById('se-criminalrecords-list-related-services');
  if (se_criminalrecords_list_related_services) {
    gsap.from('#se-criminalrecords-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_criminalrecords_section_youre_in_good_hands = document.getElementById('se-criminalrecords-section-youre-in-good-hands');
  if (se_criminalrecords_section_youre_in_good_hands) {
    gsap.fromTo('#se-criminalrecords-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_criminalrecords_section_21 = document.getElementById('se-criminalrecords-section-21');
  if (se_criminalrecords_section_21) {
    gsap.fromTo('#se-criminalrecords-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extradition_form_extradition_assistance_in_brazil = document.getElementById('se-extradition-form-extradition-assistance-in-brazil');
  if (se_extradition_form_extradition_assistance_in_brazil) {
    gsap.from('#se-extradition-form-extradition-assistance-in-brazil input, #se-extradition-form-extradition-assistance-in-brazil textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extradition_list_quick_facts = document.getElementById('se-extradition-list-quick-facts');
  if (se_extradition_list_quick_facts) {
    gsap.from('#se-extradition-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extradition_list_common_challenges_applicants_face = document.getElementById('se-extradition-list-common-challenges-applicants-face');
  if (se_extradition_list_common_challenges_applicants_face) {
    gsap.from('#se-extradition-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extradition_list_how_we_solve_these_challenges = document.getElementById('se-extradition-list-how-we-solve-these-challenges');
  if (se_extradition_list_how_we_solve_these_challenges) {
    gsap.from('#se-extradition-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extradition_section_service_overview = document.getElementById('se-extradition-section-service-overview');
  if (se_extradition_section_service_overview) {
    gsap.fromTo('#se-extradition-section-service-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extradition_form_who_is_this_service_for = document.getElementById('se-extradition-form-who-is-this-service-for');
  if (se_extradition_form_who_is_this_service_for) {
    gsap.from('#se-extradition-form-who-is-this-service-for input, #se-extradition-form-who-is-this-service-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extradition_list_required_documents = document.getElementById('se-extradition-list-required-documents');
  if (se_extradition_list_required_documents) {
    gsap.from('#se-extradition-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extradition_list_process = document.getElementById('se-extradition-list-process');
  if (se_extradition_list_process) {
    gsap.from('#se-extradition-list-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extradition_section_timelines_deadlines = document.getElementById('se-extradition-section-timelines-deadlines');
  if (se_extradition_section_timelines_deadlines) {
    gsap.fromTo('#se-extradition-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extradition_section_fees_costs = document.getElementById('se-extradition-section-fees-costs');
  if (se_extradition_section_fees_costs) {
    gsap.fromTo('#se-extradition-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extradition_list_risks_common_mistakes = document.getElementById('se-extradition-list-risks-common-mistakes');
  if (se_extradition_list_risks_common_mistakes) {
    gsap.from('#se-extradition-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extradition_section_diy_vs_professional_assistance = document.getElementById('se-extradition-section-diy-vs-professional-assistance');
  if (se_extradition_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-extradition-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extradition_section_sergipe_specific_context = document.getElementById('se-extradition-section-sergipe-specific-context');
  if (se_extradition_section_sergipe_specific_context) {
    gsap.fromTo('#se-extradition-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extradition_section_what_our_clients_say = document.getElementById('se-extradition-section-what-our-clients-say');
  if (se_extradition_section_what_our_clients_say) {
    gsap.fromTo('#se-extradition-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extradition_section_frequently_asked_questions = document.getElementById('se-extradition-section-frequently-asked-questions');
  if (se_extradition_section_frequently_asked_questions) {
    gsap.fromTo('#se-extradition-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extradition_section_international_support = document.getElementById('se-extradition-section-international-support');
  if (se_extradition_section_international_support) {
    gsap.fromTo('#se-extradition-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extradition_list_our_credentials = document.getElementById('se-extradition-list-our-credentials');
  if (se_extradition_list_our_credentials) {
    gsap.from('#se-extradition-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extradition_list_related_services = document.getElementById('se-extradition-list-related-services');
  if (se_extradition_list_related_services) {
    gsap.from('#se-extradition-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extradition_section_youre_in_good_hands = document.getElementById('se-extradition-section-youre-in-good-hands');
  if (se_extradition_section_youre_in_good_hands) {
    gsap.fromTo('#se-extradition-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_extradition_section_21 = document.getElementById('se-extradition-section-21');
  if (se_extradition_section_21) {
    gsap.fromTo('#se-extradition-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_north_form_discover_the_north_amazon_and_beyond = document.getElementById('se-north-form-discover-the-north-amazon-and-beyond');
  if (se_north_form_discover_the_north_amazon_and_beyond) {
    gsap.from('#se-north-form-discover-the-north-amazon-and-beyond input, #se-north-form-discover-the-north-amazon-and-beyond textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_north_list_quick_facts = document.getElementById('se-north-list-quick-facts');
  if (se_north_list_quick_facts) {
    gsap.from('#se-north-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_north_list_common_challenges_applicants_face = document.getElementById('se-north-list-common-challenges-applicants-face');
  if (se_north_list_common_challenges_applicants_face) {
    gsap.from('#se-north-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_north_list_how_we_solve_these_challenges = document.getElementById('se-north-list-how-we-solve-these-challenges');
  if (se_north_list_how_we_solve_these_challenges) {
    gsap.from('#se-north-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_north_section_trip_overview = document.getElementById('se-north-section-trip-overview');
  if (se_north_section_trip_overview) {
    gsap.fromTo('#se-north-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_north_form_who_is_this_trip_for = document.getElementById('se-north-form-who-is-this-trip-for');
  if (se_north_form_who_is_this_trip_for) {
    gsap.from('#se-north-form-who-is-this-trip-for input, #se-north-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_north_list_required_documents = document.getElementById('se-north-list-required-documents');
  if (se_north_list_required_documents) {
    gsap.from('#se-north-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_north_list_booking_process = document.getElementById('se-north-list-booking-process');
  if (se_north_list_booking_process) {
    gsap.from('#se-north-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_north_section_timelines_deadlines = document.getElementById('se-north-section-timelines-deadlines');
  if (se_north_section_timelines_deadlines) {
    gsap.fromTo('#se-north-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_north_section_fees_costs = document.getElementById('se-north-section-fees-costs');
  if (se_north_section_fees_costs) {
    gsap.fromTo('#se-north-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_north_list_risks_common_mistakes = document.getElementById('se-north-list-risks-common-mistakes');
  if (se_north_list_risks_common_mistakes) {
    gsap.from('#se-north-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_north_section_diy_vs_professional_assistance = document.getElementById('se-north-section-diy-vs-professional-assistance');
  if (se_north_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-north-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_north_section_sergipe_specific_context = document.getElementById('se-north-section-sergipe-specific-context');
  if (se_north_section_sergipe_specific_context) {
    gsap.fromTo('#se-north-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_north_section_what_our_clients_say = document.getElementById('se-north-section-what-our-clients-say');
  if (se_north_section_what_our_clients_say) {
    gsap.fromTo('#se-north-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_north_section_frequently_asked_questions = document.getElementById('se-north-section-frequently-asked-questions');
  if (se_north_section_frequently_asked_questions) {
    gsap.fromTo('#se-north-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_north_section_international_support = document.getElementById('se-north-section-international-support');
  if (se_north_section_international_support) {
    gsap.fromTo('#se-north-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_north_list_our_credentials = document.getElementById('se-north-list-our-credentials');
  if (se_north_list_our_credentials) {
    gsap.from('#se-north-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_north_list_related_services = document.getElementById('se-north-list-related-services');
  if (se_north_list_related_services) {
    gsap.from('#se-north-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_north_section_youre_in_good_hands = document.getElementById('se-north-section-youre-in-good-hands');
  if (se_north_section_youre_in_good_hands) {
    gsap.fromTo('#se-north-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_north_section_21 = document.getElementById('se-north-section-21');
  if (se_north_section_21) {
    gsap.fromTo('#se-north-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const central_west.html = document.getElementById('central-west.html');
  if (central_west.html) {
    gsap.fromTo('#central-west.html', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_centralwest_form_wild_centralwest_pantanal_and_cerrado = document.getElementById('se-centralwest-form-wild-centralwest-pantanal-and-cerrado');
  if (se_centralwest_form_wild_centralwest_pantanal_and_cerrado) {
    gsap.from('#se-centralwest-form-wild-centralwest-pantanal-and-cerrado input, #se-centralwest-form-wild-centralwest-pantanal-and-cerrado textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_centralwest_list_quick_facts = document.getElementById('se-centralwest-list-quick-facts');
  if (se_centralwest_list_quick_facts) {
    gsap.from('#se-centralwest-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_centralwest_list_common_challenges_applicants_face = document.getElementById('se-centralwest-list-common-challenges-applicants-face');
  if (se_centralwest_list_common_challenges_applicants_face) {
    gsap.from('#se-centralwest-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_centralwest_list_how_we_solve_these_challenges = document.getElementById('se-centralwest-list-how-we-solve-these-challenges');
  if (se_centralwest_list_how_we_solve_these_challenges) {
    gsap.from('#se-centralwest-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_centralwest_section_trip_overview = document.getElementById('se-centralwest-section-trip-overview');
  if (se_centralwest_section_trip_overview) {
    gsap.fromTo('#se-centralwest-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_centralwest_form_who_is_this_trip_for = document.getElementById('se-centralwest-form-who-is-this-trip-for');
  if (se_centralwest_form_who_is_this_trip_for) {
    gsap.from('#se-centralwest-form-who-is-this-trip-for input, #se-centralwest-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_centralwest_list_required_documents = document.getElementById('se-centralwest-list-required-documents');
  if (se_centralwest_list_required_documents) {
    gsap.from('#se-centralwest-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_centralwest_list_booking_process = document.getElementById('se-centralwest-list-booking-process');
  if (se_centralwest_list_booking_process) {
    gsap.from('#se-centralwest-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_centralwest_section_timelines_deadlines = document.getElementById('se-centralwest-section-timelines-deadlines');
  if (se_centralwest_section_timelines_deadlines) {
    gsap.fromTo('#se-centralwest-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_centralwest_section_fees_costs = document.getElementById('se-centralwest-section-fees-costs');
  if (se_centralwest_section_fees_costs) {
    gsap.fromTo('#se-centralwest-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_centralwest_list_risks_common_mistakes = document.getElementById('se-centralwest-list-risks-common-mistakes');
  if (se_centralwest_list_risks_common_mistakes) {
    gsap.from('#se-centralwest-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_centralwest_section_diy_vs_professional_assistance = document.getElementById('se-centralwest-section-diy-vs-professional-assistance');
  if (se_centralwest_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-centralwest-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_centralwest_section_sergipe_specific_context = document.getElementById('se-centralwest-section-sergipe-specific-context');
  if (se_centralwest_section_sergipe_specific_context) {
    gsap.fromTo('#se-centralwest-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_centralwest_section_what_our_clients_say = document.getElementById('se-centralwest-section-what-our-clients-say');
  if (se_centralwest_section_what_our_clients_say) {
    gsap.fromTo('#se-centralwest-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_centralwest_section_frequently_asked_questions = document.getElementById('se-centralwest-section-frequently-asked-questions');
  if (se_centralwest_section_frequently_asked_questions) {
    gsap.fromTo('#se-centralwest-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_centralwest_section_international_support = document.getElementById('se-centralwest-section-international-support');
  if (se_centralwest_section_international_support) {
    gsap.fromTo('#se-centralwest-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_centralwest_list_our_credentials = document.getElementById('se-centralwest-list-our-credentials');
  if (se_centralwest_list_our_credentials) {
    gsap.from('#se-centralwest-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_centralwest_list_related_services = document.getElementById('se-centralwest-list-related-services');
  if (se_centralwest_list_related_services) {
    gsap.from('#se-centralwest-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_centralwest_section_youre_in_good_hands = document.getElementById('se-centralwest-section-youre-in-good-hands');
  if (se_centralwest_section_youre_in_good_hands) {
    gsap.fromTo('#se-centralwest-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_centralwest_section_21 = document.getElementById('se-centralwest-section-21');
  if (se_centralwest_section_21) {
    gsap.fromTo('#se-centralwest-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_southeast_form_dynamic_southeast_cities_and_history = document.getElementById('se-southeast-form-dynamic-southeast-cities-and-history');
  if (se_southeast_form_dynamic_southeast_cities_and_history) {
    gsap.from('#se-southeast-form-dynamic-southeast-cities-and-history input, #se-southeast-form-dynamic-southeast-cities-and-history textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_southeast_list_quick_facts = document.getElementById('se-southeast-list-quick-facts');
  if (se_southeast_list_quick_facts) {
    gsap.from('#se-southeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_southeast_list_common_challenges_applicants_face = document.getElementById('se-southeast-list-common-challenges-applicants-face');
  if (se_southeast_list_common_challenges_applicants_face) {
    gsap.from('#se-southeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_southeast_list_how_we_solve_these_challenges = document.getElementById('se-southeast-list-how-we-solve-these-challenges');
  if (se_southeast_list_how_we_solve_these_challenges) {
    gsap.from('#se-southeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_southeast_section_trip_overview = document.getElementById('se-southeast-section-trip-overview');
  if (se_southeast_section_trip_overview) {
    gsap.fromTo('#se-southeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_southeast_form_who_is_this_trip_for = document.getElementById('se-southeast-form-who-is-this-trip-for');
  if (se_southeast_form_who_is_this_trip_for) {
    gsap.from('#se-southeast-form-who-is-this-trip-for input, #se-southeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_southeast_list_required_documents = document.getElementById('se-southeast-list-required-documents');
  if (se_southeast_list_required_documents) {
    gsap.from('#se-southeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_southeast_list_booking_process = document.getElementById('se-southeast-list-booking-process');
  if (se_southeast_list_booking_process) {
    gsap.from('#se-southeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_southeast_section_timelines_deadlines = document.getElementById('se-southeast-section-timelines-deadlines');
  if (se_southeast_section_timelines_deadlines) {
    gsap.fromTo('#se-southeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_southeast_section_fees_costs = document.getElementById('se-southeast-section-fees-costs');
  if (se_southeast_section_fees_costs) {
    gsap.fromTo('#se-southeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_southeast_list_risks_common_mistakes = document.getElementById('se-southeast-list-risks-common-mistakes');
  if (se_southeast_list_risks_common_mistakes) {
    gsap.from('#se-southeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_southeast_section_diy_vs_professional_assistance = document.getElementById('se-southeast-section-diy-vs-professional-assistance');
  if (se_southeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-southeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_southeast_section_sergipe_specific_context = document.getElementById('se-southeast-section-sergipe-specific-context');
  if (se_southeast_section_sergipe_specific_context) {
    gsap.fromTo('#se-southeast-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_southeast_section_what_our_clients_say = document.getElementById('se-southeast-section-what-our-clients-say');
  if (se_southeast_section_what_our_clients_say) {
    gsap.fromTo('#se-southeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_southeast_section_frequently_asked_questions = document.getElementById('se-southeast-section-frequently-asked-questions');
  if (se_southeast_section_frequently_asked_questions) {
    gsap.fromTo('#se-southeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_southeast_section_international_support = document.getElementById('se-southeast-section-international-support');
  if (se_southeast_section_international_support) {
    gsap.fromTo('#se-southeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_southeast_list_our_credentials = document.getElementById('se-southeast-list-our-credentials');
  if (se_southeast_list_our_credentials) {
    gsap.from('#se-southeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_southeast_list_related_services = document.getElementById('se-southeast-list-related-services');
  if (se_southeast_list_related_services) {
    gsap.from('#se-southeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_southeast_section_youre_in_good_hands = document.getElementById('se-southeast-section-youre-in-good-hands');
  if (se_southeast_section_youre_in_good_hands) {
    gsap.fromTo('#se-southeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_southeast_section_21 = document.getElementById('se-southeast-section-21');
  if (se_southeast_section_21) {
    gsap.fromTo('#se-southeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_northeast_form_vibrant_northeast_beaches_and_culture = document.getElementById('se-northeast-form-vibrant-northeast-beaches-and-culture');
  if (se_northeast_form_vibrant_northeast_beaches_and_culture) {
    gsap.from('#se-northeast-form-vibrant-northeast-beaches-and-culture input, #se-northeast-form-vibrant-northeast-beaches-and-culture textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_northeast_list_quick_facts = document.getElementById('se-northeast-list-quick-facts');
  if (se_northeast_list_quick_facts) {
    gsap.from('#se-northeast-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_northeast_list_common_challenges_applicants_face = document.getElementById('se-northeast-list-common-challenges-applicants-face');
  if (se_northeast_list_common_challenges_applicants_face) {
    gsap.from('#se-northeast-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_northeast_list_how_we_solve_these_challenges = document.getElementById('se-northeast-list-how-we-solve-these-challenges');
  if (se_northeast_list_how_we_solve_these_challenges) {
    gsap.from('#se-northeast-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_northeast_section_trip_overview = document.getElementById('se-northeast-section-trip-overview');
  if (se_northeast_section_trip_overview) {
    gsap.fromTo('#se-northeast-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_northeast_form_who_is_this_trip_for = document.getElementById('se-northeast-form-who-is-this-trip-for');
  if (se_northeast_form_who_is_this_trip_for) {
    gsap.from('#se-northeast-form-who-is-this-trip-for input, #se-northeast-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_northeast_list_required_documents = document.getElementById('se-northeast-list-required-documents');
  if (se_northeast_list_required_documents) {
    gsap.from('#se-northeast-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_northeast_list_booking_process = document.getElementById('se-northeast-list-booking-process');
  if (se_northeast_list_booking_process) {
    gsap.from('#se-northeast-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_northeast_section_timelines_deadlines = document.getElementById('se-northeast-section-timelines-deadlines');
  if (se_northeast_section_timelines_deadlines) {
    gsap.fromTo('#se-northeast-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_northeast_section_fees_costs = document.getElementById('se-northeast-section-fees-costs');
  if (se_northeast_section_fees_costs) {
    gsap.fromTo('#se-northeast-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_northeast_list_risks_common_mistakes = document.getElementById('se-northeast-list-risks-common-mistakes');
  if (se_northeast_list_risks_common_mistakes) {
    gsap.from('#se-northeast-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_northeast_section_diy_vs_professional_assistance = document.getElementById('se-northeast-section-diy-vs-professional-assistance');
  if (se_northeast_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-northeast-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_northeast_section_sergipe_specific_context = document.getElementById('se-northeast-section-sergipe-specific-context');
  if (se_northeast_section_sergipe_specific_context) {
    gsap.fromTo('#se-northeast-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_northeast_section_what_our_clients_say = document.getElementById('se-northeast-section-what-our-clients-say');
  if (se_northeast_section_what_our_clients_say) {
    gsap.fromTo('#se-northeast-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_northeast_section_frequently_asked_questions = document.getElementById('se-northeast-section-frequently-asked-questions');
  if (se_northeast_section_frequently_asked_questions) {
    gsap.fromTo('#se-northeast-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_northeast_section_international_support = document.getElementById('se-northeast-section-international-support');
  if (se_northeast_section_international_support) {
    gsap.fromTo('#se-northeast-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_northeast_list_our_credentials = document.getElementById('se-northeast-list-our-credentials');
  if (se_northeast_list_our_credentials) {
    gsap.from('#se-northeast-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_northeast_list_related_services = document.getElementById('se-northeast-list-related-services');
  if (se_northeast_list_related_services) {
    gsap.from('#se-northeast-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_northeast_section_youre_in_good_hands = document.getElementById('se-northeast-section-youre-in-good-hands');
  if (se_northeast_section_youre_in_good_hands) {
    gsap.fromTo('#se-northeast-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_northeast_section_21 = document.getElementById('se-northeast-section-21');
  if (se_northeast_section_21) {
    gsap.fromTo('#se-northeast-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_south_form_charming_south_wine_and_gauchos = document.getElementById('se-south-form-charming-south-wine-and-gauchos');
  if (se_south_form_charming_south_wine_and_gauchos) {
    gsap.from('#se-south-form-charming-south-wine-and-gauchos input, #se-south-form-charming-south-wine-and-gauchos textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_south_list_quick_facts = document.getElementById('se-south-list-quick-facts');
  if (se_south_list_quick_facts) {
    gsap.from('#se-south-list-quick-facts li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_south_list_common_challenges_applicants_face = document.getElementById('se-south-list-common-challenges-applicants-face');
  if (se_south_list_common_challenges_applicants_face) {
    gsap.from('#se-south-list-common-challenges-applicants-face li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_south_list_how_we_solve_these_challenges = document.getElementById('se-south-list-how-we-solve-these-challenges');
  if (se_south_list_how_we_solve_these_challenges) {
    gsap.from('#se-south-list-how-we-solve-these-challenges li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_south_section_trip_overview = document.getElementById('se-south-section-trip-overview');
  if (se_south_section_trip_overview) {
    gsap.fromTo('#se-south-section-trip-overview', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_south_form_who_is_this_trip_for = document.getElementById('se-south-form-who-is-this-trip-for');
  if (se_south_form_who_is_this_trip_for) {
    gsap.from('#se-south-form-who-is-this-trip-for input, #se-south-form-who-is-this-trip-for textarea', {opacity: 0, stagger: 0.1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_south_list_required_documents = document.getElementById('se-south-list-required-documents');
  if (se_south_list_required_documents) {
    gsap.from('#se-south-list-required-documents li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_south_list_booking_process = document.getElementById('se-south-list-booking-process');
  if (se_south_list_booking_process) {
    gsap.from('#se-south-list-booking-process li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_south_section_timelines_deadlines = document.getElementById('se-south-section-timelines-deadlines');
  if (se_south_section_timelines_deadlines) {
    gsap.fromTo('#se-south-section-timelines-deadlines', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_south_section_fees_costs = document.getElementById('se-south-section-fees-costs');
  if (se_south_section_fees_costs) {
    gsap.fromTo('#se-south-section-fees-costs', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_south_list_risks_common_mistakes = document.getElementById('se-south-list-risks-common-mistakes');
  if (se_south_list_risks_common_mistakes) {
    gsap.from('#se-south-list-risks-common-mistakes li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_south_section_diy_vs_professional_assistance = document.getElementById('se-south-section-diy-vs-professional-assistance');
  if (se_south_section_diy_vs_professional_assistance) {
    gsap.fromTo('#se-south-section-diy-vs-professional-assistance', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_south_section_sergipe_specific_context = document.getElementById('se-south-section-sergipe-specific-context');
  if (se_south_section_sergipe_specific_context) {
    gsap.fromTo('#se-south-section-sergipe-specific-context', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_south_section_what_our_clients_say = document.getElementById('se-south-section-what-our-clients-say');
  if (se_south_section_what_our_clients_say) {
    gsap.fromTo('#se-south-section-what-our-clients-say', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_south_section_frequently_asked_questions = document.getElementById('se-south-section-frequently-asked-questions');
  if (se_south_section_frequently_asked_questions) {
    gsap.fromTo('#se-south-section-frequently-asked-questions', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_south_section_international_support = document.getElementById('se-south-section-international-support');
  if (se_south_section_international_support) {
    gsap.fromTo('#se-south-section-international-support', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const application_form = document.getElementById('application-form');
  if (application_form) {
    gsap.fromTo('#application-form', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_south_list_our_credentials = document.getElementById('se-south-list-our-credentials');
  if (se_south_list_our_credentials) {
    gsap.from('#se-south-list-our-credentials li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_south_list_related_services = document.getElementById('se-south-list-related-services');
  if (se_south_list_related_services) {
    gsap.from('#se-south-list-related-services li', {opacity: 0, x: -50, stagger: 0.2, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_south_section_youre_in_good_hands = document.getElementById('se-south-section-youre-in-good-hands');
  if (se_south_section_youre_in_good_hands) {
    gsap.fromTo('#se-south-section-youre-in-good-hands', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

  const se_south_section_21 = document.getElementById('se-south-section-21');
  if (se_south_section_21) {
    gsap.fromTo('#se-south-section-21', {opacity: 0}, {opacity: 1, duration: 0.32000000000000006, ease: 'easeInOutQuad'});
  }

    })
    .catch(error => console.error('Error loading js_data.json:', error));
});
