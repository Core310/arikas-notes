---
title: "{cal3 exm3} review pkt"
---

# {cal3 exm3} review pkt

![[cal3/exam 3/{cal3 exm3} review pkt.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/cal3/exam%203/{cal3%20exm3}%20review%20pkt.pdf) | [Download Local](/cal3/exam%203/{cal3%20exm3}%20review%20pkt.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

Arika Khor
Math 2934
exm 3 review

Question 1.
1)

R

between regions:

√
+ 9y 3 dA, where R is the region between y = 23 x y = 2 x
• Find bounds: Set regions equal to each other, result in:

RR

D 2yx

2

x = [0, 9] outer bounds
√
2
y = [ x, 2 x] inner bounds
3
• Put

R

tgt
Z 9 Z 2√x
2
x
3

0

2)

RR

2yx2 + 9y 3 dy dx

dA where R is the region between x = y 2 and x = 2 − 2y 2
• Bounds:

R xy

2

s

y 2 = 2 − 2y 2

→ y = [±

2
]
3

x = [y 2 , 2 − 2y 2 ]
• put tgt (bounds dependent on what u solve for first, x or y first?
Z p 2 Z y2
3
p2
−

Question 2.
Formula:

R

3

2−2y 2

xy 2 dx dy

surface area of a region:

S=

Z Z q
D

fx (x, y)2 + fy (x, y)2 dA

Bounds found w/ graph
1) Σ: the region on the graph of g(x, y) = x2 +y 2 that lies above the triangle with vertices (1, 1), (−1, 1), (2, 0)
on the x − y plane

• Create 3 lines to make triangle and find bounds using point-slope formula of y − y1 = m(x − x1 )
First line:
1−1
for (1,1), (-1,1):
= 0, y = 1
−1 − 1
0−1
−1
for (1,1), (2,0):
=
, y − 1 = −(x − 1), y = −x + 2
2−1
1
0−1
1
1
2
for (-1,1) and (2,0):
=− , y =− x+
2 − −1
3
3
3
• Get bounds from all 3 points. In this case, hv 2 max y-heights and we split at x = 1.
• Convert inside, just find both partials
2) Σ: the region on the graph of g(x, y) = x + y that lies above the disk with radius 2 centered on the
origin.
Know disk is
R

x2 + y 2 = 2
r=2
θ = 2π
and we around somedr dθ
3) Σ: the region on the graph of g(x, y) = x2 + 1 that lies above the annulus with inner radius 1 and
outer radius 2 centered on the origin. a disk (or annulus) centered at the origin with radius r
R

inner

Z

→ rinner ≤
outer

Z

q

x2 + y 2 ≤ router

→ [0, 2π]

Question 3. Evaluate the following integrals:

1)

+ y 2 dA, R is the pie wedge given by 0 ≤ θ ≤ π/3 and 0 ≤ r ≤ 2
polar w/ jacobian + transformation (bounds stay samey :) ) We given bounds alrdy
RR
2) R x2 +y1 2 +1 dA, where R is the annulus centered on the origin with inner radius 2 and outer radius
4.
polar transformation, see 2.3 for bounds
RR √
3) R x2 + y 2 dA where R is the unit disk. Bounds:
RR

R 2x

2

Z 2π Z 1
0

0

...dA

Question 4. Evaluate the following cylindrical integrals:
1)

+ y 2 + z 2 dV where D is the cylindrical shell with inner radius 1, outer radius 2, which is
bounded by z = 1 and z = 4
Cylindrical Cords review:
RRR

Dx

2

Transformation: x = r cos θ

y = r sin θ

z=z

x2 + y 2 + z 2 = r 2 + z 2

Jacobian: dV = r dz dr dθ
LOI : r = [1, 2] ϕ = [0, 2π] z = [1, 4]
Then transform inside, place integration bounds, add jacobian solve
RRR
2)
D x + y dV where D is the region represented by [0, 1] × [π/3, π/4] × [−1, 1] in r − θ − z space.
R
Still cylindrical cords, though need to negate outer given −[π/4, π/3] to correct bounds.

Question 5. Evaluate the following spherical integrals: Recall spherical stuff:
conversion factors:

x = ρ sin ϕ cos θ

y = ρ sin ϕ sin θ
x 2 + y 2 + z 2 = ρ2

z = ρ cos ϕ

Jacobian: dV = ρ2 sin ϕ dρ dθ dϕ
plug into:

ZZZ

f (x, y, z) dV

E

1)

+ y 2 dV , where D is the volume given by the inequalities x2 + y 2 + z 2 ≤ 1 and z ≥ 0
LOI (hard part) know:
• radius = [0, 1]
• Azimuthal/θ spans full region, so its [0, 2π]
• z is bounded by z ≥ 0 → [0, π/2]
RRR
2
2)
D x − y dV , where D is the spherical shell with inner radius 1 and outer radius 2
LOI
• ρ = [1, 2]
• ϕ = [0, π]
• θ = [0, 2π]
RRR
x+y+z
3)
dV where D is the cone given by ϕ ≤ π/4
De
RRR

