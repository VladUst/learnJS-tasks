function printReverseListRec(list) {
    if (list.next) {
        printReverseListRec(list.next);
    }
    console.log(list.value);
}

function printReverseListIter(list) {
    let arr = [];
    let tmp = list;
    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }
    for (let item of arr) {
        console.log(item);
    }
}
