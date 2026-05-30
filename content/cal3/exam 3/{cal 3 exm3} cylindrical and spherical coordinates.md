---
sch_sem: sp_25
class: compSec
---

# Quiz! 
$$
S(u,v)=<u+2v,2v-u>
$$
1) Jacobian? 
    1) $$\partial u<1,-1>\qquad \partial v<2,2>$$
    2) Take $ad-bc=4$
2) What is area of $\sum u,v$? $\pi$ (what is area of unit circle basically)
3) $$\int \int _{\sum}(1)(1)dS=\int \int _{\sum uv} (1)(4)dA=\int ^{2\pi}_{0}\int_{0}^1  (4r)dr d\theta$$
___

# Introduction to cylindrical cords!
- $x(r,\theta,z)=?$ 
- We just plug in for 

___

# Q1 Spherical 
   $$
   S(r,\theta,\varphi)=<r\sin \varphi \space \cos \theta,r\sin(\varphi)\sin \theta,r\cos \varphi>
   $$
1) What is @param of sphere of rad =3? 
    1) Simply take some $L(\theta,\varphi)$ = $S(3,\theta,\varphi)$
    2) Where sphere has the constraints of $[0,2\pi] \times[0,\pi]$
2) What is the jacobian? 
    1) Take the cross product of both partials for $L_{\theta} \times L_{\varphi}=<-9\sin^2\varphi \cos \theta,-9\sin^2\varphi \sin \theta,-9\sin \varphi \cos \varphi>$ 
    2) || cross_product  || = $9\sin \varphi$
    3) 
3) Setup iterated $\int$ for the surface area 
    1) Finding bounds: $\varphi=\left[ \frac{\pi}{3},\pi \right],\theta=[0,2\pi]$
    2) Plugin to $\int$ below then solve
    3) $$
       \int \int _{D}1dS=\int \int 9\sin \varphi d\theta d\varphi 
       $$
       

____
Went over jacobian of spherical coordinates [lamr edu](https://tutorial.math.lamar.edu/Classes/CalcIII/ChangeOfVariables.aspx). Be comfy doing smtn like the last problem 



___

# Q1
Given some 
$$
\int \int \int_{D} z^2+4 dV   
$$
as some cylindrical transformation using 
$$
dV=r dz \space dr \space d \theta 
$$ With some inner radius =1, outer =3, z=1, z=4. Hence our bounds is for this:
$$
D=[1,3] \times [0,2\pi] \times[1,4]
$$
Plugging in we finally obtain:
$$
\int^{2\pi}_{0} \int_{1}^3  z^2+4 dr \space d\theta
$$
