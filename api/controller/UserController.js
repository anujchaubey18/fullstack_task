module.exports = {
    tradedatapost: async (req, res) => {
        try {
            let shareValue = req.body.Shares;
            let typeValue = req.body.Type;
            let alldata = req.body;
            if (typeof shareValue !== 'undefined' && shareValue <= 100 && typeValue == 'buy' || typeValue == 'sell') {
                return res.send({ successCode: "200", responseMessage: "Your api is working", response: alldata });
            } else {
                return res.send({ errorCode: "400", responseMessage: "Something Went Wrong! please check Shares value" });
            }
        } catch (error) {
            return res.send({ responseCode: "500", responseMessage: "Something Went Wrong" });
        }
    },
    tradedataget: async (req, res) => {
        try {
            let alldataget = req.query;
            let type = alldataget.type;
            let user_id = alldataget.user_id;
            if (type && user_id) {
                let collectionoftrade = {
                    "id": 1,
                    "Type": type,
                    "User_id": user_id,
                    "symbol": "ABX",
                    "Shares": 100,
                    "Price": 134
                }
                return res.send({ responseCode: "200", responsebody: collectionoftrade });
            } else if (type) {
                let collectionoftrade = {
                    "id": 1,
                    "Type": type,
                    "User_id": 23,
                    "symbol": "ABX",
                    "Shares": 100,
                    "Price": 134
                }
                return res.send({ responseCode: "200", responsebody: collectionoftrade });
            }
            else if (user_id) {
                let collectionoftrade = {
                    "id": 1,
                    "Type": "buy",
                    "User_id": user_id,
                    "symbol": "ABX",
                    "Shares": 100,
                    "Price": 134
                }
                return res.send({ responseCode: "200", responsebody: collectionoftrade });
            }
            else {
                let collectionoftrade = {
                    "id": 1,
                    "Type": "buy",
                    "User_id": 23,
                    "symbol": "ABX",
                    "Shares": 100,
                    "Price": 134
                }
                return res.send({ responseCode: "200", responsebody: collectionoftrade });
            }
        } catch (error) {
            return res.send({ responseCode: "500", responseMessage: "Something Went Wrong" });
        }
    },
    tradeId: async (req, res) => {
        try {
            let alldatid = req.params;
            let id = alldatid.id;
            if (id) {
                let trade = {
                    "id": id,
                    "Type": "buy",
                    "User_id": 23,
                    "symbol": "ABX",
                    "Shares": 100,
                    "Price": 134
                }
                return res.send({ responseCode: "200", responsebody: trade });
            } else {
                return res.send({ responseCode: "404" });
            }
        } catch (error) {
            return res.send({ responseCode: "500", responseMessage: "Something Went Wrong" });
        }
    },
}