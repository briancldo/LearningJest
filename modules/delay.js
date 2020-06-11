function longWait(callback) {
    console.log('Starting the long wait');
    setTimeout(() => {
        console.log('Finally! The long wait is over!');
        callback && callback();
    }, 3000);
}

function longerWait(callback) {
    console.log('Get ready... this wait is longer');
    setTimeout(() => {
        console.log('Congrats, your patience is as sturdy as steel');
        callback && callback();
    }, 5000);
}

module.exports = { longWait, longerWait };