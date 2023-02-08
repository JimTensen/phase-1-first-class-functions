function receivesAFunction (add) {
    add => numOne + numTwo;

    add();
}

function returnsANamedFunction() {
    return receivesAFunction;
}

function returnsAnAnonymousFunction() {
    return () => console.log('no duh');
}
