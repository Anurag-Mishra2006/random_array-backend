import express from "express";

// resolving the cors error
import cors from "cors";

const app = express();
app.use(cors()); // this allows all origins
function randomArray() {
    const mini = 10;
    const maxi = 100;
    const size = Math.random()*10;
    let a: number[] = [];
    for(let i = 0; i < size; i++){
        let randomNumber = Math.round(Math.random()*(maxi - mini) + mini);

        a.push(randomNumber)
    }
    return a;
}

app.get("/", (req: Request, res: any) => {
    const array = randomArray();
    return res.json({ data: array});
});

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})