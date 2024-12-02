// بيانات الأخبار
const newsData = [
    {
        title: "أوتافيو يحقق الفوز المثير",
        content: "في مباراة مثيرة، ساعد أوتافيو فريقه على تحقيق فوز مهم في الدوري المحلي.",
    },
    {
        title: "أوتافيو في مواجهة الفريق الأقوى",
        content: "يتوقع الكثيرون أن يكون أوتافيو نجم المباراة القادمة ضد الفريق الأقوى في الدوري.",
    },
    {
        title: "أوتافيو يكسر الأرقام القياسية",
        content: "نجح أوتافيو في تحطيم الأرقام القياسية في المباراة الأخيرة بتسجيله هدفين حاسمين.",
    },
];

// عرض الأخبار
const newsContainer = document.getElementById('news-container');
newsData.forEach(news => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');
    newsItem.innerHTML = `
        <h3>${news.title}</h3>
        <p>${news.content}</p>
    `;
    newsContainer.appendChild(newsItem);
});

const aiButton = document.getElementById('ai-button');
const aiResponseDiv = document.getElementById('ai-response');
const aiInput = document.getElementById('ai-input');

// المفتاح الخاص بـ OpenAI (تأكد من وضعه في مكان آمن في الإنتاج)
const apiKey = '';  // ضع مفتاح الـ API الخاص بك هنا

// استدعاء API لـ OpenAI GPT
async function fetchAIResponse(userInput) {
    try {
        aiResponseDiv.innerHTML = `<p><strong>الذكاء الاصطناعي:</strong> معالجة سؤالك...</p>`;
        
        const response = await fetch('https://api.openai.com/v1/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: "gpt-4",  // يمكن استخدام gpt-3.5 أو gpt-4
                prompt: userInput,
                max_tokens: 150,
                temperature: 0.7,
            })
        });

        const data = await response.json();
        
        if (data.choices && data.choices[0].text) {
            aiResponseDiv.innerHTML = `<p><strong>الذكاء الاصطناعي:</strong> ${data.choices[0].text}</p>`;
        } else {
            aiResponseDiv.innerHTML = `<p><strong>الذكاء الاصطناعي:</strong> عذرًا، لم أتمكن من الإجابة على سؤالك.</p>`;
        }
    } catch (error) {
        aiResponseDiv.innerHTML = `<p><strong>الذكاء الاصطناعي:</strong> حدث خطأ أثناء معالجة الطلب. يرجى المحاولة لاحقًا.</p>`;
        console.error(error);
    }
}

// التعامل مع الضغط على زر الإرسال
aiButton.addEventListener('click', () => {
    const userInput = aiInput.value.trim();
    if (userInput) {
        fetchAIResponse(userInput);
    } else {
        aiResponseDiv.innerHTML = `<p><strong>الذكاء الاصطناعي:</strong> من فضلك، أدخل سؤالًا.</p>`;
    }
});
