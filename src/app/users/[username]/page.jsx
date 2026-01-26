async function Page({params}) {
    let {username} = await params;
    return(
        <div>
            Welcome {username}
        </div>
    );
}

export default Page;

