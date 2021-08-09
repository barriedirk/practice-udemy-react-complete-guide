import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;

        // const { title, image, address, description } = data;

        // Note: this code never in the client
        // this code never will show up in the client side
        const client = await MongoClient.connect(
            "mongodb+srv://practices:123ABCpractices@practices.socyj.mongodb.net/meetups?retryWrites=true&w=majority"
        );
        const db = client.db();
        const meetupsCollection = db.collection("meetups");

        // meetupsCollection.insertOne({
        //     title,
        //     image,
        //     address,
        //     description,
        // });
        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();

        res.status(201).json({ message: "Meetup inserted!" });
    }
}

export default handler;
