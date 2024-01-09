---
layout: default
parent: Work
title: Ahead Wind
nav_order: 9000
has_children: false

---

# Ahead Wind
Ahead Wind is a pre-seed stage 3d printing software startup based in Denver, CO. I met them through Twitter thanks to Mo Mahmood. After a few calls with each of the co-founders, Rob, Isaiah, and Jacob, they flew me down to Denver to work together at their startup house. Thanks to Ahead Wind, I pushed my first few hundred lines of code :).

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

### Dual sensor housing and mounting
One of the problems we had with our layer scanner was a shadow caused by the lighting on an angle. The simple solution we thought of was to just put another scanner opposite to the current one so layers are evenly lighted from both sides.

### Establishing coordinate system
To analyze 3d prints, we neded to link the real world to the data we received. I worked on this by establishing a script that correlates the XY points in image files and the XY points in the GCode.

#### ArUco
I wrote a package that takes an image file and searches for a specific ArUcode. I used OpenCV because there was a well-documented set of instructions and good python compatibility. There was a function that grabs the center of the Arucode. Dimensions were all based off this point.

picture

### Calibration sequence
To calibrate the system, we printed a triangle, used contour recognition to get the length of the line in our scan. We then compared both the length and angles to get an accurate transformation to apply in order to overlay the two on top of each other.

### Paraview image stacking
Another project I was involved with was creating the earliest versions of the digital twin. I experimented with Paraview because of it's strong scintific computation functionality on datasets.

I was able to plot in Paraview gcode points that were parsed and extracted into a csv. This gave a point cloud of each point where the 3d printer accepts a new G1 (move) command. The hope was to reconstruct the gcode toolpath in the same place to compute differences between scans and inputted gcode.



{: .fs-6 .fw-300 }