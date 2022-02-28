---
layout: default
title: "Credits"
permalink: "/credits/"
subject: "Credits for Pre-Fortress 2"
---
{% assign member = site.data.credits %}
{% assign i = 0 %}

<div class="credits-container">
    {% for i in (0..4) %}
        {% if i == 0 %}
            <h1>Developers</h1>
            {% assign group = member.developers %}
        {% elsif i == 1 %}
            <h1>Contributors</h1>
            {% assign group = member.contributors %}
        {% elsif i == 2 %}
            <h1>Playtesters</h1>
            {% assign group = member.playtesters %}
        {% elsif i == 3 %}
            <h1>Special Thanks</h1>
            {% assign group = member.special %}
        {% elsif i == 4 %}
            <h1>Software</h1>
            {% assign group = member.software %}
        {% endif %}
        <hr>
        <ul>
        {% for entry in group %}
            <li>
                {% assign rolecount = 0 %}
                {% assign credit = entry.name %}

                {% if entry.lead == true %}
                     {% assign credit = credit | append: " - Project Lead" %}
                    {% assign rolecount = rolecount | plus:1 %}
                {% endif %}

                {% if entry.devlead == true %}
                    {% if rolecount > 0 %}
                    {% assign credit = credit | append: ", " %}
                    {% else %}
                    {% assign credit = credit | append: " - " %}
                    {% endif %}

                    {% assign credit = credit | append: "Lead Developer" %}
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


                {% if entry.concepts == true %}
                    {% if rolecount > 0 %}
                    {% assign credit = credit | append: ", " %}
                    {% else %}
                    {% assign credit = credit | append: " - " %}
                    {% endif %}

                    {% assign credit = credit | append: "Concepts" %}
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

                {% if entry.sfm == true %}
                    {% if rolecount > 0 %}
                    {% assign credit = credit | append: ", " %}
                    {% else %}
                    {% assign credit = credit | append: " - " %}
                    {% endif %}

                    {% assign credit = credit | append: "SFM Artist" %}
                    {% assign rolecount = rolecount | plus:1 %}
                {% endif %}

                {% if entry.server == true %}
                    {% if rolecount > 0 %}
                    {% assign credit = credit | append: ", " %}
                    {% else %}
                    {% assign credit = credit | append: " - " %}
                    {% endif %}

                    {% assign credit = credit | append: "Server hosting" %}
                    {% assign rolecount = rolecount | plus:1 %}
                {% endif %}
                
                {% if entry.music == true %}
                    {% if rolecount > 0 %}
                    {% assign credit = credit | append: ", " %}
                    {% else %}
                    {% assign credit = credit | append: " - " %}
                    {% endif %}

                    {% assign credit = credit | append: "Musician" %}
                    {% assign rolecount = rolecount | plus:1 %}
                {% endif %}

                {% if entry.rig == true %}
                    {% if rolecount > 0 %}
                    {% assign credit = credit | append: ", " %}
                    {% else %}
                    {% assign credit = credit | append: " - " %}
                    {% endif %}

                    {% assign credit = credit | append: "Rigging" %}
                    {% assign rolecount = rolecount | plus:1 %}
                {% endif %}

                {% if entry.icon == true %}
                    {% if rolecount > 0 %}
                    {% assign credit = credit | append: ", " %}
                    {% else %}
                    {% assign credit = credit | append: " - " %}
                    {% endif %}

                    {% assign credit = credit | append: "Icons" %}
                    {% assign rolecount = rolecount | plus:1 %}
                {% endif %}

                {% if entry.flex == true %}
                    {% if rolecount > 0 %}
                    {% assign credit = credit | append: ", " %}
                    {% else %}
                    {% assign credit = credit | append: " - " %}
                    {% endif %}

                    {% assign credit = credit | append: "Flexes" %}
                    {% assign rolecount = rolecount | plus:1 %}
                {% endif %}

                {% if entry.graphics == true %}
                    {% if rolecount > 0 %}
                    {% assign credit = credit | append: ", " %}
                    {% else %}
                    {% assign credit = credit | append: " - " %}
                    {% endif %}

                    {% assign credit = credit | append: "Graphic Design" %}
                    {% assign rolecount = rolecount | plus:1 %}
                {% endif %}

                {% if entry.promo == true %}
                    {% if rolecount > 0 %}
                    {% assign credit = credit | append: ", " %}
                    {% else %}
                    {% assign credit = credit | append: " - " %}
                    {% endif %}

                    {% assign credit = credit | append: "Promotion" %}
                    {% assign rolecount = rolecount | plus:1 %}
                {% endif %}
                
                {% if entry.other %}
                    {% for help in entry.other.English %}
                        {% if rolecount > 0 %}
                        {% assign credit = credit | append: ", " %}
                        {% else %}
                        {% assign credit = credit | append: " - " %}
                        {% endif %}

                        {% assign credit = credit | append: help %}
                        {% assign rolecount = rolecount | plus:1 %}
                    {% endfor %}
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

                {{ credit }}
            </li>
        {% endfor %}
        </ul>
    {% endfor %}
</div>