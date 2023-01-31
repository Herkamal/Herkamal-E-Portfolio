// template_g8prexom
// service_sm7y51o
// uChH4fEz-EULeoLue

function contact(event){
  event.preventDefault()
  const loading = document.querySelector(".modal__overlay--loading")
  const success = document.querySelector('.modal__overlay--success')
  loading.classList += " modal__overlay--visible"
  emailjs
    .sendForm(
      'service_sm7y51o',
      'template_g8prexom',
      event.target,
      "uChH4fEz-EULeoLue"
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
      loading.classList.remove("modal__overlay--visible")
      alert(
        "The email service is currently unavailable. Please contact me directly on Herkamalrandhawa@gmail.com"
      )
    })
  }