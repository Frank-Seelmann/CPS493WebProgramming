//global stuff that stays with the current user
const session = {
    user: null,
    messages: [],
    Login(email, password) {

        this.user = {
            FirstName: "Frank",
            LastName: email,
            Password: password,
            id: 1,
        }
    }
}

export default session;