# d3adv4nity — Internet Shrine

Personal internet shrine shell for GitHub + Cloudflare Pages + Supabase.

## Current shell

- Home
- About
- Diary
- Media (movies / shows / books)
- Music room
- Favorites
- Guestbook
- Private admin shell

## Planned backend layer

- Supabase Auth for the admin account
- Supabase Database for editable site content
- Supabase Storage for MP3s and album art
- Row Level Security so public users can only read published content and submit guestbook entries

## Local preview

This shell is static and can be opened locally. The fastest preview is a small local server (for example VS Code Live Server or `python -m http.server`).

## Deploy later

Push the folder to GitHub, connect the repo to Cloudflare Pages, and set your Supabase environment variables in the Cloudflare dashboard.
