---
layout: default
title: "change-detection — rebuild only when your inputs changed"
---

<h1>change-detection</h1>
<p class="meta">Build-script change detection without the boilerplate.</p>

<p>
  A build script that generates code from static inputs has one job: tell Cargo when
  to run it again. Get it wrong in one direction and builds are stale; get it wrong
  in the other and every build redoes the work.
</p>

<h2>What changes for you</h2>

<ul>
  <li><strong>Correct rerun instructions</strong> for directories and files, printed
    from one call in <code>build.rs</code>.</li>
  <li><strong>Hashing instead of timestamps</strong>, so a touched-but-unchanged file
    does not trigger a rebuild.</li>
  <li><strong>Less code in build scripts</strong> that all projects otherwise
    repeat.</li>
</ul>

<h2>Getting it</h2>

<figure class="code"><pre><code class="language-bash">cargo add --build change-detection</code></pre></figure>

<figure class="code" data-file="build.rs"><pre><code class="language-rust">use change_detection::ChangeDetection;

fn main() {
    ChangeDetection::path("templates").generate();
}</code></pre></figure>

<h2>Where to look</h2>

<p>
  <a href="https://github.com/rust-utility/change-detection">source</a> &middot;
  <a href="https://crates.io/crates/change-detection">crate</a>
</p>

<p class="links"><a href="/projects/">All projects</a></p>
