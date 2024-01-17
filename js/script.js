// Fungsi untuk menampilkan formulir yang dipilih
function showForm(formId) {
    // Sembunyikan semua bagian formulir
    document.getElementById("persegi").style.display = "none";
    document.getElementById("persegiPanjang").style.display = "none";

    // Tampilkan bagian formulir yang dipilih
    document.getElementById(formId).style.display = "block";

    // Reset area hasil, info, dan gambar contoh
    document.getElementById("resultArea").innerHTML = '';
    document.getElementById("infoArea").innerHTML = '';
    document.getElementById("exampleImage").style.display = 'none';
    document.getElementById("exampleImagePanjang").style.display = 'none';
}

// Fungsi untuk menghitung luas dan keliling berdasarkan bentuk
function calculate(shape) {
    let area, perimeter, infoId, formula, exampleImageId;

    if (shape === 'persegi') {
        const sideLength = parseFloat(document.getElementById("sideLength").value);

        if (!isNaN(sideLength)) {
            area = sideLength * sideLength;
            perimeter = 4 * sideLength;
            infoId = "persegiInfo";
            formula = `<h3>Rumus Persegi</h3><p>Luas = sisi * sisi</p><p>Keliling = 4 * sisi</p>`;
            exampleImageId = "exampleImage";
        } else {
            alert("Mohon masukkan panjang sisi yang valid.");
            return;
        }
    } else if (shape === 'persegiPanjang') {
        const length = parseFloat(document.getElementById("length").value);
        const width = parseFloat(document.getElementById("width").value);

        if (!isNaN(length) && !isNaN(width)) {
            area = length * width;
            perimeter = 2 * (length + width);
            infoId = "persegiPanjangInfo";
            formula = `<h3>Rumus Persegi Panjang</h3><p>Luas = panjang * lebar</p><p>Keliling = 2 * (panjang + lebar)</p>`;
            exampleImageId = "exampleImagePanjang";
        } else {
            alert("Mohon masukkan panjang dan lebar yang valid.");
            return;
        }
    }

    // Menampilkan hasil luas dan keliling
    const resultArea = document.getElementById(`resultArea${shape === 'persegiPanjang' ? 'Panjang' : ''}`);
    resultArea.innerHTML = `<p>Luas: ${area}</p><p>Keliling: ${perimeter}</p>`;

    // Menampilkan info dan rumus yang sesuai
    const infoArea = document.getElementById(infoId);
    infoArea.innerHTML = formula;

    // Menampilkan gambar contoh
    document.getElementById(exampleImageId).style.display = 'block';
}


    // Menampilkan hasil luas dan keliling
    const resultArea = document.getElementById("resultArea");
    resultArea.innerHTML = `<p>Luas: ${area}</p><p>Keliling: ${perimeter}</p>`;

    // Menampilkan info dan rumus yang sesuai
    const infoArea = document.getElementById(infoId);
    infoArea.innerHTML = formula;

    // Menampilkan gambar contoh
    document.getElementById(exampleImageId).style.display = 'block';

// Fungsi untuk mereset formulir dan menampilkan semua bagian formulir
function resetForm() {
    // Menampilkan semua bagian formulir
    document.getElementById("persegi").style.display = "block";
    document.getElementById("persegiPanjang").style.display = "block";

    // Mereset formulir
    document.getElementById("persegiForm").reset();
    document.getElementById("persegiPanjangForm").reset();

    // Mereset area hasil, info, dan gambar contoh
    document.getElementById("resultArea").innerHTML = '';
    document.getElementById("infoArea").innerHTML = '';
    document.getElementById("exampleImage").style.display = 'none';
    document.getElementById("exampleImagePanjang").style.display = 'none';
}
