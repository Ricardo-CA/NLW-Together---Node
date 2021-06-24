import express from "express";

const app = express();

app.listen(3000, () => console.log("is running bagarai"));


app.get("/test", (request, response) => {
  return response.send("Teste concluído!")
})

app.post("/test-post", (request, response) => {
  return response.send("POST-TEST");
})