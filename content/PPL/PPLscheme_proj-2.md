---
title: "PPLscheme_proj-2"
---

# PPLscheme_proj-2

![[PPL/PPLscheme_proj-2.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/PPL/PPLscheme_proj-2.pdf) | [Download Local](/PPL/PPLscheme_proj-2.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

CS3323 Homework 5: Scheme Project
Bivariate Polynomial Arithmetic in Scheme
A bivariate polynomial in x and y can be viewed as a polynomial in y with coefficients that
are polynomials in x. This allows us to represent a bivariate as a list of lists of numbers. We will
put terms in a degree-increasing order. For example the bivariate
0101
1 + xy + xy 3 + x3 y = 1 + (x + x3 )y + xy 3
1 x x^2
can be represented by the list
all addition
’( (1) (0 1 0 1) () (0 1))
Input: lists which represent bivariates.
Output: Polynomial addition, subtraction, partial derivative w.r.t. x , and multiplication
Note:
1. Please name your functions as poly add, poly derx, poly sub, poly mul. Please copyand-paste your source code into a text file, and submit to Canvas. The grader will load your
program using DrRacket, then run
(poly_mul apol bpol)
(poly_add apol bpol)
(poly_sub apol bpol)
(poly_derx apol)
to test it, where apol and bpol are lists representing polynomials. For subtraction, output
should be apol − bpol.
2. You may use, with clear citations, functions which we developed in class.
3. You should only use the pure functional features of Scheme.
4. Leading coefficients of output polynomials (in x or y ) can not be zero. Use the empty list
to represent the zero polynomial.
5. You may assume that input polynomials have integer coefficients.
6. The full credit for this homework is 20points.
Examples:
(poly_add ’( (1 -1) (1 2 3) () (3))
---> ’(() (0 4 3) (3) (3))

’((-1 1) (-1 2) (3)))

1

x^3

(poly_mul ’( (1) (1 2 3) () (3)) ’((-1) (-1 2) (3)))
---> ’((-1) (-2 0 -3) (2 0 1 6) (0 6 9) (-3 6) (9))
(poly_derx ’( (1) (1 2 3) () (3))) =1+
---> ’( () ( 2 6))

2

</details>
