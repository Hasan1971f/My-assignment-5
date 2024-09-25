const blog = document.getElementById('blog')
blog.addEventListener('click',function (event) {
    event.preventDefault()
    console.log("home clicked")
    window.location.href="index.html"
})

const donateNewButton = document.getElementById('donateNowButton')
donateNewButton.addEventListener('click', function (event) {
    event.preventDefault()


    const firstDonateInput = getBlanceValue('firstdonetinput')

    if (firstDonateInput <= 0 || isNaN(firstDonateInput)) {
        alert(" your number is wrong")
        return
    }
    const yourCurrentBalance = Number(document.getElementById())
})