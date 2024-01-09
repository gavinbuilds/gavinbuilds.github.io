---
layout: default
parent: Work
title: Taiga Robotics
nav_order: 1000
has_children: false

---

# About
Taiga Robotics was originally a VR operated robot arm startup. Since then they have pivoted to SMB robotics automation. We build tools to integrate robot arms at lightning speeds. It's a small team of 5 so I sure did have a lot of agency over my work.

My job here is to prototype end of arm tools for our wide range of applications. 

Some of the work includes:
- designing tool heads and parts with the automation workflow in mind
- manufacturing and assembling prototype tools
- CAD in Inventor, assemblies and individual parts
- deploying iterations of the robot workflow
- running FDM and SLA prints
- maintaining the printer and debugging defects/artifacts

Note: I did get permission to talk about my work in depth.

---

<details open markdown="block">
  <summary>
    Table of contents
  </summary>
  {: .text-delta }
1. TOC
{:toc}
</details>

---

## First Contact - November 2022
We actually met while I was working at the Digital Fabrication Zone as a student consultant. I ran a bunch of SLA prints and helped with a prototype tool head for picking up stacks of carton.


## Silicon Suction Cups - 202
It was a shocker to learn that the industry was charging over $50 for a shitty little injection molded suction cup. So instead, we made a manual injection mold setup so we could make our own custom suction cup on demand.


### Two-Part Silicone
We used a two part silicone with a 10:1 A:B ratio. Experimented with Tin based and Platinum based. It took a bit of experimentation but the process looked something like this:

1. Spray mold release on contacting surfaces of the mold. Very light, shouldn't be shiny.
2. The whole batch of Part A was mixed with colour pigment to desired shade.
3. Measured out Part A according to how much was needed in previous castings.
4. Measured out Part B and poured into the same cup as A.
5. Mix and put in vacuum chamber past -25InHg. Doesn't have to be accurate.
6. Let air back in to collapse large bubbles. Finished when bubbling is relatively slow.
7. Pour silicone into 100cc syringe and then repeat vacuum.
8. Inject.


### SLA Printed Molds 
Turns out the surface finish on resin prints are great enough to create airtight fits. Then that surface is imprinted by your mold into your part. So this is the perfect application for resin printing; low volume injection molds. I didn't design the first suction cup mold but I did modify it to create several other cup designs. I gained a general intuition of gates from this.


### Different Resins
We primarily use Siraya Tech resins. They have the best printability and mechanical properties. We liked using a translucent resin for our molds so that we can visually see how much is filled up. Not actually that useful but nice to see.
We did try out the infamous Siraya Tech BLU resin. It smelled like Mountain Dew and was insanely viscous. It's recommended to print while heated but we didn't have the resin heating band setup.


### Resin Off-gassing
Many times our silicone wouldn't cure around our blowout channels (features that relieve pressure while resin printing). The problem was caused by the off-gassing of the resin. If you smell a cured resin print, sometimes there is a faint smell. Because resin prints are typically cured on the surface, the resin isn't completely cured. This is hard to avoid. We tried our best and let resin prints sit in the sun for a few hours. Even curing for 20 minutes in a typical UV curing station was not enough. The resin actually desired heat from the sun.


## Coffee Bagging 2023
I was fortunate to have been hre for a completely new client. I was able to experience the entire process of designing, deploying, and dealing with dealing with extra additions for customers.

The client came to us with a desire to automate the filling of coffee beans in a bag and then seal that bag.

Some hard requirements:
- as fast as a proficient human, as reliable
- no spill! keep a clean floor
- use existing fill and measuring machine
- use existing bag heat sealing machine
- be able to atleast do both 340g sized and 1kg sized bags
- moveable and serviceable for cleaning the floor and tables

Some nice to haves:
- ability to do the other sizes of bags (5 in total)
- integrate directly with the logic controller of the filling machine
- operate off the nearby compressed air line and outlet


### Initial Design
Building on top of our existing robot stand, we started with an adjustable angled slideway that is meant to be parallel to this sheet metal chute on the filling machine. The robot would pick a bag from a box and place it on a mechanism that opens

2 Coln Pictures here.

#### Suction cart
This cart needed to be able to hold both the large and small bags, so the placement of the suction cups was important. The concern is sagging if the cups are too far apart.


#### Sorting Tray
In order to get a reliable placement on the filling chute, the robot needs to pick the bags at the same spot each time. So an intermediate step before placing it on the chute is to figure out which bag is being picked and grab it at the designated frame.

#### Tool heads
The tool head design was quite easy since we had a lot of existing tools. For this application, we want a 2 cup design and a 4 cup design. The cup placement is just finding an even application of vacuum to the bag.

#### Manufacturing
3D Printed parts are in PETG and PETG-CF. Suction cups are custom. We made SLA printed 3/8" air fitting threads to glue into FDM printed parts. 

### First Changes
Changing up the tool head due to different sized bags and wrinkling due to pressure concentration.






{: .fs-6 .fw-300 }