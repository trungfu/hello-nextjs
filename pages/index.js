import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = props => (
    <li>
        <Link as={`/p/${props.id}`} href={`post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

export default function Index() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink id="hello-world" title="Hello World" />
                <PostLink id="learn-nextjs" title="Next.js" />
                <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
            </ul>
        </Layout>
    );
}