document.getElementById('fileInput').addEventListener('change', handleFileSelect);

document.getElementById('fileInput').addEventListener('change', handleFileSelect);

function handleFileSelect(event) {
    const fileInput = event.target;
    const fileInfo = document.getElementById('fileInfo');

    if (fileInput.files.length > 0) {
        const fileName = fileInput.files[0].name;
        const fileSize = (fileInput.files[0].size / 1024).toFixed(2); // Convertir a kilobytes
        const fileType = fileInput.files[0].type;

        fileInfo.innerHTML = `
            <p>Nombre del Archivo: ${fileName}</p>
            <p>Tipo de Archivo: ${fileType}</p>
        `;
    } else {
        fileInfo.innerHTML = '';
    }
}
