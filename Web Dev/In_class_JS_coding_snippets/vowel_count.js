function vowelCount(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    
    for (const char of str) {
        if(vowels.includes(char)) {
            count++;
        }
    }

    return count;

};

const str = "My Name is Luke Womack";
console.log(vowelCount(str));

