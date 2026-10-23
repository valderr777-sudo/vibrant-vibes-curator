# Project conventions

- Use contained image framing for editorial group photos, portraits, logos, and gallery images so essential content stays visible at every breakpoint.
- Keep responsive image and motion behavior in shared global CSS utilities; decorative background images may still use cover framing.
- Define sharing metadata in each content route, not only in the root layout, so each link identifies its own page.
- Public content that changes often (announcements, speakers, special events, committee activities, food themes) lives in src/content/site-content.ts; developers edit it there because the site has no editing platform or backend.
- Next-luncheon banners and featured displays derive from the confirmed featuredMeeting record; empty dates hide them, and past records stay in archive-only lists to avoid stale duplicate copy.
- Events lower-page content uses the shared EventsCommunity accordion; Caring for America opens by default to preserve easy public access to its donation PDF, and featured dates are omitted from the future-date list to avoid duplicate promotion.
- Store confirmed public promotion dates as YYYY-MM-DD in the shared content module and use the shared event-day helper/hook for filtering and today tags; a live Florida clock prevents stale static builds and visitor timezones from changing expiration.
- Gallery photo pixel dimensions live in src/assets/worwf/gallery/sizes.ts and drive the enlarged-view upscale cap, so regenerate that file after adding, replacing, or removing gallery photos or the cap will be wrong.


- Leadership biographies and committee rosters belong to the standalone /leadership route; About Us links there and retains club achievements so the two pages have distinct purposes.
