const getRandomMovie = async () => {
        var i = Math.floor(Math.random()*40000+1);
        const data = await fetch(`https://api.themoviedb.org/3/movie/${i}?api_key=2d628dbe1c47856c455a348a26e35fca`)
        .then(data => data.json())
        .then(data => data)
        .catch(error => console.log(""))
        return data

    
}

export default getRandomMovie