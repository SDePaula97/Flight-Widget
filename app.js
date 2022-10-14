const tableBody = document.getElementById("table-body")

let flights = [
    {
        time:"08:11",
        destination: "DUBAI",
        flight: "DB-5203",
        gate: "A37",
        status: "ON TIME"
    },
    {
        time:"12:39",
        destination: "MUNICH",
        flight: "MN-6303",
        gate: "C26",
        status: "CANCELLED"
    },
    {
        time:"13:11",
        destination: "SOFIA",
        flight: "SO-2203",
        gate: "A5",
        status: "DELAYED"
    },
    {
        time:"07:40",
        destination: "NEW YORK",
        flight: "NY-1203",
        gate: "C10",
        status: "ON TIME"
    },
    {
        time:"08:39",
        destination: "LISBON",
        flight: "LI-1902",
        gate: "B33",
        status: "CANCELLED"
    },
    {
        time:"10:20",
        destination: "NASSAU",
        flight: "NS-2036",
        gate: "A17",
        status: "DELAYED"
    },
    {
        time:"06:40",
        destination: "SEOUL",
        flight: "SE-6203",
        gate: "A24",
        status: "ON TIME"
    },
    {
        time:"15:31",
        destination: "SEATTLE",
        flight: "ST-9030",
        gate: "B38",
        status: "ON TIME"
    },
]

const destinations = ["DUBAI", "MUNICH", "SOFIA", "NEW YORK", "LISBON", "NASSAU", "SEOUL", "SEATTLE"]
const status = ["ON TIME", "DELAYED", "CANCELLED"]
let hour = 15

function populateTable() {
    for (const flight of flights){
        const tableRow = document.createElement("tr")
        // const tableIcon = document.createElement("td")
        // tableIcon.textContent =" ✈️"
        // tableRow.append(tableIcon)
        
        for(const flightDetail in flight) {
           const tableCell = document.createElement("td") 
           const word = Array.from(flight[flightDetail])

           for (const [index, letter] of word.entries()) {
            const letterElement = document.createElement("div")
            setTimeout(() => {
                    letterElement.classList.add('flip')
                    letterElement.textContent = letter
                    tableCell.append(letterElement)
            }, 100 * index)
            
        }
        tableRow.append(tableCell)
    }
        
    tableBody.append(tableRow)
}
}
populateTable()

function generateRandomLetter(){
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length))
}
function generateRandomNumber(maxNumber){
    const numbers = "0123456789"
    if (maxNumber){
        const newNumbers = numbers.slice(0, maxNumber)
        return newNumbers.charAt(Math.floor(Math.random() * newNumbers.length))
    } else{
      return numbers.charAt(Math.floor(Math.random() * numbers.length))
}
}
function generateTime() {
   let displayHour = hour 
   if (hour < 24) {
       hour++
   }
   if (hour >= 24) {
       hour = 1
       displayHour = hour
   }
   if (hour < 10) {
    displayHour = "0" + hour
   }
   return displayHour + ":" + generateRandomNumber(5) + generateRandomNumber()
}

function shuffleUp() {
    flights.shift()
    flights.push({
        time: generateTime(),
        destination: destinations[Math.floor(Math.random() * destinations.length)],
        flight: generateRandomLetter() + generateRandomLetter() + " " + generateRandomNumber() + generateRandomNumber() + generateRandomNumber(),
        gate: generateRandomLetter() + " " + generateRandomLetter() + generateRandomLetter() ,
        status: status[Math.floor(Math.random() * status.length)]
    })
    tableBody.textContent = ""
    populateTable()
}
setInterval(shuffleUp, 5000)