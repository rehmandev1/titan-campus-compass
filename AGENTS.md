<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Project rules
- All site content (courses, campuses, articles, people, stats, contact) lives in `src/data/*`; components only render it, so verified info can replace placeholders in one place.
- Placeholder or sample content must stay visibly labelled (`PlaceholderBadge`) until replaced with verified information.
- The Sindh map outline and marker points come from real boundary data in `src/data/sindh-map.ts` (same projection); markers are % overlays so they stay aligned at any size — never hand-place coordinates.
- Forms validate with zod schemas in `src/lib/forms.ts`; with no backend connected they must show `BackendNotice` instead of pretending to submit.
- Colors/gradients are tokens in `src/styles.css` derived only from the logo palette; components use those tokens, never raw color values.
- The logo is served unmodified from a CDN asset pointer via `LogoImage`/`LogoLink`; on dark backgrounds it sits on a white plate.
