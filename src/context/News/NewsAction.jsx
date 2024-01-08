export const fetchNews = async (topic) => {
    const respone = await fetch(`https://newsapi.org/v2/everything?q=${topic}&from=2023-12-30&sortBy=publishedAt&apiKey=24ca9ee520c74cad8fe74b7a2e2166a2`);
    const data = await respone.json();
    return data.articles;
}
