// Membangun pola segitiga dari kunci
function generateTrianglePattern(key) {
    let n = key.length;
    if (n === 0) return [];
    
    let tri = [];
    // Fase naik (i = 0 .. n-1)
    for (let i = 0; i < n; i++) {
        tri.push(key.charCodeAt(i) % 95);
    }
    
    // Fase turun (i = n .. 2n-3) 
    if (n > 1) {
        for (let i = n; i <= 2 * n - 3; i++) {
            tri.push(key.charCodeAt(2 * n - 2 - i) % 95);
        }
    }
    return tri;
}

// Fungsi utilitas untuk Ring ASCII cetak (32-126) 
function toRing(c) {
    return c.charCodeAt(0) - 32; 
}

function fromRing(r) {
    return String.fromCharCode(r + 32); 
}

// Fungsi utama Enkripsi/Dekripsi
function processCipher(isEncrypt) {
    const key = document.getElementById('key').value;
    const text = document.getElementById('inputText').value;
    const outputField = document.getElementById('outputText');

    if (!key) {
        alert("Harap masukkan kunci!");
        return;
    }
    if (!text) {
        alert("Harap masukkan teks!");
        return;
    }

    const tri = generateTrianglePattern(key);
    const T = tri.length; 
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let charCode = text.charCodeAt(i);
        
        // Memastikan proses hanya berjalan dalam ring karakter ASCII cetak (32-126) 
        if (charCode >= 32 && charCode <= 126) {
            let shift = tri[i % T]; // [cite: 40, 48]
            let ringValue = toRing(text[i]);
            let newRingValue;

            if (isEncrypt) {
                newRingValue = (ringValue + shift) % 95; 
            } else {
                newRingValue = (ringValue - shift + 95) % 95; 
            }
            
            result += fromRing(newRingValue); 
        } else {
            // Karakter di luar ring dibiarkan tidak berubah 
            result += text[i];
        }
    }

    outputField.value = result;
}

// Menghubungkan tombol di HTML dengan fungsi di JavaScript menggunakan Event Listener
document.getElementById('btn-encrypt').addEventListener('click', function() {
    processCipher(true);
});

document.getElementById('btn-decrypt').addEventListener('click', function() {
    processCipher(false);
});