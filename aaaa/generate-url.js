// import { twobttns } from './api/generate-old.js';

// export default async function handler(req, res) {
//     // const { method } = req;
//     try {
//         const url = await twobttns.generatePlayUrl({
//             gameId: "track-finder",
//             playerId: "some-player-id",
//             numItems: 5,
//             callbackUrl: "http://localhost:3002/profile",
//         });
//         res.status(200).json({ gameUrl: url });
//     } catch (error) {
//         console.error('Error generating game URL:', error);
//         res.status(500).json({ error: 'Error generating game URL' });
//     }
// }