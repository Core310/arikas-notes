# Racket keywords + docs to know
True given by `#t`, false = `#f` so `if #f (.. ..)` eval second `..`
### Eval 
- Esentially used 2 exe dymanic code w/ limited scope (of namespace) to run time
- accept quoted form with `'(...)`
eg. 
```scheme
(eval '(+ 1 2))
== (in output)
(+ 1 2)
```
Another ex 
```scheme
(define (test-eval)
  (let ([x 5])
    (eval 'x))) 
-> error!!
```
### Car/cdr/cons
arg = pair eg. 
```scheme
(car '(1 2))
-> 1
```
- `(car p) → any`: rtrn first element of pair p
- `(cdr p) → any`: second element 
- `null`: declare empty list
- `(cons a d) → list||pair` accepts 2 elements returns list
```scheme
> (cons 1 2)
'(1 2)
> (cons 1 '())
'(1)
```
### Map
```scheme
(map proc lst ...+) → list?
  proc : procedure?
  lst : list?
  ```
- apply proc to elements of lst frm first to last. 
- Proc arg must accept same # of args as # of supplied lsts, & all lsts must hv same # of elements. 
- Rslt = list containing e/a rslt of proc in order

Eg.
```scheme
> (map (lambda (number)
         (+ 1 number))
       '(1 2 3 4))
'(2 3 4 5)
```
applies the lamda func of num++ to e/a element and outp e/a elemen
### Let and others
Defined by 
```scheme
(let ([id val-expr] ...) body ...+)
OR
(let proc-id ([id init-expr] ...) body ...+)
```
- creates a new location for each id
- second one is result becomes bind of some internal func
```scheme
> (let ([x 5]) x)
5
> (let ([x 5])
    (let ([x 2]
          [y x])
      (list y x)))
'(5 2)
```
#### Letrec
enables mutually recursive definitions
```scheme
(letrec ([id1 expr1]
         [id2 expr2]
         …)
  body-expr1
  body-expr2
  …)
```
2 phases:
- Allocation: -m uninitialized vars per id
- Initialization: eval e/a expr# in an environment whr all ids alrdy bound (culd b uninitialized), then store rslt per var
### Others
- Delay and lazy
```scheme
(delay body ...+)
(lazy body ...+)
```
- Creates a promise that, when forced, evaluates the bodys to produce its value
- Main diff is:
	- `lazy` automatically follows through nested promises
	- `delay` does !, if delay smtn that rtrn promise? need 2 force all promise manually

Side effect programming and short circut eval? **Todo?>**
- Example of side effect programming
```c
int a =0,b =5; printf(true || b/a); //Results in printing true because of short circuit eval  
```
### Tail recursion? 
recursive call = last op (as return)**Todo?>**
# Python keywords 2 kno
### Lambda
Standalone function, any # of args, 1 expr
```python
x = lambda a, b : a * b  
print(x(5, 6))
```
### yield
```python
def count_up_to(n):
    i = 1
    while i <= n:
        yield i      # pause and return i
        i += 1       # resume here next time
```
esentially makes the return value return those on each demand call. Can append as many as wanted. Pauses function instead of being returned (so to have all values from it it would need to be in a loop)

| Aspect           | `return`                              | `yield`                                                                                           |
| ---------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Return value** | Single object, ends function          | Generator object (an iterator), does **not** end function permanently ([Python documentation][1]) |
| **Control flow** | Exits immediately                     | Pauses, can be resumed                                                                            |
| **Memory usage** | Caller must collect all values itself | Generates values **lazily**, one at a time                                                        |
| **Use case**     | Compute and deliver final result      | Stream or pipeline large or infinite sequences                                                    |
# Random C/cpp stuff
## Overflow index positioning
![[Pasted image 20250504174358.png|500]]
- For second print statement: Have following, so for second print. So we start at row `2`, count RIGHTWARD (go down when reach end of row start far left) where current `31` is 0th index and end of whatever is `11th` index. 
- Third: Another wording for saying `A[3][0]`
	- A is a pointer to the first row: `A == &A[0]`
	- A + 3 is a pointer to the 4th row:` A[3]`
	- `*(A + 3) dereferences it to give A[3] — which is the 4th row: {53, 59, 61, 67, 71}`
- Fourth: Another word for `A[0][4] = 11` 
	- A is the pointer to `A[0]`
	- `*A = A[0] → gives first row: {2, 3, 5, 7, 11}`
	- `*(A) + 4 = pointer to the 5th element of the first row (A[0][4])`
	- `*(*(A) + 4) dereferences it`
