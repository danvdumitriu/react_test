import express from 'express';
import bodyParser from "body-parser";
import {articleList, isArticle} from "./articles";

const app = express();
const PORT = 8000;

app.get('/articles', (req, res) => res.json(articleList));

app.post('/articles', bodyParser.json(), (req, res) => {
  if(!isArticle(req.body)){
    res.status(422).json({message: 'Incorrect article format'})
  }else{
    setTimeout(() => {
      articleList.push(req.body)
      res.status(201).json(req.body)
    }, 2500)
  }
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});



