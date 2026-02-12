---
class: SWE
Type:
  - class
sch_sem: fa_25
---


Khor Arika <br>
C S-4213-001 - Fall 2025, <br>
Assignment 3: Command

___

# StudentID_Assignment3_CS4213Fall2025

1. [Methodology](#methodology)
1. [Reflection](#reflection)
    1. [Controller and Model Decoupling:](#controller-and-model-decoupling)
    1. [Lombok Usage:](#lombok-usage)
1. [Core code](#core-code)
1. [MVC View](#mvc-view)

# Methodology
For code, we used java given its ease of reading and being a strongly typed lanugage. Project Lombok was used to reduce the verbosity of getters/setters and other redundent lines. We considered typescript and Koltin, be defaulted to java with lombok given the ease of setup (unsure if koltin support lombok). 

# Reflection
- Flexibility: The- Flexibility: The problem is that the GUI code, which acts as the sender, can become awkwardly dependent on the volatile code of the business logic. The necessary refactoring is Extract Interface. This involves implementing the Command interface with a single execution method, ensuring that the sender communicates only via this abstraction, thereby letting you use various commands with the same request sender.
- Reuse: The problem occurs when operations, such as copying text, need to be invoked from multiple places (e.g., toolbar buttons and shortcuts), which forces the duplication of the operation’s code. The refactoring needed is Extract Class. This is achieved by extracting all request details into a separate command class, which allows multiple GUI elements related to the same operation to be linked to the same command, preventing any code duplication.
- Testability/Decoupling: The problem is that the GUI object directly calls a method of a business logic object, indicating tight coupling where one class knows more than it should about the way in which the other was implemented. The refactoring step specific to the Command pattern is to change the senders (Controller) so they execute the command instead of sending a request to the receiver directly. This requires the Client to create and configure concrete command objects with request parameters and the Receiver (Model) before execution, thereby reducing coupling between the UI and business logic layers.

## Controller and Model Decoupling: 
The TodoListController (Sender/Invoker) does not need to know the specific business logic method names (addTask or completeTask) or the arguments required. It only knows how to call command.execute(). This means if the Model's methods change (e.g., addTask becomes createNewTodoItem), the Controller remains unaffected, provided the Command implementation is updated. This improves the testability and flexibility of the application.

## Lombok Usage: 
Lombok allows us to achieve this separation cleanly by providing boilerplate methods (like getters and setters) without cluttering the business logic classes (Model/Receiver) with trivial implementation code. Using annotations like @AllArgsConstructor allows the Client code to easily configure the Command objects with the necessary parameters and the Receiver (Model) before handing them off to the Controller (Sender) for execution.


# Core code
```java
import lombok.Data;
import lombok.Getter;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

/**
 * Task: Represents the data structure for a single To-Do item.
 */
@Data 
class Task {
    private final String id;
    private String description;
    private boolean isCompleted;

    public Task(String description) {
        this.id = UUID.randomUUID().toString();
        this.description = description;
        this.isCompleted = false;
    }

    @Override
    public String toString() {
        String status = isCompleted ? "[COMPLETED]" : "[PENDING]";
        return String.format("%s: %s (ID: %s)", status, description, id.substring(0, 8));
    }
}

class TodoListModel {
    private final List<Task> tasks = new ArrayList<>(); 

    public void addTask(String description) {
        Task newTask = new Task(description);
        tasks.add(newTask);
    }

    public boolean completeTask(String taskId) {
        for (Task task : tasks) {
            if (task.getId().equals(taskId)) {
                task.setCompleted(true);
                return true;
            }
        }
        return false;
    }
    
    public List<Task> getAllTasks() {
        return new ArrayList<>(tasks);
    }
}

interface Command {
    void execute();
}

@AllArgsConstructor
class AddTaskCommand implements Command {
    private final TodoListModel receiver;
    private final String description;

    @Override
    public void execute() {
        receiver.addTask(description);
        System.out.println("LOG: Task added: \"" + description + "\"");
    }
}

@AllArgsConstructor
class CompleteTaskCommand implements Command {
    private final TodoListModel receiver;
    private final String taskId;

    @Override
    public void execute() {
        boolean success = receiver.completeTask(taskId);
        if (success) {
            System.out.println("LOG: Task ID " + taskId.substring(0, 8) + " marked as complete.");
        } else {
            System.out.println("LOG: ERROR - Task ID " + taskId.substring(0, 8) + " not found.");
        }
    }
}

class TodoListView {
    public void displayTasks(List<Task> tasks) {
        System.out.println("\n--- CURRENT TO-DO LIST ---");
        if (tasks.isEmpty()) {
            System.out.println("List is empty.");
            return;
        }
        
        List<Task> pending = tasks.stream().filter(t -> !t.isCompleted()).collect(Collectors.toList());
        List<Task> completed = tasks.stream().filter(Task::isCompleted).collect(Collectors.toList());

        System.out.println("Pending Tasks (" + pending.size() + "):");
        pending.forEach(System.out::println);
        
        System.out.println("\nCompleted Tasks (" + completed.size() + "):");
        completed.forEach(System.out::println);
        System.out.println("--------------------------");
    }
}


@AllArgsConstructor
class TodoListController {
    private final TodoListModel model;
    private final TodoListView view;

    public void processAction(Command command) {
        System.out.println("\nCONTROLLER: Processing action...");
        command.execute();
    }

    public void displayList() {
        view.displayTasks(model.getAllTasks());
    }

    public String getFirstPendingTaskId() {
        return model.getAllTasks().stream()
                .filter(t -> !t.isCompleted())
                .map(Task::getId)
                .findFirst()
                .orElse(null);
    }
}

public class MainApplication {
    public static void main(String[] args) {
        TodoListModel model = new TodoListModel();
        TodoListView view = new TodoListView();

        TodoListController controller = new TodoListController(model, view);

        
        // 1. Create commands, pre-configured with data and the receiver [9, 12].
        Command addGroceries = new AddTaskCommand(model, "Buy rice and spices");
        Command addHomework = new AddTaskCommand(model, "Complete MVC assignment");
        
        // 2. The Controller processes the actions.
        controller.processAction(addGroceries);
        controller.processAction(addHomework);
        
        // 3. Display the current list state
        controller.displayList();

        // 4. Complete a task.
        String taskIdToComplete = controller.getFirstPendingTaskId();
        if (taskIdToComplete != null) {
            Command completeTask = new CompleteTaskCommand(model, taskIdToComplete);
            controller.processAction(completeTask);
        }

        // 5. Display the updated list state
        controller.displayList();
    }
}

```

# MVC View

![[Pasted image 20251121164735.png]]

Group J,<br>
Khor Arika, Merrill Hunter, Mian Umar , Nhan Trinh, Yu, Vincent  <br>
C S-4213-001 - Fall 2025, <br>
assignment name

___

# STUB 







