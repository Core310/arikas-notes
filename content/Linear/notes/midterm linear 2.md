---
class: MATH3333 Linear Algebra
Type:
  - class
sch_sem: sp_26
---

# 2.2 More complex algebraic operations
### $\times$ (dot product)
$$(p \times n) \times (n \times q)$$
inner row/col must match between both matricies (where () denotes a matrix)

![[Pasted image 20260210232442.png|700]]


$$\begin{bmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \end{bmatrix} \times \begin{bmatrix} 7 & 8 \\ 9 & 1 \\ 2 & 3 \end{bmatrix} = \begin{bmatrix} 31 & 19 \\ 85 & 55 \end{bmatrix}$$

(where ||..|| = sizeOf)

1) **Check form**: Inner numbers (`||columns||` first matrix = `||row||` of second). Formally (row,col) {matrix_1, matrix_2}
$$(m \times \mathbf{n}) \cdot (\mathbf{n} \times p) = (m \times p)$$
2) multiply matching members based on above per index. So $(0,0)$ (row 0, col 0) yields:
$$(1, 2, 3) \cdot (7, 9, 11) = 1 \times 7 + 2 \times 9 + 3 \times 11 = 58$$
Then $(1,0)$ (row 1, col 0) would be $m_{1} r_1 \times m_{2} c_{1}=c$ for c=const. And so on..
- see also [exam 1 gen notes {cal3}](https://core310.github.io/arikas-notes/cal3/exam-1-stuff/lecture-notes/exam-1-gen-notes-%7Bcal3%7D) for more general vector operations (not tested on)
### Dividing
We multiply by inverse instead of dividing (theres no such concept of dividng!).
$$A / B = A \times (1/B) = A \times B^{-1}$$
for a,b = matrix. **TLDR**: 
$$A / B \implies A \times B^{-1}$$

> [!Warning] Conditions:
> Due division sharing both inverse AND multiplication must meet following conditions:
> - B MUST be a squared matrix. 
> - ||row of A|| = ||col of B|| 

#### Inverse matrix 2d
For 2d it's not too hard:


$$A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$$

Then inverse is TWO  changes:

$$A^{-1} = \frac{1}{ad-bc} \begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$$

### Inverse matrix 3d (Gauss-Jordan)
However for 3d we have to work a little more. Say working on square matrix $A$:

1) Take identity matrix of the matrix we're operating on 
2) add it to the RHS (augmented split matrix, A on LHS, I on RHS)
3) make the LHS (A) reduced REF 
4) answer is the RHS matrix 

> [!Error] IF:
 you hit a point where an entire row of zeros appears stop. Means that det(A) =0 and cannot be inverted!

- see also: see also [Inverse of a Matrix using Elementary Row Operations (Gauss-Jordan)](https://www.mathsisfun.com/algebra/matrix-inverse-row-operations-gauss-jordan.html)
- see also 2d:  [Inverse of a Matrix](https://www.mathsisfun.com/algebra/matrix-inverse.html) 

#### Inverse coeff matrix:
Invert matrix coefficients; 
1) invert -> use LHS
2) simplify LHS (take out any fractions)
3) set = to x/y/z per row)
$$
\frac{1}{5} 
\begin{bmatrix} 
9 & -14 & 6 \\ 
4 & -4 & 1 \\ 
-10 & 15 & -5 
\end{bmatrix} 
\begin{bmatrix} 
1 \\ -1 \\ 0 
\end{bmatrix} 
\Rightarrow 
\begin{cases} 
\frac{1}{5} (9 + 14 + 0) = 23/5 = x \\ 
\frac{1}{5} (4 + 4) = 8/5 = y \\ 
\frac{1}{5} (-10 - 15) = -5 = z 
\end{cases}
$$
hence that's our answer! **2 b confirmed??**




### Transpose
Swap row - column

$$\begin{bmatrix} 6 & 4 & 24 \\ 1 & -9 & 8 \end{bmatrix}^T = \begin{bmatrix} 6 & 1 \\ 4 & -9 \\ 24 & 8 \end{bmatrix}$$

Some theroms:
$$\begin{gather} 1) \ (A^T)^T = A \\ 2) \ (kA)^T = kA^T \\ 3) \ (A+B)^T = A^T + B^T \end{gather}$$

- *square matrix* if $A^T = A$ 

