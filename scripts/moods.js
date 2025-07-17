

export const generateHTML = (moods) => {
    let moodsHTML = ""
    for (const mood of moods) {
        moodsHTML += `
        <article>
            <h1>${mood.name}</h1>
            <img src="${mood.imageUrl}">
            <p>Macho Advice:</p>`
            for (const quote of mood.quotes){
                moodsHTML+= `
                <p>${quote}</p>
                `
            }
        `</article>
        `
    }
    return moodsHTML
        
}
