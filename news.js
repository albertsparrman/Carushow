const featuredNews = document.getElementById("featuredNews")
const featuredTitle = document.getElementById("title")
const featuredNewsDate = document.getElementById("featuredNewsDate")

let lastArticle = 0
var articleID = 0
var timer = null

changeArticle(0)

async function changeArticle(articleID) {
    const articles = await getData()
    newsTimer(articleID)
    setTimeout(() => {
        featuredTitle.classList.add('featured-news-title-change-animation')
        document.getElementById("progress" + articleID).classList.add('progress-active')
        document.getElementById("progress").classList.add('progress-active')
    }, 10);

    document.getElementById("progress" + lastArticle).classList.remove('progress-active')
    document.getElementById("progress").classList.remove('progress-active')
    lastArticle = articleID


    featuredNews.style.backgroundImage = "url(" + articles.featuredArticle[articleID].imageURL + ")"
    featuredTitle.innerHTML = articles.featuredArticle[articleID].title
    featuredTitle.href = articles.featuredArticle[articleID].link
    featuredNewsDate.innerHTML = articles.featuredArticle[articleID].date

    featuredTitle.classList.remove('featured-news-title-change-animation')
}


function newsTimer(article) {
    if (timer != null) {
        clearInterval(timer)
    }
    timer = setInterval(autoChangeArticle, 9000, article)
}

function autoChangeArticle(article) {
    article++
    if (article > 3) {
        article = 0
    }
    changeArticle(article)
}

async function getData() {
    const res = await fetch("/news.json")
    const data = await res.json()

    return data
}