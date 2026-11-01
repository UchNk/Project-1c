const form = document.getElementById('calc');
const result = document.getElementById('result');
const h1 = document.getElementById('h1');
const h2 = document.getElementById('h2');
const w1 = document.getElementById('w1');
const w2 = document.getElementById('w2');
const h1Unit = document.getElementById('h1-unit');
const w1Unit = document.getElementById('w1-unit');
const impInputs = form.querySelectorAll('.input.imp');

const WELCOME = `<h3>Welcome!</h3><p>Enter your height and weight and you’ll see your BMI result here</p>`;
const num = (el) => parseFloat(el.value) || 0;
const unit = () => form.querySelector('input[name="unit"]:checked').value;

function category(bmi) {
  if (bmi < 18.5) return 'underweight';
  if (bmi < 25) return 'a healthy weight';
  if (bmi < 30) return 'overweight';
  return 'obese';
}

function formatImperial(totalLbs) {
  const st = Math.floor(totalLbs / 14);
  const lbs = Math.round(totalLbs - st * 14);
  return lbs === 14 ? `${st + 1}st 0lbs` : `${st}st ${lbs}lbs`;
}

function calculate() {
  let bmi, low, high, metric = unit() === 'metric';

  if (metric) {
    const m = num(h1) / 100, kg = num(w1);
    if (!m || !kg) return showWelcome();
    bmi = kg / (m * m);
    low = 18.5 * m * m; high = 24.9 * m * m;
  } else {
    const inches = num(h1) * 12 + num(h2);
    const lbs = num(w1) * 14 + num(w2);
    if (!inches || !lbs) return showWelcome();
    bmi = (lbs / (inches * inches)) * 703;
    low = (18.5 * inches * inches) / 703; high = (24.9 * inches * inches) / 703;
  }

  const range = metric
    ? `${low.toFixed(1)}kgs - ${high.toFixed(1)}kgs`
    : `${formatImperial(low)} - ${formatImperial(high)}`;

  result.classList.add('has-result');
  result.innerHTML = `
    <div><span class="label">Your BMI is...</span><span class="bmi">${bmi.toFixed(1)}</span></div>
    <p>Your BMI suggests you’re <strong>${category(bmi)}</strong>. Your ideal weight is between <strong>${range}</strong>.</p>`;
}

function showWelcome() {
  result.classList.remove('has-result');
  result.innerHTML = WELCOME;
}

function setUnits() {
  const metric = unit() === 'metric';
  form.classList.toggle('imperial', !metric);
  impInputs.forEach((el) => (el.hidden = metric));
  h1Unit.textContent = metric ? 'cm' : 'ft';
  w1Unit.textContent = metric ? 'kg' : 'st';
  h1.setAttribute('aria-label', metric ? 'Height in centimetres' : 'Height in feet');
  w1.setAttribute('aria-label', metric ? 'Weight in kilograms' : 'Weight in stone');
  [h1, h2, w1, w2].forEach((el) => (el.value = ''));
  showWelcome();
}

form.addEventListener('input', calculate);
form.addEventListener('change', (e) => { if (e.target.name === 'unit') setUnits(); });
form.addEventListener('submit', (e) => e.preventDefault());
