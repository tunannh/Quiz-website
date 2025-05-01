const loginReducer = (state=false, action) => {
    switch (action.type) {
        case "CHECK-LOGIN":
            return action.status;

        default:
            return state;
    }
}

export default loginReducer