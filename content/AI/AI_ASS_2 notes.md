# Notes:
- Working on dataset given CC.csv data
	- row = applicant 
	- col=info

For x=row#, y=appApproved?, $w_j$ = $\pm{1}$ unknown @param attempting to find, then:
$$
f(x)=w_{1}x^1 + w_{2}x^2+\dots+w_{6}x^6
$$
Where $f(x)$ represents some linear relationship btwn the inputs ->result. Suppose w is some int array (hence must only contain -1/1), then we want to find the combo of -1's and 1's that converge to ??

We can define $er(w)$, where $|w|=6$ as:
$$
er(w) := \frac{1}{n} \sum^{340}_{{i=1}}(f(x_{i})-y_{i})^2
$$
Where 340 is our row length, then each round for some random combo of w we have: 
## Dataset changes
- CreditApprove, 1=approve
- Gender: M=1
- CarOwner: Y=1
- PropertyOwner,Y=1
- Children=#
- WorkPhone, Has?=1
- Email has? =1

# Problem 1)
- Hill Climb, minimize er(w) =w  
- Examine all solutions adj to cur solutionthen id best  
  
will need to plot:  
 x-axis = round of search  
 y-axis = er(w)  
 Must see that er(w) Converges