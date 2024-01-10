export function authHeader() {
    let token = JSON.parse(localStorage.getItem('token'));
    if (token) {
        return { 'x-access-token': `${token}` };
    } else {
        return {};
    }
}