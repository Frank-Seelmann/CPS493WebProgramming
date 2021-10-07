//global stuff that stays with the current user
const session = {
    user: null,
    messages: [],
    Login() {
        this.user = {
            FirstName: "Frank",
            LastName: "Seelmann",
            id: 1,
        }
    }
}

export default session;