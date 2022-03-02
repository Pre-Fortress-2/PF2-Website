---
layout: blog
title: "Blog"
subject:  "What we've been working on"
date:   2022-02-14 00:12:00 +1100
categories: drafts
permalink: /:categories/:slug-:year:month
description: "lorem ipsum"
author: Cyanide
image: /assets/blog/images/sb-work.png
permalink: /:categories/:slug
NoImageEffect: 0
---

It's been a while since the last post, my apologies. Despite certain *plumbing related issues* we've been working diligently away at the mod over the last year.

<blockquote>More information about last year</blockquote>

# Grenades

Over the last year we've worked on getting the grenades to feel more complete and consistent to use. Their core functionalities have remained mostly intact, but some of their more random and unpredictable behaviors have been removed and altered.

## Viewmodels

Every grenade at this point has a prime, hold and throw view model animation, took us a few years but we did get there in the end. 

<blockquote>More information about their creation and decisions about them</blockquote>

None of the animations are final.

{% include video.html video="grenade-throws.mp4" text="" blog=1 %}

## Projectiles

If you've played the mod you know grenades can be *little* unpredictable in how they bounce off the world. In the early days of the mod things were even worse as the grenade's lacked customized physics properties which made them slide and roll around a lot. This was especially noticeable when attempting to set up a conc jump as the grenade would roll away.

In TFC and QWTF grenade's interactions with the world are not subject to the calculations of a complex physics engine, instead they would bounce off surfaces simply but predictably. So it was decided to change the grenades to interact and bounce off the world as they would prior to the Source engine.

{% include video.html video='throw-comparison.mp4' text="Left is with the old physics. Right is with the new physics" loop=1 blog=1 %}

There was of course some initial resistance and push back to the idea, however the change was very well received in play testing.

## Grenade Timer HUD

As you probably saw in the video above, as by default there's now a circular HUD that displays around your crosshair when you prime a grenade. Inspired by Fortress Forever's timer, the intent is to concisely show how much time is left before the grenade detonates and how many grenades you have active. We've tried to keep it both minimal, visually clear and front and center so you're not looking at a bar away from the center of your screen.

![timer]( /assets/blog/{{ page.slug }}/gren-timer.png ){: style="max-height: 180px;max-width: 180px;"}

## Defusing

One of the play testers brought forward the idea of defusing grenades, the justification for this was to help reduce spam. Of course this was problem we wanted to reduce, and at that time there wasn't anyway to punish lazy or poorly timed grenade throws. The initial idea was to defuse by shooting, this was never actually tested as shooting a grenade proved surprisingly difficult and it was quickly agreed that shooting to defuse would be done unintentionally and at random. Then the idea had was to have them only be defused with the use of melee weapons, similar to TF2Classic's mirv being defusable with the wrench. This worked pretty well as defusing a grenade was simple, could only be done deliberately and didn't require the precision that shooting it did.

{% include video.html video='grenade-defuse.mp4' loop=1 blog=1 %}

# Balancing

<blockquote>autofellatio the section</blockquote>

# Main menu

<blockquote>Talk about menu design and execution and the team colour thing. Hover image toggle?</blockquote>

# Maps

For a quite a while now we've more or less had all the stock maps as close to the beta as they can be. As such, over the last year and a bit we've been working on remakes of TFC maps. 

<blockquote>Talk about blockouts. More information about each map. Add image preview modal</blockquote>

## Push

Our remake of the Invade CTF map Push, which is the furthest along and being worked on by NeoExperiences. If you're not aware, Invade CTF is where there is a central neutral flag and the goal is to capture it in the opposing team's base.

![ctf_push]( /assets/blog/{{ page.slug }}/push.png ){: class="zoom"}

## Crossover

Our remake of Crossover2 worked on by gamingcam2008. Initially it was CTF but it ended up just feeling like a more claustrophobic version of 2fort, sewers and all. So cam made the decision to reimagine it as a KOTH map. 

![koth_crossover]( /assets/blog/{{ page.slug }}/crossover.png){: class="zoom"}

## Nightfall

![nightfall]( /assets/blog/{{ page.slug }}/nightfall.png){: class="zoom"}