Dx

2

ρ = [0, 1]
ϕ = [0, π/4]
θ = [0, 2π]
4)

RRR

r
D x dV

where D is the lime wedge given by −π/3 ≤ θ ≤ π/3
π
θ = [− ]
3
r = [0, 1]
z = [0, 1]

Question 6. Set up the following spherical surface areas :
R

1) Consider the sphere of radius 3 and let Σ be the cap made by ϕ ≤ π/3. Set up the integral which
gives you the surface area of Σ Recall spherical stuff (in this case no use formula above)
Formula:

Z Z

dS
D

dS = R2 sinϕ dϕ dθ
LOI : r = 3 ϕ = [0, π/3] θ = [0, 2π]
Z 2π Z π/3
0

32 sinϕ dϕ dθ

0

2) Consider the earth modeled as a sphere of radius 3963 miles, and let Σ be the tropics, which are
defined to be all the points on the surface of the earth between 23.5 degrees above the equator and
23.5 degrees below the equator. Set up the integral that would give you however many square miles
are in the tropics (of both sea and land). (Note: you will need to convert everything to radians for
the calculus to work out) Same general formula,
Question 7. Let S(u, v) = hu, u2 + vi, and let Ruv = [0, 1] × [0, 2]. Plot R = S(Ruv ) on the x − y plane.
What is the area of R?
• Find transformation to map S(u, v) in this case, x = î y = ĵ
R
• We use x-bounded limits 01 jˆ dx, to find y, simply plug in [0, 2] for ĵ.
Z 1

2dx

0

To plot:
• Given only î is constant, we can simply push [0, 1] = u to obtain 2 points;
• ĵ obtains 2 lines by pushing [0, 2] = v, obtain 2 more pts → 4 pts total
Question 8. For each of the following, what are the dimensions of the described objects and what are
the dimensions of the spaces these objects are contained within. Write down the notation for the
corresponding integral which gives you the arc-length/surface area/volume of the region.
(You don’t have to evaluate, you just need to write the correct notation)
Surface Area (where dA is dx dy or whatever):
S=

ZZ q

[fx ]2 + [fy ]2 + 1 dA

D

Parametric form (r(s, t) = hx(s, t), y(s, t), z(s, t)i): The surface area formula is:
S=

ZZ
D

where rs = ∂r
and rt = ∂r
.
∂s
∂t
• S(s) =< s, s + 1 >
• LHS = dim of object
• RHS = dim of space
• So more commas in RHS ++ space
• more vars LHS ++ object

krs × rt k ds dt,

–
• no. of [...] × [...] × ... = #d object
• number of args in g(...) +1 = dimension of space
–
• Say we have x2 + y 2 = 4: 1D object in 2D space
• x2 + y 2 = 4 x − y = 4 -> 0D object in 2D space
• x2 + y 2 + z 2 = 1? 2D in 3D space!
1) The region on the graph of g(x, y) = sin(xy) which lies above [0, 1] × [1, 2] on the x − y plane
2) The inequality x2 + y 2 − z 2 ≥ 1
3d (xyz args) dimension of object, 3d space no.var − 1(+1), whr +1 from ≥
Because ≥ results in unbounded region, it’s ∞
3) The equality 2x2 + y 2 + z 2 = 1
3d dim (xyz args), 2d object frm no.var − 1
4) The set of solutions to the system of equations: x2 + y 2 + z 2 = 1 and x2 + y 2 = z
3d object, 2d space (same as above)
5) The region parameterized by S(s, t) = hs, s + t, s2 + t2 i for 0 ≤ s ≤ 1 and 1 ≤ t ≤ 3
2d object, 3d space
R
Follow Parametric form rules, bounds given alrdy. (Work this out urself later)
6) The region parameterized by r(t) = ht, t2 , t3 , t4 i
1d object, 4d space
arc-len formula
Z b

||r0 (t)||dt

a

Question 9. Line ’s:
Polar cords stuff (whr dA = jacobian):
R

x = r cos θ

y = r sin θ

r 2 = x2 + y 2

dA = r dr dθ
ZZ

f (x, y) dA

D

Line Integral stuff:
• Map transformation formula to inside using
~r (t) = (1 − t) hx0 , y0 , z0 i + t hx1 , y1 , z1 i , 0 ≤ t ≤ 1
or
x = (1 − t) x0 + t x1
y = (1 − t) y0 + t y1 0 ≤ t ≤ 1
z = (1 − t) z0 + t z1
• Break up into separate lines, and individually integrate then add up once finished
•

Z b

f (h (t) , g (t))

v
u
u
t

a

1)

R

dx
dt

!2

dy
+
dt

!2

dt

