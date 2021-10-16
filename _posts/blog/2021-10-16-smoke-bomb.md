---
layout: blog
title: "Blog"
subject:  "The truth about the smoke bomb"
date:   2021-10-16 00:00:00 +1100
categories: blog
permalink: /:categories/the-truth-about-the-smoke-bomb/ 
author: Cyanide
---
The smoke bomb is a very misunderstood grenade, its functionality is quite clearly explained in the code, but it has been lost due to misconceptions and needless speculation, so let’s start from the very beginning.

To quickly bring anyone up to speed on how we have the code for the grenades: in 2012 source code for the 2008 version of the Source engine was leaked online. TF2’s game code was present along with the cut grenades, specifically relevant to this were the files for the smoke bomb.

The smoke bomb was not a conventional grenade, as it did not produce a grenade projectile. No projectile model has ever been discovered nor proof of the existence of one. A quick look at the grenade's file tells us why. To greatly simplify, when a grenade is to be thrown it needs to create a projectile, to do this every grenade has its own version of a function named `EmitGrenade` which creates it. For the smoke bomb this function is:

```cpp
CTFWeaponBaseGrenadeProj *CTFGrenadeSmokeBomb::EmitGrenade(...)
```

However the smoke bomb does not actually produce a projectile here, insteads it executes the code below:

```cpp
// give them the smoke bomb condition
// ( invis for X seconds, able to move full speed )
// ( attacking removes the condition )
if ( pTFPlayer->CanGoInvisible() )
{
	pTFPlayer->m_Shared.AddCond( TF_COND_SMOKE_BOMB, tf_smoke_bomb_time.GetFloat() );
}
```

Even with little to no understanding of code, the comments and naming  make it clear what it's doing. And again, no projectile is created nor does a projectile model even exist, it simply applied an invisibility condition to the player. The console command being referenced, `tf_smoke_bomb_time`, is not found anywhere in the codebase, so the duration of the condition is not actually known.

If you were to look at this segment of code in the file, you would notice that it's encapsulated with an `#if` statement which is "defining out" the code, meaning it's not compiled and would not be present in-game. Some basic speculation on this is that it's likely the grenade's functionality was later performed elsewhere in the code base, this was possibly done as it was transitioned from a grenade into the invis watch.

Also within the code is an unused HUD, `HudSmokeBomb`, that would appear when you went invisible. It would display a progress bar indicating the time you had left, and would also display an icon `cond_smoke_bomb` along with it.

Asset-wise only one thing has been discovered, a particle file `smoke_disappear.pcf` that was found within the TF2 build that leaked with the Postal 3 alpha. This file contained a particle that presumably would have been emitted from the player when the grenade was activated. 

{% include video.html video="https://cdn.discordapp.com/attachments/889697444798017619/898788790271885353/smokebomb.mp4" text="The smoke bomb particle"%}

And that's pretty much it, not really all that special. It's an interesting glimpse at an earlier iteration of a now iconic mechanic, but not much beyond that. We don't have any plans on bringing the grenade back in PF2, but I'll leave you with a clip of it in-action from last year.

{% include video.html video="https://cdn.discordapp.com/attachments/889697444798017619/898788157800185908/smokebomb-cloak.mp4" %}