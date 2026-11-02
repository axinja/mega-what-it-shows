**Reports: 33** of the 412 merged into support ticket #4471.

On booking-v3 the form prints `MM/DD/YYYY` under its date field. People type month first, as told, and the form reads the date the tenant's way (day first), so it swaps. Only reports sent through the form by booking-v3 tenants. The parser fix does not reach it: the form hint must match the tenant's locale.

- Tenants (3): alder.physio (de-DE, booking-v3), copper.studio (es-ES, booking-v3), pale.harbour (pt-PT, booking-v3)
- Channels: form
- Received: 2026-04-17 → 2026-09-22

Examples:

> R-41230 · copper.studio · form: My client came on 1 June instead of 6 January. We sorted it out.
>
> R-41241 · alder.physio · form: We had two people show up on 8 June. They were booked for 6 August.
>
> R-41251 · pale.harbour · form: Wednesday 7 January showed as Wednesday 1 July. I moved it myself.

<details><summary>All 33 report ids</summary>

R-41230, R-41241, R-41251, R-41259, R-41262, R-41275, R-41294, R-41305, R-41308, R-41366, R-41372, R-41384, R-41387, R-41396, R-41400, R-41406, R-41415, R-41416, R-41418, R-41428, R-41439, R-41441, R-41449, R-41453, R-41456, R-41460, R-41472, R-41485, R-41493, R-41539, R-41572, R-41582, R-41584

</details>

Counted from the kb export (reports-4471.json, 427 rows, 412 unique ids; duplicate rows counted once).
