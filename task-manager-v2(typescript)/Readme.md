# Task Manager App

A simple and interactive task manager built with HTML, CSS, and Typescript. It allows users to add, edit, complete, and delete tasks with a modern popup UI.

---

##  Features

- Add new tasks 
- Edit existing tasks via popup
- Mark tasks as complete with a checkbox
- Delete tasks with confirmation
- Responsive and clean design
- Visual feedback using overlays and text decorations

---

##  Tech Stack

- **HTML** – Structure
- **CSS** – Styling
- **Typescript** – Logic & Interactivity
- **Figma** – UI mockup (included in `/mockup`)


---

##  Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/nathnaeltamirat/a2sv-web.git
cd task-manager-v2(typescript)
```

### 2. Open in browser
```bash
open index.html
```

## Project Structure

task-manager-v2(typescript)/
│
├── dist/                  # Compiled JavaScript output
│   └── index.js
│
├── src/                   # Source files
│   ├── css/               # Stylesheets (e.g., style.css)
│   ├── images/            # Image assets (e.g., no-image, screenshots)
│   ├── ts/                # TypeScript files (e.g., todo.ts)
│   └── mockup/            # Figma exports or design mockups
│
├── index.html             # Main HTML entry point
└── README.md              # Project documentation


## Functions Overview

| Function Name        | Purpose                                      |
|----------------------|----------------------------------------------|
| `taskAdder()`        | Renders all tasks to the screen              |
| `editInput(index)`   | Opens edit popup for a specific task         |
| `deleteTask(index)`  | Confirms and deletes a task by index         |
| `completeMarker()`   | Adds line-through for completed tasks        |
| `taskAvailbilty()`   | Checks and shows "No Tasks" message          |
| `addTask()`          | Creates a popup for adding task              |

## Preview

###  Home Screen - No task
![no task Screen](src/images/no_task.png)
###  add-task screen
![add task Screen](src/images/add_task.png)
###  complete task Screen - 
![complete task Screen](src/images/complete_task.png)
###  edit_task screen
![edit task Screen](src/images/edit_task.png)
###  after edit Screen
![no task Screen](src/images/afterEdit_task.png)
###  Delete task Screen 
![delete task Screen](src/images/deletePopup_task.png)
###  After Dlete Screen 
![no task Screen](src/images/afterDelete_task.png)

## Future Improvements

- [ ] LocalStorage support  
- [ ] Due date and priority tags  
- [ ] Filtering and search  
- [ ] Dark mode  

## Mockup
[Nathnael Tamirat figma design sharable link](https://www.figma.com/design/WAKCvPFRpOJga6ZaTJ59VU/ToDo-Mockup?node-id=0-1&m=dev)
###  Home screen
![Home  Screen](src/mockup/View-Page.png)
###  Adding-ToDo screen
![Adding ToDo  Screen](src/mockup/Adding-ToDo.png)
###  Deleting-ToDo screen
![Deleting ToDo  Screen](src/mockup/Deleting-TODO.png)
###  Editing-ToDo screen
![Editing ToDo  Screen](src/mockup/Editing-TODO.png)
## 👨‍💻 Author

- **Name**: Nathnael Tamirat  
- **GitHub**: [@nathnaeltamirat](https://github.com/yourusername)  
- **LinkedIn**: [linkedin.com/in/nathnael-tamirat/](https://www.linkedin.com/in/nathnael-tamirat/)  
- **Email**: nathnaeltamirat3@gmail.com

## UI Credit FOR inspiration
- **person**: [Dima Dzubenko](https://www.figma.com/@dimadzubenko)
- **inspired UI KIT**: [Figma file ui inspiration](https://www.figma.com/community/file/1287029163993360080)