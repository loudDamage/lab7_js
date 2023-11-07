fetch('https://loudDamage.github.io/json-example/example.json')
        .then(response => response.json())
        .then(data => {
            const gameList = document.getElementById("game-List");
            data.allgames.forEach(game => {
                gameList.innerHTML += `
                <div class="games">
                    <h2>${game.title}</h2>
                    <p>Platform: ${game.platform}</p>
                    <p>Genre: ${game.genre}</p>
                    <p>Image: ${game.image}</p>
                </div>
            `;
            })
        })