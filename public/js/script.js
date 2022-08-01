// FORM HANDLE //
const contactForm = document.querySelector('#contact-form');
const contactBtn = document.querySelector('#contact-btn');
const contactInput = document.querySelector('#pin');

const removeDisabledAttribute = (els) => els.forEach(el => el.removeAttribute('disabled'));
const addDisabledAttribute = (els) => els.forEach(el => el.setAttribute('disabled', 'true'));

// fake sending pin to api endpoint
function postPinToDatabase(pin) {
  console.info(`Your pin is ${pin}`);
  return new Promise(resolve => setTimeout(resolve, 2000));
}

// options for submit button
const contactBtnOptions = {
  pending: `
    <svg xmlns="http://www.w3.org/2000/svg" class="animate-spin" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="128" y1="32" x2="128" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="224" y1="128" x2="192" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="195.9" y1="195.9" x2="173.3" y2="173.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="128" y1="224" x2="128" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="60.1" y1="195.9" x2="82.7" y2="173.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="32" y1="128" x2="64" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line><line x1="60.1" y1="60.1" x2="82.7" y2="82.7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line></svg>
    <span class="uppercase text-xl tracking-wide animate-pulse">
    Verifying...
    </span>
  `,
  success: `
  <span class="uppercase tracking-wide text-2xl">
    Verified! ✅
    </span>
  `,
  failure: `
  <span class="uppercase tracking-wide text-2xl">
    Invalid pin! ❌
    </span>
  `,
};

// correct pin
const correctPin = '05/07/2022'

async function handleFormSubmit(e) {
  e.preventDefault();
  addDisabledAttribute([contactForm, contactBtn]);
  contactBtn.innerHTML = contactBtnOptions.pending;
  contactInput.style.display = "none";
  const pin = contactInput.value;
  contactForm.classList.add('verifying')
  contactBtn.style.padding = '0.75rem 2rem'
  await postPinToDatabase(pin);

  if (pin === correctPin) {
    contactBtn.innerHTML = contactBtnOptions.success;
    pageRedirect()
  } else {
    contactBtn.innerHTML = contactBtnOptions.failure;
    setTimeout(() => {
      window.location.href = `/public/index.html`
    }, 500)
  }
}

// page redirect

function pageRedirect() {
  window.location.href = `/public/birthday-page.html`
}
// event listener form submit
contactForm.addEventListener('submit', handleFormSubmit);