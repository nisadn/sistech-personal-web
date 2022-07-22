import { Blog } from "../components/Container";
import Layout from "../components/Layout/Layout";


const BlogPage = () => {
    return (
        <Layout page='blog' >
            <Blog />
        </Layout>
    )
}

export default BlogPage;