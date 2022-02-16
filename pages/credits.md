---
layout: default
title: "Credits"
permalink: "/credits/"
subject: "Credits"
---
{% assign member = site.data.credits %}
{% assign i = 0 %}

<div class="credits-container">
    {% for i in (0..4) %}
        {% if i == 0 %}
            <h2>Developers</h2>
            {% assign group = member.developers %}
        {% elsif i == 1 %}
            <h2>Contributors</h2>
            {% assign group = member.contributors %}
        {% elsif i == 2 %}
            <h2>Playtesters</h2>
            {% assign group = member.playtesters %}
        {% elsif i == 3 %}
            <h2>Special Thanks</h2>
            {% assign group = member.special %}
        {% elsif i == 4 %}
            <h2>Software</h2>
            {% assign group = member.software %}
        {% endif %}
        <hr>
        <ul>
        {% for entry in group %}
            <li>
                {% assign rolecount = 0 %}
                {% assign credit = entry.name %}

                {% if entry.lead == true %}
                     {% assign credit = credit | append: " - Lead" %}
                    {% assign rolecount = rolecount | plus:1 %}
                {% endif %}

                {% if entry.code == true %}
                    {% if rolecount > 0 %}
                    {% assign credit = credit | append: ", " %}
                    {% else %}
                    {% assign credit = credit | append: " - " %}
                    {% endif %}

                    {% assign credit = credit | append: "Code" %}
                    {% assign rolecount = rolecount | plus:1 %}
                {% endif %}

                {% if entry.models == true %}
                    {% if rolecount > 0 %}
                    {% assign credit = credit | append: ", " %}
                    {% else %}
                    {% assign credit = credit | append: " - " %}
                    {% endif %}

                    {% assign credit = credit | append: "Models" %}
                    {% assign rolecount = rolecount | plus:1 %}
                {% endif %}

                {% if entry.sounds == true %}
                    {% if rolecount > 0 %}
                    {% assign credit = credit | append: ", " %}
                    {% else %}
                    {% assign credit = credit | append: " - " %}
                    {% endif %}

                    {% assign credit = credit | append: "Sounds" %}
                    {% assign rolecount = rolecount | plus:1 %}
                {% endif %}

                {% if entry.textures == true %}
                    {% if rolecount > 0 %}
                    {% assign credit = credit | append: ", " %}
                    {% else %}
                    {% assign credit = credit | append: " - " %}
                    {% endif %}

                    {% assign credit = credit | append: "Textures" %}
                    {% assign rolecount = rolecount | plus:1 %}
                {% endif %}

                {% if entry.animation == true %}
                    {% if rolecount > 0 %}
                    {% assign credit = credit | append: ", " %}
                    {% else %}
                    {% assign credit = credit | append: " - " %}
                    {% endif %}

                    {% assign credit = credit | append: "Animations" %}
                    {% assign rolecount = rolecount | plus:1 %}
                {% endif %}

                {% if entry.particles == true %}
                    {% if rolecount > 0 %}
                    {% assign credit = credit | append: ", " %}
                    {% else %}
                    {% assign credit = credit | append: " - " %}
                    {% endif %}

                    {% assign credit = credit | append: "Particles" %}
                    {% assign rolecount = rolecount | plus:1 %}
                {% endif %}

                {% if entry.mapper == true %}
                    {% if rolecount > 0 %}
                    {% assign credit = credit | append: ", " %}
                    {% else %}
                    {% assign credit = credit | append: " - " %}
                    {% endif %}

                    {% assign credit = credit | append: "Mapping" %}
                    {% assign rolecount = rolecount | plus:1 %}
                {% endif %}

                {% if entry.tester == true %}
                    {% if rolecount > 0 %}
                    {% assign credit = credit | append: ", " %}
                    {% else %}
                    {% assign credit = credit | append: " - " %}
                    {% endif %}

                    {% assign credit = credit | append: "Tester" %}
                    {% assign rolecount = rolecount | plus:1 %}
                {% endif %}

                {% if entry.concepts == true %}
                    {% if rolecount > 0 %}
                    {% assign credit = credit | append: ", " %}
                    {% else %}
                    {% assign credit = credit | append: " - " %}
                    {% endif %}

                    {% assign credit = credit | append: "Concepts" %}
                    {% assign rolecount = rolecount | plus:1 %}
                {% endif %}

                {% if entry.other %}
                    {% if rolecount > 0 %}
                    {% assign credit = credit | append: ", " %}
                    {% else %}
                    {% assign credit = credit | append: " - " %}
                    {% endif %}

                    {% assign credit = credit | append: entry.other.English %}
                    {% assign rolecount = rolecount | plus:1 %}
                {% endif %}

                {% if entry.localization %}
                    {% for lang in entry.localization %}
                        {% if rolecount > 0 %}
                        {% assign credit = credit | append: ", " %}
                        {% else %}
                        {% assign credit = credit | append: " - " %}
                        {% endif %}

                        {% assign credit = credit | append: lang | append: " localization" %}
                        {% assign rolecount = rolecount | plus:1 %}
                    {% endfor %}
                {% endif %}

                {{ credit }}
            </li>
        {% endfor %}
        </ul>
    {% endfor %}
</div>