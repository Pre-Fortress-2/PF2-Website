---
layout: blog
subject: "Updates"
title: "0.7 - Grenades"
date:   2022-11-18 17:12:00 -0500
categories: updates
tags: no_show_rss
hidden: true
NoFeatureImage: true
permalink: /:categories/0.7/grenades
author: PF2 Team
draft: true
sitemap: false
---

Over the last year, the PF2 Team has worked on improving the overall feel of the grenades. Functionality-wise, the grenades have remained the same, but a few key changes have been made in our desire to make them feel better to use.

# Viewmodel Animations
---
Every grenade has Prime, Idle, and Throw animations:

{% include video.html video="grenade-throws.mp4" text="" blog=1 %}

None of the animations are final.

We've been wanting to add grenade animations for a long time. We felt that they were essential for making the grenades feel better to use.

# Projectiles
---
If you’ve played Pre-Fortress 2 before, you may have noticed that grenades can be a bit unpredictable in how they bounce off surfaces. In earlier versions, it was even worse, as the grenades lacked customized physics properties which made them slide and roll more often. This was especially noticeable when attempting to set up a concussion grenade jump as the grenade would bounce and roll away.

{% include video.html video='throw-comparison.mp4' text="Left is with the old physics. Right is with the new physics" loop=1 blog=1 %}

We've decided this was a problem that needed to be solved, as we felt that the unpredictability in how they bounced and rolled around was hampering their usability. In Team Fortress Classic and QuakeWorld Team Fortress, grenade interactions with the world were not subject to the calculations of a complex physics engine, instead they would bounce off surfaces simply but predictably. So we've decided to change the grenades to interact and bounce off surfaces the same way they did in prior games.

There was some initial resistance and push back to this change among playtesters, due to how jarring it looks compared to the old physics. Despite this, the change did end up being well received in play testing.

# Timer HUD
---
As you probably saw in the video above, there’s now a circular timer that displays around your crosshair when you prime a grenade. It’s inspired by Fortress Forever’s timer. The intent with this addition is to concisely display the detonation time and number of active grenades. We’ve tried to keep it minimal so it can be front and center on your screen.

<!--Need this to be formatted differently to other videos-->
<video playsinline preload='auto' preload="metadata" style="width:180px;height:180px;margin-left:auto;margin-right:auto;display:block" muted loop autoplay >
    <source src="/assets/blog/{{ page.slug }}/grenade-timer.mp4#t=0.001" type="video/mp4" />
</video>

# Defusing
---
One of the playtesters brought forward the idea of defusing grenades, the justification being that this was to help reduce spam. Of course this was a problem we wanted to reduce, and at that time there wasn't any way to punish lazy or poorly timed grenade throws. The initial idea was to defuse grenades by shooting them. This was never actually tested, as shooting a grenade proved surprisingly difficult and it was quickly agreed that shooting to defuse would be done unintentionally and at random. Then the idea had was to have them only be defused with the use of melee weapons, similar to TF2Classic's Dynamite Pack being defusable with the Engineer's Wrench. This worked pretty well, as defusing a grenade was simple, could only be done deliberately and didn't require the precision that shooting it did.

{% include video.html video='grenade-defuse.mp4' loop=1 blog=1 %}

# The Gas Grenade
---
This has been one of those things where strictly sticking to beta accuracy has been beneficial. If you’ve ever played Team Fortress Classic, you know the hallucination effect is underwhelming. Implementing a hallucination effect like TFC’s is possible, but it's something we've ultimately decided against. If the hallucination effect were to be made convincing, it would be an extreme nuisance, but if it was left as unconvincing it would be about as useful as the gas grenade previously was. Currently, in its radius, you lose health and have “drunk vision” applied to you in increasing severity. While standing in it, you’ll also have your armor quickly melted away. The effect will eventually subside, outside of the radius.

{% include video.html video='gas-grenade.mp4' loop=1 blog=1 %}

Our hopes with this implementation is for it to be a light area denial grenade. It’s not likely to kill you, but it’s gonna start sapping away your first line of protection, making you pretty vulnerable.