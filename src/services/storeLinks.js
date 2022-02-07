export async function getLinks(key){
    const myLinks = await localStorage.getItem(key)

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}


export async function saveLinks(key, newLink){
    let linksStored = await getLinks(key);


    //se ja tiver link igual, não duplicar.

    const hasLink = linksStored.some( link => link.id === newLink.id)

    if(hasLink){
        alert('Este link já existe na lista')
        return;
    }

    linksStored.push(newLink)
    await localStorage.setItem(key, JSON.stringify(linksStored))
    
}

export function deleteLink(links, id){

    let mylinks = links.filter( item => {
        return( item.id !== id)
    })
    localStorage.setItem('@encurta links', JSON.stringify(mylinks));
    alert('Link Deletado com sucesso!')

    return mylinks;

}