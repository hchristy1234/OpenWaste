const submit = $('.submit')
const container = $('.searchContainer')

submit.on("click", findHome)

function findHome() {
    container.html("")
    container.append(`
        <p class="text-white text-center mt-4">No Homes Found</p>
    `)
}