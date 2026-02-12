---
class: Applied Stats MATH-4753 FA25
Type:
  - class
sch_sem: fa_25
---
# Maximum Likelyhood distro
Esentially trying to derive the function from several argument inputs. (What maxamizes the likelyhood function). Using data to come up with a model & its params (whr original model is unknown). 

## Intro: 
Coin flip? Four times in a row pops up heads? Likelyhood this could happen? 

*Wrong line of thought:* Would think $1/16$ but ! would think 50% chance heads on each, then sum them tgt -> $1/16$. This occurs by thinking each event is independent (one event does ! affect other), and identically distributed (means each  prob is a half). 

**Likelyhood func:** likelyhood of obtaining set of observations as func of @param of a model

Originally we assumed that it was 50/50 for heads/tails. ! know if fairly weighted. So how would we find out the actual prob (if actually 50/50 chance). We assign heads to be `p` and tails `1-p` (the rest).  So we culd plot frm $0\leq x,y\leq1$ where if $x || y =1 ?$ means either 100% heads or 100% tails. *So*, to answer the original qn, with our input of four times being heads, the answer that would maxmize this would be x=1, or that heads is always one (heads). 

## MLE vs Linear Regression?
