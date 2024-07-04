
const fs = require('fs');

class Data {
    static Data = []
}

const doRead = () => {

    let filename = "american-english.txt"
    
    fs.readFile(filename, 'utf8', function (err, data) {
        if (err) throw err;
        Data.Data = data.split("\n");
    });

}

const balance = (name, word) => {
    return name.slice(0, Math.min(name.length, word.length))
}

const findAllWords = (word, cnt) => {
    let start = 0;
    let end = Data.Data.length;

    let mid = start + (Math.floor((end - start) / 2));
    
    while (start < end) {
        if (balance(Data.Data[mid], word) < word) {
            start = mid + 1;
        } else if (balance(Data.Data[mid], word) > word) {
            end = mid - 1;
        } else {
            break;
        }
        mid = start + (Math.floor((end - start) / 2));
    }
    
    let i = mid;
    while(i > start) {
        if (balance(Data.Data[i - 1], word) === word) i--;
        else break;
    }
    let j = mid;
    while(j < end && j < (i + cnt)) {
        if (balance(Data.Data[j + 1], word) === word) j++;
        else break;
    }

    return Data.Data.slice(i,Math.min(i + cnt, j+1))
}



module.exports = {
    doRead,
    findAllWords
}