/*
 * d3adv4nity shrine — shell data layer
 *
 * This file intentionally uses local demo data for the first shell.
 * Supabase will replace this layer once the database + storage are wired up.
 */
const DEMO_SITE = {
  tagline: "personal internet shrine",
  displayName: "d3adv4nity",
  miniBio: "a little corner of the internet made by me, for me.",
  currentlyWatching: "—",
  currentlyReading: "—",
  currentlyListening: "—",
  mood: "—",
  updateDate: "09.30.26",
  siteUpdate: "welcome to the first version of my shrine.",
  welcomeTitle: "you found my little corner of the internet.",
  welcomeCopy: "this is a personal archive of things i like, things i make, things i watch, and things i think about.",
  quote: "“the internet should feel like a place you can get lost in.”",
  albumArt: "d3a",
  trackTitle: "nothing playing yet",
  trackArtist: "upload a song in admin",
  footerYear: "2026"
};

const setSiteValue = (key, value) => {
  document.querySelectorAll(`[data-site="${key}"]`).forEach((el) => {
    if (key === "album-art") el.textContent = value || "d3a";
    else el.textContent = value ?? "—";
  });
};

Object.entries(DEMO_SITE).forEach(([key, value]) => {
  const attr = key.replace(/[A-Z]/g, (m) => `-${m.toLowerCase()}`);
  setSiteValue(attr, value);
});
