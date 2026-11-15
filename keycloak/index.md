---
layout: default
title: "keycloak — the Keycloak admin API as typed Rust"
---

<h1>keycloak</h1>
<p class="meta">A Rust client for the Keycloak Admin REST API, regenerated for every release.</p>

<p>
  Keycloak publishes its admin API as one big OpenAPI document, and it moves with
  every Keycloak release. A hand-written client is behind the day it is written. So
  this one is generated, in lockstep: the crate version matches the Keycloak release
  it speaks to.
</p>

<h2>What changes for you</h2>

<ul>
  <li><strong>No stringly-typed URLs.</strong> All 415 operations are methods with
    typed bodies and parameters, named after the API's own resources.</li>
  <li><strong>You only pay for what you use.</strong> Each resource group is a
    feature (<code>tag-users</code>, <code>tag-clients</code>, …). Default builds
    enable all of them; a small service can enable three and compile the rest
    away.</li>
  <li><strong>Types, not JSON blobs.</strong> Requests and responses are the schemas
    from the description, with <code>Option</code> for what the API treats as
    optional.</li>
  <li><strong>Optional extras.</strong> A resource builder for fluent calls,
    <code>schemars</code> support for JSON Schema, and <code>Arc</code>-based types
    (<code>rc</code>) when sharing representations matters.</li>
</ul>

<h2>Getting it</h2>

<pre><code>cargo add keycloak</code></pre>

<p>Then acquire an admin token and call the API:</p>

<pre><code>let token = KeycloakAdminToken::acquire(&amp;url, &amp;user, &amp;password, &amp;client).await?;
let admin = KeycloakAdmin::new(&amp;url, token, client);
let clients = admin.realm_clients_get("master", None, Some(0), Some(10), None, None, None).await?;</code></pre>

<p>Turning features off keeps a build lean:</p>

<pre><code>keycloak = { version = "26.8.100", default-features = false, features = ["reqwest", "tag-users", "tag-clients"] }</code></pre>

<h2>Where to look</h2>

<p>
  <a href="https://github.com/kilork/keycloak">source</a> &middot;
  <a href="https://crates.io/crates/keycloak">crate</a> &middot;
  <a href="https://docs.rs/keycloak">docs</a>
</p>

<p class="links"><a href="/projects/">All projects</a></p>
