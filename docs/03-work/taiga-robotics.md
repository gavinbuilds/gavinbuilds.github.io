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

Note: I did get permission to talk about my work in depth and feel free to ask me about any of these projects!

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
We actually met while I was working at the Digital Fabrication Zone as a student consultant. I ran a bunch of SLA prints and helped with a prototype some tool heads. After my time at the DFZ was over, they reached out and offered to hire me part time.

### First Projects
For the first projects, I worked at the prototyper and then Ilija helped me wrap up a final design that is goes to customer. I learned a lot about designing for maintenance, safety, and a bit of aesthetics.

#### Carton stack picker
Ideas to test:
- pulling a vacuum through the sides of the card stack
- sharp wedge that doesn't displace cards
- what different sizes and geometries of carton can it pick

Requirements:
- enter from a specific side of the stack (different per carton design) as the carton is palletized in a certain way
- clearance to progress through dozens of tight stacks
- be able to pick a feasable volume to be a competitive automation solution
- be able to place the stack in different orientations and travel across entirety of robot range of motion
- no additional controls other than pneumatic valve actuation that is already in the robot stack

##### Flat plane vacuum effect
So I was shown a video where a stack of cards were lifted only by pulling a vacuum through the sides of cards. I worked to make a tool to test that to see how feasible it was and what gimmicks the interaction has. The tool looks bulky because it was designed to be used with existing robot tool mounting with our typical ring magnet.

<div style="display: flex;">
  <div style="flex: 1; padding: 5px;">
    <img src="../03-work/images/taiga-robotics/first-projects/22-11 plane effect.png" alt="First Image" style="width: 100%;">
  </div>
  <div style="flex: 1; padding: 5px;">
    <img src="../03-work/images/taiga-robotics/first-projects/22-11 handheld vac.png" alt="Second Image" style="width: 100%;">
  </div>
</div>

I learned that the vacuum will travel in all directions of the plane at the same speed and will escape at the shortest path. Quite obvious but not something easy to think of immediately when going from a square card to a net shape of carton boxes with a bunch of tabs. Other behaviours to note were needing support atleast past the center of gravity of the carton, in the case where vacuum leaked too early it peeled starting from the cantilevered edge.


##### Wedge Designs and Testing
Agreeing that the novel approach was not going to work, I worked on a forklift method. Resin prints in the vertical orientation can actually produce quite sharp edges. I was able to wiggle the wedge underneath a sufficient number of cards (>20mm) without disturbing cards above or below it in the stack.

<div style="display: flex;">
  <div style="flex: 1; padding: 5px;">
    <img src="../03-work/images/taiga-robotics/first-projects/22-11 carton test 1.png" alt="First Image" style="width: 100%;">
  </div>
  <div style="flex: 1; padding: 5px;">
    <img src="../03-work/images/taiga-robotics/first-projects/22-11 carton test CAD.png" alt="Second Image" style="width: 100%;">
  </div>
</div>

Since I was going to test several wedge geometries, I decided to include a dovetail in the tool head so that I can just swap out different wedges. These were all resin printed on my Photon Mono and Taiga's Photon M3 Plus.

##### The resulting tool
With a successful demo of the tool, worked on a pneumatic actuated clamp to go alongside the wedge so that the robot is able to maneuver in all 6 degrees without worry of the cards falling off.

<div style="display: flex;">
  <div style="flex: 1; padding: 5px;">
    <img src="../03-work/images/taiga-robotics/first-projects/22-11 resulting tool.png" alt="First Image" style="width: 100%;">
  </div>
  <div style="flex: 1; padding: 5px;">
    <img src="../03-work/images/taiga-robotics/first-projects/22-11 resulting tool section.png" alt="Second Image" style="width: 100%;">
  </div>
</div>

FDM printed body and only the blue part which is an SLA printed piston. Molykote and a tuned sliding fit is actually quite airtight :). There is a linear rod and bushing in the back of that photo for stiffness and a hard stop.

#### Box packaging paddle axle redesign
The axle was very loose and flimsy on the current box packaging machine. The job of this piece was the press down the back facing flap. There is a dull blade that presses the front flap down and two angled bars that press down the side flaps. Then a pneumatic cylinder shoots the box through to be packaged.

<div style="display: flex;">
  <div style="flex: 1; padding: 5px;">
    <img src="../03-work/images/taiga-robotics/first-projects/22-11 test.png" alt="First Image" style="width: 100%;">
  </div>
  <div style="flex: 1; padding: 5px;">
    <img src="../03-work/images/taiga-robotics/first-projects/22-11 final.png" alt="Second Image" style="width: 100%;">
  </div>
</div>
A spring keeps the paddle in an open state and resets it every cycle. This was a mini project and I just worked with existing parts like the existing sheet metal paddle, springs, shoulder bolt, and bushings.

<div style="display: flex;">
  <div style="flex: 1; padding: 5px;">
    <img src="../03-work/images/taiga-robotics/first-projects/22-11 motion 1.png" alt="First Image" style="width: 100%;">
  </div>
  <div style="flex: 1; padding: 5px;">
    <img src="../03-work/images/taiga-robotics/first-projects/22-11 motion.png" alt="Second Image" style="width: 100%;">
  </div>
</div>
The paddle is actuated by moving the box so that large quarter circle part is what converts that linear motion from moving the box to rotational for closing the flap.


## Silicone Suction Cups - January 2023
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

### A syringe tool for silicone injection - May 2023
We found that pressing the syringe head too fast would punch the air through the nozzle and create huge bubbles. We made a tool and are selling it. It uses a screw like shape to evacuate the air in the syringe rather than having a full seal. This way the head can push down straight to the silicone instead of hitting the intermediate air trapped inside.

## Coffee Bagging - February:July 2023
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


### Piston actuated cart - July 2023
This used a pneumatic cylinder to lift the cart as the same speed as the robot to prevent the cart from sagging and pulling down the back face of the bag.

## Baking tray gripper - November 2023
The scope of this project is to design a compact gripper to help the xArm pick up typical baking trays for somthing like taking cookies out of the oven. These trays are huge and crazy to hold at one edge, which was what we are setting out to do.


## Telescopic Actuator - January 2024
A job required our robot to reach into deep bins that are obviously outside of the robot's 750mm reach. Then place them on a conveyor belt.

As usual, pneumatic, 3d printed, lightweight, cheap are the goals.
{: .fs-6 .fw-300 }