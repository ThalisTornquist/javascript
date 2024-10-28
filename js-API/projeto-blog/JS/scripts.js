const url = "https://jsonplaceholder.typicode.com/posts"

const carregando = document.getElementById('carga')
const conteiner = document.getElementById('conteiner')
const main = document.getElementById('main')

const postPage = document.getElementById('post')
const postConteiner = document.getElementById('post-conteiner')
const comentariosConteiner = document.getElementById('comentarios-conteiner')

// GET id from url
const getURL = new URLSearchParams(window.location.search)
const postId = getURL.get('id')


async function GetAllPosts(){

    const response = await fetch(url)

    const data = await  response.json()
    
    console.log(data)

    carregando.classList.add('hide')


    data.map((post)=>{
        const div = document.createElement('div')
        const body = document.createElement('p')
        const title = document.createElement('h2')
        const link = document.createElement('a')

        title.innerText = post.title
        body.innerText = post.body
        link.innerText = 'Ler'
        link.setAttribute('href', `file:///C:/Users/thali/Documents/Estudos/javascript/js-API/projeto-blog/post.html?id=${post.id}`)
        link.setAttribute('target', '_blank')


        div.appendChild(title)
        div.appendChild(body)
        div.appendChild(link)

        conteiner.appendChild(div)
        main.appendChild(conteiner)
    })
}


//FUNÇÃO PARA PEGAR OS POSTS INDIVUDUAIS

async function getPost(id){
    const [responsePost, responseComentarios] = await Promise.all([
        fetch(`${url}/${id}`),
        fetch(`${url}/${id}/comments`)
    ])

    const dataPost = await responsePost.json()

    const dataComentarios = await responseComentarios.json()

    carregando.classList.add('hide')
    postPage.classList.remove('hide')

    const title = createElement('h1')
    const body = createElement('p')

    title.innerText = dataPost.title
    body.innerText = dataPost.body

    postConteiner.appendChild(title)
    postConteiner.appendChild(body)

    dataComentarios.map((comment) => {
        createComment(comment)
    })

}

function createComment(comment){
    const div = document.createElement('div')
    const commentBody = document.createElement('p')
    const email = document.createElement('h3')

    email.innerText = comment.email
    commentBody.innerText = comment.body

    div.appendChild(email)
    div.appendChild(commentBody)

    comentariosConteiner.appendChild(div)
}

if(!postId){
    GetAllPosts()
} else{
    getPost(postId)
}
