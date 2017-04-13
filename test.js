const start = new Date()
const elapsed = new Date() - start;

setTimeout(() => {
    console.log('working?')
}, 5000);

it('Should do someting', done => {
    delayed.delay(function () {
        cosole.log()
    })
    done();
}).timeout(7000);

