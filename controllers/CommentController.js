// package imports
const Sequelize = require("sequelize");

// local imports
const { Comment } = require("../models");

// imports initialization
const Op = Sequelize.Op;

exports.addComment = (req, res) => {
    const { movie_id, comment, ip } = req.body;
    if (!movie_id || !comment || !ip) {
        res.status(500).json({
            status: false,
            message: "Enter all fields",
            data: []
        });
    } else if (comment.length > 500) {
        res.status(500).json({
            status: false,
            message: "Comments must be below 500 characters",
            data: []
        });
    } else {
        Comment.create({
            movie_id: movie_id,
            comment: comment,
            ip_address: ip
        })
            .then(createdComment => {
                res.status(200).json({
                    status: true,
                    message: "Comments created successfully",
                    data: []
                });
            })
            .catch(error => {
                res.status(500).json({
                    status: false,
                    message: "Server error" + error,
                    data: []
                });
            })
    }
}

exports.getMovieComments = (req, res) => {
    let {id} = req.params;
    console.log(id);
    Comment.findAll({
        where: {
            movie_id: {
                [Op.eq]: `${id}`
            }
        },
        order: [
            ['createdAt', 'DESC'],
        ],
    })
    .then(comments => {
        res.status(200).json({
            status: true,
            message: "Comments retrieved successfully!",
            data: comments
        });
    })
    .catch(error => {
        res.status(500).json({
            status: false,
            message: "Server error" + error,
            data: []
        });
    })
}