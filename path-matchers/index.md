---
layout: default
title: "path-matchers — glob and path matching you can combine"
---

<h1>path-matchers</h1>
<p class="meta">A small trait over plain paths and glob expressions.</p>

<p>
  Every tool that watches, ignores or copies files ends up with a matcher: this
  extension is ignored, that directory is included. Writing it again in every
  project is how subtle bugs get in.
</p>

<h2>What changes for you</h2>

<ul>
  <li><strong>One trait, two implementations.</strong> Compare a path to another path
    or to a glob like <code>images/**/best.*</code> through the same interface.</li>
  <li><strong>Composable.</strong> Combine matchers with <code>any</code> and
    <code>all</code> instead of nesting conditions by hand.</li>
  <li><strong>Small dependency</strong>, no build-time surprises.</li>
</ul>

<h2>Getting it</h2>

<pre><code class="language-bash">cargo add path-matchers</code></pre>

<pre><code class="language-rust">use path_matchers::{glob, PathMatcher};

let best_images = glob("images/**/best.*")?;
assert!(best_images.matches(&amp;PathBuf::from("images/small/32x32/best.jpg")));</code></pre>

<h2>Where to look</h2>

<p>
  <a href="https://github.com/rust-utility/path-matchers">source</a> &middot;
  <a href="https://crates.io/crates/path-matchers">crate</a>
</p>

<p class="links"><a href="/projects/">All projects</a></p>
