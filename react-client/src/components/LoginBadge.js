import Session from "../services/session";


function login() {
    Session.Error('Not impemented yet');
    //this.Session.Login();
}

function name() {
    return Session.user.firstName + ' ' + Session.user.lastName;
}

export default () => !Session.user ?
    <div class="buttons">
        <a class="button is-primary">
            <strong>Sign up</strong>
        </a>
        <a class="button is-light" onClick={login}>
            Log in
        </a>
    </div> :
    <div>
        Hello {name()}
    </div>
