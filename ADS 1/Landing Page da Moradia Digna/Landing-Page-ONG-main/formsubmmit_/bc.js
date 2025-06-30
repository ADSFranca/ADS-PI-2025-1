document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('donationForm');
    const successMessage = document.getElementById('successMessage');
    const otherAmountRadio = document.getElementById('otherAmount');
    const otherAmountContainer = document.getElementById('otherAmountContainer');
    const customAmountInput = document.getElementById('customAmount');
    const cancelBtn = document.getElementById('cancelBtn');
    const amountError = document.getElementById('amountError');
    const submitBtn = document.getElementById('submitBtn');

    // Mostrar/ocultar campo para outro valor
    function toggleOtherAmount() {
        if (otherAmountRadio.checked) {
            otherAmountContainer.classList.add('active');
        } else {
            otherAmountContainer.classList.remove('active');
        }
    }

    otherAmountRadio.addEventListener('change', toggleOtherAmount);
    document.querySelectorAll('input[name="donationAmount"]').forEach(radio => {
        radio.addEventListener('change', toggleOtherAmount);
    });

    // Validação em tempo real
    function setupFieldValidation(field, validationFn) {
        field.addEventListener('input', function() {
            if (validationFn(field.value)) {
                field.parentElement.classList.remove('error');
            }
        });
    }

    setupFieldValidation(document.getElementById('fullName'), value => value.trim() !== '');
    setupFieldValidation(document.getElementById('email'), value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
    setupFieldValidation(document.getElementById('phone'), value => value.replace(/\D/g, '').length >= 10);
    setupFieldValidation(document.getElementById('customAmount'), value => parseFloat(value) > 0);

    // Máscara de telefone
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.substring(0, 11);
        
        let formattedValue = '';
        if (value.length > 0) {
            formattedValue = '(' + value.substring(0, 2);
            if (value.length > 2) formattedValue += ') ' + value.substring(2, 7);
            if (value.length > 7) formattedValue += '-' + value.substring(7, 11);
        }
        e.target.value = formattedValue;
    });

    // Validação do formulário
    form.addEventListener('submit', function(e) {
        let isValid = true;

        // Validações
        const fields = [
            { id: 'fullName', validate: v => v.trim() !== '', errorMsg: 'Por favor, insira seu nome completo' },
            { id: 'email', validate: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), errorMsg: 'Por favor, insira um email válido' },
            { id: 'phone', validate: v => v.replace(/\D/g, '').length >= 10, errorMsg: 'Por favor, insira um telefone válido' }
        ];

        fields.forEach(field => {
            const element = document.getElementById(field.id);
            if (!field.validate(element.value)) {
                element.parentElement.classList.add('error');
                element.nextElementSibling.textContent = field.errorMsg;
                element.nextElementSibling.style.display = 'block';
                isValid = false;
            }
        });

        // Validação do valor
        const selectedAmount = document.querySelector('input[name="donationAmount"]:checked');
        if (!selectedAmount) {
            amountError.style.display = 'block';
            isValid = false;
        } else if (selectedAmount.value === 'other' && (!customAmountInput.value || parseFloat(customAmountInput.value) <= 0)) {
            customAmountInput.parentElement.classList.add('error');
            customAmountInput.nextElementSibling.style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Processando...';
            form.submit();
        }
    });

    // Botão cancelar
    cancelBtn.addEventListener('click', function() {
        if (confirm('Tem certeza que deseja cancelar a doação?')) {
            form.reset();
            otherAmountContainer.classList.remove('active');
            document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
            document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');
        }
    });
});

// Função para copiar chave PIX
function copyPixKey(e) {
    if (e) e.preventDefault();
    
    const pixKey = "45.037.042/0001-35";
    navigator.clipboard.writeText(pixKey).then(() => {
        const copyBtn = document.querySelector('.btn-copy');
        const originalText = copyBtn.textContent;
        copyBtn.textContent = "✓ Copiado!";
        setTimeout(() => copyBtn.textContent = originalText, 2000);
    }).catch(err => {
        console.error('Erro ao copiar:', err);
        const textarea = document.createElement('textarea');
        textarea.value = pixKey;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert("Chave PIX copiada!");
    });
}

// Garantir que o botão de copiar não submeta o formulário
document.querySelector('.btn-copy')?.addEventListener('click', copyPixKey);