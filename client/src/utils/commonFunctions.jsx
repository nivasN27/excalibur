export const base64ToBinary = (base64) => {
    // Remove the Data URL prefix if it exists
    const cleanedBase64 = base64.replace(/^data:image\/[a-zA-Z]+;base64,/, '');
    
    try {
        // Decode Base64 string to binary string
        const binaryString = atob(cleanedBase64);
        
        // Create a Uint8Array to hold binary data
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        
        // Populate Uint8Array with binary data
        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes; 
    } catch (e) {
        console.error('Failed to convert Base64 to binary:', e);
        return null;
    }
}

export const binaryToBase64 = (binaryData) => {
    try {
        // Convert binary data (Uint8Array) to a binary string
        const binaryString = String.fromCharCode(...new Uint8Array(binaryData));
        
        // Encode binary string to Base64
        const base64String = btoa(binaryString);
        
        // Return the Base64 string
        return base64String;
    } catch (e) {
        console.error('Failed to convert binary to Base64:', e);
        return null;
    }
}