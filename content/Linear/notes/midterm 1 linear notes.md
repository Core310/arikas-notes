---
class: MATH3333 Linear Algebra
Type:
  - class
sch_sem: sp_26
---
# 1.1 SoLE1
Generally we define a single SoLE like
$$
a_{1 } x_{1} + a_{2} x_{2} + \dots + a_{n} x_{n} = b
$$
$n$ = unknowns, $a, b$ are known (coefficients). collection of > 1 linear eq =  *sys of linear eq*. 

We know we can solve a SoLE for 1 var by setting 1 to = the other like:
$$
\begin{gather}
7x_{1}-\frac{5}{9}x_{2}=-1
\\
6x-8y+10z=3
\\
\text{then solve eq for 1 of 2 unknowns, this case first eq:}
\\ x_{1}=\frac{5}{63}x_{2}-\frac{1}{7}
\\
\text{we know then general solution for } t  \in \mathbb{R}
\\
x_{1}=\frac{5}{63}t-\frac{1}{7} \ \  \ \ \ \ \ \ x_{2} = t
\end{gather}
$$
(For better example c p.28)
## Matricies

These SoLE can be represented as a matrix as such:
$$
\left[ \begin{array}{cc|c} a_{11} & a_{12} & b_{1} \\ a_{21} & a_{22} & b_{2} \end{array} \right]
$$
In this case, we have an *augmented matrix*, basically a matrix with coefficients and a constant column. We treat each column as a variable ($x_1$ = col 1, $x_2$ = col2) and the last column as a constant value. So the first row would be  equiv to:

$$
x_1 a_{11} + x_2 a_{12} = b_1
$$
and the row after that viceversa. 

*Free varaible* is a varaible which can be assigned if it's column doesn't have a leading 0.
$$
\left[ \begin{array}{cccccc|c} 1 & -2 & 0 & 2 & 0 & 1 & 1 \\ 0 & 0 & 1 & 5 & 0 & -3 & -1 \\ 0 & 0 & 0 & 0 & 1 & 6 & 1 \\ 0 & 0 & 0 & 0 & 0 & 0 & 0 \end{array} \right]
$$
In this case column 2,4,6 would all be "free" meaning $x_2=r,x_4=s,x_6=t$, whereas $x_1$ would simply be the reduced form as an equation. 
### Linear Combos {1.3}  (formally defining the matricies we solve)
We can represnet each column of a matrix as a vector $\vec{v}=col_{1}$. So combining these we can get a linear combination eg. 
$$
\vec{v_{1}} + \vec{v_{2}}
$$
For example:
$$
c_1 \begin{bmatrix} 1 \\ 0 \\ 1 \\ 0 \end{bmatrix} + c_2 \begin{bmatrix} 2 \\ 3 \\ 0 \\ 1 \end{bmatrix} + c_3 \begin{bmatrix} 1 \\ 1 \\ 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 7 \\ 10 \\ 3 \\ 6 \end{bmatrix}
$$

We would find each constant which is exactly the same as gaussian elim / REF. 

## Formal defition of Linear Combinations:
Linear combinations are esentially what we've been solving all along, its just a term change. We treat each row as its own vector, 


suppose you want to see if $a = \begin{bmatrix} 7 \\ 11 \end{bmatrix}$ is a linear combination of $w_1 = \begin{bmatrix} 1 \\ 2 \end{bmatrix}$ and $w_2 = \begin{bmatrix} 1 \\ 3 \end{bmatrix}$.

you  then have:

$c_1 \begin{bmatrix} 1 \\ 2 \end{bmatrix} + c_2 \begin{bmatrix} 1 \\ 3 \end{bmatrix} = \begin{bmatrix} 7 \\ 11 \end{bmatrix}$

1) merge w_1 all the vectors (w_i) into one matrix, then treat each column with their own variable. 
2) Then we can solve (ignoring our "new" variables) by genearting special 

___
# 1.2 Gaussian Elim & REF/RREF
#### Row Echelon Form (REF)
First non-zero column becomes the first "leading 1" (L1). Then for each non-zero column after that which there's a number `n` digonally (1Right 1Down) becomes the next L1. With [[midterm 1 linear notes#Gaussian elim | Gaussian Elim]], we then must make all non-0 numbers below each L1 = 0. We do this until there are no more such L1. 


