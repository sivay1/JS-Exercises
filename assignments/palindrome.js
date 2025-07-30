function palindrome(text){
    let reversed = [...text].reverse().join('');
    console.log(reversed);
    if (text === reversed){
        return true;
    }
    return false;
    
}

console.log(palindrome("malar"));