//global stuff that stays with the current user
const session = {
    user: null,
    messages: [],
}

export default session;

export function Login(){
    session.user = {
        FirstName: "Frank",
        LastName: "Seelmann",
        id: 1,
    }
}