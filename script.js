// Referencias a elementos
const loginScreen = document.getElementById('loginScreen');
const registerScreen = document.getElementById('registerScreen');
const settingsScreen = document.getElementById('settingsScreen');
const goToRegister = document.getElementById('goToRegister');
const goToLogin = document.getElementById('goToLogin');
const dispenseFood = document.getElementById('dispenseFood');
const animationArea = document.getElementById('animationArea');
const foodAmount = document.getElementById('foodAmount');
const foodAmountValue = document.getElementById('foodAmountValue');

// Navegación entre pantallas
goToRegister.addEventListener('click', (e) => {
  e.preventDefault();
  loginScreen.classList.add('hidden');
  registerScreen.classList.remove('hidden');
});

goToLogin.addEventListener('click', (e) => {
  e.preventDefault();
  registerScreen.classList.add('hidden');
  loginScreen.classList.remove('hidden');
});

document.getElementById('loginForm').addEventListener('submit', (e) => {
  e.preventDefault();
  loginScreen.classList.add('hidden');
  settingsScreen.classList.remove('hidden');
});

document.getElementById('registerForm').addEventListener('submit', (e) => {
  e.preventDefault();
  registerScreen.classList.add('hidden');
  settingsScreen.classList.remove('hidden');
});

// Cambiar valor del rango
foodAmount.addEventListener('input', () => {
  foodAmountValue.textContent = foodAmount.value;
});

// Animación de dispensar comida
dispenseFood.addEventListener('click', () => {
  animationArea.classList.remove('hidden');
  animationArea.innerHTML = '🍖 Sirviendo comida... 🍖';
  setTimeout(() => {
    animationArea.innerHTML = '✅ ¡Comida dispensada!';
    setTimeout(() => {
      animationArea.classList.add('hidden');
    }, 2000);
  }, 3000);
});
