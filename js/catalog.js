document.addEventListener('DOMContentLoaded', (e) => {
    document.getElementById('filter-open').addEventListener('click', (e) => {
        document.getElementById('filtering-form').classList.add('filter-form_show')
    })

    document.getElementById('filter-append').addEventListener('click', (e) => {
        document.getElementById('filtering-form').classList.remove('filter-form_show')
    })

    document.getElementById('filtering-form').addEventListener('submit', (e) => {
        e.preventDefault()
    })
});


