"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const task_list = [];
    const cover = document.getElementById("cover");
    const no_image = document.getElementById("no_image");
    const add_task = document.getElementById("add_task");
    const add_task_note = document.getElementById("add_task_note");
    const tasks = document.getElementById("tasks");
    const taskAvailbilty = () => {
        if (task_list.length == 0) {
            no_image.classList.remove("disabled");
            no_image.classList.add("no_image");
        }
        else {
            no_image.classList.add("disabled");
            no_image.classList.remove("no_image");
        }
        taskAdder();
    };
    const completeMarker = () => {
        document.querySelectorAll(".container").forEach((item) => {
            const marker = item.getAttribute("data-completed");
            const text = item.querySelector(".left .task");
            const checkbox = item.querySelector(".left .check");
            if (marker == "true") {
                text.style.textDecoration = "line-through";
                checkbox.checked = true;
            }
        });
    };
    const taskAdder = () => {
        let html = "";
        for (let i = 0; i < task_list.length; i++) {
            html += `
        <div class = "container" data-completed = ${task_list[i][1]}>
            <div class = "left">
                <input data-index = ${i} class = "check" type = "checkbox"/>
                <p class = "task">${task_list[i][0]}</p>
            </div>
            <div class = "right">
                <svg data-index=${i} class = "edit" xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 25 23" fill="6C63FF">
                <path d="M17.474 3.60677L21.3889 7.5217C21.5538 7.68663 21.5538 7.95573 21.3889 8.12066L11.9097 17.5998L7.88194 18.0469C7.34375 18.1076 6.88802 17.6519 6.94878 17.1137L7.39583 13.0859L16.875 3.60677C17.0399 3.44184 17.309 3.44184 17.474 3.60677ZM24.5052 2.61285L22.3872 0.494792C21.7274 -0.164931 20.6554 -0.164931 19.9913 0.494792L18.4549 2.03125C18.2899 2.19618 18.2899 2.46528 18.4549 2.63021L22.3698 6.54514C22.5347 6.71007 22.8038 6.71007 22.9688 6.54514L24.5052 5.00868C25.1649 4.34462 25.1649 3.27257 24.5052 2.61285ZM16.6667 15.0217V19.4401H2.77778V5.55122H12.7517C12.8906 5.55122 13.0208 5.49479 13.1207 5.39931L14.8568 3.66319C15.1866 3.33333 14.9523 2.77344 14.4878 2.77344H2.08333C0.93316 2.77344 0 3.7066 0 4.85677V20.1345C0 21.2847 0.93316 22.2179 2.08333 22.2179H17.3611C18.5113 22.2179 19.4444 21.2847 19.4444 20.1345V13.2856C19.4444 12.8212 18.8845 12.5911 18.5547 12.9167L16.8186 14.6528C16.7231 14.7526 16.6667 14.8828 16.6667 15.0217Z" fill="#6C63FF"/>
                </svg>
                <svg data-index = ${i} class = "delete" xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 22 25" fill="6C63FF">
                <path d="M1.5625 22.6563C1.5625 23.2779 1.80943 23.874 2.24897 24.3135C2.68851 24.7531 3.28465 25 3.90625 25H17.9688C18.5904 25 19.1865 24.7531 19.626 24.3135C20.0656 23.874 20.3125 23.2779 20.3125 22.6563V6.25001H1.5625V22.6563ZM14.8438 10.1563C14.8438 9.94906 14.9261 9.75034 15.0726 9.60383C15.2191 9.45732 15.4178 9.37501 15.625 9.37501C15.8322 9.37501 16.0309 9.45732 16.1774 9.60383C16.3239 9.75034 16.4062 9.94906 16.4062 10.1563V21.0938C16.4062 21.301 16.3239 21.4997 16.1774 21.6462C16.0309 21.7927 15.8322 21.875 15.625 21.875C15.4178 21.875 15.2191 21.7927 15.0726 21.6462C14.9261 21.4997 14.8438 21.301 14.8438 21.0938V10.1563ZM10.1562 10.1563C10.1562 9.94906 10.2386 9.75034 10.3851 9.60383C10.5316 9.45732 10.7303 9.37501 10.9375 9.37501C11.1447 9.37501 11.3434 9.45732 11.4899 9.60383C11.6364 9.75034 11.7188 9.94906 11.7188 10.1563V21.0938C11.7188 21.301 11.6364 21.4997 11.4899 21.6462C11.3434 21.7927 11.1447 21.875 10.9375 21.875C10.7303 21.875 10.5316 21.7927 10.3851 21.6462C10.2386 21.4997 10.1562 21.301 10.1562 21.0938V10.1563ZM5.46875 10.1563C5.46875 9.94906 5.55106 9.75034 5.69757 9.60383C5.84409 9.45732 6.0428 9.37501 6.25 9.37501C6.4572 9.37501 6.65591 9.45732 6.80243 9.60383C6.94894 9.75034 7.03125 9.94906 7.03125 10.1563V21.0938C7.03125 21.301 6.94894 21.4997 6.80243 21.6462C6.65591 21.7927 6.4572 21.875 6.25 21.875C6.0428 21.875 5.84409 21.7927 5.69757 21.6462C5.55106 21.4997 5.46875 21.301 5.46875 21.0938V10.1563ZM21.0938 1.56251H15.2344L14.7754 0.649423C14.6782 0.454215 14.5284 0.29001 14.3429 0.175281C14.1575 0.0605526 13.9437 -0.00014785 13.7256 8.5609e-06H8.14453C7.92694 -0.000827891 7.71352 0.0596463 7.52871 0.174503C7.34391 0.289359 7.19519 0.453951 7.09961 0.649423L6.64062 1.56251H0.78125C0.57405 1.56251 0.375336 1.64482 0.228823 1.79133C0.08231 1.93784 0 2.13656 0 2.34376L0 3.90626C0 4.11346 0.08231 4.31217 0.228823 4.45869C0.375336 4.6052 0.57405 4.68751 0.78125 4.68751H21.0938C21.301 4.68751 21.4997 4.6052 21.6462 4.45869C21.7927 4.31217 21.875 4.11346 21.875 3.90626V2.34376C21.875 2.13656 21.7927 1.93784 21.6462 1.79133C21.4997 1.64482 21.301 1.56251 21.0938 1.56251Z" fill="#6C63FF"/>
                </svg>
            </div>
            
        </div>
        <hr/>
        `;
        }
        tasks.innerHTML = html;
        completeMarker();
        document.querySelectorAll(".delete").forEach((item) => {
            item.addEventListener("click", () => {
                const indexStr = item.getAttribute("data-index");
                if (indexStr == null)
                    return;
                const index = parseInt(indexStr);
                deleteTask(index);
            });
        });
        document.querySelectorAll(".edit").forEach((item) => {
            item.addEventListener("click", () => {
                const indexStr = item.getAttribute("data-index");
                if (indexStr == null)
                    return;
                const index = parseInt(indexStr);
                editInput(index);
            });
        });
        document.querySelectorAll(".check").forEach((checkbox) => {
            checkbox.addEventListener("click", () => {
                const checkboxElement = checkbox;
                const leftcontainer = checkbox.closest(".left");
                const taskNote = leftcontainer.querySelector(".task");
                const indexStr = checkbox.getAttribute("data-index");
                if (indexStr == null)
                    return;
                const index = parseInt(indexStr);
                if (checkboxElement.checked) {
                    taskNote.style.textDecoration = "line-through";
                    task_list[index][1] = true;
                }
                else {
                    taskNote.style.textDecoration = "none";
                    task_list[index][1] = false;
                }
            });
        });
    };
    const addTask = () => {
        cover.classList.remove("disabled");
        cover.classList.add("cover");
        add_task_note.innerHTML = `
        <div id = "popup">
            <h2 id = "edit">New Task</h2>
            <input id = "adding" placeholder = "Input your task"/>
            <div id = "confirmation">
                <button id = "cancel"> CANCEL </button>
                <button id = "apply"> APPLY </button>
            </div>
        </div>
    `;
        const apply = document.getElementById("apply");
        const cancel = document.getElementById("cancel");
        apply.addEventListener("click", () => {
            const adding = document.getElementById("adding");
            const input_value = adding.value;
            if (input_value != "") {
                task_list.push([input_value, false]);
                cover.classList.add("disabled");
                cover.classList.remove("cover");
                add_task_note.innerHTML = "";
                taskAvailbilty();
            }
        });
        cancel.addEventListener("click", () => {
            cover.classList.add("disabled");
            cover.classList.remove("cover");
            add_task_note.innerHTML = "";
        });
    };
    add_task.addEventListener("click", addTask);
    taskAvailbilty();
    const editInput = (index) => {
        cover.classList.remove("disabled");
        cover.classList.add("cover");
        add_task_note.innerHTML = `
        <div id = "popup">
            <h2 id = "edit">Edit Task</h2>
            <input id = "adding" value = "${task_list[index][0]}"/>
            <div id = "confirmation">
                <button id = "cancel"> CANCEL </button>
                <button id = "apply"> APPLY </button>
            </div>
        </div>
    `;
        const apply = document.getElementById("apply");
        const cancel = document.getElementById("cancel");
        apply.addEventListener("click", () => {
            const adding = document.getElementById("adding");
            const input_value = adding.value;
            if (input_value != "") {
                task_list[index][0] = input_value;
                cover.classList.add("disabled");
                cover.classList.remove("cover");
                add_task_note.innerHTML = "";
                taskAvailbilty();
            }
        });
        cancel.addEventListener("click", () => {
            cover.classList.add("disabled");
            cover.classList.remove("cover");
            add_task_note.innerHTML = "";
        });
    };
    const deleteTask = (index) => {
        cover.classList.remove("disabled");
        cover.classList.add("cover");
        add_task_note.innerHTML = `
        <div id = "popup">
            <h2 id = "edit">Do you want to delete</h2>
            <p id = "deletiton">
              ${task_list[index][0]}
            </p>
            <div id = "confirmation">
                <button id = "cancel"> CANCEL </button>
                <button id = "remove"> CONFIRM </button>
            </div>
        </div>
    `;
        const remove = document.getElementById("remove");
        const cancel = document.getElementById("cancel");
        remove.addEventListener("click", () => {
            cover.classList.add("disabled");
            cover.classList.remove("cover");
            add_task_note.innerHTML = "";
            task_list.splice(index, 1);
            taskAvailbilty();
        });
        cancel.addEventListener("click", () => {
            cover.classList.add("disabled");
            cover.classList.remove("cover");
        });
    };
});
