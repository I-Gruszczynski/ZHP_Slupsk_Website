const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const News = require("../models/news.js");
const multer = require("multer");
const path = require("path");
const { redirect } = require("react-router-dom");
const fs = require("fs");

const dbURI =
  "mongodb+srv://zhpadmin:vsdKN7z15QESUOob@zhpcluster.k3orkic.mongodb.net/zhpslupskDB?retryWrites=true&w=majority&appName=ZHPCluster";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3001))
  .catch((err) => {
    console.log(err);
  });

mongoose.set("strictQuery", false);

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.get("/news", (req, res) => {
  News.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.send(result);
    });
});

// app.get("/createNews", (req, res) => {
//   const news = new News({
//     title: "Kolejka Wiadomość dla ZHP Slupska",
//     context: "Oto ponownie Slupsk",
//     image: null,
//     author: "Igor",
//     date: new Date().getDate(),
//   });

//   news
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");
  },

  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
});

app.post("/news", upload.array("files"), (req, res) => {
  //const news = new News(req.body);
  // const news = News.create({
  //   title: req.body.title,
  //   context: req.body.context,
  //   image: req.file.filename,
  // });
  console.log(req.files);

  const image = [];

  if (typeof req.files === "undefined") {
    const news = new News({
      title: req.body.title,
      context: req.body.context,
      author: req.body.author,
      image: null,
    });
    news
      .save()

      .catch((err) => {
        console.log(err);
      });
  } else {
    const news = new News({
      title: req.body.title,
      context: req.body.context,
      author: req.body.author,
      image: req.files,
    });
    for (var i = 0; i < req.files.length; i++) {
      image.push(req.files[i].filename);
    }
    news
      .save()

      .catch((err) => {
        console.log(err);
      });
  }
});

app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  News.findById(id)
    .then((result) => res.send(result))
    .catch((err) => {
      console.log(err);
    });
});

app.delete("/news/:tokenId/:id", (req, res) => {
  const id = req.params.id;

  News.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/news" });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.put("/news/:tokenId/:id/image", upload.array("files"), (req, res) => {
  const id = req.params.id;
  let new_image = [];
  console.log("Usuwamy zdjęcie");
  const image = req.body.files;

  console.log(req.body.files);

  News.findByIdAndUpdate(
    id,
    {
      $pull: { image: { filename: req.body.files } },
    },
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        console.log("Usunięty z bazy");

        res.json({ redirect: "/news" });
      }
    }
  );

  /*if (req.body.img) {
    for (var i = 0; i < req.files.length; i++) {
      new_image.push(req.body.img[i]);
      console.log(req.body.img[i]);
    }
    try {
      fs.unlinkSync("./images/" + req.body.new_image);
    } catch (err) {
      console.log(err);
    }
  }

  News.findByIdAndUpdate(
    id,
    {
      $pull: { image: { $in: new_image } },
    },
    (err, result) => {
      if (err) {
        res.json(err);
      } else {
        console.log("Usunięty z bazy");

        res.json({ redirect: "/news" });
      }
    }
  );*/
});

app.put("/news/:tokenId/:id", upload.array("files"), (req, res) => {
  let id = req.params.id;
  let new_image = [];

  if (req.files) {
    for (var i = 0; i < req.files.length; i++) {
      new_image.push(req.files[i]);
    }
    try {
      fs.unlinkSync("./images/" + req.body.old_image);
    } catch (err) {
      console.log(err);
    }
  }

  //console.log("Tytul edycji: " + req.body.title);

  if (req.body.title === "" && req.body.context === "") {
    News.findByIdAndUpdate(
      id,
      {
        $push: { image: { $each: new_image } },
      },
      (err, result) => {
        if (err) {
          res.json(err);
        } else {
          console.log("Utowrzony");

          res.json({ redirect: "/news" });
        }
      }
    );
  } else if (req.body.title === "") {
    News.findByIdAndUpdate(
      id,
      {
        context: req.body.context,
        $push: { image: { $each: new_image } },
      },
      (err, result) => {
        if (err) {
          res.json(err);
        } else {
          console.log("Utowrzony");

          res.json({ redirect: "/news" });
        }
      }
    );
  } else if (req.body.context === "") {
    News.findByIdAndUpdate(
      id,
      {
        title: req.body.title,
        $push: { image: { $each: new_image } },
      },
      (err, result) => {
        if (err) {
          res.json(err);
        } else {
          console.log("Utowrzony");

          res.json({ redirect: "/news" });
        }
      }
    );
  } else {
    News.findByIdAndUpdate(
      id,
      {
        title: req.body.title,
        context: req.body.context,
        author: null,
        $push: { image: { $each: new_image } },
      },
      (err, result) => {
        if (err) {
          res.json(err);
        } else {
          console.log("Utowrzony");

          res.json({ redirect: "/news" });
        }
      }
    );
  }
});
