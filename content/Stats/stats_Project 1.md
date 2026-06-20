---
sch_sem: fa_25
class: stats
---
Make a function called ntickets(N,gamma,p) that does the following:

- calculates the number of tickets to be sold when the number of seats in the flight is N and the probability of a "show" is p and gamma is the probability a plane will be truly overbooked (more people show than there are seats). 
- You will do this in two ways:
    - Use solely the appropriate discrete distribution
    - Use the normal approximation
- Prints a named list containing nd, nc, N, p and gamma - where nd is calculated using the discrete distribution and nc is the same calculated with normal approximation.
- Creates a plot of Objective function Vs n, the objective function can be constructed from the defining equation by simply making the equation equal zero -- example 1-gamma-pnorm(...) = 0. The left-hand side can be called an objective function. Make two of these -- one for the discrete and one for the continuous case.
