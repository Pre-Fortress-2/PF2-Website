---
layout: txt
permalink: "/news.txt"
---
<div>
{%- assign gotblog = false -%}
{%- assign gotupdate = false -%}
{%- for post in site.posts -%}
	{%- if gotblog == false %}
		{%- if post.hidden == false and post.categories contains 'blog' -%}
			{%- assign gotblog = true -%}
			{%- assign blogurl = post.url | relative_url -%}
			{%- assign blogtitle = post.title -%}
			{%- assign blogauthor = post.author -%}
			{%- assign blogdate = post.date | date: "%Y%m%d" -%}
			{%- assign blogexcerpt = post.excerpt -%}
		{%- endif -%}
	{%- endif -%}
	{%- if gotupdate == false %}
		{%- if post.hidden == false and post.categories contains 'updates' -%}
			{%- assign gotupdate = true -%}
			{%- assign updateurl = post.url | relative_url -%}
			{%- assign updatetitle = post.title -%}
			{%- assign updateexcerpt = post.excerpt -%}
		{%- endif -%}
	{%- endif -%}
{%- endfor -%}
"news"
{
	"gamestate"	"{{ site.game-state }}"
	"version"	"{{ site.game-version }}"
	"patch"		"{{ site.game-patch }}"
	"updateurl"	"{{ updateurl }}"
	"updatetitle"	"{{ updatetitle }}"
	"updateexcerpt"	"{{ updateexcerpt | remove: '' }}"
	"blogdate"	"{{ blogdate }}"
	"blogurl"	"{{ blogurl }}"
	"blogtitle"	"{{ blogtitle }}"
	"blogauthor"	"{{ blogauthor }}"
	"blogexcerpt"	"{{ blogexcerpt | remove: '
' -}}"
}
</div>