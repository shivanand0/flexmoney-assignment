const moduleExport = {

    /* *
     * @api {post} /api/_TEST_
     * @apiDescription api to login
     * */
    async _TEST_(req, res) {
        res.status(200).json({ message: "_TEST_"});
    }
}

export default moduleExport