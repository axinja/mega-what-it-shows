**Reports: 5** of the 412 merged into support ticket #4471.

The date moves by exactly one day in the same month, or people in two time zones get two different days for one meeting. A month-first parser cannot cause this; it looks like a date converted through UTC or the wrong time zone. The desk noted these reports as a one-day move (`desk-notes.json`) and files them under the parser by tenant and channel, so they are also part of the parser count.

- Tenants (5): alder.physio (de-DE, booking-v3), kettle.books (nl-NL, booking-v2), lantern.row (cs-CZ, booking-v2), nine.lanterns (pl-PL, booking-v2), pale.harbour (pt-PT, booking-v3)
- Channels: app, email
- Received: 2026-04-02 → 2026-10-04

Examples:

> R-41202 · kettle.books · email: Invite says Tuesday 12 May. Calendar says Monday 11 May. My client turned up on the Monday. We had coffee.
>
> R-41620 · lantern.row · email: Tuesday 6 October showed as Monday. I moved it myself. I have stopped reporting these but my colleague says it helps you.

<details><summary>All 5 report ids</summary>

R-41202, R-41209, R-41236, R-41344, R-41620

</details>

Counted from the kb export (reports-4471.json, 427 rows, 412 unique ids; duplicate rows counted once).
