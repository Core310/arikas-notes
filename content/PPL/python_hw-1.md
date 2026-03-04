---
title: "python_hw-1"
---

# python_hw-1

![[PPL/python_hw-1.pdf]]

---
[View on GitHub](https://github.com/Core310/arikas-notes/blob/main/content/PPL/python_hw-1.pdf) | [Download Local](/PPL/python_hw-1.pdf)

## Extracted Content (for search)
<details>
<summary>Click to view slide text</summary>

CS3323 Homework 6 – Python Project
A text list to an HTML table
Professor Haskell teaches a class of n ≥ 7 students on functional programming. At the end of
the semester, she needs to assign a letter grade, A, B, C, D, or F, to each student in the class.
She has to work with raw data in a file called input.txt consisting of a sequence of student records.
Each record starts with an ID number, following by first name, last name, final overall score,
which is an integer between 0 and 100 inclusive, a letter E (eager) or L (lazy), which measures
how active a student participates in class, and optionally, city and/or state. One line in the file
may have many records. One record may spread over many lines. She will use the following rules:
• Students are ranked by their final overall scores. Ties will be broken by eagerness.
• Students with rank from 1 to ⌊n/3⌋ will receive the letter grade A.
• Students with rank from ⌊n/3⌋ + 1 to 2⌊n/3⌋ will receive the letter grade B.
• Students with rank in bottom ⌈n/10⌉ will receive the letter grade F.
• For other students, they get C if their eagerness is E. Otherwise they get D.
In this project, you need to write a Python program to help Professor Haskell. The output of
your program should be an HTML file output.html that describes a table. The table should list
student records, one record per row. Each record consists of last name, first name, ID and letter
grade. It should be sorted according to last name, (then) first name and ID.
Note:
1. You may assume that a tie can always be broken by eagerness.
2. You may assume that each ID number is a nine-digit integer, and there are no duplicate ID
numbers.
3. You may assume that the file input.txt is in the current directory.
4. You should submit the Python source code as a text file.
5. You should not import any module, except re.
Due date: Nov 16th, 11:59pm.
Examples: If the content of input.txt is (note that the third line is empty)

1

112000001 Chris Carson 90 L Bowling Green Kentucky 112000000
Ben Christie 50 L Chicago IL 112000002 Bern
Cruz 80 L TX 113000000 Donald Cantor 85 E
113000001 Ted Sanders 90 E AR 113000002 Carly Fiorina 98 L
113000003 Hillary Trent 50 E NY
the output HTML file, when being loaded into a browser, should look like
113000000
112000001
112000000
112000002
113000002
113000001
113000003

Donald
Chris
Ben
Bern
Carly
Ted
Hillary

Cantor
Carson
Christie
Cruz
Fiorina
Sanders
Trent

B
B
F
D
A
A
C

2

</details>
