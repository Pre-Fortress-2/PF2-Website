---
layout: blog
title: "Blog"
subject:  "The truth about the Smoke Bomb"
date:   2021-10-17 00:12:00 +1100
categories: blog
permalink: /:categories/the-truth-about-the-smoke-bomb/ 
author: Cyanide
---
The smoke bomb is a very misunderstood grenade, its functionality is clearly explained in the code, but it has been lost due to misconceptions and needless speculation, so let’s start from the very beginning.

To quickly bring everyone up to speed on how we have the code for the grenades; in 2012 the source code for the 2008 version of Source was publicly leaked, within the leak was the source code to TF2 (as well as other unused source files, such as the grenades). And specifically relevant here, it contained the code for the smoke bomb.

The smoke bomb didn't function as a conventional grenade, in the sense that it didn't produce a projectile when activated. There is no proof that a projectile model existed had there been one, and a quick look at grenade's source code explains why. To simplify, when a grenade is thrown it needs a projectile to be created, to do this every grenade has its own version of a function called `EmitGrenade` that creates it.

However the smoke bomb does not actually produce a projectile here, instead it executes the code below:

```cpp
// give them the smoke bomb condition
// ( invis for X seconds, able to move full speed )
// ( attacking removes the condition )
if ( pTFPlayer->CanGoInvisible() )
{
	pTFPlayer->m_Shared.AddCond( TF_COND_SMOKE_BOMB, tf_smoke_bomb_time.GetFloat() );
}
```

Even with little to no ability to read code, the comments and variable naming make it clear as to what it's doing. And again, no projectile is created nor does a projectile model even exist, it simply applied an invisibility condition to the player. The console command referenced, `tf_smoke_bomb_time`, is not found anywhere in the codebase, so the duration of the condition is not known.

If you were to look at the smoke bomb's entire `EmitGrenade` function, you would notice that the code adding the condition is encapsulated with an `#if` statement which is "defining out" the code, meaning it's not compiled and would not be present in-game. Some basic speculation on why this is, is that it's likely the grenade's functionality was moved elsewhere in the code base, possibly done as it was transitioned from a grenade into the invis watch.

Also within the source code is an unused HUD, `HudSmokeBomb`, that would appear while invisible. It would display a progress bar indicating the time you had left, and would display the icon `cond_smoke_bomb` along with it.

Asset-wise only a particle file, `smoke_disappear.pcf`, has been discovered. It was found within the TF2 build that leaked with the Postal 3 beta. This file contained a particle that presumably would have been emitted from the player when the grenade was activated. 

{% include video.html video="https://cdn.discordapp.com/attachments/889697444798017619/898885361575559178/smokebomb.webm" text="The smoke bomb particle"%}

And that's pretty much it, not really all that special. It's an interesting glimpse at an earlier iteration of a now iconic mechanic, but not much beyond that. We don't have any plans on bringing the grenade back in PF2, but I'll leave you with a clip of it in-action from last year.

{% include video.html video="https://cdn.discordapp.com/attachments/889697444798017619/898885369662152704/smokebomb-cloak.webm" %}