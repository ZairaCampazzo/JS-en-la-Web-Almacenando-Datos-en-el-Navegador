import  {addTask} from "./components/addTask.js"
import { displayTasks } from "./components/readTasks.js";

const btn = document.querySelector("[data-form-btn]");

//Arrow functions o funciones anónimas
btn.addEventListener("click", addTask);

displayTasks ();