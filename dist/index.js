import express from "express";
import cors from "cors";
const app = express();
app.use(cors({ origin: "*" }));
function randomArray() {
    const mini = 10;
    const maxi = 100;
    const size = Math.floor(Math.random() * 10);
    let a = [];
    for (let i = 0; i < size; i++) {
        let randomNumber = Math.round(Math.random() * (maxi - mini) + mini);
        a.push(randomNumber);
    }
    return a;
}
app.get("/", (req, res) => {
    const array = randomArray();
    return res.json({ data: array });
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
//# sourceMappingURL=index.js.map