## 8-bit 2's comp table of ascii chars (quiz 12)
```c
  char a=254;
  char b=-2;
  a==b ? print(33) : print(101);
  -> 33
```
- chars cap at 256, so -2 becomes 254 hence equal


# Quizzes

## Quiz 7 (not rly useful)
### Q6
Write a (purely functional) scheme program that computes the squares of  all the elements in a list. Examples of inputs and outputs: 
```scheme
(sqr_list  `(3 0 6)) --> `(9 0 36) (sqr_list  `(2 1 3 1)) --> `(4 1 9 1)
```
Ans:
```scheme
(define (sqr-list lst)
  (map (lambda (x)
         (* x x))
       lst))
```
### The rest (not rly useful)

Output of? 
```scheme
(let ((x 5))
   (let ((x 2)
         (y x)
         (squaresum (lambda (a b) (+ (* a a) (* b b)  )  ))
        )
        (squaresum x y)
   )
) -> 29

(eval (apply  (lambda (x) (cdr x)) '(( * + 20 4))) ) ->24

(map (lambda (x) (* 3 x)) `(2 3 6)) -> '(6 9 18)

( (if (< 3 4) 
      (lambda (x) (+ x 3)) 
      (lambda (x) (* x 5))
   ) 
 6
)->9
```
## Quiz 8
### Q1
Use "delay" to create an infinite (lazy) list of all the cubic numbers such as  `1 (=1*1*1), 8 (= 2*2*2), 27 (=3*3*3), ...`
```scheme
(define (cubic-numbers n)
  (map (lambda (x)
         (list x
               (string-append "= " (number->string (* x x x)))))
       (build-list n add1)))
(define (display-cubic-numbers n)
  (define (helper lst)
    (when (not (null? lst))
      (printf "~a ~a\n" (car (car lst)) (cadr (car lst)))
      (helper (cdr lst))))
  (helper (cubic-numbers n)))
(display-cubic-numbers 3)
```
### Q2
Write a program in Scheme using "tail recursion" to compute the squares of  all the elements in a list. Examples of inputs and outputs: 
```scheme
(TR_sqr_list  `(3 0 6)) --> `(9 0 36)
(TR_sqr_list  `(2 1 3 1)) --> `(4 1 9 1)
```
Ans:
```scheme
(define (squared-list lst)
  (define (helper lst acc)
    (cond
      [(empty? lst)
       (reverse acc)] ; reverse at the end since we're building it backwards
      [else
       (helper (rest lst) (cons (sqr (first lst)) acc))]))
  (helper lst '()))

;; Example usage
(define apol '(1 2 3 4 5))
(define TR_sqr_list (squared-list apol))

TR_sqr_list ; using two functions for clarity
```

## Quiz 9
Use "list comprehension" to write a Python list that enumerates first 100 integers that can be written as sums of odd integer squares and 1. So the first four integers in the list should be  2 (= 1^2+1), 10 (= 3^2+1), 26 (= 5^2 + 1), 50 (= 7^2 + 1) .

Answer:
```python
# 1-100 ints, sum od odd int^2 \, then with list of  100. Given we want odd only we simply do 100*2 -> 200 for our total numbers in the list to go over. 
numbers = [n**2 + 1 for n in range(1, 200, 2)][:100]
print(numbers)
```
## Quiz 11
### Q1
Use recursion in Python to write a program that given a positive integer n, calculates the sum of the first n integer squares. So
```python
sofsq(1) = 1*1 = 1  
sofsq(2) = 1*1 + 2*2 = 5  
sofsq(3) = 1*1 + 2*2 + 3*3 = 14
```
Answer:

```python
def sofsq(n):  
    if n == 1:  
        return 1  
    return n * n + sofsq(n - 1)
```

### Question 2
Use yield to write a Python generator sofcu that produces all the sums of consecutive integer cubes. The first three sofcu are  `1 (= 1*1*1), 9(= 1*1*1+2*2*2), 36 (= 1*1*1+2*2*2+3*3*3)` You should write only one function ( generator ), i.e. you should not use helper functions.
Answer:
```python
def sofcu(n):  
    current_sum = 0  
    while True:  
        current_sum += n**3  
        yield str(current_sum)  
        n += 1
```

# Quiz 13
![[Pasted image 20250503200756.png| 500]]
