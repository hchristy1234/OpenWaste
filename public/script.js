const submit = $('.submit')
const container = $('.searchContainer')

const submithome = $('.submithome')
const homecontainer = $('.homeAddContainer')

submit.on("click", findHome)

function findHome() {
    container.html("")
    container.append(`
        <p class="text-white text-center mt-4">No Homes Found</p>
    `)
}


submithome.on("click", addhome)

function addhome() {
    homecontainer.html("")
    homecontainer.append(`
        <p class="text-white text-center text-large mt-4">Thank you for adding your home and helping the environment!</p>
    `)
}