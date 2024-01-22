let cards = document.querySelector("#cards")

let memberlist = [
    {
        image: "https://www.htgtrading.co.uk/wp-content/uploads/2016/03/no-user-image-square.jpg",
        name: "Nikoloz Natenadze",
        age: 14,
        RegDate: "1/21/2024",
        Course: "WebCreator",
        Attendance: 100,
        Stipendium: false,
    },
    {
        image: "https://www.htgtrading.co.uk/wp-content/uploads/2016/03/no-user-image-square.jpg",
        name: "Dachi Samkurashvili",
        age: 14,
        RegDate: "1/21/2024",
        Course: "WebCreator",
        Attendance: 100,
        Stipendium: false,
    },
    {
        image: "https://www.htgtrading.co.uk/wp-content/uploads/2016/03/no-user-image-square.jpg",
        name: "Longinoz Kitaishvili",
        age: 15,
        RegDate: "1/21/2024",
        Course: "WebCreator",
        Attendance: 100,
        Stipendium: false,
    },
    {
        image: "https://www.htgtrading.co.uk/wp-content/uploads/2016/03/no-user-image-square.jpg",
        name: "Giorgi Kuluia",
        age: 15,
        RegDate: "1/21/2024",
        Course: "WebCreator",
        Attendance: 100,
        Stipendium: false,
    },
    {
        image: "https://www.htgtrading.co.uk/wp-content/uploads/2016/03/no-user-image-square.jpg",
        name: "Beqa Beberashvili",
        age: 15,
        RegDate: "1/21/2024",
        Course: "WebCreator",
        Attendance: 93,
        Stipendium: false,
    },
    {
        image: "https://www.htgtrading.co.uk/wp-content/uploads/2016/03/no-user-image-square.jpg",
        name: "Nikoloz Natelashvili",
        age: 16,
        RegDate: "1/21/2024",
        Course: "WebCreator",
        Attendance: 100,
        Stipendium: false,
    },
    {
        image: "https://www.htgtrading.co.uk/wp-content/uploads/2016/03/no-user-image-square.jpg",
        name: "Irakli Lalebashvili",
        age: 14,
        RegDate: "1/21/2024",
        Course: "WebCreator",
        Attendance: 94,
        Stipendium: false,
    },
    {
        image: "https://www.htgtrading.co.uk/wp-content/uploads/2016/03/no-user-image-square.jpg",
        name: "Ioane Giorgadze",
        age: 14,
        RegDate: "1/21/2024",
        Course: "WebCreator",
        Attendance: 86,
        Stipendium: false,
    },
    {
        image: "https://www.htgtrading.co.uk/wp-content/uploads/2016/03/no-user-image-square.jpg",
        name: "Luka Javakchadze",
        age: 14,
        RegDate: "1/21/2024",
        Course: "WebCreator",
        Attendance: 96,
        Stipendium: false,
    },
    {
        image: "https://www.htgtrading.co.uk/wp-content/uploads/2016/03/no-user-image-square.jpg",
        name: "Nikoloz Kilosanidze",
        age: 14,
        RegDate: "1/21/2024",
        Course: "WebCreator",
        Attendance: 98,
        Stipendium: false,
    },
    {
        image: "https://www.htgtrading.co.uk/wp-content/uploads/2016/03/no-user-image-square.jpg",
        name: "Giorgi Xaratidze",
        age: 14,
        RegDate: "1/21/2024",
        Course: "WebCreator",
        Attendance: 86,
        Stipendium: false,
    },
]

memberlist.forEach (value => {
    if (value.Attendance == 100) {
        value.Attendance = "Succses"
    }
    return value.Attendance
})

memberlist.forEach(item => {
    cards.innerHTML += `<div class="card">
    <div class="up">
        <img class="image" src="${item.image}" alt="">
    </div>
    <div class="information">
        <p>Student Name: ${item.name}</p>
        <p>Registration Date: ${item.RegDate}</p>
        <p>Course type: ${item.Course}</p>
        <p>Student Age: ${item.age}</p>
        <p>Attendance: ${item.Attendance}</p>
        <p>Stipendium: ${item.Stipendium}</p>
    </div>
</div>`
})
