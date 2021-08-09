import { Fragment } from "react";
import Head from "next/head";

import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
    console.log("[ props. ] ::: ", props);

    return (
        <Fragment>
            <Head>
                <title>{props.meeetupData.title}</title>
                <meta
                    name="description"
                    content={props.meeetupData.description}
                />
            </Head>
            <MeetupDetail
                image={props.meeetupData.image}
                title={props.meeetupData.title}
                address={props.meeetupData.address}
                description={props.meeetupData.description}
            />
        </Fragment>
    );
}

// // in this example:
// // http://localhost:3000/m3 return a 404 page
// //
// export async function getStaticPaths() {
//     return {
//         // indicate if support all support of params or not
//         fallback: false,
//         paths: [
//             {
//                 params: {
//                     meetupId: "m1",
//                 },
//             },
//             {
//                 params: {
//                     meetupId: "m2",
//                 },
//             },
//         ],
//     };
// }
//
//
// // this run in the build time
// export async function getStaticProps(context) {
//     // NOTE:
//     // we can't use react routes like useRouter
//     // we use the context
//
//     const meetupId = context.params.meetupId;
//
//     // Note:
//     // doesn't show in the console browser
//     // show up in the terminal
//     console.log("[ context.params ] ::: ", context.params);
//     console.log("[ meetupId ] ::: ", meetupId);
//
//     // Server Error
//     // Error: getStaticPaths is required for dynamic SSG pages and is missing for '/[meetupId]'.
//     // Read more: https://err.sh/next.js/invalid-getstaticpaths-value
//     //
//     // the above error is because this page is a dynamic page and need
//     // getStaticPaths function
//     // to generate for any kind of id ( meetupId )
//
//     return {
//         props: {
//             meeetupData: {
//                 id: "m1",
//                 image: "https://picsum.photos/seed/picsum/200/300?random=1",
//                 title: "title",
//                 address: "address",
//                 description: "description",
//             },
//         },
//     };
// }

export async function getStaticPaths() {
    const client = await MongoClient.connect(
        "mongodb+srv://practices:123ABCpractices@practices.socyj.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();

    client.close();

    return {
        // with true or "blocking" we indicate to nextjs that the list of paths is not exhausted
        // and will try to create that page on demand and cached
        // differences between true and "blocking"
        //     true => will return an empty page and we need to manage this to show the page
        //     "blocking" => will await for the page is generate
        // fallback: true,
        fallback: "blocking",
        paths: meetups.map((meetup) => ({
            params: { meetupId: meetup._id.toString() },
        })),
    };
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect(
        "mongodb+srv://practices:123ABCpractices@practices.socyj.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");

    const selectedMeetup = await meetupsCollection.findOne({
        _id: ObjectId(meetupId),
    });

    console.log("[ selectedMeetup ] ::: ", selectedMeetup);
    client.close();

    return {
        props: {
            meeetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            },
        },
    };
}

export default MeetupDetails;
