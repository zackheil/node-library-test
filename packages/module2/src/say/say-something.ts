export const saySomething = console.log;

export const trySomething = () => {
    try {
        console.log('try');
    } catch(e) {
        console.log('catch');
    }
}