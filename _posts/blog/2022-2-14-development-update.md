---
layout: blog
title: "Blog"
subject:  "What we've been working on"
date:   2022-02-14 00:12:00 +1100
categories: drafts
permalink: /:categories/2022-02-development-update/ 
author: Cyanide
image: /assets/blog/images/sb-work.png
NoImageEffect: 0
---

It's been a while since the last post, my apologies. Despite certain *plumbing related issues* we've been working diligently away at the mod over the last year.

<blockquote>More information about last year</blockquote>

# Grenades

## Viewmodels

Every grenade at this point has a prime, hold and throw view model animation, took us a few years but we did get there in the end. 

<blockquote>More information about their creation and decisions about them</blockquote>

None of the animations are final.

{% include video.html video="https://cdn.discordapp.com/attachments/889697444798017619/942960943107809330/grenade-throws.mp4" text=""%}

## Projectiles

If you've played the mod you know grenades are a *little* inconsistent in how they bounce off the world. In the early days of the mod things were even worse as the grenade's lacked proper custom physics properties which made them slide and roll around a lot. This was especially noticeable when attempting to set up a conc jump as the grenade would roll away.

In contrast, in TFC and QWTF the grenade's interactions with the world are not subject to a complex physics engine, when a grenade bounces off a surface you know how it's going to react. So around 5 months ago now the the decision was made to change the grenade to act in a similar manner to what came before.

{% include video.html video="https://cdn.discordapp.com/attachments/889697444798017619/942970892621864970/throw-comparison-compressed.mp4" text="Left is with the old physics. Right is with the new physics" loop=1 %}

There was of course some initial resistance and push back to the idea, however the change was well received in play testing so that's the direction we're going with.

<blockquote>Talk about hud timer</blockquote>

# Balancing

<blockquote>autofellatio the section</blockquote>

# Main menu

<blockquote>Talk about menu design and execution and the team colour thing. Hover image toggle?</blockquote>

# Maps

For a quite a while now we've more or less had all the stock maps as close to the beta as they can be. As such, over the last year and a bit we've been working on remakes of TFC maps. 

<blockquote>Talk about blockouts. More information about each map. Add image preview modal</blockquote>

## Push

Our remake of reverse CTF Push is the furthest along, worked on by NeoExperiences. If you're not aware, reverse CTF is where you have a central neutral flag and your goal is to capture it in the opposing team's base.

![ctf_push]( /assets/blog/images/development-update-1/push.png)

## Crossover

Our remake of Crossover2 worked on by gamingcam2008. Initially it was CTF but it ended up just feeling like a more claustrophobic version of 2fort, sewers and all. So cam made the decision to reimagine it as a KOTH map. 

![koth_crossover]( /assets/blog/images/development-update-1/crossover.png)

## Nightfall

![nightfall]( /assets/blog/images/development-update-1/nightfall.png)


