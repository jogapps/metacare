// package imports
const Sequelize = require("sequelize");

// local imports
const { axiosInstance } = require("../utils/axiosInterceptors");
const { Comment } = require("../models");

// imports initialization
const Op = Sequelize.Op;


const getMovieCount = (id) => {
    return new Promise((resolve, reject) => {
        Comment.findAll({
            where: {
                movie_id: {
                    [Op.eq]: `${id}`
                }
            }
        })
        .then(comments => {
            resolve({count: comments.length});
        })
        .catch(error => {
            resolve({count: 0});
        });
    });
}

exports.getMovies = (req, res) => {
    axiosInstance.get(`/films`)
        .then(async response => {
            let newData = [];
            let data = await response.data.results.map(async (movie, index) => {
                let count = 0;
                await getMovieCount(index + 1).then(data => count = data.count);
                newData.push({
                    id: index + 1,
                    name: movie.title,
                    open_crawls: movie.opening_crawl,
                    comments: count,
                    created: movie.created
                });
            });
            const results = await Promise.all(data); // resolve all promises before return result
            res.status(200).json({
                status: true,
                message: "Movies retrieved successfully!",
                data: newData.sort((a, b) => {
                    return - new Date(a.created).getTime() - new Date(b.created).getTime();
                }) // sorting comment based on earliest to newest
            });
        })
        .catch(error => {
            res.status(500).json({
                status: false,
                message: "Server error" + error,
                data: []
            });
        });
}