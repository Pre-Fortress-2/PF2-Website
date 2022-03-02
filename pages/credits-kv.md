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
		{%- if entry.devlead -%}
			<br>
			"devlead"  "1"
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
			"textures"  "1"
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
		{%- if entry.sfm -%}
			<br>
			"sfm"  "1"
		{%- endif -%}
		{%- if entry.server -%}
			<br>
			"server"  "1"
		{%- endif -%}
		{%- if entry.music -%}
			<br>
			"music"  "1"
		{%- endif -%}
		{%- if entry.rig -%}
			<br>
			"rig"  "1"
		{%- endif -%}
		{%- if entry.icon -%}
			<br>
			"icon"  "1"
		{%- endif -%}
		{%- if entry.flex -%}
			<br>
			"flex"  "1"
		{%- endif -%}
		{%- if entry.graphics -%}
			<br>
			"graphics"  "1"
		{%- endif -%}
		{%- if entry.promo -%}
			<br>
			"promo"  "1"
		{%- endif -%}
		{%- if entry.other -%}
			<br>
			"other"
			{
		{%- assign credit = "" -%}
		{%- assign rolecount = 0 -%}
		{%- for help in entry.other.English -%}
			{%- if rolecount > 0 -%}
			{%- assign credit = credit | append: ", " -%}
			{%- endif -%}
			{%- assign credit = credit | append: help -%}
			{%- assign rolecount = rolecount | plus:1 -%}
		{%- endfor -%}
				<br>
				"English"	"{{ credit }}"
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