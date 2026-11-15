---
layout: default
title: "keycloak-cli: the whole Keycloak Admin API as a CLI"
---

<h1>keycloak-cli</h1>
<p class="meta">The whole Keycloak Admin API as a CLI, generated from the crate.</p>

<p>
  Keycloak's Admin REST API is 415 operations across realms, users, groups,
  clients, roles, scopes, identity providers, organizations, authentication flows,
  events, sessions and authorization services. The official <code>kcadm.sh</code>
  covers a small, curated slice of that. Everything else is <code>curl</code>,
  assembled by hand, with the token, the realm and the URL shape typed again every
  time.
</p>

<p>
  <a href="https://github.com/rust-utility/keycloak-cli">keycloak-cli</a> is the
  other option: one command per operation, named after the API path and verb.
</p>

<pre><code>keycloak-cli clients list --first 10
keycloak-cli clients get 8a1b…                 # client uuid
keycloak-cli users list --search alice --max 5
keycloak-cli users role-mappings realm get &lt;user-id&gt;
keycloak-cli -r other users count</code></pre>

<h2>Why it is generated</h2>

<p>
  The CLI does not describe the API itself. It is generated from the
  <a href="https://crates.io/crates/keycloak">keycloak</a> crate — the same OpenAPI
  description, the same 22 <code>tag-*</code> resource features — and every command
  carries the HTTP method, the path, the parameter types and the exact crate method
  it calls. <code>scripts/generate.sh</code> downloads the published crate tarball,
  unpacks it and regenerates the tree; CI fails if the committed sources differ by a
  byte, and a test keeps the CLI's features equal to the crate's own
  <code>tags cargo</code> output.
</p>

<p>
  That is the whole design: there is no second description of Keycloak to drift
  from. A command cannot exist for an operation the crate does not have, and cannot
  call one with the wrong shape.
</p>

<h2>What using it feels like</h2>

<p>
  <strong>A session per terminal.</strong> <code>keycloak-cli login</code> stores a
  token for the terminal you are in (0600 file, keyed by tty and shell session, with
  expiry). Scripts and completions in that terminal reuse it; another terminal asks
  for a password until it logs in.
</p>

<p>
  <strong>Completion with live values.</strong> <code>init bash|zsh|fish</code>
  prints the lines to source at shell start. After a login, TAB offers the realms,
  users, groups and clients of the session, from the API, cached for a minute on
  disk so the next TAB is instant. Every lookup is bounded: 1.2 s timeout, at most
  100 candidates, silence on failure.
</p>

<p>
  <strong>Output that fits the caller.</strong> A table in a terminal, JSON when
  piped, or YAML, markdown and HTML on request, with <code>--fields</code> to pick
  columns.
</p>

<p>
  <strong>A report, not just a dump.</strong>
</p>

<pre><code># keycloak-cli report — realm `master`

## Users
12 users in total: 10 enabled, 2 disabled.
enabled   ████████████████████████████████████ 10
disabled  ███████ 2

## Events by type
13 events in the last sample of at most 1000.
LOGIN          ████████████████████████████████████ 7
LOGOUT         ███████████ 3
CODE_TO_TOKEN  ████████ 2

## Sessions per client
10 active sessions in 3 clients.
web     ████████████████████████████████████ 5
api     ██████████████████ 3
mobile  ████████████ 2</code></pre>

<p>
  <strong>Nothing destructive by accident.</strong> <code>--dry-run</code> prints the
  request a command would send — method, URL with its query, and the body a mutation
  would carry — and changes nothing. Every <code>delete</code> refuses to run without
  <code>--yes</code>.
</p>

<h2>Install and update</h2>

<pre><code>curl -fsSL https://raw.githubusercontent.com/rust-utility/keycloak-cli/main/install.sh | sh
keycloak-cli self-update --check</code></pre>

<p>
  The installer and <code>keycloak-cli self-update</code> download the binary for
  macOS (arm64/x86_64) or static musl Linux (aarch64/x86_64), verify it against the
  release's <code>SHA256SUMS</code> and replace it atomically. Or
  <code>cargo install keycloak-cli</code>; the crate is on
  <a href="https://crates.io/crates/keycloak-cli">crates.io</a> and its version
  follows the wrapped one (<code>x.y.(z*100+v)</code>, so 26.8.102 wraps Keycloak
  26.8.1 with fix release 2).
</p>

<h2>What went wrong on the way</h2>

<p>
  The first two releases are worth recording. 26.8.101 shipped without a TLS
  backend, because the wrapped crate pulls <code>reqwest</code> in with
  <code>default-features = false</code> and nobody provided one: every
  <code>https://</code> server failed. The bug surfaced while testing
  <code>self-update</code> against GitHub. The fix went into 26.8.102 together with
  a CI check that the TLS feature stays in the dependency tree, and a note on the
  older release pointing at the new one. A broken release cannot be republished
  under the same version — it is superseded, and optionally yanked (the
  trusted-publisher token used for uploads cannot yank, that needs a personal token).
</p>

<p>
  The GitHub Actions side has a similar wart: this organisation never gets macOS
  runners assigned, so the Linux binaries are built by the release workflow while the
  Apple ones are built on a Mac by <code>scripts/release-macos.sh</code>, which also
  writes the checksums. Documented rather than hidden.
</p>

<h2>Where to look</h2>

<p>
  <a href="https://github.com/rust-utility/keycloak-cli">source</a> &middot;
  <a href="https://crates.io/crates/keycloak-cli">crate</a> &middot;
  <a href="https://docs.rs/keycloak-cli">docs</a> &middot;
  <a href="https://github.com/rust-utility/keycloak-cli/blob/main/doc/ROADMAP.md">roadmap</a>
</p>

<p class="links"><a href="/projects/">All projects</a></p>
