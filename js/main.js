// انتظار تحميل الصفحة بالكامل قبل تنفيذ الكود
document.addEventListener('DOMContentLoaded', () => {

    // 1. التحقق من نموذج الاتصال (Contact Form Validation)
    const contactForm = document.getElementById('petContactForm');
    const feedback = document.getElementById('formFeedback');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // منع الصفحة من إعادة التحميل عند الإرسال

            // الحصول على القيم من المدخلات
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            const packageType = document.getElementById('package').value;

            // منطق التحقق (Validation Logic)
            if (name === "" || email === "" || message === "") {
                showFeedback("يرجى تعبئة جميع الحقول المطلوبة ⚠️", "error");
            } else if (!validateEmail(email)) {
                showFeedback("يرجى إدخال بريد إلكتروني صحيح 📧", "error");
            } else {
                // محاكاة إرسال البيانات بنجاح
                showFeedback(`شكراً لك يا ${name}! تم استلام طلبك للحزمة (${packageType}) بنجاح. سنتواصل معك قريباً 🐾`, "success");
                contactForm.reset(); // تفريغ النموذج بعد النجاح
            }
        });
    }

    // 2. وظيفة التحقق من صيغة البريد الإلكتروني
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // 3. وظيفة إظهار رسائل التغذية الراجعة (Feedback)
    function showFeedback(text, type) {
        if (feedback) {
            feedback.innerText = text;
            feedback.classList.remove('hidden');
            feedback.style.display = "block";
            feedback.style.padding = "15px";
            feedback.style.marginTop = "15px";
            feedback.style.borderRadius = "8px";
            feedback.style.textAlign = "center";
            feedback.style.fontWeight = "bold";

            if (type === "success") {
                feedback.style.backgroundColor = "#d4edda";
                feedback.style.color = "#155724";
                feedback.style.border = "1px solid #c3e6cb";
            } else {
                feedback.style.backgroundColor = "#f8d7da";
                feedback.style.color = "#721c24";
                feedback.style.border = "1px solid #f5c6cb";
            }
        }
    }

    // 4. إضافة تأثيرات حركية عند التمرير (Scroll Reveal)
    const cards = document.querySelectorAll('.service-box, .package-card, .service-card');
   
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });

    // 5. رسالة ترحيبية في الـ Console (لأغراض التطوير والتقييم)
    console.log("Loving Homes Website Loaded Successfully! 🐾 Hong Kong Branch.");



    // ===============================
    // 6. أدوات الوصول (Accessibility Tools)
    // تكبير وتصغير الخط + تغيير الثيم
    // ===============================

    let currentFontSize = 16;

    window.increaseFont = function(){
        currentFontSize += 2;
        document.body.style.fontSize = currentFontSize + "px";
    }

    window.decreaseFont = function(){
        currentFontSize -= 2;
        document.body.style.fontSize = currentFontSize + "px";
    }

    window.toggleTheme = function(){

        if(document.body.classList.contains("dark-mode")){

            document.body.classList.remove("dark-mode");
            document.body.style.backgroundColor="#fdfdfd";
            document.body.style.color="#000";

        }else{

            document.body.classList.add("dark-mode");
            document.body.style.backgroundColor="#121212";
            document.body.style.color="#ffffff";

        }

    }

    window.resetSettings = function(){

        currentFontSize = 16;
        document.body.style.fontSize = "16px";

        document.body.classList.remove("dark-mode");
        document.body.style.backgroundColor="#fdfdfd";
        document.body.style.color="#000";

    }

});