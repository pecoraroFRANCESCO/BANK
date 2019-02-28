import express from "express";
const router = new express.Router();

import Banks from "../models/banks.js";
import Terminals from "../models/terminals.js";

router.get("/", (req, res) => {
    console.log(`${req.method.toUpperCase()}/api/banks${req.url}`);

    Banks.find()
        .then(banks => {
            res.json(banks);
        })
        .catch(error => {
            console.error(error);
            res.send(error);
        });
});

router.get("/:banks", (req, res) => {
    console.log(`${req.method.toUpperCase()}/api/banks${req.url}`);

    Banks.findOne({_id: req.params.banks})
        .then(banks => {
            res.json(banks);
        })
        .catch(error => {
            console.error(error);
            res.send(error);
        });
});
router.get("/:banks/terminals", (req, res) => {
    console.log(`${req.method.toUpperCase()}/api/terminals${req.url}`);

    Terminals.find({banks: req.params.bank}, (error, terminals) => {
        if (error) {
            console.error(error);
            res.send(error);
            return;
        }
        res.json(terminals);
    });
});
