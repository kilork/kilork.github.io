---
layout: default
title: "handlebars-magic — one folder of templates, one rendered folder"
---

<h1>handlebars-magic</h1>
<p class="meta">Generate files from handlebars templates, without a build system.</p>

<p>
  Some things are easier to generate than to maintain: a page per service, a table
  per environment, a config per customer. This takes a directory of handlebars
  templates and writes the rendered counterpart of every file.
</p>

<h2>What changes for you</h2>

<ul>
  <li><strong>One source, many outputs.</strong> Documentation, reports and configs
    come from the same templates and the same data.</li>
  <li><strong>Predictable mapping.</strong> Each template in the input directory
    produces the file of the same name in the output directory.</li>
  <li><strong>Handlebar helpers included</strong>, so the usual formatting and loops
    work out of the box.</li>
  <li><strong>No project setup.</strong> Two paths on the command line; put it in a
    Makefile or CI step if you want.</li>
</ul>

<h2>Getting it</h2>

<pre><code class="language-bash">cargo install handlebars-magic
handlebars-magic templates .      # render templates/ into the current directory</code></pre>

<p>
  This very site's documentation is generated that way: the templates live next to
  the project and the output is what you are reading.
</p>

<h2>Where to look</h2>

<p>
  <a href="https://github.com/rust-utility/handlebars-magic">source</a> &middot;
  <a href="https://crates.io/crates/handlebars-magic">crate</a>
</p>

<p class="links"><a href="/projects/">All projects</a></p>
