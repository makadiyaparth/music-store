const getMusics = (req, res) => {
    res
    .status(200)
    .json({"status" : "success"});
};

const getSingleMusic = (req, res) => {
    res
    .status(200)
    .json({"status" : "success"});
};

const createMusic = (req, res) => {
    res
    .status(200)
    .json({"status" : "success"});
};

const updateMusic = (req, res) => {
    res
    .status(200)
    .json({"status" : "success"});
};

const deleteMusic = (req, res) => {
    res
    .status(200)
    .json({"status" : "success"});
};


module.exports = {
    getMusics,
    createMusic,
    getSingleMusic,
    updateMusic,
    deleteMusic
}