Formally:

K x L matrix, all non-zero rows contain a pivot (all values to its left = 0) and all its zero rows are located below the non-zero rows. Has following properties
1) All pure 0 rows @ bottom
2) e/a non 0 element is leftmost entry (called *leading 1s*)
3) each leading 1 is right of all leading 1s in row above


##### Reduced REF
When the 0s are also ontop instead of just below all leading 1's

## Gaussian elim:
Algo to solve SoLe. We can use *elementary operations* to solve them. See p.28 of txtBook for example, for a bit more complex p.34

*elementary operations* (p.27)
- interchange 2 rows (row swap)
- multiply (hence also divide) 1 row by non 0 number (mod row via )
- add a multiple of on row onto a different row

### Formal steps
Step 1: Scan Left to Right
- Look for the first column that is not all zeros.
- This is your current "Pivot Column."

Step 2: Get a Leading 1
- You need a $1$ at the top of this column.    
- If there is a $0$ at the top, **SWAP** with a row below that has a non-zero number.
- If the number at the top is not $1$ (e.g., $3$ or $-1$), **DIVIDE** the whole row by that number (or multiply by its reciprocal).

Step 3: Eliminate Below 
- Use row operations to turn every number **below** your leading 1 into a $0$. (Current leading 0 should **only** have a 0 below it).
- Formula: $R_{below} \rightarrow R_{below} - (value) \times R_{pivot}$.

Step 4: Repeat
- Ignore the row you just finished (the top row).
- Move your attention to the sub-matrix starting immediately below and to the right.
- Go back to Step 1.

### Finding solutions to Matricies
1) put into REF
2) decompose into sys of linear EQ
3) solve for each variable

## Rank of matrix:
Basically how many leading 1's there are in REF matrix.
![[Pasted image 20260128113246.png]]
If there was a 1 in place of row 2 or 3's 0, then the rank would be A = 3 


- *Leading variables*:
- We call a SoLE *consistent* if has atleast one solution. 
	- hence a *inconsistent* SoLE has no solution

### Therom 1.2.2 (ask abt this later..) p.38
SoLE with `m` eq, `n` vars is consistent & rank of augmented matrix is `r`. 
1) Set of solutions involves `n-r` parameters
2) `r < n`? infinitely many solutions 
3) `r=n`? unique solution (one)

# 1.3 Homogenous Eq & Linear Combinations
Eqs whr all constant terms = 0 (eg. $A\mathbf{x} = \mathbf{0}$) . is always **consistent**

2 types of solutions;
- trival: all vars = 0 
- non-trivial; more unknowns than eq


# 2.1 Matrix Algebra
## 2.2 MATRIX OPERATIONS
Some basic terms first:

- matrix = 2d array
- $(i,j)$, i=row, j=col
- $1 \times n$ matrix = row matrix, vice versa. $n \times n$ = square matrix

### +/-
its **impossible** to add matricies of different sizes

$$
\begin{bmatrix} 3 & 8 \\ 4 & 6 \end{bmatrix} + \begin{bmatrix} 4 & 0 \\ 1 & -9 \end{bmatrix} = \begin{bmatrix} 7 & 8 \\ 5 & -3 \end{bmatrix}
$$
basically $a_0(i,j) - a_1(i,j)$


# Questions
- Does REF leading 1's must be 1? 
	- I know this is the case for RREF
- For REF, does the first leading one have to be in the first row? 
- Wait so why are linear combos onlyt defined later on if that's what we've been solving?



# Homework notes
## Hw1:
1.2.2: Find all solutions in parametric form,
$$
3x - y + 2z = 5
$$
 Basically treat 2 of the variables as a free var and solve for the others (we can form 3 ways to solve and pick any 2:  xy & yz & xz for free vars). Hence rebind, for example with xz
$$
y = 3s + 2t - 5
$$

and just solve for said variable.
## Hw2: 
There are several so-called direct proofs we need to solve in the homeworks. For ex, a lot of the first few were just defining sm variables like: 
- `If a row operation is applied to a homogenous system, the new system is also homogeneous.` then we would just define what the system is and show that it's impossible for the last column to be 0 no matter the operation and thus keeps same property

- show if linear combo
	- when in doubt REF -> Solve vars. True? 



