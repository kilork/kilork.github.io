---
layout: default
title: "rust-libxml — libxml2 with Rust's ownership"
---

<h1>rust-libxml</h1>
<p class="meta">A Rust wrapper around libxml2.</p>

<p>
  Sometimes "use libxml2" is not laziness, it is the requirement: the documents were
  written against its parser, its XPath or its recovery behaviour. This wraps it
  instead of hiding it.
</p>

<h2>What changes for you</h2>

<ul>
  <li><strong>Same parsing, Rust memory handling.</strong> Nodes and documents are
    freed when they go out of scope; no manual <code>xmlFree</code> bookkeeping.</li>
  <li><strong>Mutation made explicit.</strong> Interior mutability is wrapped so the
    borrow rules apply to libxml2 objects too.</li>
  <li><strong>Honest about coverage.</strong> It wraps a subset of libxml2 and says
    so, rather than pretending to be complete.</li>
</ul>

<h2>Getting it</h2>

<p>
  The crate is <code>libxml</code> on crates.io; this repository is the maintainer's
  working tree.
</p>

<figure class="code"><pre><code class="language-bash">cargo add libxml</code></pre></figure>

<figure class="code"><pre><code class="language-rust">use libxml::parser::Parser;

let document = Parser::default().parse_string("&lt;root&gt;&lt;child/&gt;&lt;/root&gt;")?;
for node in document.child_nodes() {
    println!("{}", node.get_name());
}</code></pre></figure>

<h2>Where to look</h2>

<p>
  <a href="https://github.com/kilork/rust-libxml">source</a> &middot;
  <a href="https://crates.io/crates/libxml">crate</a>
</p>

<p class="links"><a href="/projects/">All projects</a></p>
