const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;

let brushColor = "#1e90ff";  // Default brush color
let brushSize = 3;  // Default brush size
let currentTool = "pen";  // Default tool is pen
let textColor = "#000000";  // Default text color

let startX, startY;

// بدء الرسم
function startDrawing(event) {
    isDrawing = true;
    startX = event.offsetX || event.touches[0].clientX - canvas.offsetLeft;
    startY = event.offsetY || event.touches[0].clientY - canvas.offsetTop;
    event.preventDefault();
}

// التوقف عن الرسم
function stopDrawing() {
    isDrawing = false;
    ctx.beginPath();
}

// رسم القلم
function drawPen(event) {
    if (!isDrawing) return;

    const x = event.offsetX || event.touches[0].clientX - canvas.offsetLeft;
    const y = event.offsetY || event.touches[0].clientY - canvas.offsetTop;

    ctx.lineWidth = brushSize;
    ctx.lineCap = "round";
    ctx.strokeStyle = brushColor;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

// رسم المستطيل
function drawRectangle(event) {
    if (!isDrawing) return;

    const x = event.offsetX || event.touches[0].clientX - canvas.offsetLeft;
    const y = event.offsetY || event.touches[0].clientY - canvas.offsetTop;

    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    ctx.strokeRect(startX, startY, x - startX, y - startY);
}

// رسم الدائرة
function drawCircle(event) {
    if (!isDrawing) return;

    const x = event.offsetX || event.touches[0].clientX - canvas.offsetLeft;
    const y = event.offsetY || event.touches[0].clientY - canvas.offsetTop;

    const radius = Math.sqrt(Math.pow(x - startX, 2) + Math.pow(y - startY, 2));
    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    ctx.beginPath();
    ctx.arc(startX, startY, radius, 0, 2 * Math.PI);
    ctx.stroke();
}

// إضافة نص
function addText(event) {
    const text = prompt("أدخل النص:");
    if (text) {
        ctx.fillStyle = textColor;
        ctx.font = "30px Arial";
        ctx.fillText(text, event.offsetX || event.touches[0].clientX - canvas.offsetLeft, event.offsetY || event.touches[0].clientY - canvas.offsetTop);
    }
}

// معالجة تغييرات اللون
document.getElementById("brushColor").addEventListener("input", (event) => {
    brushColor = event.target.value;
});

// معالجة تغييرات حجم الفرشاة
document.getElementById("brushSize").addEventListener("input", (event) => {
    brushSize = event.target.value;
});

// معالجة تغييرات الأداة المختارة
document.getElementById("toolSelect").addEventListener("change", (event) => {
    currentTool = event.target.value;
});

// معالجة تغيير لون النص
document.getElementById("textColor").addEventListener("input", (event) => {
    textColor = event.target.value;
});

// لمس الزر لتفريغ اللوحة
document.getElementById("clearCanvas").addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

// لمس الزر لحفظ الصورة
document.getElementById("saveCanvas").addEventListener("click", () => {
    const dataURL = canvas.toDataURL();  // الحصول على الصورة
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = 'رسمتك.png';  // تعيين اسم الملف
    link.click();
});

// For mouse events (desktop)
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mousemove", (event) => {
    switch (currentTool) {
        case "pen":
            drawPen(event);
            break;
        case "rectangle":
            drawRectangle(event);
            break;
        case "circle":
            drawCircle(event);
            break;
        case "text":
            addText(event);
            break;
    }
});

// For touch events (mobile)
canvas.addEventListener("touchstart", startDrawing);
canvas.addEventListener("touchend", stopDrawing);
canvas.addEventListener("touchmove", (event) => {
    switch (currentTool) {
        case "pen":
            drawPen(event);
            break;
        case "rectangle":
            drawRectangle(event);
            break;
        case "circle":
            drawCircle(event);
            break;
        case "text":
            addText(event);
            break;
    }
});
