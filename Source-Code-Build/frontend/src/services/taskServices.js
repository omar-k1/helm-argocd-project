import axios from "axios";

// Fallback if env is missing
const apiUrl = process.env.REACT_APP_BACKEND_URL || "http://api:3500/api/tasks";

// Debug log
console.log("API URL:", apiUrl);

// Optional: throw error if still invalid
if (!apiUrl) {
    throw new Error("REACT_APP_BACKEND_URL is not defined!");
}

export function getTasks() {
    return axios.get(apiUrl);
}

export function addTask(task) {
    return axios.post(apiUrl, task);
}

export function updateTask(id, task) {
    return axios.put(`${apiUrl}/${id}`, task);
}

export function deleteTask(id) {
    return axios.delete(`${apiUrl}/${id}`);
}
