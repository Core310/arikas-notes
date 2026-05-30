---
class: MATH3333 Linear Algebra
Type:
  - class
sch_sem: sp_26
---
[Linear Algebra - Spring 2026](https://canvas.ou.edu/courses/462035)
# 3.3
Key takeaway is that these processes tell us things, but we already know how to do each step. Hence, most of 3.3 is just introducing new algos that we follow to get some answer.
## eigenvalues/eigenvectors etc
For some square matrix A, an Eigenvector and Eigenvalue make following statement true:
$$
\underbrace{A}_{\text{Matrix}} \underbrace{\mathbf{v}}_{\text{Eigenvector}} = \underbrace{\lambda}_{\text{Eigenvalue}} \underbrace{\mathbf{v}}_{\text{Eigenvector}}
$$
So it's some scalar that makes original vector equal to another scalar with value.

### eigenvalues: 
Basically trying to find the following:
$$(A - \lambda I)v = 0$$
s/t A original vector, v eigen vector, gamma is just a variable.

1) Find $A - \lambda I$
2) Find det of last step: $|A - \lambda I|$ (aka find the Characterisitc polynomial)
3) Set last step =0 and solve  for $\lambda$ 

We say the Characterisitc polynomial is:
$$
f(\lambda)= \det(A - \lambda I)
$$
### eigenvectors
Using the eigenvalues $\forall \lambda$, we simply plug them into $(A - \lambda I)v = 0$.
 That gives us a solution for x or y, eg.$x=-3y$, treating that as a function.

Simply put $x=-3y$ thru a 1 \ 1 matrix and get answer.

### invertible matricies
Means must sat following:
$$AB = I_n  \ \ \   BA = I_n$$
### invertible matrix from these:

### example on 2x2 matrix
$$A = \begin{bmatrix} -6 & 3 \\ 4 & 5 \end{bmatrix}$$
#### Eigen value 
isn't that hard following the same steps:

Finding $A - \lambda I$ isn't hard (note we can skip the minus part and just show the resultant).
$$\begin{bmatrix} -6 & 3 \\ 4 & 5 \end{bmatrix} - \lambda \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix} = \begin{bmatrix} -6-\lambda & 3 \\ 4 & 5-\lambda \end{bmatrix}$$
Finding the det of above with ad-bc:
$$
\begin{gather}
(-6-\lambda)(5-\lambda) - (3 \times 4) = 0
\\
\lambda^2 + \lambda - 42 = 0
\\
(\lambda + 7)(\lambda - 6) = 0
\\
\lambda = \{-7,6\}
\end{gather}
$$
Hence eigenvalues($\lambda$) are -7,6.

#### EigenVector
Then we simply plug $\lambda$ in for $(A - \lambda I)v = 0$, then $\lambda = 6$ in our case so:
$$\begin{bmatrix} -6 - 6 & 3 \\ 4 & 5 - 6 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$$
- Top row: $-12x + 3y = 0$ 
- Bottom row: $4x - y = 0$

$$4x - y = 0 \implies y = 4x$$
Knowing the eigenVector is just producing some direction in an infinite place we pick the most simple vector. Aka identity matrix where $y = 4(1)$ given $x=1$
$$v = \begin{bmatrix} 1 \\ 4 \end{bmatrix}$$

Same thing for the other eigenVector, this time $\lambda=-7$ 

$\begin{bmatrix} -6 - (-7) & 3 \\ 4 & 5 - (-7) \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}$

which gives us:
- $1x + 3y = 0$
- $4x + 12y = 0$

or $x = -3y$. For an input of $\begin{bmatrix} 1 \\ 1 \end{bmatrix}$ we would get an output of
$$
\begin{bmatrix} -3 \\ 1 \end{bmatrix}
$$
giving both eigen vectors. We have to do for each eigenvalue sadly.. 
### ex on 3x3:
$$\begin{bmatrix} 2 & 0 & 0 \\ 0 & 4 & 5 \\ 0 & 4 & 3 \end{bmatrix}$$
Same stuff, do $A - \lambda I$ then  find det of itset to 0

If we did follow, would find solutions  of the det = 0 to be -1,2,8. 

