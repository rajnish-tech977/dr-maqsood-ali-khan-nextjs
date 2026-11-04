/* Runs right before main.js (which calls AOS.init). Until this flag is set, the CSS keeps [data-aos]
   content visible, so a slow first visit never shows blank sections while the scripts download. */
document.documentElement.classList.add("aos-on");
