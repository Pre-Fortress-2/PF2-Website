---
layout: default
title: "About"
subject: "Pre-Fortress 2"
---
<!-- Left Area in PC screens -->
<div class="about-content" style="position:relative;">
    <div class="left-area">
        <!-- About Intro -->
        <p class="text"><strong> Pre-Fortress 2</strong> is a mod for Team Fortress 2 that brings back grenades, armor and much more!<br><br>
        It aims to bridge the gap between Team Fortress installments and the art-style is heavily inspired by the pre-release era of Team Fortress 2! 
        </p>
        <br>
        <!-- Youtube Video -->
        <iframe width="100%" height="330" class="about__video" src="https://www.youtube.com/embed/YAlRsmZ7n-Y" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <!-- Right Area in PC screens -->
    <div class="right-area">
        <!-- Background Image -->
        <img src="./img/joinnow.png" alt="" class="join-container">
        <!-- Button Area -->
        <div class="join-container__btn">
            <a href="{{site.discord-invite}}" target="_blank"><img src="./img/btn_discord.png" alt="" class="discord-img join-img"></a>
            <a href="https://twitter.com/PreFortress2" target="_blank"><img src="./img/btn_twitter.png" alt="" class="twitter-img join-img"></a>
            <a href="https://www.youtube.com/channel/UCiq_1q67x00inzrY4WIQPng" target="_blank"><img src="./img/btn_youtube.png" alt="" class="youtube-img   join-img"></a>
        </div>
    </div>
    {% include latestposts.html %}
</div>
