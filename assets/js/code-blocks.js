// Syntax highlighting and a copy button for every code block.
//
// highlight.js is vendored in assets/js/highlight.min.js (v11.11.1, BSD-3) and the
// theme in assets/css/highlight-github-dark.css, so the site makes no third-party
// requests. Blocks are written as <figure class="code"><pre><code class="language-…">;
// anything without a language is shown as plain text rather than guessed, because
// auto-detection is confidently wrong on two-line commands.
document.addEventListener('DOMContentLoaded', function () {
  if (window.hljs) {
    document.querySelectorAll('pre code').forEach(function (block) {
      if (!block.className || block.className.indexOf('language-') === -1) {
        block.className = 'language-plaintext';
      }
      window.hljs.highlightElement(block);
    });
  }

  document.querySelectorAll('.code').forEach(function (figure) {
    var code = figure.querySelector('pre code');
    if (!code) {
      return;
    }
    var button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy';
    button.textContent = 'copy';
    button.setAttribute('aria-label', 'Copy code');
    button.addEventListener('click', function () {
      copyText(code.innerText).then(function (copied) {
        button.textContent = copied ? 'copied' : 'failed';
        button.classList.toggle('copied', copied);
        window.setTimeout(function () {
          button.textContent = 'copy';
          button.classList.remove('copied');
        }, 1500);
      });
    });
    figure.appendChild(button);
  });
});

// Clipboard API where available, a hidden textarea otherwise (http, old browsers).
function copyText(text) {
  if (navigator.clipboard && window.isSecureContext) {
    return navigator.clipboard.writeText(text).then(
      function () {
        return true;
      },
      function () {
        return false;
      }
    );
  }
  var area = document.createElement('textarea');
  area.value = text;
  area.style.position = 'fixed';
  area.style.top = '-1000px';
  document.body.appendChild(area);
  area.select();
  var copied = false;
  try {
    copied = document.execCommand('copy');
  } catch (error) {
    copied = false;
  }
  document.body.removeChild(area);
  return Promise.resolve(copied);
}
