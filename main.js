function showVerticalMessage (str) {
    let processedStr = str.slice(0,10);
    if (processedStr.startsWith('м')) {
        processedStr = processedStr[0].toUpperCase() + processedStr.slice(1)
    }
    for (let strElement of processedStr) {
        console.log(strElement)
    }
}

showVerticalMessage('марафонтопчик')