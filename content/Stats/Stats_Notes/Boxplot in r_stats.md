---
Type:
  - class
class: Applied Stats MATH-4753 FA25
sch_sem: fa_25
---


[docs](https://www.rdocumentation.org/packages/graphics/versions/3.6.2/topics/boxplot)

# Boxplot w/ Ggplot!
```r
plotter = ggplot(data=ddt, aes(x=RIVER, y=LENGTH, fill=SPECIES)) 
+ geom_boxplot() +
  labs(title = ":)", caption = ":<") +
  theme (
    plot.caption = element_text(hjust=0.5)
  )
```

## Boxplot Function Adds
Out: values of any data points which lie beyond the extremes of the whiskers
```r
bp$out
```

## Docs Example
```r
mpg <- read.csv("EPAGAS.csv")

# If your data is in ddt[[1]], then if we need another col we can ismply make another object and convert to numeric vector
mpg <- ddt[[1]]

# Convert to a vector if necessary
mpg <- as.numeric(mpg)

boxplot(mpg,
        main = "Arika K",    # plot title
        ylab = "MPG",        # y-axis label
        col = "black",       # box fill color
        border = "black",    # box outline color
        notch = TRUE         # optional: notch around median
)
boxplot(mpg,
        horizontal = TRUE, 
        add = TRUE #add ontop of exisitng one
        )
# If we want 2 variables, we can do below, ~ 1 just means single groups side by side
boxplot(cbind(mpg, hp) ~ 1, data = ddt,
        main = "Arika K",
        ylab = "Value",
        col = c("blue", "green"),
        notch = TRUE
)
```


## Boxplot w/ Formula
```r
boxplot(
formula, #eg. y ~ grp
data = NULL, …, #some dataframe
subset, #can be         subset = supp == "VC", col = "yellow"
na.action = NULL, #what todo w/ NA actions? 
horizontal = FALSE,# boxplots should be horizontal; default alrdy false!
add = FALSE, #We can add ontop of exisitng bp
notch = FALSE, # notch is drawn in each side of the boxes. Notches of two plots !overlap -> ‘strong evidence’ that the two medians differ
range = ..,# Determines how far the plot whiskers extend out from the box. `range` positive? whiskers extend to the most extreme data point which is no more than `range` times the interquartile range from the box. 0 ? whiskers to extend to the data extremes.
)

```
Range keyword: determines ranges that can be posted by the `bp$out` which wil ldetyermine where for the range you want..

```r
df. <- as.data.frame(mat)
par(las = 1) # all axis labels horizontal
boxplot(df., main = "boxplot(*, horizontal = TRUE)", horizontal = TRUE)
```