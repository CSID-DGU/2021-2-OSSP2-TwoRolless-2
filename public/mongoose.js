


async function getTheater() {
    try {
        const res = await axios.get('/stat')
        const theater = res.data
        console.log(theater)
        const tbody = document.querySelector('#theater-list tbody')
        tbody.innerHTML = ''

        theater.map(function (theater) {
            const row = document.createElement('tr')

            let td = document.createElement('td')
            td.textContent = theater.No
            row.appendChild(td)

            let td = document.createElement('td')
            td.textContent = theater.BUILDING_NAME
            row.appendChild(td)

            let td = document.createElement('td')
            td.textContent = theater.TOTAL_SEAT_NUM
            row.appendChild(td)

            let td = document.createElement('td')
            td.textContent = theater.TYPE
            row.appendChild(td)

            let td = document.createElement('td')
            td.textContent = theater.OPENYEAR
            row.appendChild(td)

            let td = document.createElement('td')
            td.textContent = theater.CITY
            row.appendChild(td)

            let td = document.createElement('td')
            td.textContent = theater.Address
            row.appendChild(td)

            let td = document.createElement('td')
            td.textContent = theater.PLAYROOM
            row.appendChild(td)

            let td = document.createElement('td')
            td.textContent = theater.FEEDROOM
            row.appendChild(td)

            let td = document.createElement('td')
            td.textContent = theater.DISABLED
            row.appendChild(td)

            let td = document.createElement('td')
            td.textContent = theater.PARKING
            row.appendChild(td)
        })
    } catch(err) {
        console.error(err)
    }
}