Example:
$$\left( 2A^T - 3 \begin{bmatrix} 1 & 2 \\ -1 & 1 \end{bmatrix} \right)^T = \begin{bmatrix} 2 & 3 \\ -1 & 2 \end{bmatrix}$$
- Then $2A^{TT}=2A$ and transpose second matrix. Then add RHS matrix to LHS (treating it like a variable) then dividing to get final answer.


# 2.6 Linear Transformations
We treat $T$ as some unknown function($\vec{v}$) returns some $\vec{r}$ where out matrix is determined by:
- ||cols|| = no. inp vars (x,y,…) 
- ||rows|| = out components in rslt vec.




**Requirements**:, func $T$ $\forall$ vec $\mathbf{u}, \mathbf{v}$ \& scalar $k$:
TLDR: 
- follow form ax +cb 
	- where a,c are constants
- No exponents or constants (being added) {so no +2 }
- Only addition allowed

1. Additivity: $$T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$$
2. Scalar Multiplicity:
$$T(cu)=cT(u)$$


## Showing T is not linear transformation
In each case show that $T:\mathbb{R}^{2}\rightarrow\mathbb{R}^{2}$ is not a linear transformation.
$$T \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} xy \\ 0 \end{bmatrix}$$
Then; break one of the requirements above like so:

# 3.1 determiants
Det(a) denoted as $|A|$
## det(A), 2x2 matrix
$$
\begin{vmatrix} a & c \\ b & d \end{vmatrix} = ad - cb
$$


## |A| 3x3 matrix beyond (aka Cofactor Expansion Theorem)
$$
\begin{vmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{vmatrix} = a_{11} \begin{vmatrix} a_{22} & a_{23} \\ a_{32} & a_{33} \end{vmatrix} - a_{12} \begin{vmatrix} a_{21} & a_{23} \\ a_{31} & a_{33} \end{vmatrix} + a_{13} \begin{vmatrix} a_{21} & a_{22} \\ a_{31} & a_{32} \end{vmatrix}
$$
each $R_0$ element, diagonal without that row. You `-` then `+` each sub matrix. 

- [lamr edu](https://tutorial.math.lamar.edu/classes/de/la_matrix.aspx)
- [mathisfun link](https://www.mathsisfun.com/algebra/matrix-determinant.html)

## General matrix properties 
$$C = \begin{bmatrix} 4 & 0 & 7 & 0 \\ 0 & 0 & -3 & 0 \\ 1 & 2 & -2 & -1 \\ 3 & 1 & 4 & 5 \end{bmatrix}$$
$$\begin{bmatrix} + & - & + & - & + \\ - & + & - & + & - \\ + & - & + & - & + \\ - & + & - & + & - \\ + & - & + & - & + \end{bmatrix}$$



## properties of determinants (det rule set)
basic matrix operations:
- SWAP two rows negates det: $-$det(A) (multiply by -1)
- Multiplying row by constant k **multiplies** determinant by k. 
- ADDING 2 rows **does !change** the determinant.

det = 0
- row/column entirely 0
- 2 row/col = 2 e/o
- 1 row scalar multiple of another
- Inverse: $\det(A^{-1}) = \frac{1}{\det A}$
- Transpose: $\det(A^T) = \det A$
    
- Power: $\det(A^k) = (\det A)^k$

## Using det() determine when ! invertable

$$A = \begin{bmatrix} c & 1 & 1 \\ 1 & -c & 1 \\ 1 & 1 & 1 \end{bmatrix}$$
Square matrix `!` invertible IFF det = zero. So if given mat w/ 1 const \& want 2 know when ! invertable? 
1) Solve for det like usual
2) set det = 0
3) answer = whatever c=0 is.

## 3.1.7: Given det(A)=b; find det(C) =?

If $\det \begin{bmatrix} a & b & c \\ p & q & r \\ x & y & z \end{bmatrix} = -1$, compute:

$\det \begin{bmatrix} -x & -y & -z \\ 3p+a & 3q+b & 3r+c \\ 2p & 2q & 2r \end{bmatrix}$

1) turn first det(A) matrix into det(B) matrix
2) save each elementary step used 
3) apply it to result using ruleset below






# 3.2 More Determinants + Matrix Inverses




