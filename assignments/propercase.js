function properCase(name){
    const trimmed = name.trim().toLowerCase();
    const username = trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
    console.log(username);
    
}

properCase("  sIVAviGnesh ");
properCase("SIVAVICKY  ");