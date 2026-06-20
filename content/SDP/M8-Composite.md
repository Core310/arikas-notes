---
class: SWE
Type:
  - class
sch_sem: fa_25
---


Group J,

Khor Arika

C S-4213-001 - Fall 2025, 

M8-Composite
___

# Table of contents
1. [Table of contents](#table-of-contents)
1. [Part 0, methodology](#part-0-methodology)
1. [Task a](#task-a)
    1. [Task b](#task-b)
    	1. [Component role](#component-role)
    	1. [Leaf role](#leaf-role)
    	1. [Composite role](#composite-role)
    	1. [Supporting creation pattern](#supporting-creation-pattern)
    1. [Task c — Decision Logic Overview](#task-c--decision-logic-overview)
    	1. [Decision focus](#decision-focus)
    	1. [Interpreter overview](#interpreter-overview)
    	1. [High level example](#high-level-example)
    1. [Task d — One Page Article](#task-d--one-page-article)
    	1. [Composite pattern rationale](#composite-pattern-rationale)
    	1. [Creation pattern advantage](#creation-pattern-advantage)
    	1. [Improving maintainability with pattern based logic models](#improving-maintainability-with-pattern-based-logic-models)

___

# Part 0, methodology
The author used planetUML for UML diagrams due to ease of readability and creation. Code was created with javascript due to it being a frontend project, and its widely known use. Obsidan (markdown) with pandoc was used to knit the entire document. 

Do note that an **LLM** was used to generate the UML diagrams, then edited by hand for corectness. The code was written in a high level overview by hand, then expanded to fit the UML diagram needs. The prompt used the sources below, the textbook, and a custom pre-prompt script that is fed into the 

Additional sources confronted:
- https://editor.plantuml.com/
- https://www.digitalocean.com/community/tutorials/gangs-of-four-gof-design-patterns
- https://refactoring.guru/design-patterns
- [Retrieval Augmented Generation (RAG) | Prompt Engineering Guide](https://www.promptingguide.ai/techniques/rag)
    - Heavy use of this source was used to generate any text/diagrams with GPT. 

# Task a
Description of hierarchical system context
A simple web shop UI composed of nested panels where each panel may contain child panels or content widgets. Examples of levels include top level application frame, a navigation panel, a content panel that hosts product list panels and a shopping cart panel, and a checkout panel that nests payment form widgets. Uniform operations applied across levels include draw(), count(), and evaluate().

Shopping webapp:

[![](https://img.plantuml.biz/plantuml/svg/lLLHQuCm47uN_0z7NzOn_0DZZ6uhPSBO2gFq-OpNLceIIQBTsFRVbsXjhJhOYpw9zrtoVNUvBvbfWyhaFFMzAtXEIA5Ykq_OI0Ll1IdG2SzIWWD5e7SoWrNeUncoFMu99ckAtctm8SicyELx08amf3R82CAvmWD6Tca90Dn0R2FJw_gFoLoOwJNSkaLra0fCSpGqPTBkz64S74cP4WgNykDxxiDIr1eiwq8X7uBWLE0gX2KAIlMaPi586uNC74MKA9GzuYICxjRT5lQ7j7-8gv8mZYtECoaiNsDFHLmMr86E5TLDUyMYaZo0kXRLaqiJPYowfP9npinBeiUcd9F191sjhTQket7jYErbFYXVrtJh9DwIELlkejcX8Jv2vO-vCLACGBIGYYyIIkEXstkwBeFWlhgsNBGwsRll83XT3QrmqyOjg6svVhXXZ_RMzIYtuysngzHtt2tF16ua6ZbDE_PadVtJ1ruCl4iudKy_NCs9xzacpqZ4vJlw2m00)](https://editor.plantuml.com/uml/lLLHQuCm47uN_0z7NzOn_0DZZ6uhPSBO2gFq-OpNLceIIQBTsFRVbsXjhJhOYpw9zrtoVNUvBvbfWyhaFFMzAtXEIA5Ykq_OI0Ll1IdG2SzIWWD5e7SoWrNeUncoFMu99ckAtctm8SicyELx08amf3R82CAvmWD6Tca90Dn0R2FJw_gFoLoOwJNSkaLra0fCSpGqPTBkz64S74cP4WgNykDxxiDIr1eiwq8X7uBWLE0gX2KAIlMaPi586uNC74MKA9GzuYICxjRT5lQ7j7-8gv8mZYtECoaiNsDFHLmMr86E5TLDUyMYaZo0kXRLaqiJPYowfP9npinBeiUcd9F191sjhTQket7jYErbFYXVrtJh9DwIELlkejcX8Jv2vO-vCLACGBIGYYyIIkEXstkwBeFWlhgsNBGwsRll83XT3QrmqyOjg6svVhXXZ_RMzIYtuysngzHtt2tF16ua6ZbDE_PadVtJ1ruCl4iudKy_NCs9xzacpqZ4vJlw2m00)

## Task b
Composite Pattern class based design description

### Component role

An abstract interface that defines uniform operations shared by leaves and composites. Methods include draw(), count(), and evaluate(context).

### Leaf role

Concrete elements that cannot contain children. Example classes include ProductItem, Button, and FormField. Each implements draw(), count() which returns one, and evaluate() for local rules.

### Composite role

Container elements that hold children and implement operations by delegating or aggregating child responses. Example classes include Panel, ProductListPanel, and CartPanel. count() returns sum of child counts. draw() performs own drawing and then calls children draw().

### Supporting creation pattern

A Factory is used to centralize creation of components and composites with consistent defaults and injection of policies. The factory returns Component instances for usage by UI layout code.


[![](https://img.plantuml.biz/plantuml/svg/jLJ1QiCm3Bq7yWywfepa0qeftGQ3GW-5VO5ggrd0jOEjT2lh_dsEdQHPkkwoxMPBJthFJqfMZj5oSr1fKcackqT1y6WEjT6a6TxJ1E0EfCNNR1RFmZIQindCmHV441rHDSYK2UDxl76Rt1cZ27MQVAH9ck3EiKN181Gw1_VTTKAKGoLzwJFRIfUnTKcybe5j7FsrdYXZGxZVMYCRCRoqZjVrLCSVCZuqp4RtX0ftfFw7BBZhAgOjQi_HMInUAYKjQL-qgHmlXXaiOtUKCXC-ESGx8POEvaZVflvIRzlsoQ-6iQVU8c79LtU3MZCTCecCix6GCJ3wcmLZRuA29HcVQff0WfxBNYxEHN6zhcbolS6BSvwFD-f7JDHu4_9rSfsUooHDdYz77-aSMcEnqcwalFUmA2RGy7pNlb8R9c1JWzbVCOOn0fQbfRB5nxM9q_N5_KXzeAqRyfPSem90IsZxfydA7yF_vHC0)](https://editor.plantuml.com/uml/jLJ1QiCm3Bq7yWywfepa0qeftGQ3GW-5VO5ggrd0jOEjT2lh_dsEdQHPkkwoxMPBJthFJqfMZj5oSr1fKcackqT1y6WEjT6a6TxJ1E0EfCNNR1RFmZIQindCmHV441rHDSYK2UDxl76Rt1cZ27MQVAH9ck3EiKN181Gw1_VTTKAKGoLzwJFRIfUnTKcybe5j7FsrdYXZGxZVMYCRCRoqZjVrLCSVCZuqp4RtX0ftfFw7BBZhAgOjQi_HMInUAYKjQL-qgHmlXXaiOtUKCXC-ESGx8POEvaZVflvIRzlsoQ-6iQVU8c79LtU3MZCTCecCix6GCJ3wcmLZRuA29HcVQff0WfxBNYxEHN6zhcbolS6BSvwFD-f7JDHu4_9rSfsUooHDdYz77-aSMcEnqcwalFUmA2RGy7pNlb8R9c1JWzbVCOOn0fQbfRB5nxM9q_N5_KXzeAqRyfPSem90IsZxfydA7yF_vHC0)
[![](https://img.plantuml.biz/plantuml/svg/RL9BRiCW4DqZSOTHLlOc1x0LAUh2KdQLUW82Ona90u9nLT--1fms_gpupFiCRxX74e6cqN2MTvmr3-idWab_UPGjPxg7gXokD7k4smqkNbWqbnfeG0lLZB7c3A3fX2GNvgiCA0W_4sYbrcq2l4d9GHiL5ZR-w4XnBxM8zIu02Zb0XYOIA0T5kjp1jnRG5yzsPGcbrY8vo6tc2fg8K5dt4bzbSFGqlyEiqZrd6_Jf-uDJawH30iSC2l11E6wIsFLpvl6SY9mziJYOV6JaIy289vfwpMFdSw1sBeoTHgCstVq5yPz8MHf1b4QIirscHstwDivpTbyG-HTnzWi0)](https://editor.plantuml.com/uml/RL9BRiCW4DqZSOTHLlOc1x0LAUh2KdQLUW82Ona90u9nLT--1fms_gpupFiCRxX74e6cqN2MTvmr3-idWab_UPGjPxg7gXokD7k4smqkNbWqbnfeG0lLZB7c3A3fX2GNvgiCA0W_4sYbrcq2l4d9GHiL5ZR-w4XnBxM8zIu02Zb0XYOIA0T5kjp1jnRG5yzsPGcbrY8vo6tc2fg8K5dt4bzbSFGqlyEiqZrd6_Jf-uDJawH30iSC2l11E6wIsFLpvl6SY9mziJYOV6JaIy289vfwpMFdSw1sBeoTHgCstVq5yPz8MHf1b4QIirscHstwDivpTbyG-HTnzWi0)

## Task c — Decision Logic Overview

### Decision focus  
Checkout permission logic uses four conditions and associated actions.

| Row | userLoggedIn | cartNotEmpty | paymentValidated | addressPresent | Actions |
|-----|---------------|--------------|------------------|----------------|----------|
| 1 | true | true | true | true | allowProceedToPayment |
| 2 | true | true | true | false | requestAddress |
| 3 | true | false | * | * | showEmptyCartMessage |
| 4 | false | * | * | * | showLoginPrompt |

### Interpreter overview  
Rules are expressed as composable logical expressions. The pattern parses or builds these from configuration, evaluating them against a runtime context. This replaces nested if statements with data driven logic trees.

### High level example

```js
// Terminal and composite expressions
class Expr { interpret(ctx) {} }
class IsUserLoggedIn extends Expr { interpret(ctx) { return ctx.user?.authenticated } }
class CartHasItems extends Expr { interpret(ctx) { return ctx.cart.items.length > 0 } }
class AND extends Expr { constructor(...c){ super(); this.c=c } interpret(ctx){ return this.c.every(x=>x.interpret(ctx)) } }
class NOT extends Expr { constructor(x){ super(); this.x=x } interpret(ctx){ return !this.x.interpret(ctx) } }

// Rules built as reusable expressions
const ruleAllow = AND(IsUserLoggedIn(), CartHasItems())
const ruleAddr  = AND(IsUserLoggedIn(), NOT(new CartHasItems()))

// Evaluation example
function evaluate(ctx) {
  if (ruleAllow.interpret(ctx)) return "allowProceedToPayment"
  if (ruleAddr.interpret(ctx)) return "requestAddress"
  return "showLoginPrompt"
}
```
Decision tables clarify rule coverage while the Interpreter Pattern encodes them as composable expressions. This approach centralizes checkout logic, allows simple updates without code rewrites, and supports runtime evaluation for different UI states or policies.

## Task d — One Page Article

### Composite pattern rationale  
The web shop interface contains nested panels and widgets that naturally form a tree structure. Each component, whether a simple product item or a container panel, supports the same operations such as draw(), count(), and evaluate(). The Composite Pattern unifies these layers under a shared interface so that a single traversal algorithm can manage both individual and grouped elements. This removes the need for type checks or duplicated control logic. Adding new UI components only requires extending the base interface without altering existing code, preserving scalability and consistency across the hierarchy.

### Creation pattern advantage  
A Factory pattern complements the composite structure by standardizing component creation. It centralizes initialization of widgets and panels, ensures consistent application of defaults, and hides construction complexity from client code. When the UI specification changes, new elements or composite configurations can be produced through the same factory interface. This promotes loose coupling and enables configurable component creation for different themes, user roles, or environments.

### Improving maintainability with pattern based logic models  
Decision Tables and the Interpreter Pattern abstract the business logic that governs operations such as evaluate() or checkout permission checks. These provide at a glance tables of conditions and actions which allow for non technical contributors to verify correctness and completeness. The Interpreter Pattern encodes those tabular rules into a structure of composable expressions that can be executed or modified dynamically. Together they isolate behavioral rules from the structural code defined by the Composite and Factory patterns. The result is a clean separation between UI composition, object creation, and logical evaluation. Maintenance tasks such as changing a rule, updating a condition, or extending UI panels can occur independently and with minimal regression risk. The combination of these patterns therefore delivers a balanced design where structure, behavior, and rule evaluation remain modular, readable, and easily extensible.
