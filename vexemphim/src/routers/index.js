'use strick';
const express = require('express');

const quanLyPhimRouter = require('./quanLyPhim');

const quanLyNguoiDungRouter = require('./quanLyNguoiDung');

const quanLyRapRouter = require('./quanLyRap');

const quanLyDatVeRouter = require('./quanLyDatVe');

const rootRouter = express.Router();

rootRouter.use('/quanLyPhim', quanLyPhimRouter);

rootRouter.use('/quanLyNguoiDung', quanLyNguoiDungRouter);

rootRouter.use('/quanLyRap', quanLyRapRouter);

rootRouter.use('/quanLyDatVe', quanLyDatVeRouter);


rootRouter.get('/', (req, res)=>{
    res.send("router");
});
module.exports = rootRouter;
