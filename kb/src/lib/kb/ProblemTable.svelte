<script lang="ts">
  import reports from '#lib/data/reports-4471.json';
  import notes from '#lib/data/desk-notes.json';
  import { groupByCause, uniqueById, type Report } from '#lib/kb/causes';
  import { tenantOf } from '#lib/kb/locales';

  // One row per problem in a ticket: the causes from causes.ts, plus a row for the desk's one-day moves.
  // `outcomes`: what engineering decided per problem, as the desk reported it.
  let { ticket, issues = {}, outcomes = {} }: { ticket: number; issues?: Record<string, string>; outcomes?: Record<string, string> } = $props();

  const WHAT: Record<string, string> = {
    parser: 'shared parser reads day-first dates month first: day and month swap',
    hint: 'booking-v3 form hints MM/DD/YYYY, then reads the date day first',
    'one-day': 'date moves by one day; differs by time zone; not a swap',
    unplaced: 'tenant not on file',
  };

  const merged = $derived(uniqueById(reports as Report[]).filter((r) => r.mergedInto === ticket));
  const moved = $derived(merged.filter((r) => notes.oneDayMove.includes(r.id)));
  const rows = $derived(
    [
      // Causes counted as CauseTable counts them; one-day moves stay under their cause and get a row too.
      ...groupByCause(merged, tenantOf).map((g) => ({
        problem: g.cause as string,
        reports: g.reports,
      })),
      { problem: 'one-day', reports: moved },
    ]
      .filter((p) => p.reports.length)
      .map((p) => {
        const days = p.reports.map((r) => r.receivedAt.slice(0, 10)).sort();
        return {
          ...p,
          tenants: new Set(p.reports.map((r) => r.tenant)).size,
          channels: [...new Set(p.reports.map((r) => r.channel))].sort().join(', '),
          seen: `${days[0]} → ${days[days.length - 1]}`,
        };
      })
      .sort((a, b) => b.reports.length - a.reports.length),
  );
  const filedUnder = $derived(
    groupByCause(moved, tenantOf)
      .map((g) => `${g.reports.length} under ${g.cause}`)
      .join(', '),
  );
</script>

<p class="sum">
  <strong>{merged.length}</strong> reports merged into #{ticket} · <strong>{rows.length}</strong> problems
</p>

<table>
  <thead><tr><th>problem</th><th>reports</th><th>what happens</th><th>tenants</th><th>channels</th><th>seen</th><th>outcome</th><th>ticket</th></tr></thead>
  <tbody>
    {#each rows as p (p.problem)}
      <tr>
        <td><code>{p.problem}</code></td>
        <td>{p.reports.length}</td>
        <td>{WHAT[p.problem]}</td>
        <td>{p.tenants}</td>
        <td>{p.channels}</td>
        <td>{p.seen}</td>
        <td>{outcomes[p.problem] ?? 'open'}</td>
        <td>{#if issues[p.problem]}<a href={issues[p.problem]}>{issues[p.problem].split('/').slice(-3).join(' ').replace(' issues ', '#')}</a>{:else}none yet{/if}</td>
      </tr>
    {/each}
  </tbody>
</table>

{#if moved.length}
  <p class="note">The {moved.length} one-day reports are also counted under their cause, where the desk files them by tenant ({filedUnder}).</p>
{/if}

<style>
  .sum { font-size: 1.1rem; }
  .note { color: var(--muted); font-size: 0.85em; }
</style>
