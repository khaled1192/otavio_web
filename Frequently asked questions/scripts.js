// الحصول على جميع الأزرار الخاصة بالأسئلة
const questions = document.querySelectorAll('.faq-question');

// إضافة حدث النقر لكل سؤال لعرض الإجابة
questions.forEach(question => {
    question.addEventListener('click', () => {
        // الحصول على الإجابة الخاصة بالسؤال
        const answer = question.nextElementSibling;
        
        // إذا كانت الإجابة مخفية، نقوم بعرضها، وإذا كانت ظاهرة نقوم بإخفائها
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    });
});
