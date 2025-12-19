# Quizzes: 
- [[Quiz 5 Abastract Syntax Tree]]
- [[Quiz 4 Static vs Dymanic Scopes]]
pp[]

[[Semantics (attributes)]]


___

[[sch ppl ch3 CallStack]]

___
- Associativity tells us that the operators in most languages group left to right, so that 10-4-3means (10- 4)- 3 rather than 10- (4- 3). 
- Precedencetells us that multiplication anddivision in mostlanguagesgroupmore tightly than addition andsubtraction, so that 3+4*5means 3+(4*5)rather than (3+4)*5.


https://cstheory.stackexchange.com/questions/4352/how-is-proving-a-context-free-language-to-be-ambiguous-undecidable


[[Context Left vs Right Trees]]

___ 
- First(A): Set of all tokens that could come after A in some program
	- If the value could point to NULL, we can count the next value as a FIRST 
- Follow: Set of all tokens that can come after FIRST (if null)
- Predict: Set union of First and Follow