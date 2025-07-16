package com.taskflow.service;

import com.taskflow.entity.Task;

import java.util.List;

public interface TaskService {

    Task createTask(Task task);

    List<Task> getAllTasks();

    Task getTaskById(String id);

    Task updateTask(String id, Task updatedTask);

    void deleteTask(String id);

    List<Task> getTasksByUserId(String userId);
}
