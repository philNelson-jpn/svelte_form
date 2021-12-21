import {writable, readable} from "svelte/store"
import data from "./data.json"

export const posts = writable(data.data)
// data.data refers to our array of ojbects in the data object of our JSON file

export const user = readable({
    name: "Philanthropissed",
    about: "About as cool as a cucumber, but has more taste"
})