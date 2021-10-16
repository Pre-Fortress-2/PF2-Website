---
layout: blog
title: "Blog"
subject:  "The truth about the smoke bomb"
date:   2021-10-15 00:00:00 +1100
categories: blog
permalink: /:categories/the-truth-about-the-smoke-bomb/ 
author: Cyanide
---
The smoke bomb is a very misunderstood grenade, its functionality is quite clearly explained in the code, but it has been lost to the public due to misconceptions and needless speculation, so let’s start from the very beginning.

To quickly bring everyone up to speed on how we have the code for this, in 2012 source code of the Source engine as it was in early 2008 was leaked online. TF2’s game code was present and within was the code of the grenades that were, and relevant to this was the files for the smoke bomb.

The smoke bomb was not a conventional grenade, as it did not produce a projectile. No projectile model has ever been discovered nor any proof of the existence of one. A quick look at the shockingly small smoke bomb grenade files tells us why. To super simplify, when a grenade is to be thrown it needs to create a projectile, to do this every grenade has its own version of a function named `EmitGrenade`, which when called will create the projectile. For the smoke bomb this function is:

```cpp
CTFWeaponBaseGrenadeProj *CTFGrenadeSmokeBomb::EmitGrenade(...)
```

However the smoke bomb does not actually produce a projectile, insteads it executes the code below:

```cpp
// give them the smoke bomb condition
// ( invis for X seconds, able to move full speed )
// ( attacking removes the condition )
if ( pTFPlayer->CanGoInvisible() )
{
	pTFPlayer->m_Shared.AddCond( TF_COND_SMOKE_BOMB, tf_smoke_bomb_time.GetFloat() );
}
```

Even if you don't understand C++, the comments above the code make it clear what it does. And again, no projectile is created nor does a projectile model even exist, it simply  applied an invisibility condition to the player owns the grenade. `tf_smoke_bomb_time` is a console command that's not found anywhere in the codebase, so the duration of the condition is not actually known.

If you were to look this code you would notice that it's encapsulated but an `#if 0` statement, which "defines out" the code meaing it doesn't compile and is non-functional in-game. Some basic speculation on this is that it's likely the grenade's functionality was later performed elsewhere in the code base rather than in the grenade files, especially as there is no code creating the particle that went along with it.

Asset-wise, there is very little for the grenade, n a HUD element that would display to indicate the invisibility time you had left, there's a icon `cond_smoke_bomb` that would have been displayed along with it. \
As previously mentioned, the grenade's particle effect was found within the TF2 build that leaked with the Postal 3 alpha. Presumably this particle would have emitted from the player when the grenade was activated. 

{% include video.html video="https://cdn.discordapp.com/attachments/889697444798017619/898788790271885353/smokebomb.mp4" text="The smoke bomb particle in all its glory"%}

And that's pretty much it. It's not really all that special. An interesting glimpse at an earlier itteration of a now iconic mechanic, but not much beyond that. We don't have any plans on bringing the grenade back in PF2, but I'll leave you with a clip of it in-action from last year.

{% include video.html video="https://cdn.discordapp.com/attachments/889697444798017619/898788157800185908/smokebomb-cloak.mp4" %}