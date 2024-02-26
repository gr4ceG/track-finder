// require('dotenv').config()
// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 3001;
// const { TwoBttnsApi } = require("@2bttns/sdk");

// const cors = require("cors");
// app.use(cors());

// const twobttns = new TwoBttnsApi({
//     appId: process.env.TWOBTTNS_APP_ID,
//     secret: process.env.TWOBTTNS_APPSECRET,
//     url: process.env.TWOBTTNS_CONSOLE
// });

// app.get('/scores', async (req, res) => {
//     const { player_id } = req.query
//     try {
//       const { data } = await twobttns.callApi("/games/getPlayerScores", "get", {
//         player_id: player_id,
//         game_id: "hobbies-ranker"
//       });
//       res.send({
//         data
//       })
//     } catch (error) {
//     }
//   })

// app.get('/generate-game-url', async(req, res) => {
//     try {
//         const url = twobttns.generatePlayUrl({
//             gameId: "track-finder",
//             playerId: "some-player-id",
//             numItems: 42,
//             callbackUrl: "http://localhost:3002/profile",
//         });
//         res.send({ gameUrl: url });
//     } catch (error) {
//         console.error('Error generating game URL:', error);
//         res.status(500).send('Error generating game URL');
//     }
// });

// app.listen(PORT, () => {
//     console.log(`server is running on port ${PORT}`);
// });