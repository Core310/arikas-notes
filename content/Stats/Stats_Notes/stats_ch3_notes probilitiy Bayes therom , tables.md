---
Type:
  - class
class: Applied Stats MATH-4753 FA25
sch_sem: fa_25
---


[[stats_Chapter 3.pdf]]

# Probability

## Defitions: (p20 for ex)
- Experiment: 
    - Process generating outcomes
- Sampl

e Space: 
    - Collect of all possible simple events
- Event: 
    - specific collection of sample points (simple events)
- simple event: 
    - Most basic event possible to break down
- Probability:
    - proportion of times that the event is observed for large n sample
    - $P(A)$
    - Lies in $0 < x < 1$

## Basics
[[stats_quiz 4 Tables and Probability]]
- **ORDER DOES MATTER!!**
- P(A \cap \overline{A}  )=0$
- $P(A^c) = 1 - P(A)$
```r
tabb <- table(var1$a,var2$b) #create table w/ both vars
addmargins(tabb)#automatically creates the sum column
round(22/233,4)#Gives P(A) basically A / total
round()
#if its given we just take 
```

Wrangle df to obtain all rows whr ph >6.93

P(Bedrock | Public)

P(Public AND Below Lim + wells depth between 47.244 + 121.920)

X-bin(n=10,p=.6) P(X=7?)
P(Y < 9)

pss GRACE

## Probility Theroms

|              | Below Limit | Detect | Sum |
|--------------|-------------|--------|-----|
| Private      | 81          | 22     | 103 |
| Public       | 72          | 48     | 120 |
| **Sum**      | 153         | 70     | 223 |

### 3. Union Rule (Inclusion–Exclusion)
$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)
$$
`P_Public + P_Detect - P_Both`
```r
# 1) Probability of Public OR Detect (Union)
P_union <- union_prob(A_count = 120, B_count = 70, AB_count = 48, total = 223)
```

### 4. Intersection Rule
$$
P(A \cap B) = P(A) \cdot P(B)
$$

### 5. Addition Rule (Mutually Exclusive)
$$
P(A \cup B) = P(A) + P(B) \quad \text{if } A \cap B = \varnothing
$$
`P(A) + P(B)` 

### 6. Conditional Probability Relative Probility Prob of A Given B ?
$$
P(A \mid B) = \frac{P(A \cap B)}{P(B)}, \quad P(B) > 0
$$
`(48/223) / (120/223)`
See slide 24
```r
# 2) Conditional Probability: Detect given Public
P_cond <- cond_prob(AB_count = 48, B_count = 120)
```

## extra Laws

### 7. Law of Total Probability
If $\{B_1, B_2, \dots, B_n\}$ partitions $\Omega$:  
$$
P(A) = \sum_{i=1}^n P(A \mid B_i) \, P(B_i)
$$



### 8. Bayes’ Theorem
Allows to flip the conditionals:
- We can change $P(A|B)$ to $P(B|A)$
    $$P(A|B)=\frac{P(A)P(B|A)}{P(B)}$$
> [!NOTE] what each element means in Bayes Therom
> - Where the LHS: posterior 
> - First P(A) prior
> - second top part: likelyhood
> - bottom: margin

#### Ways bays therom:
1) Derrive bayes therom frm scratch
2) Expr for marginal 
3) Know the second expr! (Slide 30)

# Counting Theroms

## Therom 3.1  Multipliciative rule
[khan aca](https://www.khanacademy.org/math/ap-statistics/probability-ap/probability-multiplication-rule/a/general-multiplication-rule)

For a given dependent relationship between A & B:
$$
P(A \ and \ B) = P(A) \cdot P(B|A)
$$
   We can multiply the probabilities of two events, but we need to take the first event into account when considering the probability of the second event.  
If independent events then:
$$
P(B|A)=P(B)
$$

## Therom 3.2, Permutation Rule
Denoted by LHS:
$$
P^N_{r}=\frac{N!}{(N-r)!}
$$

## Combinations (Binomial Probability Distribution)

### Formula:

$$
\begin{align}

p = \text{Probability of a success on a single trial} \\
q = 1 - p \\
n = \text{Number of trials} \\
y = \text{Number of successes in } n \text{ trials} \\

\boxed{p(y) = \binom{n}{y} = \frac{n!}{y!(n-y)!}} \\

\text{The mean and variance of the binomial random variable are, respectively,} \\
\boxed{\mu = np} \quad \text{and} \quad \boxed{\sigma^2 = npq}


\end{align}
$$

Used for calculating probabilities of obtaining a certain number of successes in the given trials. In this case, we represent it using a coin flip. 

[gfg](https://www.geeksforgeeks.org/maths/binomial-distribution/)

# Birthday Problem

Denoted by following, where n = # people
$$
\frac{365!}{(365-n)!365^n}
$$
n= # of people share 2 bdays

The best way to think about it is to first realize that when comparing birthdays for 23 people you’re not just making 22 comparisons, you’re making 253.

Why’s that? Because you first compare Person 1 to the other 22 people, that gives you 22 comparisons. You then remove Person 1 and compare Person 2 to the other 21 people remaining, that gives you another 21 comparisons. You then remove Person 2 and compare Person 3 to the 20 people remaining, that gives you 20 more comparisons. You continue this until you’ve compared the birthdays of all 23 people with each other. 22+21+20+19….+3+2+1 = 253

This means that in order for two people to not share a birthday, ALL 253 comparisons need to have no matches. The odds of a single comparison not being a match are 364/365 = 0.99726027 or 99.72%. If you’re making 253 comparisons then the odds of every one of those not matching are (0.99726027)253 which is 0.4995 or 49.95%. If the odds of no matches between 23 people are 49.95% that means that the odds of at least 1 match are 50.05%.

Ultimately, the reason the birthday paradox doesn’t makes sense at first glance is because people are assuming you’re only making 22 comparisons but when you really lay it out you realize that there are actually 253 total comparisons.
[from: reddit](https://www.reddit.com/r/explainlikeimfive/comments/1afwzv6/eli5can_anybody_explain_the_birthday_paradox/)

## Code
```r
bday_all_different <- function(n, d = 365) {
  prod((d - (0:(n-1))) / d)
}
# Probability at least two share:

1 - bday_all_different(34)
```


# Midterm Problem:
Slide 31, understand how to solve  it out, 
- 12 problems on midterm