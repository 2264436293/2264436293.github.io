import { createStore } from "redux";
let initValue = {};
let reducer = (state = initValue, action) => {
    let newState = JSON.parse(JSON.stringify());
    switch (action.type) {
        default: return state;
    }
};
export default createStore(reducer());