(function () {
    'use strict';

    const form = document.querySelector('#cpf-form');
    const input = document.querySelector('#cpf-input');
    const statusPanel = document.querySelector('#status-panel');
    const statusTitle = document.querySelector('#status-title');
    const statusMessage = document.querySelector('#status-message');

    if (!form || !input || !statusPanel || !statusTitle || !statusMessage) {
        return;
    }

    const getOnlyDigits = (value) => value.replace(/\D+/g, '');

    const formatCpf = (value) => {
        const digits = getOnlyDigits(value).slice(0, 11);

        return digits
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    };

    const allDigitsEqual = (cpf) => /^(\d)\1{10}$/.test(cpf);

    const navigationKeys = new Set([
        'Backspace',
        'Delete',
        'Tab',
        'ArrowLeft',
        'ArrowRight',
        'Home',
        'End',
        'Enter'
    ]);

    const calculateDigit = (cpfSlice, factor) => {
        let total = 0;

        for (let i = 0; i < cpfSlice.length; i += 1) {
            total += Number(cpfSlice[i]) * (factor - i);
        }

        const digit = 11 - (total % 11);
        return digit > 9 ? 0 : digit;
    };

    const analyzeCpf = (value) => {
        const cpf = getOnlyDigits(value);

        if (!cpf) {
            return { isValid: false, reason: 'empty' };
        }

        if (cpf.length < 11) {
            return {
                isValid: false,
                reason: 'length-short',
                currentLength: cpf.length
            };
        }

        if (cpf.length > 11) {
            return {
                isValid: false,
                reason: 'length-long',
                currentLength: cpf.length
            };
        }

        if (allDigitsEqual(cpf)) {
            return { isValid: false, reason: 'repeated' };
        }

        const baseCpf = cpf.slice(0, 9);
        const firstDigit = calculateDigit(baseCpf, 10);
        const firstTypedDigit = Number(cpf[9]);

        if (firstDigit !== firstTypedDigit) {
            return {
                isValid: false,
                reason: 'first-digit',
                expectedDigit: firstDigit,
                receivedDigit: firstTypedDigit
            };
        }

        const secondDigit = calculateDigit(baseCpf + firstDigit, 11);
        const secondTypedDigit = Number(cpf[10]);

        if (secondDigit !== secondTypedDigit) {
            return {
                isValid: false,
                reason: 'second-digit',
                expectedDigit: secondDigit,
                receivedDigit: secondTypedDigit
            };
        }

        return { isValid: true, normalizedCpf: cpf };
    };

    const getErrorMessage = (analysis) => {
        switch (analysis.reason) {
            case 'empty':
                return 'Digite um CPF antes de validar.';
            case 'length-short':
                return `CPF incompleto: faltam ${11 - analysis.currentLength} digito(s).`;
            case 'length-long':
                return 'CPF com digitos a mais. Use no maximo 11 numeros.';
            case 'repeated':
                return 'CPF invalido: todos os digitos sao iguais.';
            case 'first-digit':
                return `CPF invalido: o primeiro digito verificador deveria ser ${analysis.expectedDigit}.`;
            case 'second-digit':
                return `CPF invalido: o segundo digito verificador deveria ser ${analysis.expectedDigit}.`;
            default:
                return 'Nao foi possivel validar este CPF.';
        }
    };

    const setStatus = (statusType, message) => {
        statusPanel.classList.remove('is-idle', 'is-valid', 'is-invalid');
        statusPanel.classList.add(statusType);

        if (statusType === 'is-valid') {
            statusTitle.textContent = 'CPF valido';
        } else if (statusType === 'is-invalid') {
            statusTitle.textContent = 'CPF invalido';
        } else {
            statusTitle.textContent = 'Status da validacao';
        }

        statusMessage.textContent = message;
        input.classList.toggle('input-invalid', statusType === 'is-invalid');
    };

    input.addEventListener('input', (event) => {
        event.target.value = formatCpf(event.target.value);

        if (!statusPanel.classList.contains('is-idle')) {
            setStatus('is-idle', 'Aguardando um CPF para iniciar a verificacao.');
        }
    });

    input.addEventListener('keydown', (event) => {
        const isShortcut = event.ctrlKey || event.metaKey || event.altKey;
        const isDigitKey = /^\d$/.test(event.key);

        if (isShortcut || navigationKeys.has(event.key)) {
            return;
        }

        if (!isDigitKey) {
            event.preventDefault();
            return;
        }

        const currentDigits = getOnlyDigits(input.value);
        const hasSelection = (input.selectionStart ?? 0) !== (input.selectionEnd ?? 0);

        if (currentDigits.length >= 11 && !hasSelection) {
            event.preventDefault();
        }
    });

    input.addEventListener('paste', (event) => {
        event.preventDefault();

        const clipboardText = (event.clipboardData || window.clipboardData).getData('text');
        const pastedDigits = getOnlyDigits(clipboardText).slice(0, 11);

        input.value = formatCpf(pastedDigits);
        setStatus('is-idle', 'Aguardando um CPF para iniciar a verificacao.');
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const analysis = analyzeCpf(input.value.trim());

        if (analysis.isValid) {
            setStatus('is-valid', `O CPF ${formatCpf(analysis.normalizedCpf)} passou na validacao.`);
            return;
        }

        setStatus('is-invalid', getErrorMessage(analysis));
        input.focus();
    });
}());