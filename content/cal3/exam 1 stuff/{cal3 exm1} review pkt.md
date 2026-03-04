---
title: "{cal3 exm1} review pkt"
---

# {cal3 exm1} review pkt

![[cal3/exam 1 stuff/{cal3 exm1} review pkt.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/cal3/exam%201%20stuff/{cal3%20exm1}%20review%20pkt.pdf) | [Download Local](/cal3/exam%201%20stuff/{cal3%20exm1}%20review%20pkt.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

Exam 1 Review

This Exam will be on February 13th at the beginning of class time, 10:30 am until 11:45 am. You
are allowed a non-graphing calculator without CAS (computer algebra system). You are also allowed both
sides of a standard sized printer paper (like all the worksheets) as an equation sheet. This sheet must be
handwritten (with pen or pencil). It cannot be typeset or have printed equations. Your equation sheet will
be turned in with the exam, so it must have your name in the top left corner.

1. What are the areas of the following triangles? Are they degenerate?
(a) The triangle given by points (1, 1, 1), (1, 3, 0), (3, 0, 1)
• Obtain 2 vectors ⃗v , w
⃗ from the given points. Then ⃗v = ⟨0, −2, 1⟩ and w
⃗ = ⟨−2, 3, −1⟩. (if
given vect + pt, compare pt 2 vect to make second vect).
• We use area of parallelogram by 1/2 to find area:
• magnitude of cross product of both vectors → ans = 0?T : F
2. Answer the following:
(a) what is the angle between ⟨1, 1, 1⟩ and ⟨−1, −2, 5⟩
v·w
• Use formula cos(θ) = ||v||||w||

• then simply plug in for both vectors and solve for theta
(b) Which of the following are orthogonal to each other? ⟨1, 1, −1⟩, ⟨2, −1, 1⟩, and ⟨3, 2, −4⟩
• Orthogonal means when dot product = 0, so take dot of both vectors differently, find out
which is 0 and solve.
3. Let v⃗x = ⟨1, 1 + x⟩ and let w
⃗ = ⟨2, 2⟩
(a) Find an x such that the angle between the two vectors is 30 degrees
• Start with same formula for solving angle between 2 vectors (see (2a)
• So we obtain: cos(30) = √ 4+2x 2 √ , solve for x to get ans
1+(1+x)

8

(b) How fast is the angle between the two vectors changing when x = 5?
• Asking essentially how fast is θ′ changing? We take the derivative of (2a) (don’t plug x=5
yet)
• AFt obtain rslt, plug in x=5.
(c) What is the limit of the angle as x goes to positive infinity?
• limx→∞ (2aF ormula)
4+2x
• aka: limx→∞ (arccos( √8+8(1+x)
)
2
⃗ v
• aka limx→∞ arccos( ||⃗vw·⃗
||||w||
⃗ )

4. Create an orthonormal coordinate system with one vector parallel to ⟨2, 2, −1⟩. Write the vectors î, ĵ,
k̂ as linear combinations of the vectors of this coordinate system.
• Steps to create ONCS (we need n vectors for n dimensions): Normalize given vector, Normalize the
perpendicular vector (found by taking cross product of some dummy vect that’s still perpendicular
to og vect). Find cross product of both of those vectors.
• to write as a linear combo simply display î = first element of each 3 vectors ...
5. Create the following lines:
(a) Given points (1, 1) and (2, 1); answer in equation form
Just find slope y − y/x − x → 0, then y=1
(b) Given points (−1, 1) and normal vector (1, 1); answer in parametric form
Use form L(t) = t⃗v + P , where P = (-1,1), t = vect
(c) Given tangent vector ⟨−1, −2⟩ and point (1, 0); answer in function form
• use y = mx + b, where tan vect is m = y/x where y&x are from the tan vect.
• Input using point slope formula.
6. Create the following planes:

(a) Given three points (1, 1, 1), (−1, 1, 0), (1, 0, 1); answer in equation form
• Create 2 vec
• Take cross product of them
• Plug into EQ form-¿ −x + 2z = 1 (from i,j,k)
(b) Given two tangent vectors ⟨1, 1, 1⟩ and ⟨−1, 1, −1⟩, and given the point (0, 0, 0); answer in function
form
• Cross product of both, plug in with P → îx0 , ĵy0 ...
• throw into func form (x,y,z each = ...)
(c) Given a normal vector ⃗n = ⟨1, −1, −1⟩ and the projection of a point in the plane onto the normal
vector: projn (P ) = 1 (Hint: what is the definition of the scalar projection?)
• Scalar Projection formula: proj⃗n(p)= ⃗n·p
|⃗
n|

• Then we can plug in for what we know, that projection is 1 and ⃗n to obtain:
• ⃗n · p = ||⃗n||proj⃗n(p)
7. Parameterize five distinct lines which pass through the point (1, 2, 3).
• We can @param 5 diff ways: sin/cos, line, circle, ellipse, parabola
• sin/cos: x = x0 + f1 (t), where fi (t) =
• line: x = x0 + at, a = vector î
• circle: x = x0 + a(t), y = y0 + rcos(t), z = z0 + rsin(t), same from line
• ellipse: Same as cricle but r is different for cos and sin
• parabola: Same as linear but one is tn and the reast are t1
8. Parameterize the following circles:
(a) The circle of radius 5 centered on (1, 1) oriented clockwise
• clockwise circ: r < sint + x, cost + y >, r = radius
(b) The circle of radius 1 which passes through the point (1, 1)
• use x,y cords to pass thru
(c) The circle of radius 4 which is centered on the origin and has constant speed 6
• Take eq of 4(a), take magnitude(derative) = 4, then 4r(6t/4)
9. Parameterized 3 distinct parabolas passing through (1, 0).
• Literially any func to pass thru this point
• can be a generalized < t + c, tn − c >, c = const as long as fits the line
10. What are the singular points of r(t) = ⟨t3 , t(2/3) ⟩. What is the slope as a function of t?
• Take r′ (t) = 0, solve for both t’s in sys of EQ to get singular pt
• to find slope, simply put x over y, and use that as ans
11. Set up the arc-length integral for r(t) = ⟨t + 1, t + 1, t2 + 1⟩ between the points (2, 2, 2) and (0, 0, 2).
Your bounds should be numbers.
Ra
• Formula for arcLen: b |s(t)|dt, where s = r′ (t) (as speed) (s is trivial to find)
• Hard part is finding bounds, to do so:
12. Find the intersections in r1 (t) = ⟨t + 1, t + 2⟩ and r2 (t) = ⟨t2 + 2t + 2, t2 + 2t + 3⟩. Did you find any
collisions?

• Intersect: r1 (t) = r2 (s): Set each component of r1 = r2 then solve as a SoE, whr solution = some
s
• Collide: r1 (t) = r2 (t): Js solve for t
13. At what time (if any) does the parameterization r(t) = ⟨t, 2t+1, 2t⟩ intersect with the surface f (x, y) =
x2 − y 2 (Hint: you learned this for equations, so you might want to change the surface to a different
form).
• Know surface is f(x,y) must be z to consist all points of surface
• z = x2 − y 2 , sub r(t) components into the z EQ, and solve for t.
• Final answer is whatever t equals
14. What is the intersection of the two planes 2x + y + z = 1 and 3x + y − z = 1.
• Setup SoE by subbing z for t and solve for x&y to get ans
• eg. 2x + y + t − 1 = 0 and 3x + y − t − 1 = 0 would be both EQs, then solve
• Answer is then f (t) = [p1, p2, p3] + t ∗ [x, y, z], where xyz is from output of SoE, p1-3 are values
not binded with t, and xyz are, eg.
• x = −6 + 7t, y = 4 − 4t then: (x, y, z) = (−7 + 7t, 4 − 4t, t) = (−7, 4, 0) + (7, −4, 1)t
15. Let f (x, y) = 2x2 +y+xy 2 . Let r(t) = ⟨et , 2et ⟩. Compute the limit of f along r at the point P = (e, 2e).
• sub ⃗r into f (x, y) and eval lim @ t=1 aka f (⃗r(1))
• Works b/c computing lim along curve and ! a 2var lim, the func is a single var func.
16. Let f (x, y) = 2x2 + y + xy 2 . Let r(t) = ⟨et , 2et ⟩. Compute the derivative of f along r at the point
P = (1, 2).
• Derative of f along r at p:
d
1
• dt
f (r(t))t0 · f ′ (t
0)

• plug in everythn -¿ good
17. Let f (x, y) = xe1/y . What are fx (x, y) and fy (x, y)?
• We just treat x&y as constants then derive for each, some cal2 stuff review

</details>
