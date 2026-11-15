---
layout: default
title: Projects
---

<h1>Projects</h1>

<p>
  I build things when an existing tool either does not exist or does not survive
  contact with a real system. This page collects the ones worth finding again,
  grouped by what they are for, with the reason each one exists.
</p>

{% assign groups = site.data.projects | group_by: "group" %}
{% for group in groups %}
  <h2>{{ group.name }}</h2>
  {% for project in group.items %}
  <section class="project">
    <h3>
      {% if project.page %}<a href="{{ project.page | relative_url }}">{{ project.name }}</a>
      {% else %}<a href="{{ project.repo }}">{{ project.name }}</a>{% endif %}
      <span class="status">{{ project.status }}</span>
    </h3>
    <p class="tagline">{{ project.tagline }}</p>
    <p>{{ project.why }}</p>
    <p class="audience">For {{ project.audience }}</p>
    <p class="links">
      <a href="{{ project.repo }}">source</a>
      {% if project.crate %}&middot; <a href="{{ project.crate }}">crate</a>{% endif %}
      {% if project.page %}&middot; <a href="{{ project.page | relative_url }}">notes</a>{% endif %}
    </p>
    {% if project.install %}
    <pre><code>{{ project.install }}</code></pre>
    {% endif %}
  </section>
  {% endfor %}
{% endfor %}
