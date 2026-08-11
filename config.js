/* ============================================================
   HEIMKINO — PUBLIC front-end config. This file is published to
   GitHub and is readable by anyone. It must contain NOTHING secret.

   NOT allowed here (these live only in Apps Script Script Properties):
     - the invite code
     - the full street address / house number
     - the house note
     - current reservation names / emails
     - any reservation secret
   Note: past attendees you list under `attendees` ARE public (the eye is a
   courtesy screen, not real privacy). Use `attendance: N` to keep them private.

   Allowed here: films, dates, times, runtimes, factual synopses,
   and attendance counts.

   Weekly edit rules:
     - every line inside { } ends with a comma, except the last
     - text sits inside "double quotes"
     - a blank page after an edit is almost always a missing comma/quote
   ============================================================ */
window.CONFIG = {
  wordmark: "HEIMKINO",
  city: "Berlin",          // public. The street address is invitation-gated (backend only).
  endpoint: "",            // paste your Apps Script /exec URL here, in quotes

  /* ---- house running order (public, non-sensitive) ---- */
  schedule: { doors: "19:15", trailers: "19:30", film: "20:25" },

  /* ---- CURRENT SCREENING ---- */
  next: {
    date: "2026-08-10",
    time: "",                 // "" uses schedule.film
    title: "Kingdom of Heaven",
    edition: "Director's Cut", // or ""
    director: "Ridley Scott",
    year: 2005,
    runtime: "194 min",
    // factual, non-interpretive. Replace with your preferred factual synopsis if you like.
    synopsis: "During the Crusades, a French blacksmith named Balian travels to Jerusalem and helps defend the city and its people."
  },

  /* ---- UPCOMING (provisional; unnumbered until confirmed) ---- */
  upcoming: [
    { title: "Teorema", director: "Pier Paolo Pasolini", year: 1968 },
    { title: "Ken Park", director: "Larry Clark & Edward Lachman", year: 2002 },
    { title: "The Gospel According to St. Matthew", director: "Pier Paolo Pasolini", year: 1964 },
     { title: "Spartacus", director: "Stanley Kubrick", year: 1960 },
   { title: "Irréversible", director: "Gaspar Noé", year: 2002 }
  ],

  /* ---- PAST (newest first) ----
     attendees: ["…"]  gives that entry the hold-to-reveal eye (names are PUBLIC
                       in this file, a courtesy screen, not real privacy).
     attendance: 3     shows a count only and keeps names off the site (private).
     private: true     a film you watched OUTSIDE the club, kept for the record.
                       Renders indented and dimmed, tagged "Private", with no
                       attendee line. Add these retroactively with any date, e.g.:
       { date:"2026-07-12", title:"Stalker", director:"Andrei Tarkovsky", year:1979, private:true },
     Entries are sorted by date automatically, so order here does not matter. */
  past: [
    {
      date: "2026-08-05",
      title: "The Piano Teacher", director: "Michael Haneke", year: 2001,
      attendees: ["Fynn", "Linda"],
      // factual logline; replace with your preferred synopsis if you like.
      synopsis: "A piano teacher at a Vienna conservatory, living under her domineering mother, becomes involved with one of her students."
    },
     /*{ date: "2026-07-12", title: "Stalker", director: "Andrei Tarkovsky", year: 1979, private: true },*/
    {
      date: "2026-07-30",
      title: "Salò, or the 120 Days of Sodom", director: "Pier Paolo Pasolini", year: 1975,
      attendees: ["Senthuran", "Stav", "Fynn"],
      // factual logline; replace with your preferred synopsis if you like.
      synopsis: "In the final days of Fascist Italy, four powerful men confine a group of young people at a villa and subject them to systematic cruelty."
    }
  ]
};