# Hw5 2.6 + 3.1
## Q1 (2..62): Let $T:\mathbb{R}^{4}\rightarrow\mathbb{R}^{3}$ be a linear transformation.
Find $T \begin{bmatrix} 1 \\ 3 \\ -2 \\ -3 \end{bmatrix}$ if $T \begin{bmatrix} 1 \\ 1 \\ 0 \\ -1 \end{bmatrix} = \begin{bmatrix} 2 \\ 3 \\ -1 \end{bmatrix}$ and $T \begin{bmatrix} 0 \\ -1 \\ 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 5 \\ 0 \\ 1 \end{bmatrix}$.

First 3 $R^4$ vectors are `C,A,B` respectively
1) I'm finding scalars that make $aA + bB = C$
2) Using those scalars with the R^3 vectors to find our answer?

## Q2&3: Therom 2.6.2 to obtain matrix A of T
Use Theorem 2.6.2 to obtain the matrix $A$ of the transformation $T$. Assume $T$ is linear.
$T:\mathbb{R}^{3}\rightarrow\mathbb{R}^{3}$ is reflection in the $y-z$ plane.

1) Identify matrix
2) For y-z plane, only the first row is negated, so $-R_1$ applied to ID matrix is our answer. 

## Q4: Show $T$ is either reflection in a line or rotation through an angle, and find the line or angle.
for given $2 \times 2$ matrix $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$
- rotation: a=d 
- reflection: a = -d 
- neither projection/stretch

$$T \begin{bmatrix} x \\ y \end{bmatrix} = \frac{1}{\sqrt{2}} \begin{bmatrix} x + y \\ -x + y \end{bmatrix}$$ 
Then we can make matrix A as simply the matrix of both rows:
$$
A = \frac{1}{\sqrt{2}} \begin{bmatrix} 1 & 1 \\ -1 & 1 \end{bmatrix}
$$
(as we literially take the inp matrix to out)


# Hw4
## Problem types:
- 

## 2.5 Factoring as product of elementary matricies: (HW4 Q9)
Factor A as product of elementary matrix:
$$
A = \begin{bmatrix}
2 & 3 \\
1 & 2
\end{bmatrix}
$$
1) Convert A into an identity matrix (I) using basic matrix operations
2) Save each "step" used in these operations
3) Apply the INVERSE of each step and save the resultant
4) Then our "answer" is the sum of all inversed matricies
$$
B = E_0 E_1 \dots E_i
$$
as separate matrices (B being arbitrary matrix)

Hence for A: 
-  $E_1$ uses operation $R_1 \leftarrow R_1 - R_2$. Performing on ID matrix we have:
$$E_1 = \begin{bmatrix} 1 & -1 \\ 0 & 1 \end{bmatrix}$$
Then the inverse is: $E_1^{-1}$ would be the operation $R_1=$ $R_1 + R_2$ on an identity matrix as so (so we could just do this step). 
$$E_1^{-1} = \begin{bmatrix} 1 & 1 \\ 0 & 1 \end{bmatrix}$$
Go on until the original matrix $A$ is an identity matrix, always start with a new identity matrix for row operations. Each $E_i$ step is done on a fresh identity matrix
### Q9 (again): Factor $A$ as a product of elementary matrices.
$$
A = \begin{bmatrix} 2 & 3 \\ 1 & 2 \end{bmatrix}
$$
1. Reduce $A$ to $I$ using row operations.
2. Write down the inverse of each operation as an elementary matrix.    
3. Place them in order: The inverse of your _first_ operation goes on the far left; the inverse of your _last_ operation goes on the far right.

 4) step 2: ($R_2 - 2R_1 \to R_2$)
 On the inverse it's $R_2=R_1+2R_2$
 $$E_2 = \begin{bmatrix} 1 & 0 \\ -2 & 1 \end{bmatrix}$$


### Applying row inverses during elementary matrix factoring
- Row replacement ($R_i \leftarrow R_i + cR_j$): The inverse is $R_i \leftarrow R_i - cR_j$. You simply change the sign of the scalar $c$.
- Scaling ($R_i \leftarrow kR_i$): The inverse is $R_i \leftarrow \frac{1}{k}R_i$. You multiply by the reciprocal of the scalar $k$.
- Swapping ($R_i \leftrightarrow R_j$): The inverse is the same operation, $R_i \leftrightarrow R_j$. Swapping them again puts them back where they started.

