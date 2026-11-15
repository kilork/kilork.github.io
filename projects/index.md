---
layout: default
title: Projects
---

<h1>Projects</h1>

<img class="project-image" src="/assets/img/projects-hero.svg" alt="A terminal running keycloak-cli report, with a bar chart of users and events">

<p>
  Things I built because the existing tool either did not exist or did not survive
  contact with a real system. Each one says what changes for you if you use it,
  not what it contains. If a page is linked, it has a longer note.
</p>

{% assign groups = site.data.projects | group_by: "group" %}
{% for group in groups %}
  <h2>{{ group.name }}</h2>
  {% for project in group.items %}
  <section class="project">
    <h3>
      {% if project.page %}<a href="{{ project.page | relative_url }}">{{ project.name }}</a>
      {% else %}<a href="{{ project.repo }}">{{ project.name }}</a>{% endif %}
    </h3>
    <p class="tagline">{{ project.tagline }}</p>
    <p>{{ project.benefit }}</p>
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
