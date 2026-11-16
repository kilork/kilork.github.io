// Syntax highlighting for every code block.
//
// highlight.js is vendored in assets/js/highlight.min.js (v11.11.1, BSD-3) and the
// theme in assets/css/highlight-github-dark.css, so the site makes no third-party
// requests. Blocks are written as <pre><code class="language-…"> in the pages;
// anything without a language is shown as plain text rather than guessed, because
// auto-detection is confidently wrong on two-line commands.
document.addEventListener('DOMContentLoaded', function () {
  if (!window.hljs) {
    return;
  }
  document.querySelectorAll('pre code').forEach(function (block) {
    if (!block.className || block.className.indexOf('language-') === -1) {
      block.className = 'language-plaintext';
    }
    window.hljs.highlightElement(block);
  });
});
