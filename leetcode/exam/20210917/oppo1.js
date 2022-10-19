function method(url, key) {
    const arr1 = url.split("://"), res = [];
    if (arr1[0] != "http") return [];
    res.push(arr1[0]);
    let realm = arr1[1].split("?")[0],
        query = arr1[1].split("?")[1];
    let secondRealm = realm.split(".").slice(1).join(".");
    res.push(secondRealm);
    if (query.split("=")[1] == undefined) return [];
    res.push(query.split("=")[1]);
    return res;
}