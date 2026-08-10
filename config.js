/* ============================================================
   HEIMKINO — this is the ONLY file you edit week to week.
   Change the film, times, and synopsis here, commit, and the
   live site updates in about a minute. Do not touch index.html.

   Rules that save you:
   - every line inside { } ends with a comma, except the last one
   - every piece of text sits inside "double quotes"
   - if the site goes blank after an edit, it is almost always a
     missing comma or quote. Undo your last change and redo it.
   ============================================================ */
window.CONFIG = {
  wordmark: "HEIMKINO",
  tagline: "Audre-Lorde-Straße",
  capacity: null,          // null = no limit; set a number to cap seats

  /* ---- where reservations go ----------------------------------
     While setting up, leave backend as "demo" (nothing is saved).
     Once your Google Web App URL is ready (see README, step 6),
     paste it into endpoint below, THEN change backend to
     "appsscript". That single switch makes the site live.        */
  backend: "appsscript",         // "demo" while testing, "appsscript" when live
  endpoint: "https://script.google.com/macros/s/AKfycbxHHR1l50mzgK8TLm4QQT8tYBLt0XFSAKjaB3y_L-zk6Ok2Mk190JJ7JyhIkjdOKd-9/exec",            // paste your Apps Script /exec URL here, in quotes
  inviteCode: "",          // "" = the director's name, hyphenated (ridley-scott). Or set your own word.

  /* ---- house defaults (rarely change) ---- */
  schedule: { doors: "19:15", trailers: "19:30", film: "20:25" },
  byob: true,              // always bring your own booze
  popcorn: true,           // popcorn always provided

  /* ---- THE NEXT SCREENING ---- */
  next: {
    date: "2026-08-10",              // year-month-day
    time: "",                        // one-off start time, or "" to use 20:25
    duration: "194 min",
    title: "Kingdom of Heaven",
    edition: "Director's Cut",       // a cut or restoration, or "" for none
    director: "Ridley Scott",        // the invite code derives from this name
    year: 2005,
    note: "A Crusades epic of tolerance and conscience: after his wife's death, the blacksmith Balian journeys to Jerusalem and becomes a defender of its fragile peace.",
   hostNote: "Long one tonight. House drink: Dr. Pepper Float.",  // a personal line for THIS screening only; set to "" to hide it
    
     seed: []                         // leave empty; real names arrive from reservations
  },

  /* ---- UPCOMING (no date yet) ---- */
  upcoming: [
    { title: "Teorema", director: "Pier Paolo Pasolini", year: 1968 },
    { title: "Ken Park", director: "Larry Clark & Edward Lachman", year: 2002 },
    { title: "The Gospel According to St. Matthew", director: "Pier Paolo Pasolini", year: 1964 }
  ],

  /* ---- PAST (newest first); attendees hide behind the eye ---- */
  past: [
    {
      date: "2026-07-30",
      title: "Salò, or the 120 Days of Sodom",
      director: "Pier Paolo Pasolini", year: 1975,
      note: "Power as ritual, the body as the last thing left to consume.",
      attendees: ["Senthuran", "Stav", "Fynn"]
    },
    {
      date: "2026-08-05",
      title: "The Piano Teacher",
      director: "Michael Haneke", year: 2001,
      note: "Desire routed through discipline, the self played against itself.",
      attendees: ["Fynn", "Linda"]
    }
  ]
};
