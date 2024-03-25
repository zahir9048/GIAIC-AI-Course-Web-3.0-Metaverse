function varAndLetScoping() {
    var x = 1;
    var x = 3;
    if (true) {
        var x_1 = 2;
        console.log(x_1); // will print 2
    }
    console.log(x); // will print 1
}
varAndLetScoping();
