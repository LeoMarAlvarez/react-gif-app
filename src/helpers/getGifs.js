export const getGifs = async (q) => {
    const url = "https://api.giphy.com/v1/gifs/search?api_key=pfY2nqRMnKUYQxlyFan5MMsrx4CLCLQB&limit=10&q=" + encodeURI(q);
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => {
      return {
        id: img.id,
        urlImg: img.images.downsized_medium.url,
        title: img.title
      }
    });
    return gifs;
  }