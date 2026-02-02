---
sch_sem: fa_25
class: SDP
---


# Creational
Abstract instantiation, makes system independent its objects. Hide the complexities of object.

| [Singleton](https://www.digitalocean.com/community/tutorials/java-singleton-design-pattern-best-practices-examples) | Global Class strictly one instance. Managing shared resources/configs.                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Factory](https://www.digitalocean.com/community/tutorials/factory-design-pattern-in-java)                          | Interface for object creation. Subclasses decide what parent class. <br>Centralizes object creation while allowing flexibility per object.<br>- CONS: increase complexity need to introduce a lot of new subclasses to implement the pattern |
| [Abstract Factory](https://www.digitalocean.com/community/tutorials/abstract-factory-design-pattern-in-java)        | - **factory of factories**.<br>-  Creates _families of related or dependent objects_ without specifying their concrete classes.                                                                                                              |
| [Builder](https://www.digitalocean.com/community/tutorials/builder-design-pattern-in-java)                          | - Objects with many optional parameters.<br>- Separates construction from representation. <br>- Object that can add on parameters during creation not as arguments                                                                           |
| [Prototype](https://www.digitalocean.com/community/tutorials/prototype-design-pattern-in-java)                      | Creates new objects via copying existing object. Used in complex object creation.                                                                                                                                                            |
## Pattern relations
- Abstract Factories, Builders and Prototypes can all be **implemented as Singletons.**
## Code examples
```java


//Builder
Computer comp = new Computer.ComputerBuilder(
	"500 GB", "2 GB").setBluetoothEnabled(true)
	.setGraphicsCardEnabled(true).build();
	)
```

# Structural
- Usage of classes and objects to form larger components. 
- How objects interact with each other. 
- Inheritance/composition ensure changes are defined to their scope

| Pattern Name                                                                                           | Description                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Adapter](https://www.digitalocean.com/community/tutorials/adapter-design-pattern-java)                | Object that converts interface of one object so another understands it. (Eg. class only takes in XML so create a CSV adapater to parse into XML)                                                                                                                                                              |
| [Composite](https://www.digitalocean.com/community/tutorials/composite-design-pattern-in-java)         | Defines object relations as **trees**. Leafs treated as own entities. <br>- Provide a common interface for classes. <br>- Allows to use the same methods over its children (leaf classes)                                                                                                                     |
| [Proxy](https://www.digitalocean.com/community/tutorials/proxy-design-pattern)                         | Controlled Access. <br>- For security, lazy loading, remote access, or logging.<br>- Proxy object acts as a placeholder to control access to the real object                                                                                                                                                  |
| [Flyweight](https://www.digitalocean.com/community/tutorials/flyweight-design-pattern-java)            | Minimizes memory usage by sharing as much data as possible with other similar objects. <br>-  Only when program supports many objects that barely fit into RAM<br>- May trade RAM over CPU<br>- Increase code complexity                                                                                      |
| [Facade](https://www.digitalocean.com/community/tutorials/facade-design-pattern-in-java)               | Method that calls other constructors/methods. Hides the complexity of a system from the client.<br>- Think of a script that calls other scripts                                                                                                                                                               |
| [Bridge](https://www.digitalocean.com/community/tutorials/bridge-design-pattern-java)                  | Decouples an abstraction from its implementation, allowing them to vary independently. <br>- Useful when both abstraction and implementation can change.<br><br>Think of a shape class that can build differernt shapes. Then we bridge a colour class to define the colour instead of defining it per shape. |
| [Decorator](https://www.digitalocean.com/community/tutorials/decorator-design-pattern-in-java-example) | Assign extra behaviors to objects at runtime<br>Provides alternative to subclassing, wraps an object to add new behaviors.                                                                                                                                                                                    |

## Code example
```java
//Composite
root.getSize()
codeFolder.getSize()
//Base code is given, but both can modify from their parent
```


# Behavioral 


| Pattern Name                                                                                                               | Description                                                                                                                                                                                                                                                                                                                                                                                                                       |
| -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Template Method](https://www.digitalocean.com/community/tutorials/template-method-design-pattern-in-java)                 | Defines the skeleton of an algorithm in an operation, deferring some steps to subclasses. <br>- Lets subclasses redefine certain steps without changing algorithm’s structure<br>- several classes that contain almost identical algorithms                                                                                                                                                                                       |
| [Mediator](https://www.digitalocean.com/community/tutorials/mediator-design-pattern-java)                                  | Cease all direct communication between the components, create parent all talk to<br>- Use when creating tons of component subclasses just to reuse a basic behavior.<br>- Object that encapsulates how set of objects interact. <br>- Promotes loose coupling by centralizing communication.                                                                                                                                      |
| [Chain of Responsibility](https://www.digitalocean.com/community/tutorials/chain-of-responsibility-design-pattern-in-java) | Avoids coupling sender of a request to its receiver, provides multiple objects chance to handle a request. (replaces if-else with better flexible defitions)<br><br>Use when: <br>- Essential to execute handlers in particular order                                                                                                                                                                                             |
| [Observer](https://www.digitalocean.com/community/tutorials/observer-design-pattern-in-java)                               | - When one object changes state, all its dependents are notified and updated automatically. <br>- Use in event-driven systems.<br>eg. pub-sub system, notify all sub when pub changes state                                                                                                                                                                                                                                       |
| [Strategy](https://www.digitalocean.com/community/tutorials/strategy-design-pattern-in-java-example-tutorial)              | Interchangeable family of algorithm (eg. payment methods) to perform on object. <br>- Switch from one algorithm to another during runtime.<br>- Allows the algorithm to vary independently from clients that use it.<br>Cons: Bloating your code with extra classes and interfaces.                                                                                                                                               |
| [Command](https://www.digitalocean.com/community/tutorials/command-design-pattern)                                         | Encapsulates a request as object<br>- implement reversible operations<br>- queue operations, schedule their execution, or execute them remotely.<br>Cons: Increased complexity<br>                                                                                                                                                                                                                                                |
| [State](https://www.digitalocean.com/community/tutorials/state-design-pattern-java)                                        | Object alters its behavior based on current state.<br>- use when class has large number of conditionals  which alter the class<br><br>Not needed when machine has few states/rarely change                                                                                                                                                                                                                                        |
| [Visitor](https://www.digitalocean.com/community/tutorials/visitor-design-pattern-java)                                    | Perform an operation on all elements of a complex object structure<br>- Requires to update all visitors each time class added/removed from element tree<br>- easy to traverse complex data/object strcutures<br>- Esentially more powerful version of command pattern as objects can execute operations over several other objects of different classes                                                                           |
| [Interpreter](https://www.digitalocean.com/community/tutorials/interpreter-design-pattern-java)                            | Given a language, defines a representation for its _grammar_ along with an interpreter that uses the representation to interpret sentences in the language.                                                                                                                                                                                                                                                                       |
| [Iterator](https://www.digitalocean.com/community/tutorials/iterator-design-pattern-java)                                  | When you want code to traverse a data structure without knowing the type beforehand.<br>- May be less efficent if not using specalized methods (eg. Hashset and linked list fetching is very different)                                                                                                                                                                                                                           |
| [Memento](https://www.digitalocean.com/community/tutorials/memento-design-pattern-java)                                    | Ability to restore a previous state of the object via snapshots (like git). <br>Captures and _externalizes an object’s internal state_ without violating encapsulation, <br><br>Cons: May consume lots RAM, additional care to ensure snapshot is untouched. <br>*Prototype* may be used in its place for more simple objects without links to external resources.<br>May be used with *iterator* to generate snapshots per state |

```java
//starategy example
		ShoppingCart cart = new ShoppingCart();
		Item item2 = new Item("5678",40);
		cart.addItem(item2);
		//pay by paypal
		cart.pay(new PaypalStrategy(...));
		//pay by credit card
		cart.pay(new CreditCardStrategy("...));
```


# Sample questions

## Abstract Factory and builder:

Centralize object creation of objects with many parameters.

- Factory handles product variation. Builder handles construction complexity.

- Generates family of compatible products

## Flyweight  in a text editor

Acts as characters in a text editor. Used for large numbers of fine-grained objects. Attributes that are shared:

- ascii char code

- front size + family

- style (bold/underline/coloured)

- character mapping/placement


## Example of designing without pattern led to duplicated code, what pattern can fix?

- Tempalte method: 
	- Without the design pattern; must hardcode each case into parent object, results in large file and increased refactoring complexity.
	- For example, two DnD classes. To equip each character, create parent object to define all base character stats, then specalized class for skill tree for each class.
	- If we didn't use template, then we would need to reuse code per each class to generate each character
	
## Template vs Strategy?

- Template: Class level, uses Inheritance
- Strategy: Object level: switch behaviours at runtime, Uses Composition/Delegation 

Robotics example: 

 - Template: Type of path planner that is used during compile 
 - Strategy: Runtime navigation parameter updates (dyamnic boject detection)
