import { useRouter } from 'next/router';

function SomeNewsPage() {
    const router = useRouter();
    const attrs = router.query;

    console.log(attrs);

    return (<h1>Homeeeeee Page</h1>);
}

export default SomeNewsPage;