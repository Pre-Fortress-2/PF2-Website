---
layout: blog
subject: "Blog"
title: "Badlands: The Map That Never Was"
date:   2024-04-23 00:13:00 -0500
categories: blog
description: "The mystery of the CTF Badlands map."
hidden: true
author: RedFire
image: /assets/blog/badlands-mystery/sb-badlands-blue-base.png
permalink: /:categories/:slug
minibanner: badlands-mystery.png
NoImageEffect: 1
excerpt: "Badlands was a map excluded from TF2’s initial release, but was added in later with a completely new layout and gamemode. Many know of the early screenshots, and many thought of those to be the playable version of the map. Well, spoiler alert: it’s not."
---

Badlands was a map excluded from TF2’s initial release, but was added in later with a completely new layout and gamemode. Back in Team Fortress Classic, Badlands was a CTF map with a lot of verticality and movement opportunities. Many know of the early screenshots by Stéphane Gaudette and Isabelle Lemay featuring a really high quality version of the map, and many thought it to be of the CTF_Badlands map being developed in the beta.

Well, spoiler alert: it’s not. The screenshots we have are of an artpass test, showcasing an idea for a potential artpass of the map—it’s in line with the concept art, too. There are some key things that prove that the map was not meant to be actually playable.

These doors on the main buildings are a big indication. These models don’t have a back side, and are culled off in-engine. 
<img class="full-size" src="/assets/blog/badlands-mystery/blue-base-door.png" alt="The door props at the entrance of Blue base on Badlands." width="129"/>

Another telling piece of evidence is the fact that there is no apparent entrance from the sniper deck into the base. From this angle, you should be able to see the doorway into the base, as it would be on the wall with tan/computerwall texture. 
<img class="full-size" src="/assets/blog/badlands-mystery/badlands-sniperdeck-nodoor.png" alt="Left: the sniper deck on Red with no doorway to the interior. Right: the sniper deck on Blue with no doorway to the interior." width="124"/>

A lot of the props (mostly the cliff props) are all “superpositioned.” When loaded into Hammer, a lot of the cliffs line up automatically and just need to be rotated. If lined up with the TFC Badlands layout, the prop of the interior doesn’t line up with the layout.

So… was there ever a playable version of CTF_Badlands? It’s incredibly likely, all things considered!

We have pieces of art that appear to depict several interior shots. One of these is even a render!
![Left: Paintover partially showing the flag room, depicting the hallway leading out to the battlements. Right: Render of the hallway leading to the battlements, facing the flag room. Bottom: Alternate angle of the hallway leading to the battlements.](/assets/blog/badlands-mystery/badlands-interior-concepts.png)

All of these images have parallels to areas in the TFC version of the map. Image 1 is a piece of concept art, image 2 is a render of a hallway in the same area as the concept art, and image 3 is from the SFM leak files. There was a series of images named “faceend”, which mostly seem to be within Badlands. This image is the same area as the render, just from a different angle.

Here are the adjacent TFC angles:
![Left: Team Fortress Classic Badlands flag room, depicting the hallway leading out to the battlements. Right: RHallway leading to the battlements, facing the flag room. Bottom: Alternate angle of the hallway leading to the battlements.](/assets/blog/badlands-mystery/badlands-tfc-angles.png)

Additionally, the TF2 repository leak, which contained the map sources, has a VMF titled “CP_Badlands_Base_IK1.vmf”. It features a very early rendition of the CP_Badlands base, but there are a few features that still match with the TFC/early TF2 layout. Most notably, a section that highly resembles the battlements as seen in the infamous artpass test screenshots.
![Left: CP_Badlands_Base_IK1 battlements. Right: Art pass test Badlands battlements.](/assets/blog/badlands-mystery/badlands-baseik-stephane.png)

This is an obvious remnant of the original layout, and is one of the only ones in this iteration of the map. Notably, the light_environment even appears to use the same lighting color and angles as the original iteration, suggesting the artpass test was built off of the “playable CTF_Badlands” map.

Now, while the front of the base is drastically different from both the released CP_Badlands and the artpass test map, the side entrance (which goes unused) has the same trim that the front has for a door.
![Left: The front entrance of the base. Right: The unused side entrance on the base.](/assets/blog/badlands-mystery/badlands-baseik-entrance.png)

Additionally, when the prop “models/props_badlands/structure01.mdl” (which is commonly speculated to be used on the side of the base to climb up from the canyon to the side entrance of the base, as it features a long ladder much like in TFC) is lined up, there’s a corner of the prop that nearly perfectly lines up with the existing brushwork. It even nearly matches other brushwork in its height when lined up with the trim!
![The Structure 01 model on the side of the base.](/assets/blog/badlands-mystery/badlands-entrance01.png)
![Left: The Structure 01 model being aligned in the 3D view in Hammer. Right: Grid view, showing that the bottom of the bridge and the bottom of Structure 01 lines up.](/assets/blog/badlands-mystery/badlands-structure01-hammer.png)

As an added bonus, the final capture zone features this brushwork, a grate that for some reason has the centerpiece sectioned off with a rounded square brush. Just beneath that is a visgroup known as “pipe low” which extends the silo further down. The opening of the angle, when looked at from the “front” (in the area right in front and beneath where the actual capture is, the opening is on the right side of the pipe. This appears to be a remnant of the original silo, based on that of TFC’s flag silo.)
 ![Left: The rounded center-piece of the grate. Right: The "pipe low" vis group in Hammer.](/assets/blog/badlands-mystery/badlands-flagsilo-leftover.png)

So, what does all of this mean? What does this entail for the existence of a CTF_Badlands? Well, as a speculatory timeline, it can be inferred that there was a fully playable version of CTF_Badlands at one point in time. The TF2 Team had their artists Stéphane Gaudette and Isabelle Lemay create a test map based on the map VMF to show a potential artpass idea for the map based on the existing concept art and map. The map began to see an artpass, but had the interior sections gutted and the map reworked into a Control Points map. This led to the version of Badlands seen within the released version of TF2. 

There is another early CP_Badlands map within the repository leak (CP_Badlands_IK1), but it was a version that can be dated by adding the “editorbuild” number (4025 in this case) to October 24, 1996. Layout wise, it is nearly identical to the retail version, but with the early texturing seen in “Base_IK1”.
