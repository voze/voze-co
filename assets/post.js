import axios from 'axios'
import metaMarked from 'meta-marked'

async function getPost(postId) {
    try {
        let post = await axios.get("https://s3.eu-central-1.amazonaws.com/www.voze.co/posts/" + postId + ".md")
        let md = metaMarked(post.data)
        return {
            meta: md.meta,
            content: md.html,
            markdown: md.markdown
        }
    } catch(e) {
        return null
    }
}

export {getPost}