---
layout: default
title: "git-site-clone — paste a repository URL and it lands in the right place"
---

<h1>git-site-clone</h1>
<p class="meta">Clone any repository into your own tidy source tree.</p>

<img class="project-image" src="/assets/img/git-site-clone.svg" alt="A repository URL cloned into ~/src/github.com/user/repo">

<p>
  If you keep code in <code>~/src/host/owner/repo</code>, cloning by hand is a small
  ritual every time: mkdir the directories, clone, hope you spelled the owner right.
  This does it in one command.
</p>

<h2>What changes for you</h2>

<ul>
  <li><strong>One command per repository.</strong>
    <code>git-site-clone https://github.com/user/repo</code> ends up in
    <code>&lt;base&gt;/github.com/user/repo</code>.</li>
  <li><strong>Configure it once.</strong> A base directory and per-host mappings, so
    GitHub can live on one disk and your company's GitLab on another.</li>
  <li><strong>The clipboard counts as input.</strong> Copy a URL, run
    <code>git-site-clone</code>, done.</li>
  <li><strong>It tells you where it went</strong> (and can stay put instead of
    changing directory, for scripts).</li>
</ul>

<h2>Getting it</h2>

<pre><code class="language-bash">cargo install git-site-clone</code></pre>

<pre><code class="language-bash">git-site-clone config base ~/src
git-site-clone https://github.com/user/repo.git      # -&gt; ~/src/github.com/user/repo
git-site-clone config mappings add github.com /Volumes/work/github.com
git-site-clone config show</code></pre>

<h2>Where to look</h2>

<p>
  <a href="https://github.com/rust-application/git-site-clone">source</a> &middot;
  <a href="https://crates.io/crates/git-site-clone">crate</a>
</p>

<p class="links"><a href="/projects/">All projects</a></p>
