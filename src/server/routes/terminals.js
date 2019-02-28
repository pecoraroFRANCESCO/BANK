import express from "express";

const router = new express.Router();

import Terminals from "../models/terminals.js";
import Banks from "../models/banks";

router.get("/:terminals", (req, res) => {
    console.log(`${req.method.toUpperCase()}/api/terminals${req.url}`);

    Terminals.find()
        .then(terminals => {
            res.json(terminals);
        })
        .catch(error => {
            console.error(error);
            res.send(error);
        });
});
router.get("/:terminals", (req, res) => {
    console.log(`${req.method.toUpperCase}`);
    Terminals.findOne({_id: req.params.terminals})
        .then(terminals => {
            res.json(terminals);
        })
        .catch(error => {
            console.error(error);
            res.send(error);
        });
});

router.get("/:terminals/banks", (req, res) => {
    console.log(`${req.method.toUpperCase()}/api/banks${req.url}`);

    Banks.find({_id: req.params.bank}, (error, banks) => {
        if (error) {
            console.error(error);
            res.send(error);
            return;
        }
        res.json(banks);
    });
});
