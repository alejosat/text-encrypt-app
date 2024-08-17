const encryptionRules = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function encryptText(text) {
    return text.replace(/[eioua]/g, char => encryptionRules[char]);
}

function decryptText(text) {
    return text.replace(/enter|imes|ai|ober|ufat/g, matched => {
        return Object.keys(encryptionRules).find(key => encryptionRules[key] === matched);
    });
}

function validateText(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}
