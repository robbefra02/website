---
# ↓ "front matter": the post's settings. The sync copies these from the Notion fields.
title: "Fixed a portal gun with a Nokia charger"
date: 2026-10-05
lang: en
slug: portal-gun-nokia-charger          # same slug in NL/EN/FR = the site links the translations
category: repair                         # one main section (menu item)
tags: [soldering, portal-gun]            # subtags = filter buttons on the Repair page
summary: "The portal gun stopped portaling. Turned out to be a cold solder joint and a very confused Morty."
cover: /assets/posts/portal-gun-nokia-charger/01.jpg   # empty Cover field = first image in the post
featured: false
notion_id: 3f083be7-0b01-8127-ae00-dc9486056caf   # lets the sync find and update this file later
---

Rick dropped his portal gun in a bowl of Szechuan sauce and asked me to "just fix it, it's basically a phone". It is not basically a phone. But it does have a USB-C port, which is suspicious.

## Diagnosis

No green glow on power-up. Multimeter on the battery: 3.1 V, so not dead, just sad. Under the microscope one joint on the charge controller looked like a tiny grey raisin: a classic cold solder joint.

![The patient on the bench, before any surgery](/assets/posts/portal-gun-nokia-charger/01.jpg)

## The fix

- Reflowed the joint with fresh flux and a bit of new solder
- Cleaned 40 years of interdimensional sauce off the board with isopropyl alcohol
- Charged it overnight with the only cable in the garage: a Nokia charger from 2004

It portals again. It also now plays a polyphonic ringtone every time it opens a portal, which I am choosing to call a feature.

## Video

{% include video.html youtube="dQw4w9WgXcQ" caption="Test footage of the portal gun after the repair" %}

> "Wubba lubba dub dub" is not a valid error code, Rick.
