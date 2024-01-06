---
layout: default
parent: Projects
title: Voron 0.1 CoreXY 3D Printer
nav_order: 1
has_children: false

---

## [](#header-2)Voron 0.1 - November 2021
I started with a Fabreeko kit. It was a pre-order and their first batch. I kinda bought into the hype. 
Building a 3d printer with documentation is really not hard. The hard part is smoothing over undocumented problems. 8 times out of 10 you won't have any problems following a guide. But when that guide is not all inclusive, you need to improvise.
Different kits have different wiring, different hardware, and possibly different control boards. 
It's kinda up to you to build it after ordering everything.

{: .highlight }
I actually printed all my parts on my Prusa Mk3S+ in Sparta3D ABS+. I think it took 3 or 4 plates and 40 ish hours. I put a cardboard box around the printer to keep it nice and toasty. Which I don't recommend doing in hindsight because the printed parts on the Prusa are made of PETG and having an ambient chamber of ~60C makes those parts soft. Especially the parts on the extruder, mine started to sag and deform. So I printed replacement parts in ABS for the Prusa too.

### [](#header-3)Frame
One interesting thing about the Voron 0 build is pre-loading hex nuts into the t-slots. Since they use 15mm extrusions, small M3 roll in nuts are uncommon. The downside is if you load nuts that end up not being used, they sit and rattle. And if you want to remove them you have to disassemble the frame.
<div style="text-align: center;">
    <img src="../04-projects/images/voron/21-11 frame.jpg" width="500"/>
</div>>

### [](#header-3)Electronics
This printer came with a BTT SKR Mini e3 v2, Raspberry Pi 3b, 24V 150W Meanwell PSU, 24V to 5V DCDC Convertor, a typical rocker switch AC inlet, and a bunch more.

<div style="text-align: center;">
    <img src="../04-projects/images/voron/21-11 wiring.jpg" width="500"/>
</div>>

### [](#header-3)First Print

<div style="text-align: center;">
    <img src="../04-projects/images/voron/21-12 first print.gif" width="500"/>
</div>>

I ran with a small sample roll of white PLA since I hadn't installed the spool holder yet. Also, here you can see the wires running from the tool head that I changed in the next section.

## [](#header-2)0.1 -> 0.2 Conversion - Sept 2023
Some of the main changes to 0.2 were the SKR Pico board and the Raspberry Pi Pico or Zero 2 W. I just bought an SKR Pico because it had extra fan ports. I had also bought a Picobilical kit from LDO Motors.

<div style="text-align: center;">
    <img src="../04-projects/images/voron/23-07 wiring.jpg" width="500"/>
</div>>

This is what I had after taking the boards off their VHB taped mounts. Also before I had installed the Picobilical mod that replaces all the wiring from the tool head with one big 14 pin cable.

I also added the Kirigami bed mod. It pretty much replaces the bed made of extrusion and printed parts with a sheet metal part. It adds stiffness, simplilcity, annnd a cute LED.

## [](#header-2)Redoing the electronics - Dec 2023
I didn't like the DIN rail solution that Voron Design released. It still relied on taping relatively straight to the back acrylic panel. So generally measured out my setup and made a mounting board with an alignment jig.

<div style="text-align: center;">
    <img src="../04-projects/images/voron/23-12 electronics before.jpg" width="500"/>
</div>>

<div style="text-align: center;">
    <img src="../04-projects/images/voron/23-12 wire duct closed.jpg" width="500"/>
    <img src="../04-projects/images/voron/23-12 wire duct open.jpg" width="500"/>
</div>>

<div style="display: flex;">
  <div style="flex: 1; padding: 5px;">
    <img src="../04-projects/images/voron/23-12 wire duct open.jpg" alt="First Image" style="width: 100%;">
  </div>
  <div style="flex: 1; padding: 5px;">
    <img src="../04-projects/images/voron/23-12 wire duct closed.jpg" alt="Second Image" style="width: 100%;">
  </div>
</div>


{: .fs-6 .fw-300 }