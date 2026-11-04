// Service pages (/services/<slug>/). General patient information only - written for this
// project, NOT clinical claims by Dr. Khan. Have him review/approve before launch.
// Facts taken from his real profile: training in skull-base surgery (Pittsburgh, USA),
// robotic surgical technique (Newcastle, UK) and endoscopic thyroidectomy (Vietnam).

export const services = [
  {
    slug: "head-neck-skull-base-surgery",
    icon: "fa-brain",
    title: "Head & Neck / Skull-Base Surgery",
    short:
      "Surgical management of head & neck and skull-base tumours, with fellowship training in skull-base surgery from Pittsburgh, USA.",
    heroText:
      "Surgical care for head, neck, thyroid and skull-base conditions, combining endoscopic and robotic technique with evidence-based treatment protocols for faster recovery and better functional outcomes.",
    keywords: ["head and neck surgeon Mumbai", "skull base surgery Mumbai", "head and neck cancer treatment Mumbai", "endoscopic skull base surgery"],
    overview: [
      "Dr. Maqsood Ali Khan offers diagnostic evaluation and surgical treatment for conditions of the head, neck, thyroid and skull base. He uses endoscopic and robotic surgical technique together with evidence-based protocols, with training completed in Pittsburgh, USA (skull-base surgery), Newcastle, UK (robotic surgical technique) and Vietnam (endoscopic thyroidectomy).",
      "From the first ENT evaluation to advanced surgery, the plan is tailored to your specific condition and discussed with you before any decision is made.",
    ],
    conditions: ["Head & neck cancers", "Thyroid tumours", "Skull-base tumours", "Sinus & nasal tumours", "Neck lumps and swellings", "Salivary gland and oral cavity conditions"],
    procedures: [
      { icon: "fa-brain", name: "Skull-Base Surgery", text: "Surgical management of skull-base tumours, including endoscopic approaches through the nose where suitable." },
      { icon: "fa-bolt", name: "Head & Neck Tumour Surgery", text: "Removal of tumours of the throat, mouth, neck and surrounding structures, planned around function and appearance." },
      { icon: "fa-wave-square", name: "Robotic Surgical Technique", text: "Minimally invasive robotic technique for selected head and neck procedures." },
    ],
  },
  {
    slug: "endoscopic-thyroid-surgery",
    icon: "fa-bolt",
    title: "Endoscopic Thyroid Surgery",
    short:
      "Scarless endoscopic thyroidectomy techniques, refined through specialised training in Vietnam, for safer and faster recovery.",
    heroText:
      "Thyroid surgery performed through endoscopic technique, so that the incision is kept away from the visible neck where the case allows.",
    keywords: ["endoscopic thyroid surgery Mumbai", "scarless thyroidectomy", "thyroid surgeon Mumbai", "thyroid nodule surgery"],
    overview: [
      "Endoscopic thyroidectomy removes all or part of the thyroid gland through small incisions placed away from the front of the neck, using an endoscope for vision. Dr. Khan trained in endoscopic thyroidectomy in Vietnam.",
      "Not every thyroid condition is suitable for an endoscopic approach. Suitability depends on the size and nature of the swelling and is decided only after examination and investigations.",
    ],
    conditions: ["Thyroid nodules", "Goitre (enlarged thyroid)", "Thyroid tumours", "Selected thyroid conditions needing surgery"],
    procedures: [
      { icon: "fa-bolt", name: "Endoscopic Thyroidectomy", text: "Removal of the thyroid gland, partly or fully, through small remote incisions with endoscopic vision." },
      { icon: "fa-stethoscope", name: "Conventional Thyroid Surgery", text: "When an endoscopic approach is not suitable, thyroid surgery by the standard approach." },
    ],
  },
  {
    slug: "sleep-apnea-snoring-treatment",
    icon: "fa-moon",
    title: "Sleep Apnea & Snoring Treatment",
    short:
      "Diagnosis and treatment of obstructive sleep apnea and chronic snoring, including surgical and non-surgical options.",
    heroText:
      "Evaluation of chronic snoring and obstructive sleep apnea, with treatment options matched to where in the airway the obstruction lies.",
    keywords: ["sleep apnea treatment Mumbai", "snoring treatment Mumbai", "obstructive sleep apnea surgery", "ENT sleep specialist Mumbai"],
    overview: [
      "Loud, regular snoring and pauses in breathing during sleep can be signs of obstructive sleep apnea, where the airway repeatedly narrows or closes. It can leave a person tired through the day and is worth assessing properly.",
      "Dr. Khan evaluates the nose, throat and airway, and discusses non-surgical and surgical options based on your findings and any sleep study results.",
    ],
    conditions: ["Chronic snoring", "Obstructive sleep apnea", "Blocked nose affecting sleep", "Enlarged tonsils or adenoids", "Daytime sleepiness linked to breathing at night"],
    procedures: [
      { icon: "fa-moon", name: "Airway Evaluation", text: "Examination of the nose, throat and airway to find where the obstruction is." },
      { icon: "fa-wave-square", name: "Surgical Options", text: "Surgery to relieve obstruction in the nose or throat, where it is appropriate for the patient." },
      { icon: "fa-stethoscope", name: "Non-Surgical Management", text: "Lifestyle measures and other non-surgical options discussed after assessment." },
    ],
  },
  {
    slug: "voice-laryngeal-surgery",
    icon: "fa-microphone",
    title: "Voice & Laryngeal Surgery",
    short:
      "Evaluation and surgical treatment of voice and vocal cord disorders affecting speech and swallowing.",
    heroText:
      "Assessment and treatment of voice changes and conditions of the voice box (larynx) that affect speaking, breathing or swallowing.",
    keywords: ["voice surgery Mumbai", "vocal cord treatment Mumbai", "hoarseness treatment ENT", "laryngeal surgery"],
    overview: [
      "A voice that stays hoarse, weak or changed for more than a few weeks should be examined. The cause may be simple or may need treatment of the vocal cords or larynx.",
      "Dr. Khan examines the larynx, explains what is found, and recommends medical management or surgery as appropriate.",
    ],
    conditions: ["Persistent hoarseness", "Vocal cord nodules and polyps", "Vocal cord paralysis", "Swallowing difficulty", "Growths of the voice box"],
    procedures: [
      { icon: "fa-microphone", name: "Laryngeal Examination", text: "Careful examination of the vocal cords and voice box." },
      { icon: "fa-bolt", name: "Voice Surgery", text: "Surgical treatment of vocal cord and laryngeal conditions where needed." },
    ],
  },
  {
    slug: "rhinoplasty-nasal-surgery",
    icon: "fa-wave-square",
    title: "Rhinoplasty & Nasal Surgery",
    short:
      "Functional and aesthetic nasal surgery, including septoplasty and rhinoplasty, for breathing and appearance concerns.",
    heroText:
      "Nasal surgery that improves breathing, appearance or both, planned around what you want and what the nose needs.",
    keywords: ["rhinoplasty Mumbai", "septoplasty Mumbai", "nasal surgery Mumbai", "deviated septum treatment"],
    overview: [
      "Nasal surgery can address a blocked nose, a deviated septum, or the shape of the nose. Functional (breathing) and aesthetic (appearance) goals are often considered together.",
      "Dr. Khan examines your nose, discusses what can realistically be achieved, and explains the options before a decision is made.",
    ],
    conditions: ["Deviated nasal septum", "Chronic nasal blockage", "Nasal shape and appearance concerns", "Breathing difficulty after injury to the nose", "Chronic sinus problems linked to nasal structure"],
    procedures: [
      { icon: "fa-wave-square", name: "Septoplasty", text: "Straightening of a deviated septum to improve airflow through the nose." },
      { icon: "fa-stethoscope", name: "Rhinoplasty", text: "Reshaping of the nose for function, appearance or both." },
    ],
  },
  {
    slug: "general-ent-vertigo-care",
    icon: "fa-stethoscope",
    title: "General ENT & Vertigo Care",
    short:
      "Diagnosis and treatment of sinusitis, tonsillitis, ear infections, vertigo and balance disorders.",
    heroText:
      "Everyday ear, nose and throat care, together with assessment of dizziness and balance problems.",
    keywords: ["ENT doctor Mumbai", "sinusitis treatment Mumbai", "ear infection treatment Mumbai", "vertigo treatment Mumbai", "tonsillitis treatment Mumbai"],
    overview: [
      "General ENT care covers the common problems of the ear, nose and throat. Dr. Khan also assesses dizziness and vertigo, which may come from the inner ear or other causes.",
      "Many of these conditions are treated with medicines and follow-up; surgery is considered only when it is truly needed.",
    ],
    conditions: ["Sinusitis", "Tonsillitis", "Ear infections", "Vertigo and balance disorders", "Blocked or runny nose", "Throat pain and hoarseness"],
    procedures: [
      { icon: "fa-stethoscope", name: "ENT Examination", text: "Full examination of the ears, nose and throat, with endoscopy where needed." },
      { icon: "fa-wave-square", name: "Vertigo Assessment", text: "Assessment of dizziness and balance to find the likely cause and plan treatment." },
    ],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
export const serviceHref = (s) => `/services/${s.slug}/`;