If wanted eigenvector for $\lambda= -1$ follow same steps, would end up with 
$$
\begin{gather}
2x=-x
\\
5y+5z=-y
\\
4y+3z=-z
\end{gather}
$$
Where we could input a 1x3 vector of all 1's and out a 0 \ 1 \ -1 vector.

[mathisfun](https://www.mathsisfun.com/algebra/eigenvalue.html)
# Chapter 5, Vector Space $\mathbb{R}^n$
Introduces set theory basics (recall ToC / discrete). 
## 5.1 Subspace requirements
[prof notes](https://jnaveiro.github.io/LinearAlgebra/RnSubspaces.html)
$$
\begin{gather*}
0 \in U \\
\text{If } x \in U \text{ and } y \in U, \text{ then } x + y \in U \\
\text{If } x \in U \text{ and } a \in \mathbb{R}, \text{ then } ax \in U
\end{gather*}
$$

## Span:
Set of vectors can reach every point in that space through some combination

Formally defined as $\text{span}\{u, w\}$, where $a,b$ are scalars then:
$$v = a(u) + b(w)$$



aka Represents every point you can reach by scaling/adding vectors given set

Spanning sets: Collection of vectors used to build given space 

### Example: 
$$
A = \left [ \begin{array}{rr} 1 & 0 \\ 0 & 2 \end{array}\right ] ; B = \left [ \begin{array}{rr} 0 & 1 \\ 1 & 0 \end{array}\right ]
$$
Then is $A,B \in$
$$
\mathrm{span}\left\{ M_1, M_2 \right\} = \mathrm{span} \left\{ \left [ \begin{array}{rr} 1 & 0 \\ 0 & 0 \end{array}\right ], \left [ \begin{array}{rr} 0 & 0 \\ 0 & 1 \end{array}\right ] \right\}\nonumber
$$
Solving is nothing new, just an algorithmic process. We find for first A:
$$
\left [ \begin{array}{rr} 1 & 0 \\ 0 & 2 \end{array}\right ] = s \left [ \begin{array}{rr} 1 & 0 \\ 0 & 0 \end{array}\right ] + t \left [ \begin{array}{rr} 0 & 0 \\ 0 & 1 \end{array}\right ]\nonumber
$$
Which has a solution; then B
$$
\left [ \begin{array}{rr} 0 & 1 \\ 1 & 0 \end{array}\right ] = s \left [ \begin{array}{rr} 1 & 0 \\ 0 & 0 \end{array}\right ] + t \left [ \begin{array}{rr} 0 & 0 \\ 0 & 1 \end{array}\right ]\nonumber
$$
Which doesn't! Therefore A,B isn't in the span.



## Trace and Basis
- **Trace**: Sum of diagonals in given matrix.

**Basis**:
Span but no redundent vectors. There can be infinatly many of them. Then col/row space js means col/row that can make up all col/rows in vectorspace.

1) R-REF 
$$\text{RREF}(A) = \begin{bmatrix} \mathbf{1} & 0 & 0 & -2 \\ 0 & \mathbf{1} & 0 & 1 \\ 0 & 0 & \mathbf{1} & 1 \end{bmatrix}$$
1) row basis = non-zero rows 

eg. $$ B= \{ (1, 0, 0, -2), (0, 1, 0, 1), (0, 0, 1, 1) \}$$
with Dimension: 3 (3 vec in it)

3) col basis = pivot cols

eg.
$$B=\left\{ \begin{bmatrix} 0 \\ 3 \\ 1 \end{bmatrix}, \begin{bmatrix} 2 \\ 1 \\ 0 \end{bmatrix}, \begin{bmatrix} -1 \\ 10 \\ 3 \end{bmatrix} \right\}$$
also dim =3

## Diagonalizable Matrix (Impt!)
![[Pasted image 20260412214704.png]]

Finding if a matrix is diagonalizable
e is pretty hard though, though it just comes down to following several steps:

1) Find eigenvalues via solving for $det(A−\lambda \ I)=0$
2) Eigenvectors

## Computing Dimension Null Space of Matrix dim(null(A))
null space -> all inputs (into transformation) that result in 0

