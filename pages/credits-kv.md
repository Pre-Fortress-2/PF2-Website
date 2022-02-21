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
			"lead"  "1"
		{%- endif -%}
		{%- if entry.code -%}
			<br>
			"code"  "1"
		{%- endif -%}
		{%- if entry.models == true -%}
			<br>
			"models"  "1"
		{%- endif -%}
		{%- if entry.sounds -%}
			<br>
			"sounds"  "1"
		{%- endif -%}
		{%- if entry.textures -%}
			<br>
			"textures"  "1}"
		{%- endif -%}
		{%- if entry.animation -%}
			<br>
			"animation" "1"
		{%- endif -%}
		{%- if entry.particles -%}
			<br>
			"particles" "1"
		{%- endif -%}
		{%- if entry.mapper -%}
			<br>
			"mapper"    "1"
		{%- endif -%}
		{%- if entry.tester -%}
			<br>
			"tester"    "1"
		{%- endif -%}
		{%- if entry.concepts -%}
			<br>
			"concepts"  "1"
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
				"{{- lang -}}"  "1"
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