− y 2 ds where R is the region given by x2 + y 2 ≤ 1 B/c given circle ! need 2 split
• Parameterization of circle, in this case x = cos(t) y = sin(t) given its equal to 1
• Range: −π/2 ≤ t ≤ π/2
• Calculate
v
!
!2
u
u dx 2
dy
||r0 (t)|| = t
+
dt
dt
dt

∂R x

2

R

• dx
= sin2
dt

dy
= cos2 (aft transformation)
dt

Z 2π

cos2 − sin2 dθ

0

2)

R

+ y ds where R is the triangle with vertices (1, 1), (1, −1), (0, −1)
We have 3 lines, whr f (x, y) = x2 + y:

∂R x

2

Z

f (x, y) ds +

L1,2

L1,2 =

Z

f (x, y) ds + . . .

L2,3

x(t)1,2 = (1 − t) · 1 + t · 1 = 1,
y(t)1,2 = (1 − t) · 1 + t · (−1) = 1 − 2t,

→ 12 + (1 − 2t) = 2 − 2t = L1,2 transformation

L2,3 = ...
L3,1 = ...
After transforming, still need to find ||r0 (t)||, this is given by:
dx(t)1,2
dx
=
(1) = 0
dt
dt
dy(t)1,2
dy
= (1 − t2 ) = −2t
dt
dt
Plugging into
v
u
u
t

dx
dt

!2

dy
+
dt

!2

=2

Putting it all tgt we hv:
Z 1
0

3)

R

2

∂R (x − y)

(2 − 2t)(2) dt +

Z b
a

L2,3 ||r0 (t)|| dt + ...

ds where R is the square with vertices (0, 0), (1, 1), (0, 2), (−1, 1)

Question 10. For each vector field V , plot V (with at least 9 vectors), check if V is conservative, and
give the corresponding potential function if applicable. Find Conservative? ∂iˆy = ∂jˆx ? y : n Use following
steps for potentials:
• Find îdx = f (x, y) (this represents our final eq)
• outputs with some +h(y) as constant. Find by taking ∂fy (x, y) = ĵ
R
• take of h0 (y) to find h(y), plug into f (x, y) to find answer.
R

1) V (x, y) = (x2 + y, x − y 2 )
Conservative? Does ∂ îy = ∂ ĵx ? → yes Step 1)
Z

îdx =

Z

x2 + y dx =

x3
+ xy + h(y) = f (x, y)
3

Find h(y):
x3
+ xy + h(y)] = x + h0 (y)
3
x + h0 (y) = x − y 2 → h0 (y) = −y 2

∂y f (x, y) = ∂y [

Finding h(y)
Z

0

h (y)dy =

Z

−y 2 dy = −

Put together:

y3
+C
3

x3
y3
+ xy + − + C
3
3
2) V (x, y) = (x, y)
3) V (x, y) = (y, x)
4) V (x, y) = (y, −x)

Question 11. For each of the following vector fields, find the curl and divergence:
∂P
∂Q ∂R
+
+
∂x
∂y
∂z
~k
~i
~j
∂
∂
∂
curlF~ = ∇ × F~ =
∂x ∂y ∂z
P
Q R
divF~ =

whr PQR → ijk
1) V (x, y, z) = hxy, yz, zxi
2) V (x, y, z) = hx + y, y + z, z + xi
3) V (x, y, z) = h(x + z)2 , (y + x)2 , (z + y)2 i

Question 12. Things to Know:

• Spheres: A sphere of radius r centered at (x0 , y0 , z0 ) can be parameterized using spherical coordinates:


x0 + r sin ϕ cos θ



~r(θ, ϕ) = 
 y0 + r sin ϕ sin θ  , 0 ≤ θ < 2π, 0 ≤ ϕ ≤ π
z0 + r cos ϕ
• Cylinders: A circular cylinder of radius r aligned along the z-axis and centered at (x0 , y0 ):




x0 + r cos θ



~r(θ, z) =  y0 + r sin θ 
,
z

0 ≤ θ < 2π,

z ∈ [zmin , zmax ]

• Circles: A circle of radius r in the xy-plane centered at (x0 , y0 ):




x0 + r cos θ
~r(θ) = 
,
y0 + r sin θ

0 ≤ θ < 2π

Orientation is counter-clockwise for increasing θ.
• Lines: A line through point ~r0 in the direction of vector ~v :
~r(t) = ~r0 + t~v ,

t∈R

Orientation is in the direction of ~v .
~ to point B:
~
• Line segments: A segment from point A
~ + tB,
~
~r(t) = (1 − t)A

0≤t≤1

~ to B
~ as t increases.
Orientation is from A
• Ellipses: An ellipse centered at (x0 , y0 ) with semi-axes a and b:




x0 + a cos θ
~r(θ) = 
,
y0 + b sin θ
Orientation is counter-clockwise.

1) what inequalities look like in cylindrical coordinates
2) What inequalities look like in spherical coordinates

0 ≤ θ < 2π

3) trig integrals

4) how to push points, curves, and regions through parameterizations

</details>
