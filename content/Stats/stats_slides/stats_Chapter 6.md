---
title: "stats_Chapter 6"
---

# stats_Chapter 6

![[Stats/stats_slides/stats_Chapter 6.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/Stats/stats_slides/stats_Chapter%206.pdf) | [Download Local](/Stats/stats_slides/stats_Chapter%206.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

Chapter 6
Dr Wayne Stewart

Go through all
examples!!

Proof
• 𝑣𝑎𝑟
• 𝑣𝑎𝑟

𝑋
𝑌
+
𝜎𝑋
𝜎𝑌
𝑋
𝑌
−
𝜎𝑋
𝜎𝑌

≥0
≥0

Example

The true
density

## w method of sampling
rmyexp=function(n, ...){
graphics.off()
w=runif(n,0,1)
y=-2*log(1-w)
h=hist(y,plot=FALSE, ...)
coll = rgb(h$density/max(h$density),.4,.1)
windows()
hist(y,freq=FALSE,main="Uniform W",col = coll, ...)#
col=rainbow(length(h$mids)),...)
curve( exp(-x/2)/2,add=TRUE,col="Blue",lwd=2)
text(10,.3, paste0("Simulation using\n w uniform method ",
"n=",n,"\n ", "1/2exp(-x/2)"))
legend("topright", legend = c("Simulation",
"Simulation","Truth"), fill=c(coll[1],coll[length(coll)], "Blue"))
dev.new(noRStudioGD = TRUE)
df=data.frame(y)
library(ggplot2)
g = ggplot(df, aes(x=y)) + geom_histogram(aes(fill=..density..),
bins = 50) + geom_density( col = "Red")
g = g + stat_function(fun = function(x) exp(-x/2)/2)
print(g)
}
rmyexp(100000, nclass = 40)

Order Statistics
• Sample of size “n” what is the distribution of:
𝑌𝑚𝑖𝑛 , 𝑌𝑚𝑎𝑥 ?

Taken From
Larsen and
Marx

Make:
dpqr functions for order statistics

Suppose that the following is true:
𝐹𝑊 𝑤 = 2𝑤 − 𝑤 2

𝑓𝑊 𝑤 = 2 − 2𝑤 = 2(1 − 𝑤)

Create dpqr functions!

Follow the R
code

Go through all examples

Get these examples

In R the standard error is the estimate of the
standard deviation of the sampling statistic

Normal approximation to the Binomial

Condition to be satisfied

Continuity correction

This will be difficult to remember –
please use first principles to
perform continuity corrections

Sampling distributions – related to Normal

Find 𝑓𝑍 (𝑧)

Definition of T random variable

Go through all examples

</details>
