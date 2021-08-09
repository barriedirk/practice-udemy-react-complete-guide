// our-domain.com/
import Head from "next/head";
import { Fragment } from "react";

// note: nextjs will detect that MongoClient is only use insie of getStaticProps
//       and will not include to the client bundle
import { MongoClient } from "mongodb";

// import { useEffect, useState } from "react";

// we move Layout to router component _app.js to get every component will wrapper with Layout
// import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

// const DUMMY_MEETUPS = [
//     {
//         id: "m1",
//         title: "A First Meeting",
//         image: "https://picsum.photos/seed/picsum/200/300?random=1",
//         address: "Some address 6, 1234 Some City",
//         description: "This is a first meetup!",
//     },
//     {
//         id: "m2",
//         title: "A Second Meeting",
//         image: "https://picsum.photos/seed/picsum/200/300?random=3",
//         address: "Some address 1, 1234 Some City",
//         description: "This is a second meetup!",
//     },
// ];

// note
//   with useEffect the rendering of this page will occur twice
//   with data empty and second with the data
//   for SEO is a bad idea and for that reason we could use
//   the function getStaticProps()
//
// function HomePage() {
//     const [loaded, setLoadedMeetups] = useState([]);
//     useEffect(() => {
//         // send a http request and fetch data
//         //
//
//         setLoadedMeetups(DUMMY_MEETUPS);
//     }, []);
//
//     // return (
//     //     <Layout>
//     //         <MeetupList meetups={DUMMY_MEETUPS} />
//     //     </Layout>
//     // );
//
//     // return <MeetupList meetups={DUMMY_MEETUPS} />;
//
//     console.log("[ loaded ] ::: ", loaded);
//
//     return <MeetupList meetups={loaded} />;
// }

function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta
                    name="description"
                    content="Browse a huge list of highly active React meetups!"
                />
            </Head>
            <MeetupList meetups={props.meetups} />;
        </Fragment>
    );
}

// Data fetching for static pages (SSG)
// -----------------------------------------
//  The code inside of getStaticProps is not expose to the client
//
// Note: for static page generation
//    nextjs will search for a function with this name during rendering process
//    build on the server
//
//
// export async function getStaticProps() {
//     // can use any instruction only run on the server
//     // fetch data from an API
//
//     // need to return always a object
//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         },
//     };
// }
//

export async function getStaticProps() {
    // fetch data from API

    // Note: the code will not expose to the client
    const client = await MongoClient.connect(
        "mongodb+srv://practices:123ABCpractices@practices.socyj.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    // return {
    //     props: {
    //         meetups: DUMMY_MEETUPS,
    //     },
    //     // seconds that next will wait to regenerate the page
    //     // on the server
    //     revalidate: 10,
    // };
    return {
        props: {
            // we need to use map because mongodb use _id as an object, and throw and erro
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                description: meetup.description,
                id: meetup._id.toString(),
            })),
        },
        revalidate: 1,
    };
}

// Data fetching for server (SSR)
// -----------------------------------------
//
// NOTE: not run during the build process
// run on the server, never on the client
// for any incoming request
//
// export async function getServerSideProps(context) {
//     // to check cookie, authentication, etc
//     const req = context.req;
//     const res = context.res;

//     // fetch data from an API or filesystem

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         },
//     };
// }

export default HomePage;
