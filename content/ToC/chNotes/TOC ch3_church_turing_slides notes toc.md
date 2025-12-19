---
class: TOC CS3823
Type:
  - class
---
a
[[ToC_chapter_3_slides.pdf]]

	
# Turming Machine TM
![[Pasted image 20251202002241.png|500]]
### FA vs TM? 
- r/w can -mv L/R (think FA singly linked list, TM doubly)
	- TM can write, this is **BIG**. Previous FA/PDA (any automata) couldn't write!
- infinite tape length 
- Special states (eg. accept/reject) take effect immidetly
### TM Formal Defition
7 tuple, augmented FA:
- Q: set of states
- $\sum$: inp alphabet
- $\Gamma$: Tape alphabet, as many symbols can read frm inp + a few more (inc blank symbol) where $\sum \in \Gamma$
- $\delta$ Reads some state +  inp symbol, will produce new state as result
- $q_{0}$ start
- $q_{\text{accept}}$ accept 
- $q_{\text{reject}}$ Reject, can never be same as accept

### Levels of descriptions of TMs (tm remarks)
We have 3 ways of describing TMs. In each we use the following example:
$$B = \{w\#w \mid w \in \{0,1\}^*\}$$
Where w is treated as a string of 0's and 1's and \# is some seperator symbol (so its string w # string w).

#### Formally: 
Using our formal defition above, where $\delta$ is given via drawn diagram (see hw).

#### Implementation Description: 
In english describe how head moves, how data stored on tape. Do ! need to give transition func details

**Solution**

Starting from the 

#### High-Level: 
Psudeo code ignoring implementation. No need to expalin how head is moved or tape managed.

**Solution**: 

for $k >1$ being position of unique `#` character. for each i < k check if the values at `tape[i]` equals `tape[i+k]`. If equal continue, else reject.

Finally when we hit the end of i+k, if there are more indexes after that reject, else accept.

### Config of turning mch (Will be on midterm+Final!!!)
Must know 3 things at all moments:
- Current state (position on tape)
- tape contents (entire infinite stack)
- Current head loc (value at position of tape)

Can think like hashset, should know key + value at all times and 

Start config of M on inp w: $q_0$ w 


For slide 11:
Delta func says if state $q_i$ read b, then replace b with c and mv head left. We then add the L to show 


### Turing recognizable vs decidable langauge
- Decidable: Assume determinicst TM, TM accept if inp belongs to language. both yes & no are always answers by the TM
- Recognizable: Situation whr TM always holds for YES ans, if `w` belong to lang? M always accept, 

![[Pasted image 20251106130300.png|500]]

#### Ex 3
$$
A=\{0{^2}^n | n \geq 0
\}
$$
Language consits of al 0s, which length = pow 2. so for our psudeo code we js hv `str.len % 2 == 0`? In that sense it's a bitwise OR, us looking @ the last binary digit 0 ? 1 : false,true 

In this sense, we can just do the same thing by 


Thinkg hw u wuld solve using psudeo code! Once find? translate back 2 a TM. 