$m \times n$ matrix; $A$
$$\text{rank}(A) + \dim(\text{null } A) = n$$
- **$\text{rank}(A)$**: no. pivot cols
- **$\dim(\text{null } A)$**: no. free vars
- **$n$**: total no. cols

Then we just need to find what is asked for
### Example:
$$A = \begin{bmatrix} 0 & 2 & -1 & 1 \\ 3 & 1 & 10 & 5 \\ 1 & 0 & 3 & 1 \end{bmatrix}$$
- n is simply 4
- rank is 3 

Then to solve for null we can just plug the rest in like so: 
$$
\begin{gather*}
3 + \dim(\text{null } A) = 4
\\
\dim(\text{null } A) = 4 - 3
\\
\dim(\text{null } A) = 1

\end{gather*}
$$
Hence dim of nullspace is 1 (yay)

# Chapter 7; Abstract Vector Spaces
## Transformations
We hab:
$$T: V \to W$$

- then V (left) = domain
- W (right) = codomain
- T(V) = actual set of outputs

- **onto:**
Image = codomian aka All right space can be created via input from the left space.
- NOT onto
Means empty spots that transformation never reaches. Say $T: \mathbb{R}^3 \to \mathbb{R}^2$ : There's unused space, whereas $T: M_{22} \rightarrow \mathbb{R}^2$ would be onto

## Kernal and Image
Both operate on functions (transformations). To start, apply transformation to basis vectorspace. Eg. for $\mathbb{R}^2$, 

**Kernal**: $ker T$ 
- Set of all possible function outputs. 
- Will be same dimension as vectorspace

**image**: $im T$ 
-  All possible inputs that result in 0 as basis
- Set the general transformation equal to the zero vector
## Definition of Similarity
Two matrices represent the same linear transformation

Two square matrices $A$ and $B$ of the same size $n \times n$ are said to be similar if there exists an invertible matrix $P$ such that:

$$A = PBP^{-1}$$

Equivalently, this can be written as $B = P^{-1}AP$.

### Proof: Showing that 2 abstract nxn matricies are similar
$$A = PBP^{-1}$$
Then take det of both sides, use det prop to show they're equal (since both P cancel e/o out then A=B)

## Proving A subspace is in a larger space
Prove $U$ is a vector subspace of $\mathbf{M}_{22}$
$$J = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$$ 
 $U = \{A \in \mathbf{M}_{22} \mid AJ = JA\}$.

1) 0 vec: $\mathbf{0}J = J\mathbf{0}$
2) Addition: $$(A+B)J = AJ + BJ$$
3) Multi
$$(cA)J = c(AJ)$$
### Find Basis&Dim of Abstract vector spaces
1) Take known vector space multi by abstract space of same size
2) Find AJ = JA (both vector spaces). This then shows us 
3) 
Finding basis basically menas to find $AJ = JA$ .

Then: $A = \begin{bmatrix} a & b \\ c & d \end{bmatrix}$ and $J = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$
q
Solving for each simply multiply and check if they're equal 

$$AJ = \begin{bmatrix} a & b \\ c & d \end{bmatrix} \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix} = \begin{bmatrix} b & -a \\ d & -c \end{bmatrix}$$

$$JA = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix} \begin{bmatrix} a & b \\ c & d \end{bmatrix} = \begin{bmatrix} -c & -d \\ a & b \end{bmatrix}$$
Hence; 
- $b = -c \implies c = -b$
- $-a = -d \implies a = d$
- $d = a$ (matches equation 2)
- $-c = b$ (matches equation 1)
$$A = \begin{bmatrix} a & b \\ -b & a \end{bmatrix}$$

basis is the set of matrices multiplying our free variables $a$ and $b$:

Basis for $U = \left\{ \begin{bmatrix} 1 & 0 \\ 0 & 1 \end{bmatrix}, \begin{bmatrix} 0 & 1 \\ -1 & 0 \end{bmatrix} \right\}$
Where first is `a` and second is `b`. Dim =2 since only 2 vectors in basis matrix

## Linear Transformations 
### Properties
- **Zero Vector:** $T(\vec{0}) = \vec{0}$. 
- **Preservation of Lines:** Linear transformations map lines to lines (or to a single point). They cannot "bend" a line into a curve.
    
