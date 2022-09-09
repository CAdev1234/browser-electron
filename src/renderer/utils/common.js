export const isUrl = (str) => {
    let pattern = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
    return pattern.test(str);
}
export const shortenUrl = (url) => {
    return url.replace('http://', '').replace('https://', '').split(/[/?#]/)[0];
}
export const addhttps = (url) => {
    if (url && !/^(?:f|ht)tps?\:\/\//.test(url)) {
        url = "https://" + url;
    }
    return url;
}