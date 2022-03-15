---
layout: blog
title: "Updates"
subject:  "Update 0.7 - Grenades"
date:   2022-02-01 00:00:00 +1100
categories: updates
author: Cyanide
hidden: true
NoFeatureImage: true
permalink: /:categories/codename-pizza/grenades 
---

Over the last year the team and I have worked on improving overall feel and completeness of the grenades. Functionality-wise, the grenades have remained the same, but a few key changes have been made in our desire to make them feel as good to use as possible.

# View models

Every grenade at this point has a prime, hold and throw view model animation, took us a few years but we did get there in the end. 

<blockquote>More information about their creation and decisions about them</blockquote>

None of the animations are final.

{% include video.html video="grenade-throws.mp4" text="" blog=1 %}

# Projectiles

If you've played the mod you know grenades can be *little* unpredictable in how they bounce off the world. In the early days of the mod things were even worse as the grenade's lacked customized physics properties which made them slide and roll around a lot. This was especially noticeable when attempting to set up a conc jump as the grenade would roll away.

At some point I decided this was a problem I wanted to solve as I felt that the unpredictability in how they bounced and rolled around was hampering their usability. In TFC and QWTF grenade's interactions with the world are not subject to the calculations of a complex physics engine, instead they would bounce off surfaces simply but predictably. So I decided to change the grenades to interact and bounce off the world the same way they did in prior games.

{% include video.html video='throw-comparison.mp4' text="Left is with the old physics. Right is with the new physics" loop=1 blog=1 %}

There was of course some initial resistance and push back to this change, part of that was probably how I had initially presented the idea, as it was extremely incomplete and didn't look great _immersion-wise_. Despite this, the change did end up being well received in play testing.

# Timer HUD

As you probably saw in the video above, there's now a circular timer that displays around your crosshair when you prime a grenade. It's inspired by, and was specifically requested because of, Fortress Forever's timer. The intent with this addition is to concisely and conveniently display the detonation time and number of active grenades. I've tried to keep it minimal so it can be front and center on your screen and not tucked away on the sides.

<!--Need this to be formatted differently to other videos-->
<video playsinline preload='auto' preload="metadata" style="width:180px;height:180px;margin-left:auto;margin-right:auto;display:block" muted loop autoplay >
    <source src="/assets/blog/{{ page.slug }}/grenade-timer.mp4#t=0.001" type="video/mp4" />
</video>

# Defusing

One of the play testers brought forward the idea of defusing grenades, the justification for this was to help reduce spam. Of course this was problem we wanted to reduce, and at that time there wasn't anyway to punish lazy or poorly timed grenade throws. The initial idea was to defuse by shooting, this was never actually tested as shooting a grenade proved surprisingly difficult and it was quickly agreed that shooting to defuse would be done unintentionally and at random. Then the idea had was to have them only be defused with the use of melee weapons, similar to TF2Classic's mirv being defusable with the wrench. This worked pretty well as defusing a grenade was simple, could only be done deliberately and didn't require the precision that shooting it did.

{% include video.html video='grenade-defuse.mp4' loop=1 blog=1 %}

# The Gas Grenade

This has been one of those things were strictly sticking to beta accuracy or TFC has been beneficial. If you've ever played TFC you know the hallucination effect is underwhelming and not very convincing whilst also being a bit annoying. Implementing a hallucination effect like TFC's is possible, but it's something I've been strongly apposed to. If the hallucinations were to be made convincing it would be an extreme nuisance, but if it was left as unconvincing it would be about as useful as the gas grenade previously was. Right now the grenades' functionality is quite simple, whilst in its area of effect you lose health and you have "drunk vision" applied to you in increasing severity. While standing in it you'll also have your armor quickly melted away. 

{% include video.html video='gas-grenade.mp4' loop=1 blog=1 %}

My hopes with this implementation is for it to be more of a lite area denial grenade, it's not likely to kill you, but it's gonna start sapping away your first line of protection making you pretty vulnerable. 