# #4471: three problems, not one

The support desk merged 412 date reports into ticket #4471 and marked it known: one issue, one fix
queued. Read by tenant, channel and body, the reports come from three problems. Each has its own
issue here, with how many reports it covers.

| Issue | Problem | Reports | Outcome |
|---|---|---|---|
| [#1](../../issues/1) | Shared parser reads day-first dates month first | 379 | fixed (parse dd/mm for eu locales) |
| [#2](../../issues/2) | booking-v3 form hint says MM/DD/YYYY but the form reads day first | 33 | won't fix (booking-v3 form retired) |
| [#3](../../issues/3) | Dates move by one day, differently per time zone | 5 | open |

412 unique reports (the export has 427 rows; 15 are repeats of the same id). Counted as the desk's cause table counts them: the 5 one-day reports are also in the parser count, where the desk files them.

## The kb page

- **Source:** [kb/src/routes/kb/incidents/4471/problems/+page.svx](kb/src/routes/kb/incidents/4471/problems/+page.svx),
  with its table in [kb/src/lib/kb/ProblemTable.svelte](kb/src/lib/kb/ProblemTable.svelte). Signed with the course ticket; desk ref shown on the page.
- **As the desk sees it:** [page/kb/incidents/4471/problems.html](page/kb/incidents/4471/problems.html)
  (built with SvelteKit + mdsvex) and a screenshot, [page/problems.png](page/problems.png).

## What is here

```
kb/        the desk's kb export, plus the new page and its component
render/    the build setup: npm install && npm run build → render/build
page/      the built kb, as the desk sees it
issues/    the issue bodies, generated from the export
```
