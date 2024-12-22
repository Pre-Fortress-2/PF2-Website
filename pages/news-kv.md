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
			{%- assign blogtime = post.date | date: "%H:%M:%S" -%}
			{%- assign blogexcerpt = post.excerpt -%}
		{%- endif -%}
	{%- endif -%}
	{%- if gotupdate == false %}
		{%- if post.hidden == false and post.categories contains 'updates' -%}
			{%- assign gotupdate = true -%}
			{%- assign gameversion = post.gameversion -%}
			{%- assign updateurl = post.url | relative_url -%}
			{%- assign updatetitle = post.title -%}
			{%- assign updatedate = post.date | date: "%Y%m%d" -%}
			{%- assign updatetime = post.date | date: "%H:%M:%S" -%}
			{%- assign updateexcerpt = post.excerpt -%}
		{%- endif -%}
	{%- endif -%}
{%- endfor -%}
"news"
{
	"gameversion" 	"{{ gameversion }}"
	"updateurl"		"{{ updateurl }}"
	"updatetitle"	"{{ updatetitle }}"
	"updatedate"	"{{ updatedate }}"
	"updatetime"	"{{ updatetime | remove: ':' }}"
	"updateexcerpt"	"{{ updateexcerpt | remove: '' }}"
	"blogdate"	"{{ blogdate }}"
	"blogtime"	"{{ blogtime | remove: ':' }}"
	"blogurl"	"{{ blogurl }}"
	"blogtitle"	"{{ blogtitle }}"
	"blogauthor"	"{{ blogauthor }}"
	"blogexcerpt"	"{{ blogexcerpt | remove: '
' -}}"
}
</div>