- **Grid Parallelism:** In a 2D plane, linear transformations keep grid lines parallel and evenly spaced.

# Homeworks
https://gemini.google.com/share/8d239faaaa9a

## Hw 6
### Using Det to find values of `c` that makes matrix invertible? 
$$
\begin{bmatrix}
1 & 0 & 3 \\
3 & -4 & c \\
2 & 5 & 8
\end{bmatrix}
$$
Then just take det as usual. Once find, set = 0, and isolate 0, thats our answer
__
### Use properties of det to find original Det
If $A$ is $3 \times 3$ and $\det(2A^{-1}) = -4$ and $\det(A^{3}(B^{-1})^{T}) = -4$, find $\det A$ and $\det B$.

Unwrap each using [[midterm linear 2#properties of determinants (det rule set) | prop of det]] 
- $A^{-1}=-2$: inverse just makes it divide so ($-4/2=-2$)
- $A = -2$: Tranpose doesn't do anyhting

$-2^3(B^{-1})^T=-4$ Then just solve like last time
### Find matrix given det
Let $A = \begin{bmatrix} a & b & c \\ p & q & r \\ u & v & w \end{bmatrix}$ and assume that $\det A = 3$. 

$\det(2B^{-1})$ where $B = \begin{bmatrix} 4u & 2a & -p \\ 4v & 2b & -q \\ 4w & 2c & -r \end{bmatrix}$
Again, use [[midterm linear 2#properties of determinants (det rule set) | prop of det]] to determine how `3` is affected as we can realise B is just a linear combination of A such that: 
- $4(2(-1)) = -8$ 
- Then SWAP rows twice (negates twice -> nothing)
- TRANSPOSE: (nothing)
- multiply by given A: $(3)(-8)=-24$ answer!

### Finding eigenvectors and invertible matricies
Find the characteristic polynomial, eigenvalues, eigenvectors, and (if possible) an invertible matrix $P$ such that $P^{-1}AP$ is diagonal.

$$
A = \begin{bmatrix}
1 & 2 \\
3 & 2
\end{bmatrix}
$$

1) Characteristic Polynomial
Recall formula for Char poly:
for $x=\lambda$ 
$$c_A(x) = \det(xI - A)$$
Which applying to `A` we get:
$$c_A(x) = \begin{vmatrix} x-1 & -2 \\ -3 & x-2 \end{vmatrix} = (x-1)(x-2) - (-2)(-3)$$
with a bit of work then our Characteristic Polynomial is:
$$ \mathbf{x^2 - 3x - 4}$$
2) Eigenvalues
Simply set Characteristic Polynomial = 0, those are our solutions!
$$
\begin{gather*}
(x - 4)(x + 1) = 0 \\ 
\mathbf{\lambda_1 = 4, \quad \lambda_2 = -1}
\end{gather*}
$$
3) Eigenvectors:
Simply plug in the known values we got into our original EQ of $\{x=4,-1\}$
$$c_A(x) = \det(xI - A)$$
which when solved would give us: 
$$\mathbf{\begin{bmatrix} 2 \\ 3 \end{bmatrix}} ,  \mathbf{\begin{bmatrix} -1 \\ 1 \end{bmatrix}}$$
as our two Eigenvectors

4) Diagonalization
nxn matrix with n independent eigenvectors

Since eigenvectors must be linearly independent we can define 
- invertible matrix $P$ as combined eigenvectors 
- diagonal matrix $D$ as corresponding eigenvalues on the main diagonal (rest values are simply 0)

$$P = \begin{bmatrix} 2 & -1 \\ 3 & 1 \end{bmatrix}, \quad D = \begin{bmatrix} 4 & 0 \\ 0 & -1 \end{bmatrix}$$
Given matrix would **NOT** be diagonal if has one eigenvalue its or if its not a real number



## Hw 7

### 3.3.3:

### 3.3.6

### 3.3.7

### 5.1.1

### 5.1.3

### 5.1.4
### 5.1.12
### 5.1.22

### 5.2.1

### 5.2.2

### 5.2.4