## Q4: express the variables $x_{1}$, $x_{2}$, and $x_{3}$ in terms of $z_{1}$, $z_{2}$, and $z_{3}$ **hard**
Given $A$
$$
\begin{bmatrix} x_{1} \\ x_{2} \\ x_{3} \end{bmatrix} = \begin{bmatrix} 3 & -1 & 2 \\ 1 & 0 & 4 \\ 2 & 1 & 0 \end{bmatrix} \begin{bmatrix} y_{1} \\ y_{2} \\ y_{3} \end{bmatrix}
$$
and $B$
$$
\begin{bmatrix} z_{1} \\ z_{2} \\ z_{3} \end{bmatrix} = \begin{bmatrix} 1 & -1 & 1 \\ 2 & -3 & 0 \\ -1 & 1 & -2 \end{bmatrix} \begin{bmatrix} y_{1} \\ y_{2} \\ y_{3} \end{bmatrix}
$$
express the variables $x_{1}$, $x_{2}$, and $x_{3}$ in terms of $z_{1}$, $z_{2}$, and $z_{3}$.

Expressing A given B:
$$
\begin{gather}
z=By \rightarrow y= B^{-1}z
\\
x=AB^{-1}z
\end{gather}
$$
1) Find inverse of $B$ (we only care about the centre) (-m aug matrix with ID matrix -> solve for LHS = R-REF)
2) Multiply $AB^{-1}=C$ then set matrix of X's = C

## Q5: If $c \neq 0$, find the inverse of matrix A
If $c \neq 0$, find the inverse of
$$
A= \begin{bmatrix} 1 & -1 & 1 \\ 2 & -1 & 2 \\ 0 & 2 & c \end{bmatrix}
$$
in terms of $c$.
- Just find inverse as usual
- only factoring in C as some var

## Q6: Find an elementary matrix $E$ s/t $B = EA$.
$$A = \begin{bmatrix} -1 & 1 \\ 1 & -1 \end{bmatrix}, B = \begin{bmatrix} -1 & 1 \\ -1 & 1 \end{bmatrix}$$

1) Gather row operations to **make A into B**
2) Apply each row operation unto an Identity Matrix -> `E`. In this case should just be one operation
3) $E \times A = B$ to confirm our answer (If E is right)

So first step would be on mat `A`, $R_1 = R_1 - R_0$ (do on I)
$$-R_1$$

$$\implies \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} \implies \underbrace{\begin{bmatrix} -1 & 0 \\ 0 & 1 \end{bmatrix}}_{E} \times \underbrace{\begin{bmatrix} -1 & 1 \\ 1 & -1 \end{bmatrix}}_{A} = \begin{bmatrix} -1+0 & 1 \\ -1 & 1 \end{bmatrix} = \underbrace{\begin{bmatrix} -1 & 1 \\ -1 & 1 \end{bmatrix}}_{B}$$
### Q7: Find elementary matrices $E_{1}$ and $E_{2}$ such that $C = E_{2}E_{1}A$.
Same manner here, but instead its 2 steps to make A into B. Then $E_i$ is always performed on a fresh ID matrix

## Q8: find invertible matrix $U$ such that $UA = R$ is in R-REF + express U as product of elementary matricies
In each case find A in reduced row-echelon form, and express $U$ as a product of elementary matrices.

$$
A = \begin{bmatrix} 1 & 2 & 1 \\ 5 & 12 & -1 \end{bmatrix}
$$

1) Make $A$ into R-REF as an augmented matrix (identity matrix added). 
2) Save all the steps when turning into R-REF, and apply each step separately to an identity matrix. 
3) Answer is combination of resultant matricies. (Note **no inverting** each $E_i$ this time!)


So $E_{1}$ would be $R_2 \to R_2 - 5R_1$
$$E_1 = \begin{bmatrix} 1 & 0 \\ -5 & 1 \end{bmatrix}$$
and for A we would now have:
$$\begin{bmatrix} 1 & 2 & 1 \\ 5 - 5(1) & 12 - 5(2) & -1 - 5(1) \end{bmatrix} = \begin{bmatrix} 1 & 2 & 1 \\ 0 & 2 & -6 \end{bmatrix}$$
Then we would repeat, applying the exact steps to get R-REF and applying said step to a new ID matrix. Then our answer is:
$$U = E_3 E_2 E_1 A$$
(Where A and $E_i$ is filled in)

