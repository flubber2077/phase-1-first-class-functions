function receivesAFunction(callback)
{
    callback();
    return null;
}

function callback()
{
    4 + 5;
}

function returnsANamedFunction()
{
    return function bigFunction(){4+'idunno'};
}

function returnsAnAnonymousFunction()
{
    return function (){return 4};
}