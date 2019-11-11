function count(S) {
    let words = S.split(/\.|\?|\!/);
    let count = 0;
    words.map((w,i) => {
        let word = w.split(' ');
        let wordCount = word.filter((string) => string.length !== 0 || string !== '').length;
        count = wordCount > count ? wordCount : count; 
    });
    return count;
}
