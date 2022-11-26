---
layout: blog
subject: "Updates"
title:  "The 0.7 Hotfix"
date:   2022-11-25 00:00:00 -0500
categories: updates
description: "Week 1 Hotfix"
hidden: false
permalink: /:categories/0.7/hotfix
excerpt: "Update addressing bugs and issues found during the first week of 0.7's release."
---

Update addressing bugs and issues found during the first week of 0.7's release.

# Bug Fixes
- Addressed the server stability issues
- Fixed the Medic's Syringe not giving Übercharge upon healing a teammate (Up to 5% Übercharge on full heal)
- Fixed a bug where some of the pipebombs from the Pipebomb Launcher wouldn't disappear upon death
- Slightly buffed Medigun heal rate (12 health per second -> 18 health per second)
- Fixed a bug where the Medigun detach sound would play if you pressed primary fire without healing anyone
- Fixed a visual bug where the Pipebomb Launcher's reload animation would show a stray pipebomb at higher viewmodel FOVs
- Fixed a case where fully charging the Pipebomb Launcher's pipebombs would have it disappear
- Fixed a bug where aiming with the Sniper Rifle while teleporting would enable the scope overlay while not zoomed in
- Fixed a bug where you could see the enemy's glow while they're holding the flag
- Fixed a bug where Medic's Heal grenade could heal/infect people through walls
- Fixed being able to haul a building while priming a grenade 
- Fixed the Tranquilizer Gun not taking ammo away from reserve ammo if it was passively reloaded
- Fixed a bug where players were able to take teleporters while dead
- Fixed the Übercharge overlay on DX8
- Fixed a Spy disguise bug where if you're overhealed, the disguise itself will stay permanently overhealed
- Fixed a Spy disguise bug where if you were damaged with a disguise, the disguise health and disguise armor wouldn't get damage applied to them
- Fixed hitboxes desyncing after class changing

# Models
- Removed Herobrine Medic
- Adjusted the bounding box collision on flamerockets and pipebombs
- Added a unique teleporter blueprint model
- Updated civilian texture
- Updated large ammo box texture

# Commands
- tf_use_arena_queue, the queue system the Arena gamemode uses, is off by default
- tf_arena_first_blood, which is the crits that you get from killing someone first in the Arena gamemode, is off by default
- pf_round_end_friendlyfire, where you can attack your teammates on round end, is on by default
- tf_delete_temp_files, where spray files are deleted upon exiting the game, is on by default
- Removed the pf_picmip command, due to instability. Only mat_picmip values from -1 to 4 are allowed.
- pf_accessibility_concussion, which shakes the crosshair rather than your whole screen, is on by default
- pf_alerts_armor, which warns you if your armor gets damaged to a certain percentage, is on by default

# Maps
- ad_dustbowl: Added func_nobuild brushes to building exploit spots
- ctf_2fort: Fixed being able to reach the skybox in front of the BLU battlements
- koth_crossover: Updated clipping on one of the truss models on the RED side
- pl_goldrush: Fixed being able to go out of bounds, and fixed stage 3's explosion particle's orientation being misaligned

# Misc
- Added localization for the Hold This Position voice option
- Added a unique Pipebomb Launcher kill icon
- Added a closing sound to the Pipebomb Launcher's draw animation
- Properly centered the the Medic Übercharge panel 
- Updated default sprays

# Download link to the Hotfix
[Pre-Fortress 2 0.7 Hotfix](https://github.com/Pre-Fortress-2/pf2/releases/tag/0.7hotfix)
