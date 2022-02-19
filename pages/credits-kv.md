---
layout: txt
permalink: "/credits.txt"
---
<div>
{%-  assign member = site.data.credits -%}
{%-  assign i = 0 -%}
<h1>"credits"</h1>
{
    {%-  for i in (0..4) -%}
    <br>
    <br>
        {%-  if i == 0 -%}
    <h1>"developers"</h1>
            {%-  assign group = member.developers -%}
        {%-  elsif i == 1 -%}
    <h1>"contributors"</h1>
            {%-  assign group = member.contributors -%}
        {%-  elsif i == 2 -%}
    <h1>"playtesters"</h1>
            {%-  assign group = member.playtesters -%}
        {%-  elsif i == 3 -%}
    <h1>"special"</h1>
            {%-  assign group = member.special -%}
        {%-  elsif i == 4 -%}
    <h1>"software"</h1>
            {%-  assign group = member.software -%}
        {%-  endif -%}

    <br>
    {
    {%- for entry in group -%}
        <br>
        <p>"{{- entry.name -}}"</p>
        {
        {%- if entry.lead -%}
            <br>
            "lead"  "{{- entry.lead -}}"
        {%- endif -%}
        {%- if entry.code -%}
            <br>
            "code"  "{{- entry.code -}}"
        {%- endif -%}
        {%- if entry.models == true -%}
            <br>
            "models"  "{{- entry.models -}}"
        {%- endif -%}
        {%- if entry.sounds -%}
            <br>
            "sounds"  "{{- entry.sounds -}}"
        {%- endif -%}
        {%- if entry.textures -%}
            <br>
            "textures"  "{{- entry.textures -}}"
        {%- endif -%}
        {%- if entry.animation -%}
            <br>
            "animation" "{{- entry.animation -}}"
        {%- endif -%}
        {%- if entry.particles -%}
            <br>
            "particles" "{{- entry.particles -}}"
        {%- endif -%}
        {%- if entry.mapper -%}
            <br>
            "mapper"    "{{- entry.mapper -}}"
        {%- endif -%}
        {%- if entry.tester -%}
            <br>
            "tester"    "{{- entry.tester -}}"
        {%- endif -%}
        {%- if entry.concepts -%}
            <br>
            "concepts"  "{{- entry.concepts -}}"
        {%- endif -%}
        {%- if entry.other -%}
            <br>
            "other"
            {
                "English"  "{{- entry.other.English -}}"
            }
        {%- endif -%}
        {%- if entry.localization -%}
            <br>
            "localization"
            {
                {%- for lang in entry.localization -%}
                <br>
                "{{- lang -}}"  "true"
                {%- endfor -%}
                <br>
            }
        {%- endif -%}
        <br>
        }
        
    {%- endfor -%}
    <br>
    }
    {%- endfor -%}
<br>
}
</div>