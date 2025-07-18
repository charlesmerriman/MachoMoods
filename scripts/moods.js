

export const generateHTML = (moods) => {
    let moodsHTML = ""
    for (const mood of moods) {
        moodsHTML += `
        <article class="flex-container">
            <div class="flex-container articleHeader">
                <h1>${mood.name}</h1>
                <img src="${mood.imageUrl}">
            </div>
            <div class="flex-container row articleAdvice">
                <p>Macho Advice:</p>
                <div class="flex-container">`
            for (const quote of mood.quotes){
                moodsHTML+= `
                <p>${quote}</p>
                `
            }
        moodsHTML+= `
                </div>
            </div>  
        </article>
        `
    }
    return moodsHTML
        
}
