const loadBuddies = () => {
            fetch('https://randomuser.me/api/?results=5')
                        .then(res => res.json())
                        .then(data => displaybuddues(data))
}

const displaybuddues = data => {
            const buddies = data.results;
            const buddiesDiv = document.getElementById('buddies');
            for (const buddy of buddies) {
                        console.log(buddy)
                        const p = document.createElement('p');
                        p.innerText = `Email: ${buddy.email} 
                        Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}`;
                        buddiesDiv.appendChild(p);
            }

}
loadBuddies();