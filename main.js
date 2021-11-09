function showVerticalMessage (str) {
    if (str.startsWith('м')) {
        str = str[0].toUpperCase() + str.slice(1)
    }
    for (let strElement of str.slice(0, 10)) {
        console.log(strElement)
    }
}

showVerticalMessage('марафонтопчик')