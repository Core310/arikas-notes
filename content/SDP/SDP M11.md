---
class: SWE
Type:
  - class
sch_sem: fa_25
---


Group J,<br>
Khor Arika<br>
C S-4213-001 - Fall 2025, <br>
Assignment 4: Patterns for Maintenance
___

# Assignment 4: Patterns for Maintenance
1. [Design Refactoring: ROS2 Line Follower Robot](#design-refactoring-ros2-line-follower-robot)
    1. [a. Original Design and Flaws](#a-original-design-and-flaws)
    1. [b. Refactor for Flexibility and Reuse](#b-refactor-for-flexibility-and-reuse)
    	1. [Refactoring 1: Flexibility (Apply Mediator Pattern)](#refactoring-1-flexibility-apply-mediator-pattern)
    	1. [Refactoring 2: Reuse (Consolidate Logic Behind a Facade)](#refactoring-2-reuse-consolidate-logic-behind-a-facade)
    	1. [Refactoring 3: Optional (Introduce Strategy Pattern)](#refactoring-3-optional-introduce-strategy-pattern)
    1. [c. Refactor for Testability + Tools](#c-refactor-for-testability--tools)
    1. [d. Reflection on Refactoring Impact (Short Summary)](#d-reflection-on-refactoring-impact-short-summary)



### Design Refactoring: ROS2 Line Follower Robot

#### a. Original Design and Flaws

- System Selected: Basic ROS2 Line Follower Robot
- Purpose: To follow a designated line path using feedback from a line sensor.
- Current Design Flaw: The system is susceptible to noise.
- Lacking Areas: Flexibility, reuse, and testability. (The tight coupling between sensor reading, signal processing, and motor control logic is often the root cause of these deficiencies.)

[![](https://img.plantuml.biz/plantuml/svg/RP51IyGm48NlWVo7ERR8_e6ob8KjddILhNYFwTWTI3CbcRgA-jzDIgkuR4x9lE5xZvTT51Da6fnMGk8G7WBrv8s31YFr7efsYXP7ePSa2iE1AMAfbLRMcHZXZZosw2E70tS8drf1EZSGq7H7SswCcA9SXvQ7SHAyP-6mvs4mlYjAg62vQ_Nz1rwMl0Hs3l_HDp1aiGdqXc5buplQn5wnTkX-kUK2liYwsNpLLsqgs6ufnWbZJfm9q550A-wZhZF8io2aeau2_7eDeTMjC-SAdkQTFK-Z8zzhzKpiZ2HkUtnCrSvPu9GCNFOopav99lOfyKNlFlUk5QOisJsdsAN7_7C_)](https://editor.plantuml.com/uml/RP51IyGm48NlWVo7ERR8_e6ob8KjddILhNYFwTWTI3CbcRgA-jzDIgkuR4x9lE5xZvTT51Da6fnMGk8G7WBrv8s31YFr7efsYXP7ePSa2iE1AMAfbLRMcHZXZZosw2E70tS8drf1EZSGq7H7SswCcA9SXvQ7SHAyP-6mvs4mlYjAg62vQ_Nz1rwMl0Hs3l_HDp1aiGdqXc5buplQn5wnTkX-kUK2liYwsNpLLsqgs6ufnWbZJfm9q550A-wZhZF8io2aeau2_7eDeTMjC-SAdkQTFK-Z8zzhzKpiZ2HkUtnCrSvPu9GCNFOopav99lOfyKNlFlUk5QOisJsdsAN7_7C_)

#### b. Refactor for Flexibility and Reuse

There are three key refactorings sections here, given the required patterns (Facade or Mediator)

##### Refactoring 1: Flexibility (Apply Mediator Pattern)

*   Description: We introduce a `RobotMediator` to manage the interactions between the `LineSensorNode`, a new `NoiseFilter` component, and the `MotorControllerNode`. This reduces direct object-to-object chatter, replacing tight coupling with centralized control through the mediator. This refactoring addresses the noise flaw by mandating data passes through a dedicated filter before reaching the motors.

```java
// Behavioral Pattern: Mediator
public interface RobotComponent {
    void setMediator(RobotMediator mediator);
    void send(String event);
}

public class LineFollowerMediator implements RobotMediator {
    // Some centralized routing logic
    // ... Random components initialized here..

    @Override
    public void notify(RobotComponent sender, String event) {
        // Reduces coupling btwn sensor & motor nodes.
        // eg.: Sensor raw data -> Mediator directs it to Filter -> Filter sends clean data -> Mediator directs it to Motor.

        // if (sender instanceof LineSensorNode) {
        //     NoiseFilter filter = // retrieve filter
        //     filter.process(event.getRawData());
        // }
    }
}
// Benefit: Promotes loose coupling, making it easier to swap out components or insert new processing steps (like a NoiseFilter).
````

##### Refactoring 2: Reuse (Consolidate Logic Behind a Facade)

- Description of Change: Introduce a `PerceptionFacade` to provide a simplified, unified interface to the complex subsystem of sensors, filters, and processors. This pattern eliminates duplication and consolidates logic, enhancing code reuse by providing a single point of interaction for high-level navigation logic.
-  Facade pattern helps client applications easily interact with the system.

```java
// Structural Pattern: Facade
public class PerceptionFacade {
    private LineSensor sensor;
    private NoiseFilter filter;
    // private Gyroscope gyro; // porposed component

    public PerceptionFacade() {
        // init subsystem components privately
    }

    // Simplifies interaction btwen client mods
    public FilteredData getRobustLineDataEstimate() {
        // read sensor, apply filter, etc,, goes here
        // return  ProcessedData(sensor readings)
    }
}
// Benefit: High-level client code (e.g., a Mission Planner) can reuse this simple interface without knowing the complexities of noise reduction or multiple sensor readings.
```

##### Refactoring 3: Optional (Introduce Strategy Pattern)

- Description of Change: Use the Strategy pattern to define a family of interchangeable line-following algorithms (e.g., proportional control, velocity tracking). The `LineFollowerContext` holds a reference to the chosen strategy, allowing the behavior to be selected or changed at runtime, which increases flexibility.
- Strategy pattern is used when multiple algorithms exist for a task, and the client application selects the implementation at runtime.

```java
// Behavioral Pattern: Strategy
public interface LineFollowStrategy {
    MotorCommand calculateCommand(LineData data);
}

public class PIDStrategy implements LineFollowStrategy {
    // @Override
    // public MotorCommand calculateCommand(...) { /* ... */ }
}

public class FollowerContext {
    private LineFollowStrategy strategy;

    public FollowerContext(LineFollowStrategy strategy) {
        this.strategy = strategy;
    }

    public void executeFollow(LineData data) {
        // strategy.calculateCommand(data); // Behavior is encapsulated and interchangeable
    }
}
```

[![](https://img.plantuml.biz/plantuml/svg/hLPTRzCm57slrFzmtvR2yZ2G-8Z6D5YfL6bCrSPugVRWshUfaMDNjjEj8FuxrscInbqsWI0lTUFxUUuvjprtdbbV5ceuyD8hXDkrO1u5ZD79N4DowwJEuGiAoRonnp1Xd0ayXl5qD1mC1qVmeUS9xp_XYcsaiKp1Z7cFLcTj64YkSSaudKBman6aCBDc8mKwuAWzESaVL0GtHL5goPcNHiFyxTrm83M58b-4QxCmletuSpW0Ubw2Dbukjub3BT1cEwiBKwoDfi37W1lwoE36XzJKmg_GnK7GrdmVrM6RAYdgGnQNCDhRQf7qvk6AEGUNKkF4A6NkqRRrosAji20VzvyQ2qvfIcQb3o1VcbnoMA55UXkLSsMamubK1C6ZAdgGM5l3qRd4ilinyumAsHr6aC4k2ehmlSxHssoQleZIPb0mpN9qpzX_CNIwC4GEkaLxPGHs_GBbRb0xigwk0amEYCiC_CgQCb_H9q8pk-uiTcwLrn_qRv69kkMaT-GD7Xq0EXdIzAoV05dWcEiK-9ouQCebzsKahfqoOscz2j8Yq9nHCkZQWQfuC7ztro0mGyjn7GHM1wWxJKDJBh0yxg2vNLQZoxfpRD38qHDwfVF1Cs3nsNbPKFha2P8ygi4GSm_JzXf5sPz3h8lAak3-YhJv5b99lyresQs3gZJVmbH_HrwjcuHM7CpVH3jdMh5mREK6RRGSlg4od68bc_gGWJ3bGc4i_MjagXkYmxU-qDJWHnepJNd5hBXd95w-Ky2XYFlKqGvIL46pA4LJUuzZqcS_WYCuFQMr3z91wMWvLxia2UIgo4YOjjYDuEmCvZmzkMlIu0FoqYFfYHGh4bw83Eel3K97yHWefwDGMMzheh9qG6CAgewmOmigY5Lr30TzpYPeCCRYRt_8I7z4vtmRg-rrKDiaBFD06BvYEaT6702cShBmgyB1_7r4gFqgQ4EsjE9CyLAnFMgYshUDg8AMwlQgwuWFi-cu3TWXsR-aY-8twoj0Ym--ipJgk5bFhWCox2wVI7EOmCIBSnzoE3WdAbJ_O7u3)](https://editor.plantuml.com/uml/hLPTRzCm57slrFzmtvR2yZ2G-8Z6D5YfL6bCrSPugVRWshUfaMDNjjEj8FuxrscInbqsWI0lTUFxUUuvjprtdbbV5ceuyD8hXDkrO1u5ZD79N4DowwJEuGiAoRonnp1Xd0ayXl5qD1mC1qVmeUS9xp_XYcsaiKp1Z7cFLcTj64YkSSaudKBman6aCBDc8mKwuAWzESaVL0GtHL5goPcNHiFyxTrm83M58b-4QxCmletuSpW0Ubw2Dbukjub3BT1cEwiBKwoDfi37W1lwoE36XzJKmg_GnK7GrdmVrM6RAYdgGnQNCDhRQf7qvk6AEGUNKkF4A6NkqRRrosAji20VzvyQ2qvfIcQb3o1VcbnoMA55UXkLSsMamubK1C6ZAdgGM5l3qRd4ilinyumAsHr6aC4k2ehmlSxHssoQleZIPb0mpN9qpzX_CNIwC4GEkaLxPGHs_GBbRb0xigwk0amEYCiC_CgQCb_H9q8pk-uiTcwLrn_qRv69kkMaT-GD7Xq0EXdIzAoV05dWcEiK-9ouQCebzsKahfqoOscz2j8Yq9nHCkZQWQfuC7ztro0mGyjn7GHM1wWxJKDJBh0yxg2vNLQZoxfpRD38qHDwfVF1Cs3nsNbPKFha2P8ygi4GSm_JzXf5sPz3h8lAak3-YhJv5b99lyresQs3gZJVmbH_HrwjcuHM7CpVH3jdMh5mREK6RRGSlg4od68bc_gGWJ3bGc4i_MjagXkYmxU-qDJWHnepJNd5hBXd95w-Ky2XYFlKqGvIL46pA4LJUuzZqcS_WYCuFQMr3z91wMWvLxia2UIgo4YOjjYDuEmCvZmzkMlIu0FoqYFfYHGh4bw83Eel3K97yHWefwDGMMzheh9qG6CAgewmOmigY5Lr30TzpYPeCCRYRt_8I7z4vtmRg-rrKDiaBFD06BvYEaT6702cShBmgyB1_7r4gFqgQ4EsjE9CyLAnFMgYshUDg8AMwlQgwuWFi-cu3TWXsR-aY-8twoj0Ym--ipJgk5bFhWCox2wVI7EOmCIBSnzoE3WdAbJ_O7u3)

#### c. Refactor for Testability + Tools

Dependency Injection (DI) allows us to remove hard-coded dependencies, making the application loosely-coupled, extendable, and maintainable. It is a suggested refactoring technique to improve testability.

- Refactoring: Use Constructor Dependency Injection to pass dependencies (like sensor readers or motor drivers) to a node instead of letting the node instantiate them internally.
- Where DI is Used (Java Example):

```java
public interface IMotorDriver {
    void setVelocity(double velocity);
}

// Concrete implementation that interfaces with low-level hardware
public class RealMotorDriver implements IMotorDriver {
    // ...
}

public class MotorControllerNode {
    private final IMotorDriver driver;

    // <<<< DI IS USED HERE (Constructor Injection) >>>>
    // The dependency (IMotorDriver) is provided externally
    public MotorControllerNode(IMotorDriver driver) {
        this.driver = driver;
    }

    public void move(double speed) {
        driver.setVelocity(speed);
    }
}
// Test Benefit: We can pass a MockMotorDriver when testing MotorControllerNode, isolating its logic completely.
```

Refactoring for Testability 2: Extract Interface

- Refactoring: Extract interfaces from concrete sensor and driver classes (e.g., `IMotorDriver`). This ensures high-level modules (`MotorControllerNode`) depend on abstractions rather than concrete details, which adheres to the Dependency Inversion Principle (DIP). This permits the easy substitution of real components with test doubles (mocks or stubs) during unit testing.

Refactoring Tools (IntelliJ)
IDEs, like Jetbrains (think IntelliJ), help in making safe and efficient improvements to an existing design. IntelliJ supports a wide array of refactorings, categorized typically by how they modify code, such as Composing Methods (Extract Method, Inline Method), Moving Features Between Objects (Move Method, Extract Class), and Dealing with Generalization (Extract Interface, Extract Superclass). IntelliJ aids in safe refactoring by automating complex changes, such as updating all references when a class or method is renamed (using Rename) or moved (Move Class), which is crucial for preventing unexpected system breakage. Personally I use the move highlighted chunk to method, which happily doesn't rely on AI so I know it will pretty much never screw up. Additionally, refactoring names is always easy as the IDE indexes the entire projecta nd can be customized to certain scopes when renaming variables or getting rid of certain deprcated functions.

#### d. Reflection on Refactoring Impact (Short Summary)

The Mediator Pattern likely had the largest impact on improving the robot’s resilience, given it directly addressed the root cause of the system's current flaw: susceptibility to noise. By creating an intermediary layer, we immediately decoupled the sensor reading from the final motor command execution, enabling the seamless insertion of a dedicated `NoiseFilter` component. This reinforces the view where design improvement is achieved not just by fixing broken code, but by creating appropriate abstractions and ensuring components adhere to loose coupling. The ability to swap or enhance processing logic without touching the primary sensor or motor control components fundamentally changed how flexibility and maintenance were perceived in the system design.
