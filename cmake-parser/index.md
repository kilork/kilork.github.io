---
layout: default
title: "cmake-parser — read CMakeLists.txt as data"
---

<h1>cmake-parser</h1>
<p class="meta">A Rust parser for CMake files (language 3.26).</p>

<p>
  A lot of the C and C++ world describes itself in CMake. If a tool needs to know
  what a project builds — targets, sources, flags — the honest way is to parse those
  files rather than pattern-match them.
</p>

<h2>What changes for you</h2>

<ul>
  <li><strong>Commands and arguments as structures</strong>, with positions and
    errors, instead of a wall of text.</li>
  <li><strong>The documented language</strong> (3.26) rather than one project's
    habits.</li>
  <li><strong>Usable in generators and linters</strong>: inspect a build, migrate a
    setting, answer "which targets exist".</li>
</ul>

<h2>Getting it</h2>

<pre><code class="language-bash">cargo add cmake-parser</code></pre>

<pre><code class="language-rust">use cmake_parser::parse_cmakelists;

for command in parse_cmakelists(text)? {
    // command.name, command.arguments, ...
}</code></pre>

<h2>Where to look</h2>

<p>
  <a href="https://github.com/rust-utility/cmake-parser">source</a> &middot;
  <a href="https://crates.io/crates/cmake-parser">crate</a>
</p>

<p class="links"><a href="/projects/">All projects</a></p>
