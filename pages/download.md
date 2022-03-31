---
layout: installation
title: "Download"
permalink: "/download/"
subject: "Download Pre-Fortress 2"
---

{% include installer.html %}
<script>
if( !navigator.platform.includes("Win") )
{
    var items = document.getElementsByClassName("windows_only");
    for (var i = 0; i < items.length; i++) {
       items[i].style.display = "none";
    }
    items = document.getElementsByClassName("everyone_else");
    for (var i = 0; i < items.length; i++) {
       items[i].style.display = "block";
    }
}
</script>