---
sch_sem: sp_25
class: PPL
---
Arika Khor
<br>Spring_CS 3323
<br>Dr Cheng

# 1.1) 
Errors in a computer program can be classified according to when they are detected and, if they are detected at compile time, what part of the compiler detects them.
- a) Lexical Error (Detected by the Scanner). Using your favorite imperative language, give an example of each of the following (In this case I used rust)
    
Invalid char in a var name
```rust
fn main() {
    let $var = 5; // Err: Invalid char '$' in id. Basically any char that's not allowed when declaring a var name. 
    println!("{}", $var);
}
```

-  b) Syntax Error (Detected by the Parser), 
  
  Missing semicolon
```rust
fn main() {
    let x = 5  // Err: no semicoln. Required because thankfully we aren't using js
    println!("{}", x);
}
```

- c) Static Semantic Error (Detected by Semantic Analysis)

Type mismatch
```rust
fn main() {
    let x: i32 = "hello"; // Err: Type mismatch; expected `i32`, found `&str. Binding wrong types to wrong values
    println!("{}", x);
}
```

- d) Dynamic Semantic Error (Detected at Runtime)

Division by zero
```rust
fn main() {
    let x = 10;
    let y = 0;
    let z = x / y; // Err: Div by zero! This operation panics at runtime, and so the langauge detects this at runtime.
    println!("{}", z);
}
```

# 1.15) 
Using an Internet search engine or magazine indexing service, read up on the history of Java and C#, including the conflict between Sun and Microsoft over Java standardization. Some have claimed that C# was, at least in part, an attempt by Microsoft to undermine the spread of Java. Others point to philosophical and practical differences between the languages, and argue that C# more than stands on its merits. In hindsight, how would you characterize Microsoft’s decision to pursue an alternative to Java?

I would argue that Microsoft never actually sought to copy Java and that Java as a language just so happened to already exist. 
Microsoft did implement their version of Java in 1996, introduced as Visual J++ (generally just called J++). However, J++ was later discontinued due to it being too similar to Java, later being sued over it. While language was discontinued in 2004, C# was already in developed starting in the 2000s. Hence, one could argue that while C# was a competitor and copycat of Java, it never aimed to take over the role that Java played, and sought its own niche, being developed before the death of J++. This is clearly seen in the internals of both languages with their original intended use. For example, there is Java as a platform versus Java as a language, which can be seen with the Java Virtual Machine (one could also use the JDK/JRE as part of the example). This is in stark contrast to C#, where it purposely does not run in a virtual sandbox like Java, and instead goes straight to the Microsoft Intermediate Language (MSIL). Hence, over time both languages drew away from each other to cater to their own niches. Microsoft never sought to pursue an alternate Java language with C#, but instead their own unique language, surely using some lessons learnt from the failure of J++.wh

Some sources: 
- [MSIL Resources](https://www.c-sharpcorner.com/topics/msil)
- [Early .NET History](https://stackoverflow.com/a/1083401/9099611)
- [JVM and C#](https://stackoverflow.com/a/35707685/9099611)